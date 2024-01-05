import{_ as n,o as s,c as a,a as e}from"./app-53705635.js";const t="/assets/image-20220111120157558-2233881-c1167ee1.png",p={},o=e('<h3 id="margin合并" tabindex="-1"><a class="header-anchor" href="#margin合并" aria-hidden="true">#</a> margin合并</h3><p>普通文档流中块级元素的垂直外边距会互相合并，以他们之间外边距大的为准。</p><p><img src="'+t+`" alt="image-20220111120157558"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;html&gt;
    &lt;head&gt;
        &lt;style&gt;
            /* 定位 + margin-top + margin-left */
            .box1{
                width: 300px;
                height: 300px;
                background-color: aqua;
                margin-bottom: 20px;
            }
            .box2 {
                width: 200px; 
                height: 100px;
                background-color: black;
                margin-top: 30px;
            }
        &lt;/style&gt;
    &lt;/head&gt;
    &lt;body&gt;
            &lt;div class=&quot;box1&quot;&gt;&lt;/div&gt;
            &lt;div class=&quot;box2&quot;&gt;&lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决：</p><p>1、设置一方的外边距为两者原来预设外边距之和</p><p>2、设置元素BFC</p><h3 id="margin-塌陷" tabindex="-1"><a class="header-anchor" href="#margin-塌陷" aria-hidden="true">#</a> margin 塌陷</h3><p>普通文档流中父子块级元素，如果父元素没有设置上内边距或上边框，子元素的上边距就会和父元素的上边距重合，以他们两个中间最大上边距为准，与距离他们最近的盒子隔开。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
            <span class="token comment">/* 定位 + margin-top + margin-left */</span>
            <span class="token punctuation">.</span>box1<span class="token punctuation">{</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> 300px<span class="token punctuation">;</span>
                <span class="token literal-property property">height</span><span class="token operator">:</span> 300px<span class="token punctuation">;</span>
                background<span class="token operator">-</span>color<span class="token operator">:</span> aqua<span class="token punctuation">;</span>
                margin<span class="token operator">-</span>bottom<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token punctuation">.</span>box2 <span class="token punctuation">{</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span> 
                <span class="token literal-property property">height</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
                background<span class="token operator">-</span>color<span class="token operator">:</span> black<span class="token punctuation">;</span>
                margin<span class="token operator">-</span>top<span class="token operator">:</span> 50px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;box1&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;box2&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决：</p><p>1、设置父元素BFC，display 为inline-blocks</p>`,12),l=[o];function i(r,c){return s(),a("div",null,l)}const v=n(p,[["render",i],["__file","margin合并、坍塌.html.vue"]]);export{v as default};
