

### 一、node

node是javascript的运行平台，保留了前端浏览器javascript中那些熟悉的接口，没有修改语言本身的特性，依旧基于作用域和原型链，把在浏览器javascrip的运用思想迁移到服务器端。

### 二、意义

javascript作为一门完备的语言，长久限制于浏览器的沙箱中执行，被动的去使用浏览器逐步暴露的功能，所以它的能力取决于浏览器中间层提供的支持有多少。

![image-20210705002447826](/Users/xuyanjie/Library/Application Support/typora-user-images/image-20210705002447826.png)

chrome和node十分相似，都是基于事件驱动的异步架构，浏览器通过事件驱动来服务界面上的交互，Node通􏲶过事􏰴驱动􏰘服务I/O。

### 三、异步I/O

（1）关于异步􏳺􏳻I/O，􏶶􏶶前端工程师理解􏸺起来􏰘􏶄􏲊会容易􏲹􏲺一些，因为发起Ajax调􏵬用对于前端程序员是再熟悉不过的场景，下面􏰋􏴘􏰈的代码用于发起一个Ajax请求。􏲀􏰳

```
$.post('/url', {title: '􏺍Node.js'}, function (data) { 
  console.log('收􏺏响应');
}); 
console.log('发􏺐Ajax结􏺑');
```

![](/Users/xuyanjie/Library/Application Support/typora-user-images/image-20210705004141228.png)



（2）在Node中，异步􏳺􏳻I/O也很􏱕􏱑常见。以读取􏳲文件􏴅􏰴为例􏶤，我们可以􏵘到它与前端Ajax􏵬调用的􏰑􏰓方式是极其类似􏰏􏶼􏳹的􏰳

![image-20210705011321435](/Users/xuyanjie/Library/Application Support/typora-user-images/image-20210705011321435.png)

### 四、CommonJS

CommonJS􏺤􏺽规范为JavaScript􏲧定了一个美􏳥好的愿景——􏻅希望􏻆JavaScript能􏱝在􏲩􏲪􏰐􏰑􏳱􏰪任何地方执行。

### 五、node模块实现

在Node中􏲅入模块􏳖􏸳，􏱿需要经过􏰫􏲢下面3个步骤􏳻􏼑。
 (1) 􏺅􏼂路径分析􏼒
 (2) 􏴅􏰴文件定位
 (3) 编译执行

在node中分为两类模块，一个是node提供的叫核心模块，还有一类是用户编写的叫文件模块

- 核心模块􏳖􏸳部分在Node源码􏴘􏰈的编译过程中，编译进了二进制执行文件。在node启动时，部分核心模块就被直接加载进了内存中，所以这部分核心模块引入时，文件定位和编译执行两步可以省略，并且在路径分析中优先判断，所以它的加载速度是最快的。
- 文件模块则是运行中动态加载，需要完整的三个步骤，速度比核心模块慢。



