(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{492:function(t,o,e){"use strict";e.r(o);var n=e(62),l=Object(n.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"一、httponly"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、httponly"}},[t._v("#")]),t._v(" "),e("strong",[t._v("一、HttpOnly")])]),t._v(" "),e("p",[t._v("HttpOnly是包含在http返回头Set-Cookie里面的一个附加的flag，所以它是后端服务器对cookie设置的一个附加的属性，在生成cookie时使用HttpOnly标志有助于减轻客户端脚本访问受保护cookie的风险（如果浏览器支持的话）")]),t._v(" "),e("p",[e("strong",[t._v("使用HttpOnly缓解最常见的XSS攻击")])]),t._v(" "),e("p",[t._v("大多数XSS攻击都是针对会话cookie的盗窃。后端服务器可以通过在其创建的cookie上设置HttpOnly标志来帮助缓解此问题，这表明该cookie在客户端上不可访问。")]),t._v(" "),e("p",[t._v("如果支持HttpOnly的浏览器检测到包含HttpOnly标志的cookie，并且客户端脚本代码尝试读取该cookie，则浏览器将返回一个空字符串作为结果。这会通过阻止恶意代码（通常是XSS）将数据发送到攻击者的网站来使攻击失败。")])])}),[],!1,null,null,null);o.default=l.exports}}]);