import{_ as e,o as n,c as i,a}from"./app-53705635.js";const s={},d=a(`<h3 id="javascript-作用域分类" tabindex="-1"><a class="header-anchor" href="#javascript-作用域分类" aria-hidden="true">#</a> Javascript 作用域分类</h3><p><strong>「全局作用域」</strong></p><p>每个执行环境只有一个全局作用域，浏览器是 <code>window</code>，node.js 为 <code>global</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.x = 1;
global.x = 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>「函数作用域」</strong></p><p>每一个函数会单独创建函数作用域</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function fn() {
  let x = 1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>「块级作用域」</strong></p><p>ES6 中增加块级作用域，在 <code>{}</code> 中以 <code>let、const</code> 声明的变量存在块级作用域</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  let x = 1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>「中间作用域」</strong></p><p>ES6 中增加中间作用域，在 **「函数」<strong>且</strong>「函数存在默认值」**时，函数的默认值即为中间作用域</p><p>请注意这个作用域，标准里并不含该作用域。如果想详细地了解该作用域，请点击[ES6: Default values of parameters](http://dmitrysoshnikov.com/ecmascript/es6-notes-default-values-of-parameters/#conditional-intermediate-scope-for-parameters &#39;ES6: Default values of parameters&#39; &quot;ES6: Default values of parameters&quot;)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function fn(x = 1) {
  console.log(x); // 1，如果 x 无默认值，则是 undefined
  var x = 2; // 不要用let、const去试哈，由于TDZ关系，会报错
  console.log(x); // 2
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="作用域嵌套" tabindex="-1"><a class="header-anchor" href="#作用域嵌套" aria-hidden="true">#</a> 作用域嵌套</h3><p>当开始寻找变量时，从自身作用域开始，逐级向上查找，直到全局作用域</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.x = 1;

function p() {
  function c() {
    x = 3;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="作用域提升" tabindex="-1"><a class="header-anchor" href="#作用域提升" aria-hidden="true">#</a> 作用域提升</h3><p>上面提到了在 Javascript 执行前，存在编译过程（预解析），在此过程中会解析**「函数声明」<strong>、</strong>「变量声明」**。</p><p>对于变量声明来说，是将 <em>定义声明</em> 和 <em>赋值声明</em> 分开的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = 1;

// 可以翻页为
var a; // 定义声明
a = 1; // 赋值声明
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>「优先顺序」</strong>：函数声明提升**「优先于」**变量声明</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(fn); // Function
function fn(params) {}
var fn = 2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tdz" tabindex="-1"><a class="header-anchor" href="#tdz" aria-hidden="true">#</a> TDZ</h3><p><strong>「TDZ（Time Dead Zone）」</strong> 在 ES6 中，对 <code>let、const</code> 声明时，TDZ 使无法在 <code>let、const</code> 赋值语句前访问该变量。</p><h3 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h3><p><strong>「闭包」</strong> 函数可以记住、并访问原作用域，即使不在原作用域运行（在非原作用域的地方，但可以访问原作用域变量的功能）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function p() {
  const a = 1;
  return function c() {
    console.log(a);
  };
}

const c = p();
c(); // 此时c处于全局作用域，但任然可以访问变量a

// [[Scopes]]; 可以打印下 p.prototype，里面存在 [[ Scopes ]] 属性，可以查看作用域
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="iife-立即调用函数表达式" tabindex="-1"><a class="header-anchor" href="#iife-立即调用函数表达式" aria-hidden="true">#</a> IIFE（立即调用函数表达式）</h4><p>IIFE (<strong>Immediately Invoked Function Expression</strong>)，对于自执行函数，按照闭包的定义，其实 IIFE 严格来说不属于闭包，<em>因为在 IIFE 函数中，并</em>*「不是在当前作用域以外的地方执行的」***</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(function () {
  let x = 1;
})(); // 它就是在当前作用域执行的，而不是在外部作用域执行的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>https://juejin.cn/post/6844904206109769736</p>`,32),l=[d];function t(r,c){return n(),i("div",null,l)}const v=e(s,[["render",t],["__file","js作用域.html.vue"]]);export{v as default};
