import{_ as e,o as n,c as i,a as d}from"./app-53705635.js";const a={},s=d(`<h2 id="entry" tabindex="-1"><a class="header-anchor" href="#entry" aria-hidden="true">#</a> entry</h2><p>entry是配置入口的起点，每个 HTML 页面都有一个入口起点。单页应用(SPA)：一个入口起点，多页应用(MPA)：多个入口起点。</p><p>output对应的输出文件，可以配置输出路径和文件名。</p><p>1、单页面配置，传递字符串。打包形成一个chunk，输出一个bundle文件，此时chunk的名称默认是main</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>entry: {
	&#39;./background.js&#39;
}
output: {
	path    : path.resolve(__dirname, &#39;./dist&#39;),
  filename: &#39;[name].js&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、单页面配置，传递数组。所有入口文件最终只会形成一个chunk，输出出去只有一个bundle文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>entry: {
	[&#39;./background1.js&#39;, &#39;./background2.js&#39;]
}
output: {
	path    : path.resolve(__dirname, &#39;./dist&#39;),
  filename: &#39;[name].js&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、多页面配置，传递对象。有多少个入口文件就形成多少个chunk，输出多少的bundle文件。</p><p><code>[name]</code> 被 chunk 的 name 替换。</p><p><code>[hash]</code> 被 compilation 生命周期的 hash 替换。</p><p><code>[chunkhash]</code> 被 chunk 的 hash 替换。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>entry: {
	&#39;background1&#39;: &#39;./background1.js&#39;,
	&#39;background2&#39;: &#39;./background2.js&#39;
}
output: {
	path    : path.resolve(__dirname, &#39;./dist&#39;),
  filename: &#39;[name].js&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),t=[s];function l(r,c){return n(),i("div",null,t)}const v=e(a,[["render",l],["__file","entry和output.html.vue"]]);export{v as default};
