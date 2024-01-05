import{_ as s,o as n,c as a,a as t}from"./app-53705635.js";const p="/assets/image-20230518162706208-ee3cd502.png",e={},o=t(`<h1 id="v8提升对象属性访问速度-快属性和慢属性" tabindex="-1"><a class="header-anchor" href="#v8提升对象属性访问速度-快属性和慢属性" aria-hidden="true">#</a> V8提升对象属性访问速度---快属性和慢属性</h1><p>JavaScript 对象像一个字典，字符串作为键名，任意对象可以作为键值，可以通过键名读写键值，早起采用字典的存储方式。</p><p>后来出于性能的考量。因为字典是非线性的数据结构，查询效率会低于线性的数据结构，V8 为了提升存储和查找效率，采用了一套复杂的存储策略。</p><h3 id="常规属性-properties-和排序属性-element" tabindex="-1"><a class="header-anchor" href="#常规属性-properties-和排序属性-element" aria-hidden="true">#</a> 常规属性 (properties) 和排序属性 (element)</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;test-100&#39;</span> 
  <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;test-1&#39;</span> 
  <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;bar-B&#39;</span> 
  <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;test-50&#39;</span> 
  <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;test-9&#39;</span> 
  <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;test-8&#39;</span> 
  <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;test-3&#39;</span> 
  <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;test-5&#39;</span> 
  <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;bar-A&#39;</span> 
  <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;bar-C&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">for</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> bar<span class="token punctuation">)</span><span class="token punctuation">{</span> 
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">index:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> value:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>bar<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+'" alt="image-20230518162706208"></p><p>打印出来的属性顺序并不是我们设置的顺序</p><ul><li>设置的数字属性被最先打印出来了，并且是按照数字大小的顺序打印的；</li><li>设置的字符串属性依然是按照之前的设置顺序打印的</li></ul><p>之所以出现这样的结果，是因为在 ECMAScript 规范中定义了数字属性应该按照索引值大小升序排列，字符串属性根据创建时的顺序升序排列。</p><p>在这里我们把对象中的数字属性称为排序属性，在 V8 中被称为 elements，字符串属性就被称为常规属性，在 V8 中被称为 properties。</p><p><img src="https://img-blog.csdnimg.cn/d32f9361ecb94d7fb7af9d33d3a9e984.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBARkFBLg==,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center" alt="在这里插入图片描述"></p><h4 id="快属性和慢属性" tabindex="-1"><a class="header-anchor" href="#快属性和慢属性" aria-hidden="true">#</a> 快属性和慢属性</h4><p>​ 将不同的属性分别保存到 elements 属性和 properties 属性中，无疑简化了程序的复杂度，但是在查找元素时，却多了一步操作，比如执行 bar.B这个语句来查找 B 的属性值，那么在 V8 会先查找出 properties 属性所指向的对象 properties，然后再在 properties 对象中查找 B 属性，这种方式在查找过程中增加了一步操作，因此会影响到元素的查找效率。</p><p>​ 基于这个原因，V8 采取了一个权衡的策略以加快查找属性的效率，这个策略是将部分常规属性直接存储到对象本身，我们把这称为对象内属性 (in-object properties)。对象在内存中的展现形式你可以参看下图</p><p><img src="https://img-blog.csdnimg.cn/e40182d91a8f44c4997d3c48cb69ccba.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBARkFBLg==,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center" alt="在这里插入图片描述"></p><p>​ 采用对象内属性之后，常规属性就被保存到 bar 对象本身了，这样当再次使用bar.B来查找 B 的属性值时，V8 就可以直接从 bar 对象本身去获取该值就可以了，这种方式减少查找属性值的步骤，增加了查找效率。</p><p>​ 不过对象内属性的数量是固定的，默认是 10 个，如果添加的属性超出了对象分配的空间，则它们将被保存在常规属性存储中。虽然属性存储多了一层间接层，但可以自由地扩容。</p><p>​ 通常，我们将保存在线性数据结构中的属性称之为“快属性”，因为线性数据结构中只需要通过索引即可以访问到属性，虽然访问线性结构的速度快，但是如果从线性结构中添加或者删除大量的属性时，则执行效率会非常低，这主要因为会产生大量时间和内存开销。</p><p>​ 因此，如果一个对象的属性过多时，V8 就会采取另外一种存储策略，那就是“慢属性”策略，但慢属性的对象内部会有独立的非线性数据结构 (词典) 作为属性存储容器。所有的属性元信息不再是线性存储的，而是直接保存在属性字典中。</p><p><img src="https://img-blog.csdnimg.cn/eee3110249f34c238fa7d964b292ae69.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBARkFBLg==,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center" alt="在这里插入图片描述"></p><p>总结：</p><p>​ 本文我们的主要目标是介绍 V8 内部是如何存储对象的，因为 JavaScript 中的对象是由一组组属性和值组成的，所以最简单的方式是使用一个字典来保存属性和值，但是由于字典是非线性结构，所以如果使用字典，读取效率会大大降低。</p><p>​ 为了提升查找效率，V8 在对象中添加了两个隐藏属性，排序属性和常规属性，element 属性指向了 elements 对象，在 elements 对象中，会按照顺序存放排序属性。properties 属性则指向了 properties 对象，在 properties 对象中，会按照创建时的顺序保存常规属性。</p><p>​ 通过引入这两个属性，加速了 V8 查找属性的速度，为了更加进一步提升查找效率，V8 还实现了内置内属性的策略，当常规属性少于一定数量时，V8 就会将这些常规属性直接写进对象中，这样又节省了一个中间步骤。</p><p>​ 但是如果对象中的属性过多时，或者存在反复添加或者删除属性的操作，那么 V8 就会将线性的存储模式降级为非线性的字典存储模式，这样虽然降低了查找速度，但是却提升了修改对象的属性的速度。</p>',25),c=[o];function i(l,r){return n(),a("div",null,c)}const k=s(e,[["render",i],["__file","V8引擎-快属性和慢属性.html.vue"]]);export{k as default};
