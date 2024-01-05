import{_ as n,o as s,c as a,a as t}from"./app-53705635.js";const p={},e=t(`<h3 id="_1、可选链操作符-optional-chaining" tabindex="-1"><a class="header-anchor" href="#_1、可选链操作符-optional-chaining" aria-hidden="true">#</a> 1、可选链操作符 -- Optional Chaining (?.)</h3><p>减少访问深层对象时判断属性存不存在的问题。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">e</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 必须检查属性是否存在于每个级别，以避免出现Cannot read property ‘’of undefiend 这种错误。</span>
<span class="token comment">// 以前  </span>
<span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>b <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>b<span class="token punctuation">.</span>c <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>b<span class="token punctuation">.</span>c<span class="token punctuation">.</span>d<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span>c<span class="token punctuation">.</span>d<span class="token punctuation">.</span>e<span class="token punctuation">)</span>
<span class="token comment">// 现在</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token operator">?.</span>b<span class="token operator">?.</span>c<span class="token operator">?.</span>d<span class="token operator">?.</span>e<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可选链中的 ? 表示如果问号左边表达式有值, 就会继续查询问号后面的字段。根据上面可以看出，用可选链可以大量简化类似繁琐的前置校验操作，而且更安全。注意：?. 不能用来赋值.</p><h3 id="_2、空值合并运算符-nullish-coalescing" tabindex="-1"><a class="header-anchor" href="#_2、空值合并运算符-nullish-coalescing" aria-hidden="true">#</a> 2、空值合并运算符 -- Nullish Coalescing (??)</h3><p>在取一个对象里面的属性，如果这个属性没有值，我们会这样给他一个默认值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">d</span><span class="token operator">:</span><span class="token number">0</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>b<span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token comment">//对象里面没有这个属性的时候，他一个默认值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>c <span class="token operator">||</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>d <span class="token operator">||</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>

<span class="token comment">//ES2020 的 ?? 空值合并操作符</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>d<span class="token operator">??</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>??是一个逻辑运算符。当左侧操作数为 null 或 undefined 时，其返回右侧的操作数。否则返回左侧的操作数。</p><p>?. 和 ?? 搭配使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token operator">?.</span>b<span class="token operator">?.</span>d <span class="token operator">??</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、bigint" tabindex="-1"><a class="header-anchor" href="#_3、bigint" aria-hidden="true">#</a> 3、BigInt</h3><p>关于js的浮点数的一个精度问题，典型问题： 0.1+0.2！= 0.3</p><p><img src="https://img-blog.csdnimg.cn/20200908095159426.png" alt="img"></p><p>JavaScript 中 Number 类型只能安全的表示-(2^53 -1)至 2^53 -1 范的值，即 Number.MIN_SAFE_INTEGER 至 Number.MAX_SAFE_INTEGER，超出这个范围的整数计算或者表示会丢失精度。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//number最大值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span><span class="token punctuation">)</span><span class="token comment">//9007199254740991</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ES2020 提供一种新的数据类型：BigInt。使用 BigInt有两种方式：</strong></p><p><strong>1、在整数字面量后面加n。</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> bigIntNum1<span class="token operator">=</span><span class="token number">9007199254740999n</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> bigIntNum1<span class="token punctuation">)</span><span class="token comment">//bigint</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2、使用 BigInt 函数。</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> bigIntNum2<span class="token operator">=</span><span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">90071992547409999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> bigIntNum2<span class="token punctuation">)</span><span class="token comment">//bigint</span>

<span class="token keyword">let</span> BigNum<span class="token operator">=</span>bigIntNum1<span class="token operator">+</span>bigIntNum2<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>BigNum<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//99079191802150999</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意:</p><p>1、BigInt 是一种新的数据原始（primitive）类型。注意标准数字与BigInt 数字不能混合使用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token number">9007199254740993n</span><span class="token punctuation">;</span> <span class="token comment">// -&gt; &#39;bigint&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、尽可能避免通过调用函数 BigInt 方式来实例化超大整型。因为参数的字面量实际也是 Number 类型的一次实例化，超出安全范围的数字，可能会引起精度丢失。</p><h3 id="_4、动态导入-dynamic-import" tabindex="-1"><a class="header-anchor" href="#_4、动态导入-dynamic-import" aria-hidden="true">#</a> 4、动态导入 -- dynamic import</h3><p>在项目中，可以配合async / await在需要时import动态导入依赖项，可以在初始化的时候不全部加载逻辑资源，只进行按需加载。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// demo.js 导出模块:</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">sum</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span>num2</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>num1<span class="token operator">+</span>num2<span class="token punctuation">;</span>

<span class="token comment">// main.js</span>
<span class="token keyword">let</span> <span class="token function-variable function">fun</span><span class="token operator">=</span><span class="token keyword">async</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span>num2</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> model<span class="token operator">=</span><span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./demo.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>model<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span>num2<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;两个数的和&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token comment">//17 &quot;两个数的和&quot;</span>

或者
<span class="token comment">// main.js</span>
<span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./demo.js&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">model</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>model<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span>num2<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;两个数的和&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、globalthis" tabindex="-1"><a class="header-anchor" href="#_5、globalthis" aria-hidden="true">#</a> 5、globalThis</h3><p>JavaScript 在不同的环境获取全局对象有不同的方式，NodeJS 中通过 global, Web 中通过 window, self 等，有些甚至通过 this 获取，但通过 this 是及其危险的，this 在 JavaScript 中异常复杂，它严重依赖当前的执行上下文，这些无疑增加了获取全局对象的复杂性。</p><ul><li><p>全局变量 window：是一个经典的获取全局对象的方法。但是它在 Node.js 和 Web Workers 中并不能使用</p></li><li><p>全局变量 self：通常只在 Web Workers 和浏览器中生效。但是它不支持 Node.js。</p></li><li><p>全局变量 global：只在 Node.js 中生效</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// worker.js</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>globalThis <span class="token operator">===</span> self<span class="token punctuation">)</span> <span class="token comment">//true</span>
<span class="token comment">// node.js</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>globalThis <span class="token operator">===</span> global<span class="token punctuation">)</span> <span class="token comment">//true</span>
<span class="token comment">// 浏览器</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>globalThis <span class="token operator">===</span> window<span class="token punctuation">)</span> <span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、promise-allsettled" tabindex="-1"><a class="header-anchor" href="#_6、promise-allsettled" aria-hidden="true">#</a> 6、Promise.allSettled</h3><p>都知道 Promise.all 具有并发执行异步任务的能力。但它的最大问题就是如果其中某个任务出现异常(reject)，所有任务都会挂掉，Promise 直接进入 reject 状态。</p><p>使用Promise.allSettled，它会创建一个新的promise，在所有promise完成后返回一个包含每个promise结果的数组。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token comment">//异步操作...</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span><span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">&quot;请求成功&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> b<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token comment">//异步操作...</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span><span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">&quot;请求成功&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> c<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token comment">//异步操作...</span>
  <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span><span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">&quot;服务器出现异常&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 使用进行并发请求</span>
<span class="token comment">// 1.Promise.all</span>
Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 只有 上面所有的请求都是 resolve (成功) 的时候才会进入此回调中</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span><span class="token string">&quot;res&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 上面的请求中，只要有一个是reject (失败) 就会进入此回调</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 2.Promise.allSettled</span>
Promise<span class="token punctuation">.</span><span class="token function">allSettled</span><span class="token punctuation">(</span><span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 返回的一个对象数组 ，每一个对象 {status: &quot;fulfilled | rejected&quot; value: { code: 500,msg:&quot;请求成功&quot;} }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、string-prototype-matchall" tabindex="-1"><a class="header-anchor" href="#_7、string-prototype-matchall" aria-hidden="true">#</a> 7、String.prototype.matchAll</h3><p>返回一个包含了所有匹配结果以及其捕获组的迭代器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> tweet <span class="token operator">=</span> <span class="token string">&quot;#JavaScript is full of #surprises. Both good and bad ones #TIL&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span>h <span class="token keyword">of</span> tweet<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(#\\\\w+)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// [&quot;#JavaScript&quot;, &quot;#JavaScript&quot;, index: 0, input: &quot;#JavaScript is full of #surprises. Both good and bad ones #TIL&quot;, groups: undefined]</span>
<span class="token comment">// [&quot;#surprises&quot;, &quot;#surprises&quot;, index: 23, input: &quot;#JavaScript is full of #surprises. Both good and bad ones #TIL&quot;, groups: undefined]</span>
<span class="token comment">// [&quot;#TIL&quot;, &quot;#TIL&quot;, index: 58, input: &quot;#JavaScript is full of #surprises. Both good and bad ones #TIL&quot;, groups: undefined]</span>

<span class="token comment">// 或者使用解构运算符</span>
<span class="token keyword">const</span> tags <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>tweet<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(#\\\\w+)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> tags<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">match</span> <span class="token operator">=&gt;</span> match<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
result  <span class="token comment">// [&quot;#JavaScript&quot;, &quot;#surprises&quot;, &quot;#TIL&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8、for-in-的遍历顺序" tabindex="-1"><a class="header-anchor" href="#_8、for-in-的遍历顺序" aria-hidden="true">#</a> 8、for-in 的遍历顺序</h3><p>​ 该提议与在循环中迭代元素的顺序和语义有关。在提出这个之前，大多数JavaScript引擎已经应用了常识，所有主流浏览器都按照定义它们的顺序遍历对象的属性。但是，有些细微差别。这些主要涉及更高级的功能，例如代理。for..in循环语义从一开始就没有包含在JavaScript规范中，但是该提议可确保每个人在for..in工作方式上都具有一致的参考点。</p><h3 id="_9、import-meta" tabindex="-1"><a class="header-anchor" href="#_9、import-meta" aria-hidden="true">#</a> 9、i<wbr>mport.meta</h3><p>如果要从浏览器中运行的JavaScript模块导入相对路径，则可以让i<wbr>mport.meta这样做：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Will import cool-image relative to where this module is running.
const response = await fetch(new URL(&quot;../cool-image.jpg&quot;, i<wbr>mport.meta.url));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此功能对开发第三方库的作者那可是非常有用了，因为他们不知道他们的代码将在什么地方以什么方式运行的。</p>`,44),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","es6后好用的语法.html.vue"]]);export{r as default};
