import{_ as n,o as s,c as a,a as e}from"./app-53705635.js";const p={},t=e(`<h3 id="_1、js原型链" tabindex="-1"><a class="header-anchor" href="#_1、js原型链" aria-hidden="true">#</a> 1、JS原型链</h3><p>​ JS里万物皆对象，对象又分为普通对象和函数对象。每当定义一个对象时，对象中都会包含一些预定义的属性。其中每个对象都有一个_proto_属性，这个属性用来指向创建它的构造函数的原型对象；每个函数对象都有一个prototype 属性，这个属性指向的是该函数的原型对象。</p><p>​ 先说一下函数对象的prototype属性</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
f<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;myfriend &#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//f的原型对象</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

a<span class="token punctuation">.</span>name  <span class="token comment">//myfriend </span>
b<span class="token punctuation">.</span>name  <span class="token comment">//myfriend</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 原型对象可以实现类似继承的机制和完成数据的共享。所有实例对象需要共享的属性和方法，都放在这个原型对象里面；那些不需要共享的属性和方法，就放在构造函数里面。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//接着上面的代码</span>
f<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>

a<span class="token punctuation">.</span>name  <span class="token comment">//hello</span>
b<span class="token punctuation">.</span>name  <span class="token comment">//hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 原型对象的属性不是实例对象自身的属性。当实例对象本身没有某个属性或方法的时候，它会到原型对象去寻找该属性或方法。这就是原型对象的特殊之处。如果实例对象自身就有某个属性或方法，它就不会再去原型对象寻找这个属性或方法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;luse&quot;</span>

a<span class="token punctuation">.</span>name <span class="token comment">// &#39;luse&#39;</span>
b<span class="token punctuation">.</span>name <span class="token comment">// &#39;hello&#39;</span>
f<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>name <span class="token comment">// &#39;hello&#39;;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其次是所有对象都有_proto_，指向的是其构造函数的原型对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//接着上面的代码</span>
a<span class="token punctuation">.</span>_proto_ <span class="token operator">==</span> f<span class="token punctuation">.</span>prototype <span class="token comment">// true</span>
b<span class="token punctuation">.</span>_proto_ <span class="token operator">==</span> f<span class="token punctuation">.</span>prototype <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在再来看一下什么是原型链，所有对象的原型最终都可以上溯到Object.prototype，这就是所有对象都有valueIf和toString方法的原因，因为这是从Object.prototype继承的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//接着上面的代码</span>
<span class="token comment">// a是一个对象，又_proto_属性,指向a的构造函数的原型对象</span>
a<span class="token punctuation">.</span>_proto_ <span class="token operator">==</span> f<span class="token punctuation">.</span>prototype 

<span class="token comment">// f.prototype是一个对象,也会有_proto_属性,指向f的构造函数的原型对象</span>
f<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>_proto_ <span class="token operator">==</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype

<span class="token comment">// Function.prototype是一个普通对象,也会有_proto_属性,指向Function.prototype的构造函数的原型对象</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>_proto_ <span class="token operator">==</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype

<span class="token comment">//直到原型链的最顶端为null,整个为一个链形结构</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>_proto_ <span class="token operator">==</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[t];function c(l,i){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","原型和原型链.html.vue"]]);export{u as default};
