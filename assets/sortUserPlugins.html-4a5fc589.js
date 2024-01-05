import{_ as t,r as d,o as i,c as n,b as e,d as o,e as r,a}from"./app-53705635.js";const s={},l={id:"插件顺序",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#插件顺序","aria-hidden":"true"},"#",-1),_={href:"https://cn.vitejs.dev/guide/api-plugin.html#plugin-ordering",target:"_blank",rel:"noopener noreferrer"},p=a('<p>一个 Vite 插件可以额外指定一个 <code>enforce</code> 属性（类似于 webpack 加载器）来调整它的应用顺序。<code>enforce</code> 的值可以是<code>pre</code> 或 <code>post</code>。解析后的插件将按照以下顺序排列：</p><ul><li>Alias</li><li>带有 <code>enforce: &#39;pre&#39;</code> 的用户插件</li><li>Vite 核心插件</li><li>没有 enforce 值的用户插件</li><li>Vite 构建用的插件</li><li>带有 <code>enforce: &#39;post&#39;</code> 的用户插件</li><li>Vite 后置构建插件（最小化，manifest，报告）</li></ul><p><img src="https://camo.githubusercontent.com/3e033daefc73e91165c2bfdc3a6df7b416355bafb7eb2e162c1dfb2237adbb16/687474703a2f2f736861646f77732d6d616c6c2e6f73732d636e2d7368656e7a68656e2e616c6979756e63732e636f6d2f696d616765732f6173736574732f636f6d6d6f6e332f586e6970323032322d30322d32335f31332d32332d32342e6a7067" alt="image"></p>',3);function h(u,m){const c=d("ExternalLinkIcon");return i(),n("div",null,[e("h2",l,[f,o(" 插件顺序"),e("a",_,[o("#"),r(c)])]),p])}const g=t(s,[["render",h],["__file","sortUserPlugins.html.vue"]]);export{g as default};
