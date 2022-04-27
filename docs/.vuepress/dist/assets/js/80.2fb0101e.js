(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{504:function(t,e,n){"use strict";n.r(e);var r=n(62),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"vue的双向数据绑定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue的双向数据绑定"}},[t._v("#")]),t._v(" Vue的双向数据绑定")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Observer：观察者，这里的主要工作是递归地监听对象上的所有属性，在属性值改变的时候，触发相应的watcher。")])]),t._v(" "),n("li",[n("p",[t._v("Watcher：订阅者，当监听的数据值修改时，执行响应的回调函数（Vue里面的更新模板内容）。")])]),t._v(" "),n("li",[n("p",[t._v("Dep：订阅管理器，连接Observer和Watcher的桥梁，每一个Observer对应一个Dep，它内部维护一个数组，保存与该Observer相关的Watcher")])])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('/* 实现数据监听器（数据劫持）*/\n\tfunction Observer(obj, key, value) {\n  \t\tvar dep = new Dep();\n  \t\tif (Object.prototype.toString.call(value) == \'[object Object]\') {\n   \t\t    Object.keys(value).forEach(function(key) {\n      \t\tnew Observer(value, key, value[key])\n    \t })\n  \t };\n\n  \tObject.defineProperty(obj, key, {\n   \t\t enumerable: true,\n   \t\t configurable: true,\n    \t  get: function() {\n     \t\t if (Dep.target) {\n        \t dep.addSub(Dep.target);\n      \t     };\n      \t     return value;\n          },\n    \tset: function(newVal) {\n      \t\tvalue = newVal;\n      \t\tdep.notify();\n    \t\t}\n  \t\t})\n\t}\n\t\n\t// 订阅器\n\tfunction Dep() {\n  \t\tthis.subs = [];\n  \t\tthis.addSub = function (watcher) {\n    \t\tthis.subs.push(watcher);\n  \t\t}\n\n  \t\tthis.notify = function() {\n    \t\tthis.subs.forEach(function(watcher) {\n    \t\t\twatcher.update();\n    \t\t});\n  \t\t}\n\t}\n\n\t// 观察者\n   function Watcher(fn) {\n \t \tthis.update = function() {\n    \t\tDep.target = this;\n    \t\tfn();\n    \t\tDep.target = null;\n  \t\t}\n  \t\tthis.update();\n\t}\n\n\t// 连接器\n\t<div id="app">\n  \t\t<input id="input" type="text" v-model="text">\n  \t\t<div id="text">输入的值为：{{text}}</div>\n\t</div>\n\t<script type="text/javascript">\n  \t\tvar obj = {\n    \t\ttext: \'hello world\'\n  \t\t}\n  \t\tObject.keys(obj).forEach(function(key){\n  \t  \t\tnew Observer(obj, key, obj[key])\n  \t\t});\n  \t\tnew Watcher(function(){\n    \t\tdocument.querySelector("#text").innerHTML = "输入的值为：" + obj.text;\n  \t\t})\n \t\t document.querySelector("#input").addEventListener(\'input\', function(e) {\n    \t\tobj.text = e.target.value;\n  \t\t})\n\t<\/script>\n\n')])])])])}),[],!1,null,null,null);e.default=a.exports}}]);