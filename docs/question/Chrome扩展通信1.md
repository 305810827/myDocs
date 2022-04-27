# Chrome扩展通信

## chrome扩展的5种js

| js类型          | 介绍                                                         |
| --------------- | ------------------------------------------------------------ |
| popup           | 单击插件图标后的弹窗中的js，由于单击图标打开popup，焦点离开又立即关闭，生命周期一般很短。 |
| content-script  | 与页面共享DOM，但是不共享JS，可访问部分chrome扩展API。       |
| background      | 权限最高，几乎可调用所有Chrome扩展API（除了devTools），且可以无限制跨域。生命周期最长，跟随浏览器开关。 |
| injected-script | 通过DOM操作的方式向页面注入的一种JS，和原始页面共享js（即可访问原始页面变量，方法等），无法访问Chrome扩展API。 |
| devtools        | 每打开一个开发者工具窗口，都会创建devtools的页面的实例，F12窗口关闭，页面也随之关闭，故devtools的生命周期和devtools窗口是一致的。可访问一组特有的DevTools API（background都无权访问）：chrome.devtools.panels（面板相关）；chrome.devtools.inspectedWindow（获取被审查窗口的相关信息）；chrome.devtools.network（获取有关网络请求信息）。 |


## Chrome插件提供的2种额外的通信方式

1. `chrome.tabs.sendMessage`和`chrome.runtime.sendMessage` 用于简单的一次性请求;
2. `chrome.tabs.connect`和`chrome.runtime.connect`，用于长时效连接。

## 通信接口使用限制

|                | inject-script                        | content-script                              | popup-js                                          | background                                        |
| -------------- | ------------------------------------ | ------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| inject-script  | -                                    | window.postMessage                          | -                                                 | -                                                 |
| content-script | window.postMessage                   | -                                           | chrome.runtime.sendMessage chrome.runtime.connect | chrome.runtime.sendMessage chrome.runtime.connect |
| popup-js       | -                                    | chrome.tabs.sendMessage chrome.tabs.connect | -                                                 | chrome.runtime.sendMessage chrome.runtime.connect |
| background-js  | -                                    | chrome.tabs.sendMessage chrome.tabs.connect | chrome.tabs.sendMessage chrome.tabs.connect       | -                                                 |
| devtools-js    | chrome.devtools.inspectedWindow.eval |                                             | chrome.runtime.sendMessage                        | chrome.runtime.sendMessage                        |

>`chrome.runtime.onMessageExternal` 接口用于扩展间通信，与`chrome.tabs.sendMessage` 用法类似。

## 一次性请求
 一次性请求类似于HTTP请求，包含一次请求和一次返回，且如果接收方不在线，就会出现请求失败；
### 扩展程序（popup、background）向content-script一次性通信

```javascript
//popup.js发送
function sendToContentScript(message, callback){
	chrome.tabs.query({active: true, currentWindow: true}, tabs => {
		chrome.tabs.sendMessage(tabs[0].id, message, callback);
	});
}
sendToContentScript({cmd:'test', value:'popup_to_content'}, res => {
	console.log(res)   *// {res:'content_to_popup'}*
} );

// content_script.js接收
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	console.log(request)   *// {cmd:'test', value:'popup_to_content'}*
	if(request.cmd === 'content_to_bg'){
		sendResponse({res:'content_to_popup'})
	  // 若异步使用sendResponse，需添加return true*
	}
})
```
双方通信直接发送的都是JSON对象，不是JSON字符串，所以无需解析，很方便（当然也可以直接发送字符串）
###  content-script主动向扩展程序（background、popup）一次性通信

```javascript
// content_script.js发送
chrome.runtime.sendMessage({cmd: 'test', value:'content_to_bg'}, res => {
	console.log(res);     //{res:'bg_to_content'}
});

// background.js接收
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	console.log(request);   // {cmd: 'test', value:'content_to_bg'}
	sendResponse({res:'bg_to_content'})
});
```

**注意事项**：

- `content_scripts`向`popup`主动发消息的前提是`popup`处于打开状态，否则需要利用`background`作中转；
- 使用`chrome.runtime.sendMessage`后无论是否需要回应，接收方都需调用`sendReponse`反馈，若不调用则**发送方**就会报错：
- 如果`background`和`popup`同时监听，那么它们都可以同时收到消息，但是只有一个可以`sendResponse`，一个先发送了，那么另外一个再发送就**无效**；


### 页面脚本（包括inject-script）和content-script之间一次性通信

由于inject-script和content-script内均可获取到原始页面的window对象，故可通过`window.postMessage`来进行通信。该方法还可规避跨域的限制,可以在任意页面之间进行通信。
```jsx
//inject-script
window.postMessage({cmd:"test",value:"inject_to_content"},"*")

//content-script
window.addEventListener("message", e => {
	console.log(e.data)    //{cmd:"test",value:"inject_to_content"}
})
```
## 长时效连接
长连类似 `WebSocket`，建立连接后会一直保持，双方可以随时互发消息。
### `chrome.tabs.connect`和`chrome.runtime.connect` 长时效连接通信示例
扩展程序和web页面之间建立长连接，只需要从一端建立就可以了。
**在popup或js或background发起连接请求：**
```javascript
//popup.js或background.js 发起连接需要指定发送到某个标签页
chrome.tabs.query({active: true, currentWindow: true}, tabs => {
	const port = chrome.tabs.connect(tabs[0].id, {name: 'popup'});
	//向指定tabd页发起连接请求
	port.postMessage({cmd: 'popup-connect',value:'extension'});
	port.onMessage.addListener(msg => {
		if(msg.cmd === 'connected') {
			//do something
			port.postMessage({cmd: 'done'});
		}
	});
});
```

**在content-script发起连接和监听消息：**

```javascript
// content-script直接建立长链接
const port = chrome.runtime.connect({name: 'content'});
port.postMessage({cmd: 'cnt-connect'});
port.onMessage.addListener(msg => {
	if(msg.cmd === 'connected'){
		//do something
		port.postMessage({cmd: 'done'});
	}
});
```

**任意一端监听连接请求：**

```javascript
chrome.runtime.onConnect.addListener(port => {
	if(port.name == 'popup') {
		port.onMessage.addListener(msg => {
			if(msg.cmd== 'popup-connect') port.postMessage({cmd: 'connnected'});
		});
	}else if(port.name === 'content'){
		......
	}
});
```
### `postMessage`和`messageChannel` 长时效连接通信
- 同一MessageChannel实例下的port1和port2两个对象可以通过`postMessage`和`onmessage`方法相互发送和接收消息;
- port1和port2是MessagePort实例，MessagePort继承了Transferable接口，可在不同可执行上下文之间传递。
- `window.postMessage(message, targetOrigin, [transfer])`,第三个参数可以用来传递Transferable对象
```javascript 
//inject-script
const {port1,port2} = new MessageChannel();
window.addEventListener("load", () => {
port1.onmessage = (e) => {
	console.log(e)
}
window.postMessage('来自inject_script的信息', '*', [port2]);
});

//content-script
window.addEventListener('message', e=>{
  e.port[0].postMessage('来自content-script的信息')
});
```