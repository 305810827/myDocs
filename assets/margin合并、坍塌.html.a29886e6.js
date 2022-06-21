import{_ as n,e as s}from"./app.659fa32e.js";var a="/assets/image-20220111120157558-2233881.c1167ee1.png",e="/assets/image-20220525094232183.39228f37.png",t="/assets/image-20220525094237056.c318ad4c.png";const p={},o=s('<h3 id="margin\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#margin\u5408\u5E76" aria-hidden="true">#</a> margin\u5408\u5E76</h3><p>\u666E\u901A\u6587\u6863\u6D41\u4E2D\u5757\u7EA7\u5143\u7D20\u7684\u5782\u76F4\u5916\u8FB9\u8DDD\u4F1A\u4E92\u76F8\u5408\u5E76\uFF0C\u4EE5\u4ED6\u4EEC\u4E4B\u95F4\u5916\u8FB9\u8DDD\u5927\u7684\u4E3A\u51C6\u3002</p><p><img src="'+a+`" alt="image-20220111120157558"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;html&gt;
    &lt;head&gt;
        &lt;style&gt;
            /* \u5B9A\u4F4D + margin-top + margin-left */
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u51B3\uFF1A</p><p>1\u3001\u8BBE\u7F6E\u4E00\u65B9\u7684\u5916\u8FB9\u8DDD\u4E3A\u4E24\u8005\u539F\u6765\u9884\u8BBE\u5916\u8FB9\u8DDD\u4E4B\u548C</p><p>2\u3001\u8BBE\u7F6E\u5143\u7D20BFC</p><h3 id="margin-\u584C\u9677" tabindex="-1"><a class="header-anchor" href="#margin-\u584C\u9677" aria-hidden="true">#</a> margin \u584C\u9677</h3><p>\u666E\u901A\u6587\u6863\u6D41\u4E2D\u7236\u5B50\u5757\u7EA7\u5143\u7D20\uFF0C\u5982\u679C\u7236\u5143\u7D20\u6CA1\u6709\u8BBE\u7F6E\u4E0A\u5185\u8FB9\u8DDD\u6216\u4E0A\u8FB9\u6846\uFF0C\u5B50\u5143\u7D20\u7684\u4E0A\u8FB9\u8DDD\u5C31\u4F1A\u548C\u7236\u5143\u7D20\u7684\u4E0A\u8FB9\u8DDD\u91CD\u5408\uFF0C\u4EE5\u4ED6\u4EEC\u4E24\u4E2A\u4E2D\u95F4\u6700\u5927\u4E0A\u8FB9\u8DDD\u4E3A\u51C6\uFF0C\u4E0E\u8DDD\u79BB\u4ED6\u4EEC\u6700\u8FD1\u7684\u76D2\u5B50\u9694\u5F00\u3002</p><p><img src="`+e+'" alt="image-20220525094232183"><img src="'+t+`" alt="image-20220525094237056"></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
            <span class="token comment">/* \u5B9A\u4F4D + margin-top + margin-left */</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u51B3\uFF1A</p><p>1\u3001\u8BBE\u7F6E\u7236\u5143\u7D20BFC\uFF0Cdisplay \u4E3Ainline-blocks</p>`,13);function i(l,r){return o}var d=n(p,[["render",i],["__file","margin\u5408\u5E76\u3001\u574D\u584C.html.vue"]]);export{d as default};
