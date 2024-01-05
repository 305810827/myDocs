import{_ as e,o as n,c as a,a as t}from"./app-53705635.js";const i={},s=t(`<p>实现重复函数repeat 1、利用数组的join方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function repeat(basic, num){
	return (new Array(num + 1)).join(basic) 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、递归方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function repeat(basic, num){
	return num &gt; 0 ? basic.concat(repeat(basic, --num)) : &#39;&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[s];function r(d,l){return n(),a("div",null,c)}const o=e(i,[["render",r],["__file","repeat.html.vue"]]);export{o as default};
