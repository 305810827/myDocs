import{_ as e,e as a}from"./app.659fa32e.js";const d={},i=a(`<h1 id="math-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#math-\u5BF9\u8C61" aria-hidden="true">#</a> Math \u5BF9\u8C61</h1><p>\u7F51\u9053\uFF08WangDoc.com\uFF09\uFF0C\u4E92\u8054\u7F51\u6587\u6863\u8BA1\u5212</p><p><code>Math</code>\u662F JavaScript \u7684\u539F\u751F\u5BF9\u8C61\uFF0C\u63D0\u4F9B\u5404\u79CD\u6570\u5B66\u529F\u80FD\u3002\u8BE5\u5BF9\u8C61\u4E0D\u662F\u6784\u9020\u51FD\u6570\uFF0C\u4E0D\u80FD\u751F\u6210\u5B9E\u4F8B\uFF0C\u6240\u6709\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u90FD\u5FC5\u987B\u5728<code>Math</code>\u5BF9\u8C61\u4E0A\u8C03\u7528\u3002</p><h2 id="\u9759\u6001\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u5C5E\u6027" aria-hidden="true">#</a> \u9759\u6001\u5C5E\u6027</h2><p><code>Math</code>\u5BF9\u8C61\u7684\u9759\u6001\u5C5E\u6027\uFF0C\u63D0\u4F9B\u4EE5\u4E0B\u4E00\u4E9B\u6570\u5B66\u5E38\u6570\u3002</p><ul><li><code>Math.E</code>\uFF1A\u5E38\u6570<code>e</code>\u3002</li><li><code>Math.LN2</code>\uFF1A2 \u7684\u81EA\u7136\u5BF9\u6570\u3002</li><li><code>Math.LN10</code>\uFF1A10 \u7684\u81EA\u7136\u5BF9\u6570\u3002</li><li><code>Math.LOG2E</code>\uFF1A\u4EE5 2 \u4E3A\u5E95\u7684<code>e</code>\u7684\u5BF9\u6570\u3002</li><li><code>Math.LOG10E</code>\uFF1A\u4EE5 10 \u4E3A\u5E95\u7684<code>e</code>\u7684\u5BF9\u6570\u3002</li><li><code>Math.PI</code>\uFF1A\u5E38\u6570<code>\u03C0</code>\u3002</li><li><code>Math.SQRT1_2</code>\uFF1A0.5 \u7684\u5E73\u65B9\u6839\u3002</li><li><code>Math.SQRT2</code>\uFF1A2 \u7684\u5E73\u65B9\u6839\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Math.E // 2.718281828459045
Math.LN2 // 0.6931471805599453
Math.LN10 // 2.302585092994046
Math.LOG2E // 1.4426950408889634
Math.LOG10E // 0.4342944819032518
Math.PI // 3.141592653589793
Math.SQRT1_2 // 0.7071067811865476
Math.SQRT2 // 1.4142135623730951
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E9B\u5C5E\u6027\u90FD\u662F\u53EA\u8BFB\u7684\uFF0C\u4E0D\u80FD\u4FEE\u6539\u3002</p><h2 id="\u9759\u6001\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u65B9\u6CD5" aria-hidden="true">#</a> \u9759\u6001\u65B9\u6CD5</h2><p><code>Math</code>\u5BF9\u8C61\u63D0\u4F9B\u4EE5\u4E0B\u4E00\u4E9B\u9759\u6001\u65B9\u6CD5\u3002</p><ul><li><code>Math.abs()</code>\uFF1A\u7EDD\u5BF9\u503C</li><li><code>Math.ceil()</code>\uFF1A\u5411\u4E0A\u53D6\u6574</li><li><code>Math.floor()</code>\uFF1A\u5411\u4E0B\u53D6\u6574</li><li><code>Math.max()</code>\uFF1A\u6700\u5927\u503C</li><li><code>Math.min()</code>\uFF1A\u6700\u5C0F\u503C</li><li><code>Math.pow()</code>\uFF1A\u5E42\u8FD0\u7B97</li><li><code>Math.sqrt()</code>\uFF1A\u5E73\u65B9\u6839</li><li><code>Math.log()</code>\uFF1A\u81EA\u7136\u5BF9\u6570</li><li><code>Math.exp()</code>\uFF1A<code>e</code>\u7684\u6307\u6570</li><li><code>Math.round()</code>\uFF1A\u56DB\u820D\u4E94\u5165</li><li><code>Math.random()</code>\uFF1A\u968F\u673A\u6570</li></ul><h3 id="math-abs" tabindex="-1"><a class="header-anchor" href="#math-abs" aria-hidden="true">#</a> Math.abs()</h3><p><code>Math.abs</code>\u65B9\u6CD5\u8FD4\u56DE\u53C2\u6570\u503C\u7684\u7EDD\u5BF9\u503C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Math.abs(1) // 1
Math.abs(-1) // 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="math-max-math-min" tabindex="-1"><a class="header-anchor" href="#math-max-math-min" aria-hidden="true">#</a> Math.max()\uFF0CMath.min()</h3><p><code>Math.max</code>\u65B9\u6CD5\u8FD4\u56DE\u53C2\u6570\u4E4B\u4E2D\u6700\u5927\u7684\u90A3\u4E2A\u503C\uFF0C<code>Math.min</code>\u8FD4\u56DE\u6700\u5C0F\u7684\u90A3\u4E2A\u503C\u3002\u5982\u679C\u53C2\u6570\u4E3A\u7A7A, <code>Math.min</code>\u8FD4\u56DE<code>Infinity</code>, <code>Math.max</code>\u8FD4\u56DE<code>-Infinity</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Math.max(2, -1, 5) // 5
Math.min(2, -1, 5) // -1
Math.min() // Infinity
Math.max() // -Infinity
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="math-floor-math-ceil" tabindex="-1"><a class="header-anchor" href="#math-floor-math-ceil" aria-hidden="true">#</a> Math.floor()\uFF0CMath.ceil()</h3><p><code>Math.floor</code>\u65B9\u6CD5\u8FD4\u56DE\u5C0F\u4E8E\u6216\u7B49\u4E8E\u53C2\u6570\u503C\u7684\u6700\u5927\u6574\u6570\uFF08\u5730\u677F\u503C\uFF09\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Math.floor(3.2) // 3
Math.floor(-3.2) // -4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Math.ceil</code>\u65B9\u6CD5\u8FD4\u56DE\u5927\u4E8E\u6216\u7B49\u4E8E\u53C2\u6570\u503C\u7684\u6700\u5C0F\u6574\u6570\uFF08\u5929\u82B1\u677F\u503C\uFF09\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Math.ceil(3.2) // 4
Math.ceil(-3.2) // -3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u7ED3\u5408\u8D77\u6765\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u603B\u662F\u8FD4\u56DE\u6570\u503C\u7684\u6574\u6570\u90E8\u5206\u7684\u51FD\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function ToInteger(x) {
  x = Number(x);
  return x &lt; 0 ? Math.ceil(x) : Math.floor(x);
}

ToInteger(3.2) // 3
ToInteger(3.5) // 3
ToInteger(3.8) // 3
ToInteger(-3.2) // -3
ToInteger(-3.5) // -3
ToInteger(-3.8) // -3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u4E0D\u7BA1\u6B63\u6570\u6216\u8D1F\u6570\uFF0C<code>ToInteger</code>\u51FD\u6570\u603B\u662F\u8FD4\u56DE\u4E00\u4E2A\u6570\u503C\u7684\u6574\u6570\u90E8\u5206\u3002</p><h3 id="math-round" tabindex="-1"><a class="header-anchor" href="#math-round" aria-hidden="true">#</a> Math.round()</h3><p><code>Math.round</code>\u65B9\u6CD5\u7528\u4E8E\u56DB\u820D\u4E94\u5165\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Math.round(0.1) // 0
Math.round(0.5) // 1
Math.round(0.6) // 1

// \u7B49\u540C\u4E8E
Math.floor(x + 0.5)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C\u5B83\u5BF9\u8D1F\u6570\u7684\u5904\u7406\uFF08\u4E3B\u8981\u662F\u5BF9<code>0.5</code>\u7684\u5904\u7406\uFF09\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Math.round(-1.1) // -1
Math.round(-1.5) // -1
Math.round(-1.6) // -2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="math-pow" tabindex="-1"><a class="header-anchor" href="#math-pow" aria-hidden="true">#</a> Math.pow()</h3><p><code>Math.pow</code>\u65B9\u6CD5\u8FD4\u56DE\u4EE5\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u5E95\u6570\u3001\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u6307\u6570\u7684\u5E42\u8FD0\u7B97\u503C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u7B49\u540C\u4E8E 2 ** 2
Math.pow(2, 2) // 4
// \u7B49\u540C\u4E8E 2 ** 3
Math.pow(2, 3) // 8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u662F\u8BA1\u7B97\u5706\u9762\u79EF\u7684\u65B9\u6CD5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var radius = 20;
var area = Math.PI * Math.pow(radius, 2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="math-sqrt" tabindex="-1"><a class="header-anchor" href="#math-sqrt" aria-hidden="true">#</a> Math.sqrt()</h3><p><code>Math.sqrt</code>\u65B9\u6CD5\u8FD4\u56DE\u53C2\u6570\u503C\u7684\u5E73\u65B9\u6839\u3002\u5982\u679C\u53C2\u6570\u662F\u4E00\u4E2A\u8D1F\u503C\uFF0C\u5219\u8FD4\u56DE<code>NaN</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Math.sqrt(4) // 2
Math.sqrt(-4) // NaN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="math-log" tabindex="-1"><a class="header-anchor" href="#math-log" aria-hidden="true">#</a> Math.log()</h3><p><code>Math.log</code>\u65B9\u6CD5\u8FD4\u56DE\u4EE5<code>e</code>\u4E3A\u5E95\u7684\u81EA\u7136\u5BF9\u6570\u503C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Math.log(Math.E) // 1
Math.log(10) // 2.302585092994046
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u8981\u8BA1\u7B97\u4EE510\u4E3A\u5E95\u7684\u5BF9\u6570\uFF0C\u53EF\u4EE5\u5148\u7528<code>Math.log</code>\u6C42\u51FA\u81EA\u7136\u5BF9\u6570\uFF0C\u7136\u540E\u9664\u4EE5<code>Math.LN10</code>\uFF1B\u6C42\u4EE52\u4E3A\u5E95\u7684\u5BF9\u6570\uFF0C\u53EF\u4EE5\u9664\u4EE5<code>Math.LN2</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Math.log(100)/Math.LN10 // 2
Math.log(8)/Math.LN2 // 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="math-exp" tabindex="-1"><a class="header-anchor" href="#math-exp" aria-hidden="true">#</a> Math.exp()</h3><p><code>Math.exp</code>\u65B9\u6CD5\u8FD4\u56DE\u5E38\u6570<code>e</code>\u7684\u53C2\u6570\u6B21\u65B9\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Math.exp(1) // 2.718281828459045
Math.exp(3) // 20.085536923187668
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="math-random" tabindex="-1"><a class="header-anchor" href="#math-random" aria-hidden="true">#</a> Math.random()</h3><p><code>Math.random()</code>\u8FD4\u56DE0\u52301\u4E4B\u95F4\u7684\u4E00\u4E2A\u4F2A\u968F\u673A\u6570\uFF0C\u53EF\u80FD\u7B49\u4E8E0\uFF0C\u4F46\u662F\u4E00\u5B9A\u5C0F\u4E8E1\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Math.random() // 0.7151307314634323
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4EFB\u610F\u8303\u56F4\u7684\u968F\u673A\u6570\u751F\u6210\u51FD\u6570\u5982\u4E0B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

getRandomArbitrary(1.5, 6.5)
// 2.4942810038223864
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EFB\u610F\u8303\u56F4\u7684\u968F\u673A\u6574\u6570\u751F\u6210\u51FD\u6570\u5982\u4E0B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(1, 6) // 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD4\u56DE\u968F\u673A\u5B57\u7B26\u7684\u4F8B\u5B50\u5982\u4E0B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function random_str(length) {
  var ALPHABET = &#39;ABCDEFGHIJKLMNOPQRSTUVWXYZ&#39;;
  ALPHABET += &#39;abcdefghijklmnopqrstuvwxyz&#39;;
  ALPHABET += &#39;0123456789-_&#39;;
  var str = &#39;&#39;;
  for (var i = 0; i &lt; length; ++i) {
    var rand = Math.floor(Math.random() * ALPHABET.length);
    str += ALPHABET.substring(rand, rand + 1);
  }
  return str;
}

random_str(6) // &quot;NdQKOr&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>random_str</code>\u51FD\u6570\u63A5\u53D7\u4E00\u4E2A\u6574\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD4\u56DE\u53D8\u91CF<code>ALPHABET</code>\u5185\u7684\u968F\u673A\u5B57\u7B26\u6240\u7EC4\u6210\u7684\u6307\u5B9A\u957F\u5EA6\u7684\u5B57\u7B26\u4E32\u3002</p><h3 id="\u4E09\u89D2\u51FD\u6570\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E09\u89D2\u51FD\u6570\u65B9\u6CD5" aria-hidden="true">#</a> \u4E09\u89D2\u51FD\u6570\u65B9\u6CD5</h3><p><code>Math</code>\u5BF9\u8C61\u8FD8\u63D0\u4F9B\u4E00\u7CFB\u5217\u4E09\u89D2\u51FD\u6570\u65B9\u6CD5\u3002</p><ul><li><code>Math.sin()</code>\uFF1A\u8FD4\u56DE\u53C2\u6570\u7684\u6B63\u5F26\uFF08\u53C2\u6570\u4E3A\u5F27\u5EA6\u503C\uFF09</li><li><code>Math.cos()</code>\uFF1A\u8FD4\u56DE\u53C2\u6570\u7684\u4F59\u5F26\uFF08\u53C2\u6570\u4E3A\u5F27\u5EA6\u503C\uFF09</li><li><code>Math.tan()</code>\uFF1A\u8FD4\u56DE\u53C2\u6570\u7684\u6B63\u5207\uFF08\u53C2\u6570\u4E3A\u5F27\u5EA6\u503C\uFF09</li><li><code>Math.asin()</code>\uFF1A\u8FD4\u56DE\u53C2\u6570\u7684\u53CD\u6B63\u5F26\uFF08\u8FD4\u56DE\u503C\u4E3A\u5F27\u5EA6\u503C\uFF09</li><li><code>Math.acos()</code>\uFF1A\u8FD4\u56DE\u53C2\u6570\u7684\u53CD\u4F59\u5F26\uFF08\u8FD4\u56DE\u503C\u4E3A\u5F27\u5EA6\u503C\uFF09</li><li><code>Math.atan()</code>\uFF1A\u8FD4\u56DE\u53C2\u6570\u7684\u53CD\u6B63\u5207\uFF08\u8FD4\u56DE\u503C\u4E3A\u5F27\u5EA6\u503C\uFF09</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Math.sin(0) // 0
Math.cos(0) // 1
Math.tan(0) // 0

Math.sin(Math.PI / 2) // 1

Math.asin(1) // 1.5707963267948966
Math.acos(1) // 0
Math.atan(1) // 0.7853981633974483
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,60);function n(l,s){return i}var r=e(d,[["render",n],["__file","math.html.vue"]]);export{r as default};
