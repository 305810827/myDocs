import{_ as e,e as n}from"./app.659fa32e.js";const i={},s=n(`<h3 id="javascript-\u4F5C\u7528\u57DF\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#javascript-\u4F5C\u7528\u57DF\u5206\u7C7B" aria-hidden="true">#</a> Javascript \u4F5C\u7528\u57DF\u5206\u7C7B</h3><p><strong>\u300C\u5168\u5C40\u4F5C\u7528\u57DF\u300D</strong></p><p>\u6BCF\u4E2A\u6267\u884C\u73AF\u5883\u53EA\u6709\u4E00\u4E2A\u5168\u5C40\u4F5C\u7528\u57DF\uFF0C\u6D4F\u89C8\u5668\u662F <code>window</code>\uFF0Cnode.js \u4E3A <code>global</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>window.x = 1;
global.x = 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u300C\u51FD\u6570\u4F5C\u7528\u57DF\u300D</strong></p><p>\u6BCF\u4E00\u4E2A\u51FD\u6570\u4F1A\u5355\u72EC\u521B\u5EFA\u51FD\u6570\u4F5C\u7528\u57DF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function fn() {
  let x = 1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u300C\u5757\u7EA7\u4F5C\u7528\u57DF\u300D</strong></p><p>ES6 \u4E2D\u589E\u52A0\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u5728 <code>{}</code> \u4E2D\u4EE5 <code>let\u3001const</code> \u58F0\u660E\u7684\u53D8\u91CF\u5B58\u5728\u5757\u7EA7\u4F5C\u7528\u57DF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  let x = 1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u300C\u4E2D\u95F4\u4F5C\u7528\u57DF\u300D</strong></p><p>ES6 \u4E2D\u589E\u52A0\u4E2D\u95F4\u4F5C\u7528\u57DF\uFF0C\u5728 **\u300C\u51FD\u6570\u300D<strong>\u4E14</strong>\u300C\u51FD\u6570\u5B58\u5728\u9ED8\u8BA4\u503C\u300D**\u65F6\uFF0C\u51FD\u6570\u7684\u9ED8\u8BA4\u503C\u5373\u4E3A\u4E2D\u95F4\u4F5C\u7528\u57DF</p><p>\u8BF7\u6CE8\u610F\u8FD9\u4E2A\u4F5C\u7528\u57DF\uFF0C\u6807\u51C6\u91CC\u5E76\u4E0D\u542B\u8BE5\u4F5C\u7528\u57DF\u3002\u5982\u679C\u60F3\u8BE6\u7EC6\u5730\u4E86\u89E3\u8BE5\u4F5C\u7528\u57DF\uFF0C\u8BF7\u70B9\u51FB[ES6: Default values of parameters](http://dmitrysoshnikov.com/ecmascript/es6-notes-default-values-of-parameters/#conditional-intermediate-scope-for-parameters &#39;ES6: Default values of parameters&#39; &quot;ES6: Default values of parameters&quot;)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function fn(x = 1) {
  console.log(x); // 1\uFF0C\u5982\u679C x \u65E0\u9ED8\u8BA4\u503C\uFF0C\u5219\u662F undefined
  var x = 2; // \u4E0D\u8981\u7528let\u3001const\u53BB\u8BD5\u54C8\uFF0C\u7531\u4E8ETDZ\u5173\u7CFB\uFF0C\u4F1A\u62A5\u9519
  console.log(x); // 2
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F5C\u7528\u57DF\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF\u5D4C\u5957" aria-hidden="true">#</a> \u4F5C\u7528\u57DF\u5D4C\u5957</h3><p>\u5F53\u5F00\u59CB\u5BFB\u627E\u53D8\u91CF\u65F6\uFF0C\u4ECE\u81EA\u8EAB\u4F5C\u7528\u57DF\u5F00\u59CB\uFF0C\u9010\u7EA7\u5411\u4E0A\u67E5\u627E\uFF0C\u76F4\u5230\u5168\u5C40\u4F5C\u7528\u57DF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>window.x = 1;

function p() {
  function c() {
    x = 3;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F5C\u7528\u57DF\u63D0\u5347" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF\u63D0\u5347" aria-hidden="true">#</a> \u4F5C\u7528\u57DF\u63D0\u5347</h3><p>\u4E0A\u9762\u63D0\u5230\u4E86\u5728 Javascript \u6267\u884C\u524D\uFF0C\u5B58\u5728\u7F16\u8BD1\u8FC7\u7A0B\uFF08\u9884\u89E3\u6790\uFF09\uFF0C\u5728\u6B64\u8FC7\u7A0B\u4E2D\u4F1A\u89E3\u6790**\u300C\u51FD\u6570\u58F0\u660E\u300D<strong>\u3001</strong>\u300C\u53D8\u91CF\u58F0\u660E\u300D**\u3002</p><p>\u5BF9\u4E8E\u53D8\u91CF\u58F0\u660E\u6765\u8BF4\uFF0C\u662F\u5C06 <em>\u5B9A\u4E49\u58F0\u660E</em> \u548C <em>\u8D4B\u503C\u58F0\u660E</em> \u5206\u5F00\u7684</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = 1;

// \u53EF\u4EE5\u7FFB\u9875\u4E3A
var a; // \u5B9A\u4E49\u58F0\u660E
a = 1; // \u8D4B\u503C\u58F0\u660E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u300C\u4F18\u5148\u987A\u5E8F\u300D</strong>\uFF1A\u51FD\u6570\u58F0\u660E\u63D0\u5347**\u300C\u4F18\u5148\u4E8E\u300D**\u53D8\u91CF\u58F0\u660E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>console.log(fn); // Function
function fn(params) {}
var fn = 2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tdz" tabindex="-1"><a class="header-anchor" href="#tdz" aria-hidden="true">#</a> TDZ</h3><p><strong>\u300CTDZ\uFF08Time Dead Zone\uFF09\u300D</strong> \u5728 ES6 \u4E2D\uFF0C\u5BF9 <code>let\u3001const</code> \u58F0\u660E\u65F6\uFF0CTDZ \u4F7F\u65E0\u6CD5\u5728 <code>let\u3001const</code> \u8D4B\u503C\u8BED\u53E5\u524D\u8BBF\u95EE\u8BE5\u53D8\u91CF\u3002</p><h3 id="\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a> \u95ED\u5305</h3><p><strong>\u300C\u95ED\u5305\u300D</strong> \u51FD\u6570\u53EF\u4EE5\u8BB0\u4F4F\u3001\u5E76\u8BBF\u95EE\u539F\u4F5C\u7528\u57DF\uFF0C\u5373\u4F7F\u4E0D\u5728\u539F\u4F5C\u7528\u57DF\u8FD0\u884C\uFF08\u5728\u975E\u539F\u4F5C\u7528\u57DF\u7684\u5730\u65B9\uFF0C\u4F46\u53EF\u4EE5\u8BBF\u95EE\u539F\u4F5C\u7528\u57DF\u53D8\u91CF\u7684\u529F\u80FD\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function p() {
  const a = 1;
  return function c() {
    console.log(a);
  };
}

const c = p();
c(); // \u6B64\u65F6c\u5904\u4E8E\u5168\u5C40\u4F5C\u7528\u57DF\uFF0C\u4F46\u4EFB\u7136\u53EF\u4EE5\u8BBF\u95EE\u53D8\u91CFa

// [[Scopes]]; \u53EF\u4EE5\u6253\u5370\u4E0B p.prototype\uFF0C\u91CC\u9762\u5B58\u5728 [[ Scopes ]] \u5C5E\u6027\uFF0C\u53EF\u4EE5\u67E5\u770B\u4F5C\u7528\u57DF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="iife-\u7ACB\u5373\u8C03\u7528\u51FD\u6570\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#iife-\u7ACB\u5373\u8C03\u7528\u51FD\u6570\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> IIFE\uFF08\u7ACB\u5373\u8C03\u7528\u51FD\u6570\u8868\u8FBE\u5F0F\uFF09</h4><p>IIFE (<strong>Immediately Invoked Function Expression</strong>)\uFF0C\u5BF9\u4E8E\u81EA\u6267\u884C\u51FD\u6570\uFF0C\u6309\u7167\u95ED\u5305\u7684\u5B9A\u4E49\uFF0C\u5176\u5B9E IIFE \u4E25\u683C\u6765\u8BF4\u4E0D\u5C5E\u4E8E\u95ED\u5305\uFF0C<em>\u56E0\u4E3A\u5728 IIFE \u51FD\u6570\u4E2D\uFF0C\u5E76</em>*\u300C\u4E0D\u662F\u5728\u5F53\u524D\u4F5C\u7528\u57DF\u4EE5\u5916\u7684\u5730\u65B9\u6267\u884C\u7684\u300D***</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(function () {
  let x = 1;
})(); // \u5B83\u5C31\u662F\u5728\u5F53\u524D\u4F5C\u7528\u57DF\u6267\u884C\u7684\uFF0C\u800C\u4E0D\u662F\u5728\u5916\u90E8\u4F5C\u7528\u57DF\u6267\u884C\u7684
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>https://juejin.cn/post/6844904206109769736</p>`,32);function d(a,l){return s}var t=e(i,[["render",d],["__file","js\u4F5C\u7528\u57DF.html.vue"]]);export{t as default};
