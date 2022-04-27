(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{457:function(a,t,e){"use strict";e.r(t);var s=e(62),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h3",{attrs:{id:"一、node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、node"}},[a._v("#")]),a._v(" 一、node")]),a._v(" "),e("p",[a._v("node是javascript的运行平台，保留了前端浏览器javascript中那些熟悉的接口，没有修改语言本身的特性，依旧基于作用域和原型链，把在浏览器javascrip的运用思想迁移到服务器端。")]),a._v(" "),e("h3",{attrs:{id:"二、意义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、意义"}},[a._v("#")]),a._v(" 二、意义")]),a._v(" "),e("p",[a._v("javascript作为一门完备的语言，长久限制于浏览器的沙箱中执行，被动的去使用浏览器逐步暴露的功能，所以它的能力取决于浏览器中间层提供的支持有多少。")]),a._v(" "),e("p",[a._v("![image-20210705002447826](/Users/xuyanjie/Library/Application Support/typora-user-images/image-20210705002447826.png)")]),a._v(" "),e("p",[a._v("chrome和node十分相似，都是基于事件驱动的异步架构，浏览器通过事件驱动来服务界面上的交互，Node通􏲶过事􏰴驱动􏰘服务I/O。")]),a._v(" "),e("h3",{attrs:{id:"三、异步i-o"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、异步i-o"}},[a._v("#")]),a._v(" 三、异步I/O")]),a._v(" "),e("p",[a._v("（1）关于异步􏳺􏳻I/O，􏶶􏶶前端工程师理解􏸺起来􏰘􏶄􏲊会容易􏲹􏲺一些，因为发起Ajax调􏵬用对于前端程序员是再熟悉不过的场景，下面􏰋􏴘􏰈的代码用于发起一个Ajax请求。􏲀􏰳")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$.post('/url', {title: '􏺍Node.js'}, function (data) { \n  console.log('收􏺏响应');\n}); \nconsole.log('发􏺐Ajax结􏺑');\n")])])]),e("p",[a._v("![](/Users/xuyanjie/Library/Application Support/typora-user-images/image-20210705004141228.png)")]),a._v(" "),e("p",[a._v("（2）在Node中，异步􏳺􏳻I/O也很􏱕􏱑常见。以读取􏳲文件􏴅􏰴为例􏶤，我们可以􏵘到它与前端Ajax􏵬调用的􏰑􏰓方式是极其类似􏰏􏶼􏳹的􏰳")]),a._v(" "),e("p",[a._v("![image-20210705011321435](/Users/xuyanjie/Library/Application Support/typora-user-images/image-20210705011321435.png)")]),a._v(" "),e("h3",{attrs:{id:"四、commonjs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、commonjs"}},[a._v("#")]),a._v(" 四、CommonJS")]),a._v(" "),e("p",[a._v("CommonJS􏺤􏺽规范为JavaScript􏲧定了一个美􏳥好的愿景——􏻅希望􏻆JavaScript能􏱝在􏲩􏲪􏰐􏰑􏳱􏰪任何地方执行。")]),a._v(" "),e("h3",{attrs:{id:"五、node模块实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、node模块实现"}},[a._v("#")]),a._v(" 五、node模块实现")]),a._v(" "),e("p",[a._v("在Node中􏲅入模块􏳖􏸳，􏱿需要经过􏰫􏲢下面3个步骤􏳻􏼑。\n(1) 􏺅􏼂路径分析􏼒\n(2) 􏴅􏰴文件定位\n(3) 编译执行")]),a._v(" "),e("p",[a._v("在node中分为两类模块，一个是node提供的叫核心模块，还有一类是用户编写的叫文件模块")]),a._v(" "),e("ul",[e("li",[a._v("核心模块􏳖􏸳部分在Node源码􏴘􏰈的编译过程中，编译进了二进制执行文件。在node启动时，部分核心模块就被直接加载进了内存中，所以这部分核心模块引入时，文件定位和编译执行两步可以省略，并且在路径分析中优先判断，所以它的加载速度是最快的。")]),a._v(" "),e("li",[a._v("文件模块则是运行中动态加载，需要完整的三个步骤，速度比核心模块慢。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);