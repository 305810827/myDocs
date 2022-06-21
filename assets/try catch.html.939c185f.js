import{_ as e,e as n}from"./app.659fa32e.js";const i={},s=n(`<h1 id="try-catch-\u80FD\u6355\u83B7\u5230\u54EA\u4E9B-js-\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#try-catch-\u80FD\u6355\u83B7\u5230\u54EA\u4E9B-js-\u5F02\u5E38" aria-hidden="true">#</a> try catch \u80FD\u6355\u83B7\u5230\u54EA\u4E9B JS \u5F02\u5E38</h1><p>js\u7EBF\u7A0B\u6267\u884C\u8FDB\u5165\u4E86try catch\uFF0C\u5E76\u5728try catch\u672A\u6267\u884C\u5B8C\u524D\uFF0C\u629B\u51FA\u7684\u5F02\u5E38\u90FD\u53EF\u4EE5\u88AB\u6355\u83B7\u3002</p><p>\u672A\u5B9A\u4E49\u53D8\u91CF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>try {
	a.b
} catch(e) {
	console.log(e)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>js\u7EBF\u7A0B\u6267\u884C\u8FDB\u5165\u4E86try catch\uFF0C\u53D1\u73B0a\u672A\u5B9A\u4E49\uFF0C\u6240\u4EE5\u62A5\u9519\uFF0C\u6B64\u65F6\u6EE1\u8DB3\u6761\u4EF6\uFF0C\u5F02\u5E38\u80FD\u88AB\u6355\u83B7\u3002</p><h1 id="\u629B\u51FA\u7684\u5F02\u5E38\u672A\u80FD\u6355\u83B7\u7684\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u629B\u51FA\u7684\u5F02\u5E38\u672A\u80FD\u6355\u83B7\u7684\u60C5\u51B5" aria-hidden="true">#</a> \u629B\u51FA\u7684\u5F02\u5E38\u672A\u80FD\u6355\u83B7\u7684\u60C5\u51B5</h1><p>1\u3001\u8BED\u6CD5\u9519\u8BEF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
	<span class="token punctuation">.</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>console.log(.)\u5C5E\u4E8E\u8BED\u6CD5\u9519\u8BEF\uFF0C\u5728\u8BED\u6CD5\u68C0\u67E5\u9636\u6BB5\u5C31\u62A5\u9519\u4E86\uFF0C\u6B64\u65F6js\u7EBF\u7A0B\u6267\u884C\u8FD8\u672A\u8FDB\u5165try catch\u5C31\u629B\u51FA\u4E86\u5F02\u5E38\u3002</p><p>2\u3001\u5F02\u6B65\u4EFB\u52A1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>try{
  setTimeout(()=&gt;{
     console.log(a.b); 
  }, 100)
}catch(e){
  console.log(&#39;error&#39;,e);
}
Uncaught ReferenceError: a is not defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>try catch\u6267\u884C\u5B8C\u6BD5\u4E4B\u540E\uFF0C\u624D\u5F00\u59CB\u6267\u884CsetTimeout\u91CC\u7684\u51FD\u6570\uFF0C\u5F02\u5E38\u4E0D\u80FD\u88AB\u6355\u83B7</p><p>3\u3001\u5728 try catch \u5916\u6267\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>try{
   function d(){a.b;}
}catch(e){
   console.log(&quot;error&quot;,e);
}
d();
Uncaught ReferenceError: a is not defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u5B9A\u4E49\u5728 try catch \u4EE3\u7801\u5757\u91CC\u9762\uFF0C\u4F46\u662F\u6267\u884C\u65B9\u6CD5\u5728 try catch \u5916\uFF0C\u5728\u6267\u884C d \u65B9\u6CD5\u7684\u65F6\u5019\u62A5\u9519\uFF0C\u6B64\u65F6 try catch \u5DF2\u7ECF\u6267\u884C\u5B8C\u6210\uFF0C111 \u90FD\u5DF2\u7ECF\u88AB\u6267\u884C\u4E86\uFF0C\u6545\u800C\u65E0\u6CD5\u6355\u6349\u5F02\u5E38\u3002</p><p>4\u3001promise</p><p>promise\u8C03\u7528then\u548Ccatch\u65B9\u6CD5\uFF0C\u5185\u90E8\u62A5\u9519\u88ABtry catch\u4E86\uFF0C\u62A5\u9519\u4E0D\u518D\u4E0A\u629B\uFF0C\u6240\u4EE5\u5728promise\u4E0Atry catch\u662F\u65E0\u6548\u7684\uFF0C\u65E0\u6CD5\u6355\u83B7\u5185\u90E8\u5F02\u5E38</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>try{
    new Promise(function (resolve, reject) {
        a.b;
    }).then(v=&gt;{
        console.log(v);
    });
}catch(e){
    console.log(&#39;error&#39;,e);
}
// output
Uncaught (in promise) ReferenceError: a is not defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B63\u786E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>try{
    await new Promise(function (resolve, reject) {
        a.b;
    }).then(v=&gt;{
        console.log(v);
    });;
}catch(e){
    console.log(&#39;error&#39;,e);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>try{
    new Promise(function (resolve, reject) {
        a.b;
    }).then(v=&gt;{
        console.log(v);
    }).catch(e =&gt; {
        console.log(e,&#39;error&#39;)
    });
}catch(e){
    console.log(&#39;error&#39;,e);
}v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>https://zhuanlan.zhihu.com/p/142932660</p>`,22);function a(l,c){return s}var r=e(i,[["render",a],["__file","try catch.html.vue"]]);export{r as default};
