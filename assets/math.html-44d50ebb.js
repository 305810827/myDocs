import{_ as e,o as a,c as d,a as i}from"./app-53705635.js";const n={},l=i(`<h1 id="math-对象" tabindex="-1"><a class="header-anchor" href="#math-对象" aria-hidden="true">#</a> Math 对象</h1><p>网道（WangDoc.com），互联网文档计划</p><p><code>Math</code>是 JavaScript 的原生对象，提供各种数学功能。该对象不是构造函数，不能生成实例，所有的属性和方法都必须在<code>Math</code>对象上调用。</p><h2 id="静态属性" tabindex="-1"><a class="header-anchor" href="#静态属性" aria-hidden="true">#</a> 静态属性</h2><p><code>Math</code>对象的静态属性，提供以下一些数学常数。</p><ul><li><code>Math.E</code>：常数<code>e</code>。</li><li><code>Math.LN2</code>：2 的自然对数。</li><li><code>Math.LN10</code>：10 的自然对数。</li><li><code>Math.LOG2E</code>：以 2 为底的<code>e</code>的对数。</li><li><code>Math.LOG10E</code>：以 10 为底的<code>e</code>的对数。</li><li><code>Math.PI</code>：常数<code>π</code>。</li><li><code>Math.SQRT1_2</code>：0.5 的平方根。</li><li><code>Math.SQRT2</code>：2 的平方根。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Math.E // 2.718281828459045
Math.LN2 // 0.6931471805599453
Math.LN10 // 2.302585092994046
Math.LOG2E // 1.4426950408889634
Math.LOG10E // 0.4342944819032518
Math.PI // 3.141592653589793
Math.SQRT1_2 // 0.7071067811865476
Math.SQRT2 // 1.4142135623730951
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些属性都是只读的，不能修改。</p><h2 id="静态方法" tabindex="-1"><a class="header-anchor" href="#静态方法" aria-hidden="true">#</a> 静态方法</h2><p><code>Math</code>对象提供以下一些静态方法。</p><ul><li><code>Math.abs()</code>：绝对值</li><li><code>Math.ceil()</code>：向上取整</li><li><code>Math.floor()</code>：向下取整</li><li><code>Math.max()</code>：最大值</li><li><code>Math.min()</code>：最小值</li><li><code>Math.pow()</code>：幂运算</li><li><code>Math.sqrt()</code>：平方根</li><li><code>Math.log()</code>：自然对数</li><li><code>Math.exp()</code>：<code>e</code>的指数</li><li><code>Math.round()</code>：四舍五入</li><li><code>Math.random()</code>：随机数</li></ul><h3 id="math-abs" tabindex="-1"><a class="header-anchor" href="#math-abs" aria-hidden="true">#</a> Math.abs()</h3><p><code>Math.abs</code>方法返回参数值的绝对值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Math.abs(1) // 1
Math.abs(-1) // 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="math-max-math-min" tabindex="-1"><a class="header-anchor" href="#math-max-math-min" aria-hidden="true">#</a> Math.max()，Math.min()</h3><p><code>Math.max</code>方法返回参数之中最大的那个值，<code>Math.min</code>返回最小的那个值。如果参数为空, <code>Math.min</code>返回<code>Infinity</code>, <code>Math.max</code>返回<code>-Infinity</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Math.max(2, -1, 5) // 5
Math.min(2, -1, 5) // -1
Math.min() // Infinity
Math.max() // -Infinity
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="math-floor-math-ceil" tabindex="-1"><a class="header-anchor" href="#math-floor-math-ceil" aria-hidden="true">#</a> Math.floor()，Math.ceil()</h3><p><code>Math.floor</code>方法返回小于或等于参数值的最大整数（地板值）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Math.floor(3.2) // 3
Math.floor(-3.2) // -4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Math.ceil</code>方法返回大于或等于参数值的最小整数（天花板值）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Math.ceil(3.2) // 4
Math.ceil(-3.2) // -3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这两个方法可以结合起来，实现一个总是返回数值的整数部分的函数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function ToInteger(x) {
  x = Number(x);
  return x &lt; 0 ? Math.ceil(x) : Math.floor(x);
}

ToInteger(3.2) // 3
ToInteger(3.5) // 3
ToInteger(3.8) // 3
ToInteger(-3.2) // -3
ToInteger(-3.5) // -3
ToInteger(-3.8) // -3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，不管正数或负数，<code>ToInteger</code>函数总是返回一个数值的整数部分。</p><h3 id="math-round" tabindex="-1"><a class="header-anchor" href="#math-round" aria-hidden="true">#</a> Math.round()</h3><p><code>Math.round</code>方法用于四舍五入。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Math.round(0.1) // 0
Math.round(0.5) // 1
Math.round(0.6) // 1

// 等同于
Math.floor(x + 0.5)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，它对负数的处理（主要是对<code>0.5</code>的处理）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Math.round(-1.1) // -1
Math.round(-1.5) // -1
Math.round(-1.6) // -2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="math-pow" tabindex="-1"><a class="header-anchor" href="#math-pow" aria-hidden="true">#</a> Math.pow()</h3><p><code>Math.pow</code>方法返回以第一个参数为底数、第二个参数为指数的幂运算值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 等同于 2 ** 2
Math.pow(2, 2) // 4
// 等同于 2 ** 3
Math.pow(2, 3) // 8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是计算圆面积的方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var radius = 20;
var area = Math.PI * Math.pow(radius, 2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="math-sqrt" tabindex="-1"><a class="header-anchor" href="#math-sqrt" aria-hidden="true">#</a> Math.sqrt()</h3><p><code>Math.sqrt</code>方法返回参数值的平方根。如果参数是一个负值，则返回<code>NaN</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Math.sqrt(4) // 2
Math.sqrt(-4) // NaN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="math-log" tabindex="-1"><a class="header-anchor" href="#math-log" aria-hidden="true">#</a> Math.log()</h3><p><code>Math.log</code>方法返回以<code>e</code>为底的自然对数值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Math.log(Math.E) // 1
Math.log(10) // 2.302585092994046
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要计算以10为底的对数，可以先用<code>Math.log</code>求出自然对数，然后除以<code>Math.LN10</code>；求以2为底的对数，可以除以<code>Math.LN2</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Math.log(100)/Math.LN10 // 2
Math.log(8)/Math.LN2 // 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="math-exp" tabindex="-1"><a class="header-anchor" href="#math-exp" aria-hidden="true">#</a> Math.exp()</h3><p><code>Math.exp</code>方法返回常数<code>e</code>的参数次方。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Math.exp(1) // 2.718281828459045
Math.exp(3) // 20.085536923187668
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="math-random" tabindex="-1"><a class="header-anchor" href="#math-random" aria-hidden="true">#</a> Math.random()</h3><p><code>Math.random()</code>返回0到1之间的一个伪随机数，可能等于0，但是一定小于1。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Math.random() // 0.7151307314634323
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>任意范围的随机数生成函数如下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

getRandomArbitrary(1.5, 6.5)
// 2.4942810038223864
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>任意范围的随机整数生成函数如下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(1, 6) // 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回随机字符的例子如下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function random_str(length) {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>random_str</code>函数接受一个整数作为参数，返回变量<code>ALPHABET</code>内的随机字符所组成的指定长度的字符串。</p><h3 id="三角函数方法" tabindex="-1"><a class="header-anchor" href="#三角函数方法" aria-hidden="true">#</a> 三角函数方法</h3><p><code>Math</code>对象还提供一系列三角函数方法。</p><ul><li><code>Math.sin()</code>：返回参数的正弦（参数为弧度值）</li><li><code>Math.cos()</code>：返回参数的余弦（参数为弧度值）</li><li><code>Math.tan()</code>：返回参数的正切（参数为弧度值）</li><li><code>Math.asin()</code>：返回参数的反正弦（返回值为弧度值）</li><li><code>Math.acos()</code>：返回参数的反余弦（返回值为弧度值）</li><li><code>Math.atan()</code>：返回参数的反正切（返回值为弧度值）</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Math.sin(0) // 0
Math.cos(0) // 1
Math.tan(0) // 0

Math.sin(Math.PI / 2) // 1

Math.asin(1) // 1.5707963267948966
Math.acos(1) // 0
Math.atan(1) // 0.7853981633974483
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,60),t=[l];function s(c,r){return a(),d("div",null,t)}const v=e(n,[["render",s],["__file","math.html.vue"]]);export{v as default};
