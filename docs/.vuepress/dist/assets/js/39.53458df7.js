(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{458:function(t,s,a){"use strict";a.r(s);var e=a(62),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"v2ray配置ip代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2ray配置ip代理"}},[t._v("#")]),t._v(" v2ray配置IP代理")]),t._v(" "),a("p",[t._v("https://www.v2fly.org/config/multiple_config.html#%E8%A7%84%E5%88%99%E8%AF%B4%E6%98%8E")]),t._v(" "),a("h2",{attrs:{id:"安装v2ray"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装v2ray"}},[t._v("#")]),t._v(" 安装v2ray")]),t._v(" "),a("p",[t._v("解压：unzip v2ray-linux.zip -d ./")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("命令文件geoip.dat  geosite.dat  v2ctl  v2ray 用mv移动到 /usr/local/bin/（mv geoip.dat  geosite.dat  v2ctl  v2ray /usr/local/bin/）")])]),t._v(" "),a("li",[a("p",[t._v("配置文件config.json 用mv移动到/usr/local/etc/v2ray/ （自行创建文件夹v2ray）（mkdir /usr/local/etc/v2ray/）")])]),t._v(" "),a("li",[a("p",[t._v("文件 v2ray.service 用mv移动到 /etc/systemd/system/（mv v2ray.service /etc/systemd/system/")]),t._v(" "),a("p",[t._v("systemctl enable v2ray")]),t._v(" "),a("p",[t._v("systemctl daemon-reload")])])]),t._v(" "),a("h2",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[t._v("#")]),t._v(" 启动")]),t._v(" "),a("p",[t._v("systemctl start  v2ray")]),t._v(" "),a("p",[t._v("systemctl restart  v2ray")]),t._v(" "),a("p",[t._v("systemctl stop  v2ray")]),t._v(" "),a("p",[t._v("systemctl status  v2ray")]),t._v(" "),a("h2",{attrs:{id:"config-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-json"}},[t._v("#")]),t._v(" Config.json")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n  "log"      : {\n    "loglevel": "warn"\n  },\n  "inbounds" : [\n    {\n      "protocol": "socks",\n      "port"    : 21127,\n      "listen":"0.0.0.0",\n      "settings": {\n        "auth": "noauth"\n      }\n    },\n    {\n      "port"    : 21128,\n      "protocol": "vmess",\n      "settings": {\n        "clients": [\n          {\n            "id"     : "00e0a3ff-674d-486d-8de0-ea8a8e4792e3",\n            "alterId": 35\n          }\n        ]\n      }\n    }\n  ],\n  "outbounds": [\n    {\n      "protocol": "freedom",\n      "tag"     : "direct"\n    }\n  ]\n}\n')])])]),a("p",[t._v("curl测试：curl --proxy 协议://ip:端口 www.baidu.com")])])}),[],!1,null,null,null);s.default=n.exports}}]);