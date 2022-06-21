import{_ as e,e as n}from"./app.659fa32e.js";const i={},d=n(`<h2 id="entry" tabindex="-1"><a class="header-anchor" href="#entry" aria-hidden="true">#</a> entry</h2><p>entry\u662F\u914D\u7F6E\u5165\u53E3\u7684\u8D77\u70B9\uFF0C\u6BCF\u4E2A HTML \u9875\u9762\u90FD\u6709\u4E00\u4E2A\u5165\u53E3\u8D77\u70B9\u3002\u5355\u9875\u5E94\u7528(SPA)\uFF1A\u4E00\u4E2A\u5165\u53E3\u8D77\u70B9\uFF0C\u591A\u9875\u5E94\u7528(MPA)\uFF1A\u591A\u4E2A\u5165\u53E3\u8D77\u70B9\u3002</p><p>output\u5BF9\u5E94\u7684\u8F93\u51FA\u6587\u4EF6\uFF0C\u53EF\u4EE5\u914D\u7F6E\u8F93\u51FA\u8DEF\u5F84\u548C\u6587\u4EF6\u540D\u3002</p><p>1\u3001\u5355\u9875\u9762\u914D\u7F6E\uFF0C\u4F20\u9012\u5B57\u7B26\u4E32\u3002\u6253\u5305\u5F62\u6210\u4E00\u4E2Achunk\uFF0C\u8F93\u51FA\u4E00\u4E2Abundle\u6587\u4EF6\uFF0C\u6B64\u65F6chunk\u7684\u540D\u79F0\u9ED8\u8BA4\u662Fmain</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>entry: {
	&#39;./background.js&#39;
}
output: {
	path    : path.resolve(__dirname, &#39;./dist&#39;),
  filename: &#39;[name].js&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001\u5355\u9875\u9762\u914D\u7F6E\uFF0C\u4F20\u9012\u6570\u7EC4\u3002\u6240\u6709\u5165\u53E3\u6587\u4EF6\u6700\u7EC8\u53EA\u4F1A\u5F62\u6210\u4E00\u4E2Achunk\uFF0C\u8F93\u51FA\u51FA\u53BB\u53EA\u6709\u4E00\u4E2Abundle\u6587\u4EF6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>entry: {
	[&#39;./background1.js&#39;, &#39;./background2.js&#39;]
}
output: {
	path    : path.resolve(__dirname, &#39;./dist&#39;),
  filename: &#39;[name].js&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3\u3001\u591A\u9875\u9762\u914D\u7F6E\uFF0C\u4F20\u9012\u5BF9\u8C61\u3002\u6709\u591A\u5C11\u4E2A\u5165\u53E3\u6587\u4EF6\u5C31\u5F62\u6210\u591A\u5C11\u4E2Achunk\uFF0C\u8F93\u51FA\u591A\u5C11\u7684bundle\u6587\u4EF6\u3002</p><p><code>[name]</code> \u88AB chunk \u7684 name \u66FF\u6362\u3002</p><p><code>[hash]</code> \u88AB compilation \u751F\u547D\u5468\u671F\u7684 hash \u66FF\u6362\u3002</p><p><code>[chunkhash]</code> \u88AB chunk \u7684 hash \u66FF\u6362\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>entry: {
	&#39;background1&#39;: &#39;./background1.js&#39;,
	&#39;background2&#39;: &#39;./background2.js&#39;
}
output: {
	path    : path.resolve(__dirname, &#39;./dist&#39;),
  filename: &#39;[name].js&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function s(a,l){return d}var t=e(i,[["render",s],["__file","entry\u548Coutput.html.vue"]]);export{t as default};
