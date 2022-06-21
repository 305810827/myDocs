import{_ as e,e as n}from"./app.659fa32e.js";const i={},a=n(`<p>\u5B9E\u73B0\u91CD\u590D\u51FD\u6570repeat 1\u3001\u5229\u7528\u6570\u7EC4\u7684join\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function repeat(basic, num){
	return (new Array(num + 1)).join(basic) 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001\u9012\u5F52\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function repeat(basic, num){
	return num &gt; 0 ? basic.concat(repeat(basic, --num)) : &#39;&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function t(r,s){return a}var d=e(i,[["render",t],["__file","repeat.html.vue"]]);export{d as default};
