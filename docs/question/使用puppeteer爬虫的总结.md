### 介绍	

​		Puppeteer 是一个 Node 库，它提供了一个高级 API 来通过[DevTools 协议](https://chromedevtools.github.io/devtools-protocol/)控制 [无头](https://developers.google.com/web/updates/2017/04/headless-chrome)Chrome 或 Chromium，无头Chrome就是可以在不打开浏览器的情况下，在v8引擎中处理dom的操作，因为没有UI，所以性能比真实浏览器更好。它还可以配置为使用完整（非无头）Chrome 或 Chromium。

### 主要作用

​		1、爬取页面中动态加载的的内容

​		2、自动化测试，控制鼠标和键盘的输入，还有各种高级 API 可操作浏览器。

### 使用总结

##### 1、puppeteer浏览器上下文

​		puppeteer可以通过配置启动参数（下面常用参数）得到浏览器上下文对象browser，还可以通过browser对象的createIncognitoBrowserContext方法得到无痕的浏览器上下文对象context。

```javascript
const browser = await puppeteer.launch({
  ignoreHTTPSErrors: true,                      // 是否忽略 HTTPS 错误
  userDataDir: "./user_data"										// 用户数据目录,例如历史记录、书签和 cookie
  headless: true,                               // ”无头(无UI)”的模式运行chrome，提高性能
  arg: [                                        // 要传递给浏览器实例的其他参数
    '--no-sandbox',															// 禁用沙箱，为了让root用户也能执行
    '--proxy-server=http://127.0.0.1:20127',    // 设置HTTP和HTTPS请求的代理服务器
    '--disable-web-security',                   // 不执行同源政策
  ]
});

// 创建一个新的隐身浏览器上下文，无痕下无用户数据
const context = await browser.createIncognitoBrowserContext();
```



##### 2、page.goto(url[, options])，页面加载的优化

​		在爬取各种网址的数据过程中，总会出现网址加载慢或者加载不出来的情况（不包含ip禁用），所以我们需要减少页面不必要文件的加载，同时要给页面加载时限。

```javascript
const browser = await puppeteer.launch();
const page = await browser.newPage();

// 激活请求拦截
await page.setRequestInterception(true);
// 请求会被拦截停止，除非使用request的bort、continue或者response方法
page.on('request', req => {
	// 将以下类型的请求都拦截掉
	let flag = ['image', 'other', 'stylesheet', 'script'].includes(req.resourceType())
	flag ? req.abort() : req.continue()
})

await page.goto('https://www.google.com', {
	waitUntil:[             // 设置网页导航完成的条件，字符串或数组，为数组时需要满足所有条件才算导航完成
    'load',               // load事件触发后
    'domcontentloaded',   // domcontentloaded事件触发后
    'networkidle0',       // 500ms内无网络请求
    'networkidle2'				// 500ms内没有超过2个网络请求
	],
	timeout: 30000          // 网页加载超过30s就加载失败 
});
...
//结束后需要关闭网页和浏览器
page.close()
browser.close()
```



##### 3、配置代理

​		puppeteer提供在launch时可以配置代理服务器，但是这样有几个缺点:

​		1、整个浏览器上下文创建的page使用的同一个代理服务器。
​		2、如果要切换代理，则需要关闭整个browser，再修改--proxy-server重新实例化一个browser。

```javascript
const browser = await puppeteer.launch({
  arg: {
    '--proxy-server=http://127.0.0.1:20127',    // 设置HTTP和HTTPS请求的代理服务器
  }
});
```

​		针对上面问题，可以使用npm包puppeteer-page-proxy，主要原理就是通过激活拦截请求，给每个拦截的request配置上代理服务器。

​		用法1：可以只给page设置proxy，不需要重启browser。

```javascript
const useProxy = require('puppeteer-page-proxy');
await useProxy(page, 'http://127.0.0.1:80');   // 设置http://127.0.0.1:80代理服务器
await useProxy(page, null);                    // 取消代理
```

​		用法2：给每个request设置proxy。

```javascript
await page.setRequestInterception(true);
page.on('request', async request => {
    await useProxy(request, 'https://127.0.0.1:443');
});
```



##### 4、userAgent

​		每个page可以通过setUserAgent方法配置不同的userAgent。使用user-agents包，可以随机产生一个指定系统或者浏览器的UserAgent。

```javascript
import UserAgent from 'user-agents';
let opt         = [
    /^((?!linux).)*$/i,
    {
        deviceCategory: 'desktop',
        platform      : Math.random() < 0.5 ? 'Win32' : 'MacIntel'
    }
];
// 不配置opt则随机输出
const userAgent = new UserAgent(opt).random().toString();

page.setUserAgent(userAgent)
```



##### 5、在页面植入js

​		page.evaluate(pageFunction, ...args)，pageFunction是在页面实例上下文中执行的方法，所以不能调用在当前js写的函数，需要在页面中植入该函数才能调用。

```javascript
function getNum (num) {
    console.log(num)
}
await page.addScriptTag({content: `${ getNum }`});
await page.evaluate((param) => { getNum(param) }, 2)  // 页面中的控制台会输出2
```



6、执行脚本僵死；

7、监听browser disconnect (调查一下)

8、禁止 webrtc

9、禁止canvas



