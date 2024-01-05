import{_ as e,o as t,c as s,a as n}from"./app-53705635.js";const c={},i=n(`<h2 id="什么是csp" tabindex="-1"><a class="header-anchor" href="#什么是csp" aria-hidden="true">#</a> 什么是CSP</h2><p>​ CSP全称Content Security Policy ，翻译为内容安全策略，就是为了页面内容安全而制定的一系列防护策略. 通过CSP所约束的的规责指定可信的内容来源（这里的内容可以指脚本、图片、iframe、fton、style等等可能的远程的资源）。通过CSP协定，让WEB处于一个安全的运行环境中。</p><p>​ 前端有”同源策略”，就是一个页面的资源只能从与之同源的服务器获取，而不允许跨域获取。主要用来防止XSS攻击，可以避免页面被注入恶意代码，影响安全。但是这个策略是个双刃剑，挡住恶意代码的同时也限制了前端的灵活性，CSP就出现了，通过 Content-Security-Policy 网页的开发者可以控制整个页面中外部资源的加载和执行。可以让我们可以跨域获取资源，又能防止恶意代码。</p><p>如何使用呢？</p><p>我们只需要在meta属性中设置下即可：如下代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;meta http-equiv=&quot;Content-Security-Policy&quot; content=&quot;&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>比如如下的列子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;meta http-equiv=&quot;Content-Security-Policy&quot; content=&quot;
default-src http: https:  *.xxx.com &#39;self&#39; &#39;unsafe-inline&#39; ;
style-src &#39;self&#39; &#39;unsafe-inline&#39; *.yyy.com;
script-src &#39;self&#39; &#39;unsafe-inline&#39; &#39;unsafe-eval&#39; ;
&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认设置（default-src）：信任 http ,https协议资源，信任当前域名资源，信任符合*.xxx.com的域名资源CSS设置（style-src）：信任当前域名资源，允许内嵌的CSS资源，信任来自*.yyy.com下的CSS资源。 JS设置（script-src）：信任当前域名资源，允许内嵌的JS执行，允许将字符串当作代码执行</p><p>有如下类别</p><p>default-src 给下面所有的规则设定一个默认值 script-src 外部脚本 style-src 样式表 img-src 图像 media-src 媒体文件（音频和视频） font-src 字体文件 object-src 插件（比如 Flash） child-src 框架 frame-ancestors 嵌入的外部资源（比如<strong>iframe</strong>） connect-src HTTP 连接（通过 XHR、WebSockets、EventSource等） worker-src worker脚本 manifest-src manifest 文件</p><p><strong>script-src有如下属性值：</strong></p><p>unsafe-inline 允许执行页面内嵌的script标签和事件监听函数 unsafe-eval 允许将字符串当作代码执行，比如使用eval、setTimeout、setInterval和Function等函数 nonce 每次HTTP回应给出一个授权token，页面内嵌脚本必须有这个token，才会执行 hash 列出允许执行的脚本代码的Hash值，页面内嵌脚本的哈希值只有吻合的情况下，才能执行</p>`,13),r=[i];function a(o,l){return t(),s("div",null,r)}const d=e(c,[["render",a],["__file","Content-Security-Policy.html.vue"]]);export{d as default};
