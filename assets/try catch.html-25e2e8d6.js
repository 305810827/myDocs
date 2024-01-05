import{_ as e,o as n,c as i,a as s}from"./app-53705635.js";const a={},c=s(`<h1 id="try-catch-能捕获到哪些-js-异常" tabindex="-1"><a class="header-anchor" href="#try-catch-能捕获到哪些-js-异常" aria-hidden="true">#</a> try catch 能捕获到哪些 JS 异常</h1><p>js线程执行进入了try catch，并在try catch未执行完前，抛出的异常都可以被捕获。</p><p>未定义变量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>try {
	a.b
} catch(e) {
	console.log(e)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>js线程执行进入了try catch，发现a未定义，所以报错，此时满足条件，异常能被捕获。</p><h1 id="抛出的异常未能捕获的情况" tabindex="-1"><a class="header-anchor" href="#抛出的异常未能捕获的情况" aria-hidden="true">#</a> 抛出的异常未能捕获的情况</h1><p>1、语法错误</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
	<span class="token punctuation">.</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>console.log(.)属于语法错误，在语法检查阶段就报错了，此时js线程执行还未进入try catch就抛出了异常。</p><p>2、异步任务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>try{
  setTimeout(()=&gt;{
     console.log(a.b); 
  }, 100)
}catch(e){
  console.log(&#39;error&#39;,e);
}
Uncaught ReferenceError: a is not defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>try catch执行完毕之后，才开始执行setTimeout里的函数，异常不能被捕获</p><p>3、在 try catch 外执行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>try{
   function d(){a.b;}
}catch(e){
   console.log(&quot;error&quot;,e);
}
d();
Uncaught ReferenceError: a is not defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法定义在 try catch 代码块里面，但是执行方法在 try catch 外，在执行 d 方法的时候报错，此时 try catch 已经执行完成，111 都已经被执行了，故而无法捕捉异常。</p><p>4、promise</p><p>promise调用then和catch方法，内部报错被try catch了，报错不再上抛，所以在promise上try catch是无效的，无法捕获内部异常</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>try{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正确：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>try{
    await new Promise(function (resolve, reject) {
        a.b;
    }).then(v=&gt;{
        console.log(v);
    });;
}catch(e){
    console.log(&#39;error&#39;,e);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>try{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>https://zhuanlan.zhihu.com/p/142932660</p>`,22),l=[c];function d(t,r){return n(),i("div",null,l)}const o=e(a,[["render",d],["__file","try catch.html.vue"]]);export{o as default};
