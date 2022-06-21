import{_ as e,e as d}from"./app.659fa32e.js";const i={},n=d(`<h1 id="array-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#array-\u5BF9\u8C61" aria-hidden="true">#</a> Array \u5BF9\u8C61</h1><p><code>Array</code>\u662F JavaScript \u7684\u539F\u751F\u5BF9\u8C61\uFF0C\u540C\u65F6\u4E5F\u662F\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u53EF\u4EE5\u7528\u5B83\u751F\u6210\u65B0\u7684\u6570\u7EC4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr = new Array(2);
arr.length // 2
arr // [ empty x 2 ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>Array()</code>\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570<code>2</code>\uFF0C\u8868\u793A\u751F\u6210\u4E00\u4E2A\u4E24\u4E2A\u6210\u5458\u7684\u6570\u7EC4\uFF0C\u6BCF\u4E2A\u4F4D\u7F6E\u90FD\u662F\u7A7A\u503C\u3002</p><p>\u5982\u679C\u6CA1\u6709\u4F7F\u7528<code>new</code>\u5173\u952E\u5B57\uFF0C\u8FD0\u884C\u7ED3\u679C\u4E5F\u662F\u4E00\u6837\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr = Array(2);
// \u7B49\u540C\u4E8E
var arr = new Array(2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8003\u8651\u5230\u8BED\u4E49\u6027\uFF0C\u4EE5\u53CA\u4E0E\u5176\u4ED6\u6784\u9020\u51FD\u6570\u7528\u6CD5\u4FDD\u6301\u4E00\u81F4\uFF0C\u5EFA\u8BAE\u603B\u662F\u52A0\u4E0A<code>new</code>\u3002</p><p><code>Array()</code>\u6784\u9020\u51FD\u6570\u6709\u4E00\u4E2A\u5F88\u5927\u7684\u7F3A\u9677\uFF0C\u4E0D\u540C\u7684\u53C2\u6570\u4E2A\u6570\u4F1A\u5BFC\u81F4\u4E0D\u4E00\u81F4\u7684\u884C\u4E3A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u65E0\u53C2\u6570\u65F6\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u6570\u7EC4
new Array() // []

// \u5355\u4E2A\u6B63\u6574\u6570\u53C2\u6570\uFF0C\u8868\u793A\u8FD4\u56DE\u7684\u65B0\u6570\u7EC4\u7684\u957F\u5EA6
new Array(1) // [ empty ]
new Array(2) // [ empty x 2 ]

// \u975E\u6B63\u6574\u6570\u7684\u6570\u503C\u4F5C\u4E3A\u53C2\u6570\uFF0C\u4F1A\u62A5\u9519
new Array(3.2) // RangeError: Invalid array length
new Array(-3) // RangeError: Invalid array length

// \u5355\u4E2A\u975E\u6570\u503C\uFF08\u6BD4\u5982\u5B57\u7B26\u4E32\u3001\u5E03\u5C14\u503C\u3001\u5BF9\u8C61\u7B49\uFF09\u4F5C\u4E3A\u53C2\u6570\uFF0C
// \u5219\u8BE5\u53C2\u6570\u662F\u8FD4\u56DE\u7684\u65B0\u6570\u7EC4\u7684\u6210\u5458
new Array(&#39;abc&#39;) // [&#39;abc&#39;]
new Array([1]) // [Array[1]]

// \u591A\u53C2\u6570\u65F6\uFF0C\u6240\u6709\u53C2\u6570\u90FD\u662F\u8FD4\u56DE\u7684\u65B0\u6570\u7EC4\u7684\u6210\u5458
new Array(1, 2) // [1, 2]
new Array(&#39;a&#39;, &#39;b&#39;, &#39;c&#39;) // [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C<code>Array()</code>\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\uFF0C\u884C\u4E3A\u5F88\u4E0D\u4E00\u81F4\u3002\u56E0\u6B64\uFF0C\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u5B83\u751F\u6210\u65B0\u6570\u7EC4\uFF0C\u76F4\u63A5\u4F7F\u7528\u6570\u7EC4\u5B57\u9762\u91CF\u662F\u66F4\u597D\u7684\u505A\u6CD5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// bad
var arr = new Array(1, 2);

// good
var arr = [1, 2];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C\u5982\u679C\u53C2\u6570\u662F\u4E00\u4E2A\u6B63\u6574\u6570\uFF0C\u8FD4\u56DE\u6570\u7EC4\u7684\u6210\u5458\u90FD\u662F\u7A7A\u4F4D\u3002\u867D\u7136\u8BFB\u53D6\u7684\u65F6\u5019\u8FD4\u56DE<code>undefined</code>\uFF0C\u4F46\u5B9E\u9645\u4E0A\u8BE5\u4F4D\u7F6E\u6CA1\u6709\u4EFB\u4F55\u503C\u3002\u867D\u7136\u8FD9\u65F6\u53EF\u4EE5\u8BFB\u53D6\u5230<code>length</code>\u5C5E\u6027\uFF0C\u4F46\u662F\u53D6\u4E0D\u5230\u952E\u540D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = new Array(3);
var b = [undefined, undefined, undefined];

a.length // 3
b.length // 3

a[0] // undefined
b[0] // undefined

0 in a // false
0 in b // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>a</code>\u662F<code>Array()</code>\u751F\u6210\u7684\u4E00\u4E2A\u957F\u5EA6\u4E3A3\u7684\u7A7A\u6570\u7EC4\uFF0C<code>b</code>\u662F\u4E00\u4E2A\u4E09\u4E2A\u6210\u5458\u90FD\u662F<code>undefined</code>\u7684\u6570\u7EC4\uFF0C\u8FD9\u4E24\u4E2A\u6570\u7EC4\u662F\u4E0D\u4E00\u6837\u7684\u3002\u8BFB\u53D6\u952E\u503C\u7684\u65F6\u5019\uFF0C<code>a</code>\u548C<code>b</code>\u90FD\u8FD4\u56DE<code>undefined</code>\uFF0C\u4F46\u662F<code>a</code>\u7684\u952E\u540D\uFF08\u6210\u5458\u7684\u5E8F\u53F7\uFF09\u90FD\u662F\u7A7A\u7684\uFF0C<code>b</code>\u7684\u952E\u540D\u662F\u6709\u503C\u7684\u3002</p><h2 id="\u9759\u6001\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u65B9\u6CD5" aria-hidden="true">#</a> \u9759\u6001\u65B9\u6CD5</h2><h3 id="array-isarray" tabindex="-1"><a class="header-anchor" href="#array-isarray" aria-hidden="true">#</a> Array.isArray()</h3><p><code>Array.isArray</code>\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u53C2\u6570\u662F\u5426\u4E3A\u6570\u7EC4\u3002\u5B83\u53EF\u4EE5\u5F25\u8865<code>typeof</code>\u8FD0\u7B97\u7B26\u7684\u4E0D\u8DB3\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr = [1, 2, 3];

typeof arr // &quot;object&quot;
Array.isArray(arr) // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>typeof</code>\u8FD0\u7B97\u7B26\u53EA\u80FD\u663E\u793A\u6570\u7EC4\u7684\u7C7B\u578B\u662F<code>Object</code>\uFF0C\u800C<code>Array.isArray</code>\u65B9\u6CD5\u53EF\u4EE5\u8BC6\u522B\u6570\u7EC4\u3002</p><h2 id="\u5B9E\u4F8B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u65B9\u6CD5" aria-hidden="true">#</a> \u5B9E\u4F8B\u65B9\u6CD5</h2><h3 id="valueof-tostring" tabindex="-1"><a class="header-anchor" href="#valueof-tostring" aria-hidden="true">#</a> valueOf()\uFF0CtoString()</h3><p><code>valueOf</code>\u65B9\u6CD5\u662F\u4E00\u4E2A\u6240\u6709\u5BF9\u8C61\u90FD\u62E5\u6709\u7684\u65B9\u6CD5\uFF0C\u8868\u793A\u5BF9\u8BE5\u5BF9\u8C61\u6C42\u503C\u3002\u4E0D\u540C\u5BF9\u8C61\u7684<code>valueOf</code>\u65B9\u6CD5\u4E0D\u5C3D\u4E00\u81F4\uFF0C\u6570\u7EC4\u7684<code>valueOf</code>\u65B9\u6CD5\u8FD4\u56DE\u6570\u7EC4\u672C\u8EAB\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr = [1, 2, 3];
arr.valueOf() // [1, 2, 3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>toString</code>\u65B9\u6CD5\u4E5F\u662F\u5BF9\u8C61\u7684\u901A\u7528\u65B9\u6CD5\uFF0C\u6570\u7EC4\u7684<code>toString</code>\u65B9\u6CD5\u8FD4\u56DE\u6570\u7EC4\u7684\u5B57\u7B26\u4E32\u5F62\u5F0F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr = [1, 2, 3];
arr.toString() // &quot;1,2,3&quot;

var arr = [1, 2, 3, [4, 5, 6]];
arr.toString() // &quot;1,2,3,4,5,6&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="push-pop" tabindex="-1"><a class="header-anchor" href="#push-pop" aria-hidden="true">#</a> push()\uFF0Cpop()</h3><p><code>push</code>\u65B9\u6CD5\u7528\u4E8E\u5728\u6570\u7EC4\u7684\u672B\u7AEF\u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u5143\u7D20\uFF0C\u5E76\u8FD4\u56DE\u6DFB\u52A0\u65B0\u5143\u7D20\u540E\u7684\u6570\u7EC4\u957F\u5EA6\u3002\u6CE8\u610F\uFF0C\u8BE5\u65B9\u6CD5\u4F1A\u6539\u53D8\u539F\u6570\u7EC4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr = [];

arr.push(1) // 1
arr.push(&#39;a&#39;) // 2
arr.push(true, {}) // 4
arr // [1, &#39;a&#39;, true, {}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4F7F\u7528<code>push</code>\u65B9\u6CD5\uFF0C\u5F80\u6570\u7EC4\u4E2D\u6DFB\u52A0\u4E86\u56DB\u4E2A\u6210\u5458\u3002</p><p><code>pop</code>\u65B9\u6CD5\u7528\u4E8E\u5220\u9664\u6570\u7EC4\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C\u5E76\u8FD4\u56DE\u8BE5\u5143\u7D20\u3002\u6CE8\u610F\uFF0C\u8BE5\u65B9\u6CD5\u4F1A\u6539\u53D8\u539F\u6570\u7EC4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];

arr.pop() // &#39;c&#39;
arr // [&#39;a&#39;, &#39;b&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u7A7A\u6570\u7EC4\u4F7F\u7528<code>pop</code>\u65B9\u6CD5\uFF0C\u4E0D\u4F1A\u62A5\u9519\uFF0C\u800C\u662F\u8FD4\u56DE<code>undefined</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[].pop() // undefined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>push</code>\u548C<code>pop</code>\u7ED3\u5408\u4F7F\u7528\uFF0C\u5C31\u6784\u6210\u4E86\u201C\u540E\u8FDB\u5148\u51FA\u201D\u7684\u6808\u7ED3\u6784\uFF08stack\uFF09\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr = [];
arr.push(1, 2);
arr.push(3);
arr.pop();
arr // [1, 2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>3</code>\u662F\u6700\u540E\u8FDB\u5165\u6570\u7EC4\u7684\uFF0C\u4F46\u662F\u6700\u65E9\u79BB\u5F00\u6570\u7EC4\u3002</p><h3 id="shift-unshift" tabindex="-1"><a class="header-anchor" href="#shift-unshift" aria-hidden="true">#</a> shift()\uFF0Cunshift()</h3><p><code>shift()</code>\u65B9\u6CD5\u7528\u4E8E\u5220\u9664\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF0C\u5E76\u8FD4\u56DE\u8BE5\u5143\u7D20\u3002\u6CE8\u610F\uFF0C\u8BE5\u65B9\u6CD5\u4F1A\u6539\u53D8\u539F\u6570\u7EC4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];

a.shift() // &#39;a&#39;
a // [&#39;b&#39;, &#39;c&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u4F7F\u7528<code>shift()</code>\u65B9\u6CD5\u4EE5\u540E\uFF0C\u539F\u6570\u7EC4\u5C31\u53D8\u4E86\u3002</p><p><code>shift()</code>\u65B9\u6CD5\u53EF\u4EE5\u904D\u5386\u5E76\u6E05\u7A7A\u4E00\u4E2A\u6570\u7EC4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var list = [1, 2, 3, 4];
var item;

while (item = list.shift()) {
  console.log(item);
}

list // []
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u901A\u8FC7<code>list.shift()</code>\u65B9\u6CD5\u6BCF\u6B21\u53D6\u51FA\u4E00\u4E2A\u5143\u7D20\uFF0C\u4ECE\u800C\u904D\u5386\u6570\u7EC4\u3002\u5B83\u7684\u524D\u63D0\u662F\u6570\u7EC4\u5143\u7D20\u4E0D\u80FD\u662F<code>0</code>\u6216\u4EFB\u4F55\u5E03\u5C14\u503C\u7B49\u4E8E<code>false</code>\u7684\u5143\u7D20\uFF0C\u56E0\u6B64\u8FD9\u6837\u7684\u904D\u5386\u4E0D\u662F\u5F88\u53EF\u9760\u3002</p><p><code>push()</code>\u548C<code>shift()</code>\u7ED3\u5408\u4F7F\u7528\uFF0C\u5C31\u6784\u6210\u4E86\u201C\u5148\u8FDB\u5148\u51FA\u201D\u7684\u961F\u5217\u7ED3\u6784\uFF08queue\uFF09\u3002</p><p><code>unshift()</code>\u65B9\u6CD5\u7528\u4E8E\u5728\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u4F4D\u7F6E\u6DFB\u52A0\u5143\u7D20\uFF0C\u5E76\u8FD4\u56DE\u6DFB\u52A0\u65B0\u5143\u7D20\u540E\u7684\u6570\u7EC4\u957F\u5EA6\u3002\u6CE8\u610F\uFF0C\u8BE5\u65B9\u6CD5\u4F1A\u6539\u53D8\u539F\u6570\u7EC4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];

a.unshift(&#39;x&#39;); // 4
a // [&#39;x&#39;, &#39;a&#39;, &#39;b&#39;, &#39;c&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>unshift()</code>\u65B9\u6CD5\u53EF\u4EE5\u63A5\u53D7\u591A\u4E2A\u53C2\u6570\uFF0C\u8FD9\u4E9B\u53C2\u6570\u90FD\u4F1A\u6DFB\u52A0\u5230\u76EE\u6807\u6570\u7EC4\u5934\u90E8\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr = [ &#39;c&#39;, &#39;d&#39; ];
arr.unshift(&#39;a&#39;, &#39;b&#39;) // 4
arr // [ &#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39; ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> join()</h3><p><code>join()</code>\u65B9\u6CD5\u4EE5\u6307\u5B9A\u53C2\u6570\u4F5C\u4E3A\u5206\u9694\u7B26\uFF0C\u5C06\u6240\u6709\u6570\u7EC4\u6210\u5458\u8FDE\u63A5\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32\u8FD4\u56DE\u3002\u5982\u679C\u4E0D\u63D0\u4F9B\u53C2\u6570\uFF0C\u9ED8\u8BA4\u7528\u9017\u53F7\u5206\u9694\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = [1, 2, 3, 4];

a.join(&#39; &#39;) // &#39;1 2 3 4&#39;
a.join(&#39; | &#39;) // &quot;1 | 2 | 3 | 4&quot;
a.join() // &quot;1,2,3,4&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6570\u7EC4\u6210\u5458\u662F<code>undefined</code>\u6216<code>null</code>\u6216\u7A7A\u4F4D\uFF0C\u4F1A\u88AB\u8F6C\u6210\u7A7A\u5B57\u7B26\u4E32\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[undefined, null].join(&#39;#&#39;)
// &#39;#&#39;

[&#39;a&#39;,, &#39;b&#39;].join(&#39;-&#39;)
// &#39;a--b&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7<code>call</code>\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4E5F\u53EF\u4EE5\u7528\u4E8E\u5B57\u7B26\u4E32\u6216\u7C7B\u4F3C\u6570\u7EC4\u7684\u5BF9\u8C61\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Array.prototype.join.call(&#39;hello&#39;, &#39;-&#39;)
// &quot;h-e-l-l-o&quot;

var obj = { 0: &#39;a&#39;, 1: &#39;b&#39;, length: 2 };
Array.prototype.join.call(obj, &#39;-&#39;)
// &#39;a-b&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="concat" tabindex="-1"><a class="header-anchor" href="#concat" aria-hidden="true">#</a> concat()</h3><p><code>concat</code>\u65B9\u6CD5\u7528\u4E8E\u591A\u4E2A\u6570\u7EC4\u7684\u5408\u5E76\u3002\u5B83\u5C06\u65B0\u6570\u7EC4\u7684\u6210\u5458\uFF0C\u6DFB\u52A0\u5230\u539F\u6570\u7EC4\u6210\u5458\u7684\u540E\u90E8\uFF0C\u7136\u540E\u8FD4\u56DE\u4E00\u4E2A\u65B0\u6570\u7EC4\uFF0C\u539F\u6570\u7EC4\u4E0D\u53D8\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[&#39;hello&#39;].concat([&#39;world&#39;])
// [&quot;hello&quot;, &quot;world&quot;]

[&#39;hello&#39;].concat([&#39;world&#39;], [&#39;!&#39;])
// [&quot;hello&quot;, &quot;world&quot;, &quot;!&quot;]

[].concat({a: 1}, {b: 2})
// [{ a: 1 }, { b: 2 }]

[2].concat({a: 1})
// [2, {a: 1}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9664\u4E86\u6570\u7EC4\u4F5C\u4E3A\u53C2\u6570\uFF0C<code>concat</code>\u4E5F\u63A5\u53D7\u5176\u4ED6\u7C7B\u578B\u7684\u503C\u4F5C\u4E3A\u53C2\u6570\uFF0C\u6DFB\u52A0\u5230\u76EE\u6807\u6570\u7EC4\u5C3E\u90E8\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[1, 2, 3].concat(4, 5, 6)
// [1, 2, 3, 4, 5, 6]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6570\u7EC4\u6210\u5458\u5305\u62EC\u5BF9\u8C61\uFF0C<code>concat</code>\u65B9\u6CD5\u8FD4\u56DE\u5F53\u524D\u6570\u7EC4\u7684\u4E00\u4E2A\u6D45\u62F7\u8D1D\u3002\u6240\u8C13\u201C\u6D45\u62F7\u8D1D\u201D\uFF0C\u6307\u7684\u662F\u65B0\u6570\u7EC4\u62F7\u8D1D\u7684\u662F\u5BF9\u8C61\u7684\u5F15\u7528\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var obj = { a: 1 };
var oldArray = [obj];

var newArray = oldArray.concat();

obj.a = 2;
newArray[0].a // 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u539F\u6570\u7EC4\u5305\u542B\u4E00\u4E2A\u5BF9\u8C61\uFF0C<code>concat</code>\u65B9\u6CD5\u751F\u6210\u7684\u65B0\u6570\u7EC4\u5305\u542B\u8FD9\u4E2A\u5BF9\u8C61\u7684\u5F15\u7528\u3002\u6240\u4EE5\uFF0C\u6539\u53D8\u539F\u5BF9\u8C61\u4EE5\u540E\uFF0C\u65B0\u6570\u7EC4\u8DDF\u7740\u6539\u53D8\u3002</p><h3 id="reverse" tabindex="-1"><a class="header-anchor" href="#reverse" aria-hidden="true">#</a> reverse()</h3><p><code>reverse</code>\u65B9\u6CD5\u7528\u4E8E\u98A0\u5012\u6392\u5217\u6570\u7EC4\u5143\u7D20\uFF0C\u8FD4\u56DE\u6539\u53D8\u540E\u7684\u6570\u7EC4\u3002\u6CE8\u610F\uFF0C\u8BE5\u65B9\u6CD5\u5C06\u6539\u53D8\u539F\u6570\u7EC4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];

a.reverse() // [&quot;c&quot;, &quot;b&quot;, &quot;a&quot;]
a // [&quot;c&quot;, &quot;b&quot;, &quot;a&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="slice" tabindex="-1"><a class="header-anchor" href="#slice" aria-hidden="true">#</a> slice()</h3><p><code>slice()</code>\u65B9\u6CD5\u7528\u4E8E\u63D0\u53D6\u76EE\u6807\u6570\u7EC4\u7684\u4E00\u90E8\u5206\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u6570\u7EC4\uFF0C\u539F\u6570\u7EC4\u4E0D\u53D8\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>arr.slice(start, end);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B83\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u8D77\u59CB\u4F4D\u7F6E\uFF08\u4ECE0\u5F00\u59CB\uFF0C\u4F1A\u5305\u62EC\u5728\u8FD4\u56DE\u7684\u65B0\u6570\u7EC4\u4E4B\u4E2D\uFF09\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u7EC8\u6B62\u4F4D\u7F6E\uFF08\u4F46\u8BE5\u4F4D\u7F6E\u7684\u5143\u7D20\u672C\u8EAB\u4E0D\u5305\u62EC\u5728\u5185\uFF09\u3002\u5982\u679C\u7701\u7565\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5219\u4E00\u76F4\u8FD4\u56DE\u5230\u539F\u6570\u7EC4\u7684\u6700\u540E\u4E00\u4E2A\u6210\u5458\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];

a.slice(0) // [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]
a.slice(1) // [&quot;b&quot;, &quot;c&quot;]
a.slice(1, 2) // [&quot;b&quot;]
a.slice(2, 6) // [&quot;c&quot;]
a.slice() // [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u6700\u540E\u4E00\u4E2A\u4F8B\u5B50<code>slice()</code>\u6CA1\u6709\u53C2\u6570\uFF0C\u5B9E\u9645\u4E0A\u7B49\u4E8E\u8FD4\u56DE\u4E00\u4E2A\u539F\u6570\u7EC4\u7684\u62F7\u8D1D\u3002</p><p>\u5982\u679C<code>slice()</code>\u65B9\u6CD5\u7684\u53C2\u6570\u662F\u8D1F\u6570\uFF0C\u5219\u8868\u793A\u5012\u6570\u8BA1\u7B97\u7684\u4F4D\u7F6E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];
a.slice(-2) // [&quot;b&quot;, &quot;c&quot;]
a.slice(-2, -1) // [&quot;b&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>-2</code>\u8868\u793A\u5012\u6570\u8BA1\u7B97\u7684\u7B2C\u4E8C\u4E2A\u4F4D\u7F6E\uFF0C<code>-1</code>\u8868\u793A\u5012\u6570\u8BA1\u7B97\u7684\u7B2C\u4E00\u4E2A\u4F4D\u7F6E\u3002</p><p>\u5982\u679C\u7B2C\u4E00\u4E2A\u53C2\u6570\u5927\u4E8E\u7B49\u4E8E\u6570\u7EC4\u957F\u5EA6\uFF0C\u6216\u8005\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5C0F\u4E8E\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u5219\u8FD4\u56DE\u7A7A\u6570\u7EC4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];
a.slice(4) // []
a.slice(2, 1) // []
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>slice()</code>\u65B9\u6CD5\u7684\u4E00\u4E2A\u91CD\u8981\u5E94\u7528\uFF0C\u662F\u5C06\u7C7B\u4F3C\u6570\u7EC4\u7684\u5BF9\u8C61\u8F6C\u4E3A\u771F\u6B63\u7684\u6570\u7EC4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Array.prototype.slice.call({ 0: &#39;a&#39;, 1: &#39;b&#39;, length: 2 })
// [&#39;a&#39;, &#39;b&#39;]

Array.prototype.slice.call(document.querySelectorAll(&quot;div&quot;));
Array.prototype.slice.call(arguments);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u7684\u53C2\u6570\u90FD\u4E0D\u662F\u6570\u7EC4\uFF0C\u4F46\u662F\u901A\u8FC7<code>call</code>\u65B9\u6CD5\uFF0C\u5728\u5B83\u4EEC\u4E0A\u9762\u8C03\u7528<code>slice()</code>\u65B9\u6CD5\uFF0C\u5C31\u53EF\u4EE5\u628A\u5B83\u4EEC\u8F6C\u4E3A\u771F\u6B63\u7684\u6570\u7EC4\u3002</p><h3 id="splice" tabindex="-1"><a class="header-anchor" href="#splice" aria-hidden="true">#</a> splice()</h3><p><code>splice()</code>\u65B9\u6CD5\u7528\u4E8E\u5220\u9664\u539F\u6570\u7EC4\u7684\u4E00\u90E8\u5206\u6210\u5458\uFF0C\u5E76\u53EF\u4EE5\u5728\u5220\u9664\u7684\u4F4D\u7F6E\u6DFB\u52A0\u65B0\u7684\u6570\u7EC4\u6210\u5458\uFF0C\u8FD4\u56DE\u503C\u662F\u88AB\u5220\u9664\u7684\u5143\u7D20\u3002\u6CE8\u610F\uFF0C\u8BE5\u65B9\u6CD5\u4F1A\u6539\u53D8\u539F\u6570\u7EC4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>arr.splice(start, count, addElement1, addElement2, ...);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>splice</code>\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u5220\u9664\u7684\u8D77\u59CB\u4F4D\u7F6E\uFF08\u4ECE0\u5F00\u59CB\uFF09\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u88AB\u5220\u9664\u7684\u5143\u7D20\u4E2A\u6570\u3002\u5982\u679C\u540E\u9762\u8FD8\u6709\u66F4\u591A\u7684\u53C2\u6570\uFF0C\u5219\u8868\u793A\u8FD9\u4E9B\u5C31\u662F\u8981\u88AB\u63D2\u5165\u6570\u7EC4\u7684\u65B0\u5143\u7D20\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;, &#39;f&#39;];
a.splice(4, 2) // [&quot;e&quot;, &quot;f&quot;]
a // [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4ECE\u539F\u6570\u7EC44\u53F7\u4F4D\u7F6E\uFF0C\u5220\u9664\u4E86\u4E24\u4E2A\u6570\u7EC4\u6210\u5458\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;, &#39;f&#39;];
a.splice(4, 2, 1, 2) // [&quot;e&quot;, &quot;f&quot;]
a // [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, 1, 2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u9664\u4E86\u5220\u9664\u6210\u5458\uFF0C\u8FD8\u63D2\u5165\u4E86\u4E24\u4E2A\u65B0\u6210\u5458\u3002</p><p>\u8D77\u59CB\u4F4D\u7F6E\u5982\u679C\u662F\u8D1F\u6570\uFF0C\u5C31\u8868\u793A\u4ECE\u5012\u6570\u4F4D\u7F6E\u5F00\u59CB\u5220\u9664\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;, &#39;f&#39;];
a.splice(-4, 2) // [&quot;c&quot;, &quot;d&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u8868\u793A\uFF0C\u4ECE\u5012\u6570\u7B2C\u56DB\u4E2A\u4F4D\u7F6E<code>c</code>\u5F00\u59CB\u5220\u9664\u4E24\u4E2A\u6210\u5458\u3002</p><p>\u5982\u679C\u53EA\u662F\u5355\u7EAF\u5730\u63D2\u5165\u5143\u7D20\uFF0C<code>splice</code>\u65B9\u6CD5\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u53EF\u4EE5\u8BBE\u4E3A<code>0</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = [1, 1, 1];

a.splice(1, 0, 2) // []
a // [1, 2, 1, 1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u53EA\u63D0\u4F9B\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u7B49\u540C\u4E8E\u5C06\u539F\u6570\u7EC4\u5728\u6307\u5B9A\u4F4D\u7F6E\u62C6\u5206\u6210\u4E24\u4E2A\u6570\u7EC4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = [1, 2, 3, 4];
a.splice(2) // [3, 4]
a // [1, 2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort()</h3><p><code>sort</code>\u65B9\u6CD5\u5BF9\u6570\u7EC4\u6210\u5458\u8FDB\u884C\u6392\u5E8F\uFF0C\u9ED8\u8BA4\u662F\u6309\u7167\u5B57\u5178\u987A\u5E8F\u6392\u5E8F\u3002\u6392\u5E8F\u540E\uFF0C\u539F\u6570\u7EC4\u5C06\u88AB\u6539\u53D8\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[&#39;d&#39;, &#39;c&#39;, &#39;b&#39;, &#39;a&#39;].sort()
// [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;]

[4, 3, 2, 1].sort()
// [1, 2, 3, 4]

[11, 101].sort()
// [101, 11]

[10111, 1101, 111].sort()
// [10111, 1101, 111]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u7684\u6700\u540E\u4E24\u4E2A\u4F8B\u5B50\uFF0C\u9700\u8981\u7279\u6B8A\u6CE8\u610F\u3002<code>sort()</code>\u65B9\u6CD5\u4E0D\u662F\u6309\u7167\u5927\u5C0F\u6392\u5E8F\uFF0C\u800C\u662F\u6309\u7167\u5B57\u5178\u987A\u5E8F\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6570\u503C\u4F1A\u88AB\u5148\u8F6C\u6210\u5B57\u7B26\u4E32\uFF0C\u518D\u6309\u7167\u5B57\u5178\u987A\u5E8F\u8FDB\u884C\u6BD4\u8F83\uFF0C\u6240\u4EE5<code>101</code>\u6392\u5728<code>11</code>\u7684\u524D\u9762\u3002</p><p>\u5982\u679C\u60F3\u8BA9<code>sort</code>\u65B9\u6CD5\u6309\u7167\u81EA\u5B9A\u4E49\u65B9\u5F0F\u6392\u5E8F\uFF0C\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[10111, 1101, 111].sort(function (a, b) {
  return a - b;
})
// [111, 1101, 10111]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>sort</code>\u7684\u53C2\u6570\u51FD\u6570\u672C\u8EAB\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u8868\u793A\u8FDB\u884C\u6BD4\u8F83\u7684\u4E24\u4E2A\u6570\u7EC4\u6210\u5458\u3002\u5982\u679C\u8BE5\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u5927\u4E8E<code>0</code>\uFF0C\u8868\u793A\u7B2C\u4E00\u4E2A\u6210\u5458\u6392\u5728\u7B2C\u4E8C\u4E2A\u6210\u5458\u540E\u9762\uFF1B\u5176\u4ED6\u60C5\u51B5\u4E0B\uFF0C\u90FD\u662F\u7B2C\u4E00\u4E2A\u5143\u7D20\u6392\u5728\u7B2C\u4E8C\u4E2A\u5143\u7D20\u524D\u9762\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[
  { name: &quot;\u5F20\u4E09&quot;, age: 30 },
  { name: &quot;\u674E\u56DB&quot;, age: 24 },
  { name: &quot;\u738B\u4E94&quot;, age: 28  }
].sort(function (o1, o2) {
  return o1.age - o2.age;
})
// [
//   { name: &quot;\u674E\u56DB&quot;, age: 24 },
//   { name: &quot;\u738B\u4E94&quot;, age: 28  },
//   { name: &quot;\u5F20\u4E09&quot;, age: 30 }
// ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C\u81EA\u5B9A\u4E49\u7684\u6392\u5E8F\u51FD\u6570\u5E94\u8BE5\u8FD4\u56DE\u6570\u503C\uFF0C\u5426\u5219\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\u53EF\u80FD\u6709\u4E0D\u540C\u7684\u5B9E\u73B0\uFF0C\u4E0D\u80FD\u4FDD\u8BC1\u7ED3\u679C\u90FD\u4E00\u81F4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// bad
[1, 4, 2, 6, 0, 6, 2, 6].sort((a, b) =&gt; a &gt; b)

// good
[1, 4, 2, 6, 0, 6, 2, 6].sort((a, b) =&gt; a - b)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u524D\u4E00\u79CD\u6392\u5E8F\u7B97\u6CD5\u8FD4\u56DE\u7684\u662F\u5E03\u5C14\u503C\uFF0C\u8FD9\u662F\u4E0D\u63A8\u8350\u4F7F\u7528\u7684\u3002\u540E\u4E00\u79CD\u662F\u6570\u503C\uFF0C\u624D\u662F\u66F4\u597D\u7684\u5199\u6CD5\u3002</p><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map()</h3><p><code>map</code>\u65B9\u6CD5\u5C06\u6570\u7EC4\u7684\u6240\u6709\u6210\u5458\u4F9D\u6B21\u4F20\u5165\u53C2\u6570\u51FD\u6570\uFF0C\u7136\u540E\u628A\u6BCF\u4E00\u6B21\u7684\u6267\u884C\u7ED3\u679C\u7EC4\u6210\u4E00\u4E2A\u65B0\u6570\u7EC4\u8FD4\u56DE\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var numbers = [1, 2, 3];

numbers.map(function (n) {
  return n + 1;
});
// [2, 3, 4]

numbers
// [1, 2, 3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>numbers</code>\u6570\u7EC4\u7684\u6240\u6709\u6210\u5458\u4F9D\u6B21\u6267\u884C\u53C2\u6570\u51FD\u6570\uFF0C\u8FD0\u884C\u7ED3\u679C\u7EC4\u6210\u4E00\u4E2A\u65B0\u6570\u7EC4\u8FD4\u56DE\uFF0C\u539F\u6570\u7EC4\u6CA1\u6709\u53D8\u5316\u3002</p><p><code>map</code>\u65B9\u6CD5\u63A5\u53D7\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u3002\u8BE5\u51FD\u6570\u8C03\u7528\u65F6\uFF0C<code>map</code>\u65B9\u6CD5\u5411\u5B83\u4F20\u5165\u4E09\u4E2A\u53C2\u6570\uFF1A\u5F53\u524D\u6210\u5458\u3001\u5F53\u524D\u4F4D\u7F6E\u548C\u6570\u7EC4\u672C\u8EAB\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[1, 2, 3].map(function(elem, index, arr) {
  return elem * index;
});
// [0, 2, 6]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>map</code>\u65B9\u6CD5\u7684\u56DE\u8C03\u51FD\u6570\u6709\u4E09\u4E2A\u53C2\u6570\uFF0C<code>elem</code>\u4E3A\u5F53\u524D\u6210\u5458\u7684\u503C\uFF0C<code>index</code>\u4E3A\u5F53\u524D\u6210\u5458\u7684\u4F4D\u7F6E\uFF0C<code>arr</code>\u4E3A\u539F\u6570\u7EC4\uFF08<code>[1, 2, 3]</code>\uFF09\u3002</p><p><code>map</code>\u65B9\u6CD5\u8FD8\u53EF\u4EE5\u63A5\u53D7\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u7528\u6765\u7ED1\u5B9A\u56DE\u8C03\u51FD\u6570\u5185\u90E8\u7684<code>this</code>\u53D8\u91CF\uFF08\u8BE6\u89C1\u300Athis \u53D8\u91CF\u300B\u4E00\u7AE0\uFF09\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];

[1, 2].map(function (e) {
  return this[e];
}, arr)
// [&#39;b&#39;, &#39;c&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u901A\u8FC7<code>map</code>\u65B9\u6CD5\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5C06\u56DE\u8C03\u51FD\u6570\u5185\u90E8\u7684<code>this</code>\u5BF9\u8C61\uFF0C\u6307\u5411<code>arr</code>\u6570\u7EC4\u3002</p><p>\u5982\u679C\u6570\u7EC4\u6709\u7A7A\u4F4D\uFF0C<code>map</code>\u65B9\u6CD5\u7684\u56DE\u8C03\u51FD\u6570\u5728\u8FD9\u4E2A\u4F4D\u7F6E\u4E0D\u4F1A\u6267\u884C\uFF0C\u4F1A\u8DF3\u8FC7\u6570\u7EC4\u7684\u7A7A\u4F4D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var f = function (n) { return &#39;a&#39; };

[1, undefined, 2].map(f) // [&quot;a&quot;, &quot;a&quot;, &quot;a&quot;]
[1, null, 2].map(f) // [&quot;a&quot;, &quot;a&quot;, &quot;a&quot;]
[1, , 2].map(f) // [&quot;a&quot;, , &quot;a&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>map</code>\u65B9\u6CD5\u4E0D\u4F1A\u8DF3\u8FC7<code>undefined</code>\u548C<code>null</code>\uFF0C\u4F46\u662F\u4F1A\u8DF3\u8FC7\u7A7A\u4F4D\u3002</p><h3 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> forEach()</h3><p><code>forEach</code>\u65B9\u6CD5\u4E0E<code>map</code>\u65B9\u6CD5\u5F88\u76F8\u4F3C\uFF0C\u4E5F\u662F\u5BF9\u6570\u7EC4\u7684\u6240\u6709\u6210\u5458\u4F9D\u6B21\u6267\u884C\u53C2\u6570\u51FD\u6570\u3002\u4F46\u662F\uFF0C<code>forEach</code>\u65B9\u6CD5\u4E0D\u8FD4\u56DE\u503C\uFF0C\u53EA\u7528\u6765\u64CD\u4F5C\u6570\u636E\u3002\u8FD9\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u6570\u7EC4\u904D\u5386\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u5F97\u5230\u8FD4\u56DE\u503C\uFF0C\u90A3\u4E48\u4F7F\u7528<code>map</code>\u65B9\u6CD5\uFF0C\u5426\u5219\u4F7F\u7528<code>forEach</code>\u65B9\u6CD5\u3002</p><p><code>forEach</code>\u7684\u7528\u6CD5\u4E0E<code>map</code>\u65B9\u6CD5\u4E00\u81F4\uFF0C\u53C2\u6570\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u540C\u6837\u63A5\u53D7\u4E09\u4E2A\u53C2\u6570\uFF1A\u5F53\u524D\u503C\u3001\u5F53\u524D\u4F4D\u7F6E\u3001\u6574\u4E2A\u6570\u7EC4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function log(element, index, array) {
  console.log(&#39;[&#39; + index + &#39;] = &#39; + element);
}

[2, 5, 9].forEach(log);
// [0] = 2
// [1] = 5
// [2] = 9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>forEach</code>\u904D\u5386\u6570\u7EC4\u4E0D\u662F\u4E3A\u4E86\u5F97\u5230\u8FD4\u56DE\u503C\uFF0C\u800C\u662F\u4E3A\u4E86\u5728\u5C4F\u5E55\u8F93\u51FA\u5185\u5BB9\uFF0C\u6240\u4EE5\u4E0D\u5FC5\u4F7F\u7528<code>map</code>\u65B9\u6CD5\u3002</p><p><code>forEach</code>\u65B9\u6CD5\u4E5F\u53EF\u4EE5\u63A5\u53D7\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u7ED1\u5B9A\u53C2\u6570\u51FD\u6570\u7684<code>this</code>\u53D8\u91CF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var out = [];

[1, 2, 3].forEach(function(elem) {
  this.push(elem * elem);
}, out);

out // [1, 4, 9]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u7A7A\u6570\u7EC4<code>out</code>\u662F<code>forEach</code>\u65B9\u6CD5\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u7ED3\u679C\uFF0C\u56DE\u8C03\u51FD\u6570\u5185\u90E8\u7684<code>this</code>\u5173\u952E\u5B57\u5C31\u6307\u5411<code>out</code>\u3002</p><p>\u6CE8\u610F\uFF0C<code>forEach</code>\u65B9\u6CD5\u65E0\u6CD5\u4E2D\u65AD\u6267\u884C\uFF0C\u603B\u662F\u4F1A\u5C06\u6240\u6709\u6210\u5458\u904D\u5386\u5B8C\u3002\u5982\u679C\u5E0C\u671B\u7B26\u5408\u67D0\u79CD\u6761\u4EF6\u65F6\uFF0C\u5C31\u4E2D\u65AD\u904D\u5386\uFF0C\u8981\u4F7F\u7528<code>for</code>\u5FAA\u73AF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr = [1, 2, 3];

for (var i = 0; i &lt; arr.length; i++) {
  if (arr[i] === 2) break;
  console.log(arr[i]);
}
// 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u6267\u884C\u5230\u6570\u7EC4\u7684\u7B2C\u4E8C\u4E2A\u6210\u5458\u65F6\uFF0C\u5C31\u4F1A\u4E2D\u65AD\u6267\u884C\u3002<code>forEach</code>\u65B9\u6CD5\u505A\u4E0D\u5230\u8FD9\u4E00\u70B9\u3002</p><p><code>forEach</code>\u65B9\u6CD5\u4E5F\u4F1A\u8DF3\u8FC7\u6570\u7EC4\u7684\u7A7A\u4F4D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var log = function (n) {
  console.log(n + 1);
};

[1, undefined, 2].forEach(log)
// 2
// NaN
// 3

[1, null, 2].forEach(log)
// 2
// 1
// 3

[1, , 2].forEach(log)
// 2
// 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>forEach</code>\u65B9\u6CD5\u4E0D\u4F1A\u8DF3\u8FC7<code>undefined</code>\u548C<code>null</code>\uFF0C\u4F46\u4F1A\u8DF3\u8FC7\u7A7A\u4F4D\u3002</p><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter()</h3><p><code>filter</code>\u65B9\u6CD5\u7528\u4E8E\u8FC7\u6EE4\u6570\u7EC4\u6210\u5458\uFF0C\u6EE1\u8DB3\u6761\u4EF6\u7684\u6210\u5458\u7EC4\u6210\u4E00\u4E2A\u65B0\u6570\u7EC4\u8FD4\u56DE\u3002</p><p>\u5B83\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u6240\u6709\u6570\u7EC4\u6210\u5458\u4F9D\u6B21\u6267\u884C\u8BE5\u51FD\u6570\uFF0C\u8FD4\u56DE\u7ED3\u679C\u4E3A<code>true</code>\u7684\u6210\u5458\u7EC4\u6210\u4E00\u4E2A\u65B0\u6570\u7EC4\u8FD4\u56DE\u3002\u8BE5\u65B9\u6CD5\u4E0D\u4F1A\u6539\u53D8\u539F\u6570\u7EC4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[1, 2, 3, 4, 5].filter(function (elem) {
  return (elem &gt; 3);
})
// [4, 5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u5C06\u5927\u4E8E<code>3</code>\u7684\u6570\u7EC4\u6210\u5458\uFF0C\u4F5C\u4E3A\u4E00\u4E2A\u65B0\u6570\u7EC4\u8FD4\u56DE\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr = [0, 1, &#39;a&#39;, false];

arr.filter(Boolean)
// [1, &quot;a&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>filter</code>\u65B9\u6CD5\u8FD4\u56DE\u6570\u7EC4<code>arr</code>\u91CC\u9762\u6240\u6709\u5E03\u5C14\u503C\u4E3A<code>true</code>\u7684\u6210\u5458\u3002</p><p><code>filter</code>\u65B9\u6CD5\u7684\u53C2\u6570\u51FD\u6570\u53EF\u4EE5\u63A5\u53D7\u4E09\u4E2A\u53C2\u6570\uFF1A\u5F53\u524D\u6210\u5458\uFF0C\u5F53\u524D\u4F4D\u7F6E\u548C\u6574\u4E2A\u6570\u7EC4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[1, 2, 3, 4, 5].filter(function (elem, index, arr) {
  return index % 2 === 0;
});
// [1, 3, 5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u8FD4\u56DE\u5076\u6570\u4F4D\u7F6E\u7684\u6210\u5458\u7EC4\u6210\u7684\u65B0\u6570\u7EC4\u3002</p><p><code>filter</code>\u65B9\u6CD5\u8FD8\u53EF\u4EE5\u63A5\u53D7\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u7528\u6765\u7ED1\u5B9A\u53C2\u6570\u51FD\u6570\u5185\u90E8\u7684<code>this</code>\u53D8\u91CF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var obj = { MAX: 3 };
var myFilter = function (item) {
  if (item &gt; this.MAX) return true;
};

var arr = [2, 8, 3, 4, 1, 3, 2, 9];
arr.filter(myFilter, obj) // [8, 4, 9]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u8FC7\u6EE4\u5668<code>myFilter</code>\u5185\u90E8\u6709<code>this</code>\u53D8\u91CF\uFF0C\u5B83\u53EF\u4EE5\u88AB<code>filter</code>\u65B9\u6CD5\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570<code>obj</code>\u7ED1\u5B9A\uFF0C\u8FD4\u56DE\u5927\u4E8E<code>3</code>\u7684\u6210\u5458\u3002</p><h3 id="some-every" tabindex="-1"><a class="header-anchor" href="#some-every" aria-hidden="true">#</a> some()\uFF0Cevery()</h3><p>\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u7C7B\u4F3C\u201C\u65AD\u8A00\u201D\uFF08assert\uFF09\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u5224\u65AD\u6570\u7EC4\u6210\u5458\u662F\u5426\u7B26\u5408\u67D0\u79CD\u6761\u4EF6\u3002</p><p>\u5B83\u4EEC\u63A5\u53D7\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u6240\u6709\u6570\u7EC4\u6210\u5458\u4F9D\u6B21\u6267\u884C\u8BE5\u51FD\u6570\u3002\u8BE5\u51FD\u6570\u63A5\u53D7\u4E09\u4E2A\u53C2\u6570\uFF1A\u5F53\u524D\u6210\u5458\u3001\u5F53\u524D\u4F4D\u7F6E\u548C\u6574\u4E2A\u6570\u7EC4\uFF0C\u7136\u540E\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u3002</p><p><code>some</code>\u65B9\u6CD5\u662F\u53EA\u8981\u4E00\u4E2A\u6210\u5458\u7684\u8FD4\u56DE\u503C\u662F<code>true</code>\uFF0C\u5219\u6574\u4E2A<code>some</code>\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u5C31\u662F<code>true</code>\uFF0C\u5426\u5219\u8FD4\u56DE<code>false</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr = [1, 2, 3, 4, 5];
arr.some(function (elem, index, arr) {
  return elem &gt;= 3;
});
// true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u5982\u679C\u6570\u7EC4<code>arr</code>\u6709\u4E00\u4E2A\u6210\u5458\u5927\u4E8E\u7B49\u4E8E3\uFF0C<code>some</code>\u65B9\u6CD5\u5C31\u8FD4\u56DE<code>true</code>\u3002</p><p><code>every</code>\u65B9\u6CD5\u662F\u6240\u6709\u6210\u5458\u7684\u8FD4\u56DE\u503C\u90FD\u662F<code>true</code>\uFF0C\u6574\u4E2A<code>every</code>\u65B9\u6CD5\u624D\u8FD4\u56DE<code>true</code>\uFF0C\u5426\u5219\u8FD4\u56DE<code>false</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var arr = [1, 2, 3, 4, 5];
arr.every(function (elem, index, arr) {
  return elem &gt;= 3;
});
// false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u6570\u7EC4<code>arr</code>\u5E76\u975E\u6240\u6709\u6210\u5458\u5927\u4E8E\u7B49\u4E8E<code>3</code>\uFF0C\u6240\u4EE5\u8FD4\u56DE<code>false</code>\u3002</p><p>\u6CE8\u610F\uFF0C\u5BF9\u4E8E\u7A7A\u6570\u7EC4\uFF0C<code>some</code>\u65B9\u6CD5\u8FD4\u56DE<code>false</code>\uFF0C<code>every</code>\u65B9\u6CD5\u8FD4\u56DE<code>true</code>\uFF0C\u56DE\u8C03\u51FD\u6570\u90FD\u4E0D\u4F1A\u6267\u884C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function isEven(x) { return x % 2 === 0 }

[].some(isEven) // false
[].every(isEven) // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>some</code>\u548C<code>every</code>\u65B9\u6CD5\u8FD8\u53EF\u4EE5\u63A5\u53D7\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u7528\u6765\u7ED1\u5B9A\u53C2\u6570\u51FD\u6570\u5185\u90E8\u7684<code>this</code>\u53D8\u91CF\u3002</p><h3 id="reduce-reduceright" tabindex="-1"><a class="header-anchor" href="#reduce-reduceright" aria-hidden="true">#</a> reduce()\uFF0CreduceRight()</h3><p><code>reduce</code>\u65B9\u6CD5\u548C<code>reduceRight</code>\u65B9\u6CD5\u4F9D\u6B21\u5904\u7406\u6570\u7EC4\u7684\u6BCF\u4E2A\u6210\u5458\uFF0C\u6700\u7EC8\u7D2F\u8BA1\u4E3A\u4E00\u4E2A\u503C\u3002\u5B83\u4EEC\u7684\u5DEE\u522B\u662F\uFF0C<code>reduce</code>\u662F\u4ECE\u5DE6\u5230\u53F3\u5904\u7406\uFF08\u4ECE\u7B2C\u4E00\u4E2A\u6210\u5458\u5230\u6700\u540E\u4E00\u4E2A\u6210\u5458\uFF09\uFF0C<code>reduceRight</code>\u5219\u662F\u4ECE\u53F3\u5230\u5DE6\uFF08\u4ECE\u6700\u540E\u4E00\u4E2A\u6210\u5458\u5230\u7B2C\u4E00\u4E2A\u6210\u5458\uFF09\uFF0C\u5176\u4ED6\u5B8C\u5168\u4E00\u6837\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[1, 2, 3, 4, 5].reduce(function (a, b) {
  console.log(a, b);
  return a + b;
})
// 1 2
// 3 3
// 6 4
// 10 5
//\u6700\u540E\u7ED3\u679C\uFF1A15
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>reduce</code>\u65B9\u6CD5\u6C42\u51FA\u6570\u7EC4\u6240\u6709\u6210\u5458\u7684\u548C\u3002\u7B2C\u4E00\u6B21\u6267\u884C\uFF0C<code>a</code>\u662F\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u6210\u5458<code>1</code>\uFF0C<code>b</code>\u662F\u6570\u7EC4\u7684\u7B2C\u4E8C\u4E2A\u6210\u5458<code>2</code>\u3002\u7B2C\u4E8C\u6B21\u6267\u884C\uFF0C<code>a</code>\u4E3A\u4E0A\u4E00\u8F6E\u7684\u8FD4\u56DE\u503C<code>3</code>\uFF0C<code>b</code>\u4E3A\u7B2C\u4E09\u4E2A\u6210\u5458<code>3</code>\u3002\u7B2C\u4E09\u6B21\u6267\u884C\uFF0C<code>a</code>\u4E3A\u4E0A\u4E00\u8F6E\u7684\u8FD4\u56DE\u503C<code>6</code>\uFF0C<code>b</code>\u4E3A\u7B2C\u56DB\u4E2A\u6210\u5458<code>4</code>\u3002\u7B2C\u56DB\u6B21\u6267\u884C\uFF0C<code>a</code>\u4E3A\u4E0A\u4E00\u8F6E\u8FD4\u56DE\u503C<code>10</code>\uFF0C<code>b</code>\u4E3A\u7B2C\u4E94\u4E2A\u6210\u5458<code>5</code>\u3002\u81F3\u6B64\u6240\u6709\u6210\u5458\u904D\u5386\u5B8C\u6210\uFF0C\u6574\u4E2A\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u5C31\u662F\u6700\u540E\u4E00\u8F6E\u7684\u8FD4\u56DE\u503C<code>15</code>\u3002</p><p><code>reduce</code>\u65B9\u6CD5\u548C<code>reduceRight</code>\u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u90FD\u662F\u4E00\u4E2A\u51FD\u6570\u3002\u8BE5\u51FD\u6570\u63A5\u53D7\u4EE5\u4E0B\u56DB\u4E2A\u53C2\u6570\u3002</p><ol><li>\u7D2F\u79EF\u53D8\u91CF\uFF0C\u9ED8\u8BA4\u4E3A\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u6210\u5458</li><li>\u5F53\u524D\u53D8\u91CF\uFF0C\u9ED8\u8BA4\u4E3A\u6570\u7EC4\u7684\u7B2C\u4E8C\u4E2A\u6210\u5458</li><li>\u5F53\u524D\u4F4D\u7F6E\uFF08\u4ECE0\u5F00\u59CB\uFF09</li><li>\u539F\u6570\u7EC4</li></ol><p>\u8FD9\u56DB\u4E2A\u53C2\u6570\u4E4B\u4E2D\uFF0C\u53EA\u6709\u524D\u4E24\u4E2A\u662F\u5FC5\u987B\u7684\uFF0C\u540E\u4E24\u4E2A\u5219\u662F\u53EF\u9009\u7684\u3002</p><p>\u5982\u679C\u8981\u5BF9\u7D2F\u79EF\u53D8\u91CF\u6307\u5B9A\u521D\u503C\uFF0C\u53EF\u4EE5\u628A\u5B83\u653E\u5728<code>reduce</code>\u65B9\u6CD5\u548C<code>reduceRight</code>\u65B9\u6CD5\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[1, 2, 3, 4, 5].reduce(function (a, b) {
  return a + b;
}, 10);
// 25
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u6307\u5B9A\u53C2\u6570<code>a</code>\u7684\u521D\u503C\u4E3A10\uFF0C\u6240\u4EE5\u6570\u7EC4\u4ECE10\u5F00\u59CB\u7D2F\u52A0\uFF0C\u6700\u7EC8\u7ED3\u679C\u4E3A25\u3002\u6CE8\u610F\uFF0C\u8FD9\u65F6<code>b</code>\u662F\u4ECE\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u6210\u5458\u5F00\u59CB\u904D\u5386\u3002</p><p>\u4E0A\u9762\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u76F8\u5F53\u4E8E\u8BBE\u5B9A\u4E86\u9ED8\u8BA4\u503C\uFF0C\u5904\u7406\u7A7A\u6570\u7EC4\u65F6\u5C24\u5176\u6709\u7528\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function add(prev, cur) {
  return prev + cur;
}

[].reduce(add)
// TypeError: Reduce of empty array with no initial value
[].reduce(add, 1)
// 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u7531\u4E8E\u7A7A\u6570\u7EC4\u53D6\u4E0D\u5230\u521D\u59CB\u503C\uFF0C<code>reduce</code>\u65B9\u6CD5\u4F1A\u62A5\u9519\u3002\u8FD9\u65F6\uFF0C\u52A0\u4E0A\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5C31\u80FD\u4FDD\u8BC1\u603B\u662F\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u503C\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A<code>reduceRight</code>\u65B9\u6CD5\u7684\u4F8B\u5B50\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function subtract(prev, cur) {
  return prev - cur;
}

[3, 2, 1].reduce(subtract) // 0
[3, 2, 1].reduceRight(subtract) // -4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>reduce</code>\u65B9\u6CD5\u76F8\u5F53\u4E8E<code>3</code>\u51CF\u53BB<code>2</code>\u518D\u51CF\u53BB<code>1</code>\uFF0C<code>reduceRight</code>\u65B9\u6CD5\u76F8\u5F53\u4E8E<code>1</code>\u51CF\u53BB<code>2</code>\u518D\u51CF\u53BB<code>3</code>\u3002</p><p>\u7531\u4E8E\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u4F1A\u904D\u5386\u6570\u7EC4\uFF0C\u6240\u4EE5\u5B9E\u9645\u4E0A\u8FD8\u53EF\u4EE5\u7528\u6765\u505A\u4E00\u4E9B\u904D\u5386\u76F8\u5173\u7684\u64CD\u4F5C\u3002\u6BD4\u5982\uFF0C\u627E\u51FA\u5B57\u7B26\u957F\u5EA6\u6700\u957F\u7684\u6570\u7EC4\u6210\u5458\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function findLongest(entries) {
  return entries.reduce(function (longest, entry) {
    return entry.length &gt; longest.length ? entry : longest;
  }, &#39;&#39;);
}

findLongest([&#39;aaa&#39;, &#39;bb&#39;, &#39;c&#39;]) // &quot;aaa&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>reduce</code>\u7684\u53C2\u6570\u51FD\u6570\u4F1A\u5C06\u5B57\u7B26\u957F\u5EA6\u8F83\u957F\u7684\u90A3\u4E2A\u6570\u7EC4\u6210\u5458\uFF0C\u4F5C\u4E3A\u7D2F\u79EF\u503C\u3002\u8FD9\u5BFC\u81F4\u904D\u5386\u6240\u6709\u6210\u5458\u4E4B\u540E\uFF0C\u7D2F\u79EF\u503C\u5C31\u662F\u5B57\u7B26\u957F\u5EA6\u6700\u957F\u7684\u90A3\u4E2A\u6210\u5458\u3002</p><h3 id="indexof-lastindexof" tabindex="-1"><a class="header-anchor" href="#indexof-lastindexof" aria-hidden="true">#</a> indexOf()\uFF0ClastIndexOf()</h3><p><code>indexOf</code>\u65B9\u6CD5\u8FD4\u56DE\u7ED9\u5B9A\u5143\u7D20\u5728\u6570\u7EC4\u4E2D\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E\uFF0C\u5982\u679C\u6CA1\u6709\u51FA\u73B0\u5219\u8FD4\u56DE<code>-1</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];

a.indexOf(&#39;b&#39;) // 1
a.indexOf(&#39;y&#39;) // -1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>indexOf</code>\u65B9\u6CD5\u8FD8\u53EF\u4EE5\u63A5\u53D7\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u8868\u793A\u641C\u7D22\u7684\u5F00\u59CB\u4F4D\u7F6E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;].indexOf(&#39;a&#39;, 1) // -1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4ECE1\u53F7\u4F4D\u7F6E\u5F00\u59CB\u641C\u7D22\u5B57\u7B26<code>a</code>\uFF0C\u7ED3\u679C\u4E3A<code>-1</code>\uFF0C\u8868\u793A\u6CA1\u6709\u641C\u7D22\u5230\u3002</p><p><code>lastIndexOf</code>\u65B9\u6CD5\u8FD4\u56DE\u7ED9\u5B9A\u5143\u7D20\u5728\u6570\u7EC4\u4E2D\u6700\u540E\u4E00\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E\uFF0C\u5982\u679C\u6CA1\u6709\u51FA\u73B0\u5219\u8FD4\u56DE<code>-1</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var a = [2, 5, 9, 2];
a.lastIndexOf(2) // 3
a.lastIndexOf(7) // -1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u4E0D\u80FD\u7528\u6765\u641C\u7D22<code>NaN</code>\u7684\u4F4D\u7F6E\uFF0C\u5373\u5B83\u4EEC\u65E0\u6CD5\u786E\u5B9A\u6570\u7EC4\u6210\u5458\u662F\u5426\u5305\u542B<code>NaN</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[NaN].indexOf(NaN) // -1
[NaN].lastIndexOf(NaN) // -1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u662F\u56E0\u4E3A\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u5185\u90E8\uFF0C\u4F7F\u7528\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26\uFF08<code>===</code>\uFF09\u8FDB\u884C\u6BD4\u8F83\uFF0C\u800C<code>NaN</code>\u662F\u552F\u4E00\u4E00\u4E2A\u4E0D\u7B49\u4E8E\u81EA\u8EAB\u7684\u503C\u3002</p><h3 id="\u94FE\u5F0F\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u94FE\u5F0F\u4F7F\u7528" aria-hidden="true">#</a> \u94FE\u5F0F\u4F7F\u7528</h3><p>\u4E0A\u9762\u8FD9\u4E9B\u6570\u7EC4\u65B9\u6CD5\u4E4B\u4E2D\uFF0C\u6709\u4E0D\u5C11\u8FD4\u56DE\u7684\u8FD8\u662F\u6570\u7EC4\uFF0C\u6240\u4EE5\u53EF\u4EE5\u94FE\u5F0F\u4F7F\u7528\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var users = [
  {name: &#39;tom&#39;, email: &#39;tom@example.com&#39;},
  {name: &#39;peter&#39;, email: &#39;peter@example.com&#39;}
];

users
.map(function (user) {
  return user.email;
})
.filter(function (email) {
  return /^t/.test(email);
})
.forEach(function (email) {
  console.log(email);
});
// &quot;tom@example.com&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u5148\u4EA7\u751F\u4E00\u4E2A\u6240\u6709 Email \u5730\u5740\u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u7136\u540E\u518D\u8FC7\u6EE4\u51FA\u4EE5<code>t</code>\u5F00\u5934\u7684 Email \u5730\u5740\uFF0C\u6700\u540E\u5C06\u5B83\u6253\u5370\u51FA\u6765\u3002</p><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2><ul><li>\u962E\u4E00\u5CF0 https://wangdoc.com/javascript/stdlib/array.html</li></ul>`,194);function a(s,l){return n}var c=e(i,[["render",a],["__file","array.html.vue"]]);export{c as default};
