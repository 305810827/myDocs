import{_ as e,o as d,c as i,a as n}from"./app-53705635.js";const a={},s=n(`<h1 id="array-对象" tabindex="-1"><a class="header-anchor" href="#array-对象" aria-hidden="true">#</a> Array 对象</h1><p><code>Array</code>是 JavaScript 的原生对象，同时也是一个构造函数，可以用它生成新的数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = new Array(2);
arr.length // 2
arr // [ empty x 2 ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>Array()</code>构造函数的参数<code>2</code>，表示生成一个两个成员的数组，每个位置都是空值。</p><p>如果没有使用<code>new</code>关键字，运行结果也是一样的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = Array(2);
// 等同于
var arr = new Array(2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>考虑到语义性，以及与其他构造函数用法保持一致，建议总是加上<code>new</code>。</p><p><code>Array()</code>构造函数有一个很大的缺陷，不同的参数个数会导致不一致的行为。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 无参数时，返回一个空数组
new Array() // []

// 单个正整数参数，表示返回的新数组的长度
new Array(1) // [ empty ]
new Array(2) // [ empty x 2 ]

// 非正整数的数值作为参数，会报错
new Array(3.2) // RangeError: Invalid array length
new Array(-3) // RangeError: Invalid array length

// 单个非数值（比如字符串、布尔值、对象等）作为参数，
// 则该参数是返回的新数组的成员
new Array(&#39;abc&#39;) // [&#39;abc&#39;]
new Array([1]) // [Array[1]]

// 多参数时，所有参数都是返回的新数组的成员
new Array(1, 2) // [1, 2]
new Array(&#39;a&#39;, &#39;b&#39;, &#39;c&#39;) // [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，<code>Array()</code>作为构造函数，行为很不一致。因此，不建议使用它生成新数组，直接使用数组字面量是更好的做法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// bad
var arr = new Array(1, 2);

// good
var arr = [1, 2];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，如果参数是一个正整数，返回数组的成员都是空位。虽然读取的时候返回<code>undefined</code>，但实际上该位置没有任何值。虽然这时可以读取到<code>length</code>属性，但是取不到键名。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = new Array(3);
var b = [undefined, undefined, undefined];

a.length // 3
b.length // 3

a[0] // undefined
b[0] // undefined

0 in a // false
0 in b // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>a</code>是<code>Array()</code>生成的一个长度为3的空数组，<code>b</code>是一个三个成员都是<code>undefined</code>的数组，这两个数组是不一样的。读取键值的时候，<code>a</code>和<code>b</code>都返回<code>undefined</code>，但是<code>a</code>的键名（成员的序号）都是空的，<code>b</code>的键名是有值的。</p><h2 id="静态方法" tabindex="-1"><a class="header-anchor" href="#静态方法" aria-hidden="true">#</a> 静态方法</h2><h3 id="array-isarray" tabindex="-1"><a class="header-anchor" href="#array-isarray" aria-hidden="true">#</a> Array.isArray()</h3><p><code>Array.isArray</code>方法返回一个布尔值，表示参数是否为数组。它可以弥补<code>typeof</code>运算符的不足。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1, 2, 3];

typeof arr // &quot;object&quot;
Array.isArray(arr) // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>typeof</code>运算符只能显示数组的类型是<code>Object</code>，而<code>Array.isArray</code>方法可以识别数组。</p><h2 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法" aria-hidden="true">#</a> 实例方法</h2><h3 id="valueof-tostring" tabindex="-1"><a class="header-anchor" href="#valueof-tostring" aria-hidden="true">#</a> valueOf()，toString()</h3><p><code>valueOf</code>方法是一个所有对象都拥有的方法，表示对该对象求值。不同对象的<code>valueOf</code>方法不尽一致，数组的<code>valueOf</code>方法返回数组本身。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1, 2, 3];
arr.valueOf() // [1, 2, 3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>toString</code>方法也是对象的通用方法，数组的<code>toString</code>方法返回数组的字符串形式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1, 2, 3];
arr.toString() // &quot;1,2,3&quot;

var arr = [1, 2, 3, [4, 5, 6]];
arr.toString() // &quot;1,2,3,4,5,6&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="push-pop" tabindex="-1"><a class="header-anchor" href="#push-pop" aria-hidden="true">#</a> push()，pop()</h3><p><code>push</code>方法用于在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [];

arr.push(1) // 1
arr.push(&#39;a&#39;) // 2
arr.push(true, {}) // 4
arr // [1, &#39;a&#39;, true, {}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码使用<code>push</code>方法，往数组中添加了四个成员。</p><p><code>pop</code>方法用于删除数组的最后一个元素，并返回该元素。注意，该方法会改变原数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];

arr.pop() // &#39;c&#39;
arr // [&#39;a&#39;, &#39;b&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对空数组使用<code>pop</code>方法，不会报错，而是返回<code>undefined</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[].pop() // undefined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>push</code>和<code>pop</code>结合使用，就构成了“后进先出”的栈结构（stack）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [];
arr.push(1, 2);
arr.push(3);
arr.pop();
arr // [1, 2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>3</code>是最后进入数组的，但是最早离开数组。</p><h3 id="shift-unshift" tabindex="-1"><a class="header-anchor" href="#shift-unshift" aria-hidden="true">#</a> shift()，unshift()</h3><p><code>shift()</code>方法用于删除数组的第一个元素，并返回该元素。注意，该方法会改变原数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];

a.shift() // &#39;a&#39;
a // [&#39;b&#39;, &#39;c&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，使用<code>shift()</code>方法以后，原数组就变了。</p><p><code>shift()</code>方法可以遍历并清空一个数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var list = [1, 2, 3, 4];
var item;

while (item = list.shift()) {
  console.log(item);
}

list // []
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码通过<code>list.shift()</code>方法每次取出一个元素，从而遍历数组。它的前提是数组元素不能是<code>0</code>或任何布尔值等于<code>false</code>的元素，因此这样的遍历不是很可靠。</p><p><code>push()</code>和<code>shift()</code>结合使用，就构成了“先进先出”的队列结构（queue）。</p><p><code>unshift()</code>方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];

a.unshift(&#39;x&#39;); // 4
a // [&#39;x&#39;, &#39;a&#39;, &#39;b&#39;, &#39;c&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>unshift()</code>方法可以接受多个参数，这些参数都会添加到目标数组头部。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [ &#39;c&#39;, &#39;d&#39; ];
arr.unshift(&#39;a&#39;, &#39;b&#39;) // 4
arr // [ &#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39; ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> join()</h3><p><code>join()</code>方法以指定参数作为分隔符，将所有数组成员连接为一个字符串返回。如果不提供参数，默认用逗号分隔。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = [1, 2, 3, 4];

a.join(&#39; &#39;) // &#39;1 2 3 4&#39;
a.join(&#39; | &#39;) // &quot;1 | 2 | 3 | 4&quot;
a.join() // &quot;1,2,3,4&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果数组成员是<code>undefined</code>或<code>null</code>或空位，会被转成空字符串。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[undefined, null].join(&#39;#&#39;)
// &#39;#&#39;

[&#39;a&#39;,, &#39;b&#39;].join(&#39;-&#39;)
// &#39;a--b&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过<code>call</code>方法，这个方法也可以用于字符串或类似数组的对象。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.prototype.join.call(&#39;hello&#39;, &#39;-&#39;)
// &quot;h-e-l-l-o&quot;

var obj = { 0: &#39;a&#39;, 1: &#39;b&#39;, length: 2 };
Array.prototype.join.call(obj, &#39;-&#39;)
// &#39;a-b&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="concat" tabindex="-1"><a class="header-anchor" href="#concat" aria-hidden="true">#</a> concat()</h3><p><code>concat</code>方法用于多个数组的合并。它将新数组的成员，添加到原数组成员的后部，然后返回一个新数组，原数组不变。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[&#39;hello&#39;].concat([&#39;world&#39;])
// [&quot;hello&quot;, &quot;world&quot;]

[&#39;hello&#39;].concat([&#39;world&#39;], [&#39;!&#39;])
// [&quot;hello&quot;, &quot;world&quot;, &quot;!&quot;]

[].concat({a: 1}, {b: 2})
// [{ a: 1 }, { b: 2 }]

[2].concat({a: 1})
// [2, {a: 1}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了数组作为参数，<code>concat</code>也接受其他类型的值作为参数，添加到目标数组尾部。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[1, 2, 3].concat(4, 5, 6)
// [1, 2, 3, 4, 5, 6]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果数组成员包括对象，<code>concat</code>方法返回当前数组的一个浅拷贝。所谓“浅拷贝”，指的是新数组拷贝的是对象的引用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = { a: 1 };
var oldArray = [obj];

var newArray = oldArray.concat();

obj.a = 2;
newArray[0].a // 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，原数组包含一个对象，<code>concat</code>方法生成的新数组包含这个对象的引用。所以，改变原对象以后，新数组跟着改变。</p><h3 id="reverse" tabindex="-1"><a class="header-anchor" href="#reverse" aria-hidden="true">#</a> reverse()</h3><p><code>reverse</code>方法用于颠倒排列数组元素，返回改变后的数组。注意，该方法将改变原数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];

a.reverse() // [&quot;c&quot;, &quot;b&quot;, &quot;a&quot;]
a // [&quot;c&quot;, &quot;b&quot;, &quot;a&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="slice" tabindex="-1"><a class="header-anchor" href="#slice" aria-hidden="true">#</a> slice()</h3><p><code>slice()</code>方法用于提取目标数组的一部分，返回一个新数组，原数组不变。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>arr.slice(start, end);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>它的第一个参数为起始位置（从0开始，会包括在返回的新数组之中），第二个参数为终止位置（但该位置的元素本身不包括在内）。如果省略第二个参数，则一直返回到原数组的最后一个成员。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];

a.slice(0) // [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]
a.slice(1) // [&quot;b&quot;, &quot;c&quot;]
a.slice(1, 2) // [&quot;b&quot;]
a.slice(2, 6) // [&quot;c&quot;]
a.slice() // [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，最后一个例子<code>slice()</code>没有参数，实际上等于返回一个原数组的拷贝。</p><p>如果<code>slice()</code>方法的参数是负数，则表示倒数计算的位置。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];
a.slice(-2) // [&quot;b&quot;, &quot;c&quot;]
a.slice(-2, -1) // [&quot;b&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>-2</code>表示倒数计算的第二个位置，<code>-1</code>表示倒数计算的第一个位置。</p><p>如果第一个参数大于等于数组长度，或者第二个参数小于第一个参数，则返回空数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];
a.slice(4) // []
a.slice(2, 1) // []
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>slice()</code>方法的一个重要应用，是将类似数组的对象转为真正的数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.prototype.slice.call({ 0: &#39;a&#39;, 1: &#39;b&#39;, length: 2 })
// [&#39;a&#39;, &#39;b&#39;]

Array.prototype.slice.call(document.querySelectorAll(&quot;div&quot;));
Array.prototype.slice.call(arguments);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的参数都不是数组，但是通过<code>call</code>方法，在它们上面调用<code>slice()</code>方法，就可以把它们转为真正的数组。</p><h3 id="splice" tabindex="-1"><a class="header-anchor" href="#splice" aria-hidden="true">#</a> splice()</h3><p><code>splice()</code>方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。注意，该方法会改变原数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>arr.splice(start, count, addElement1, addElement2, ...);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>splice</code>的第一个参数是删除的起始位置（从0开始），第二个参数是被删除的元素个数。如果后面还有更多的参数，则表示这些就是要被插入数组的新元素。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;, &#39;f&#39;];
a.splice(4, 2) // [&quot;e&quot;, &quot;f&quot;]
a // [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码从原数组4号位置，删除了两个数组成员。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;, &#39;f&#39;];
a.splice(4, 2, 1, 2) // [&quot;e&quot;, &quot;f&quot;]
a // [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, 1, 2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码除了删除成员，还插入了两个新成员。</p><p>起始位置如果是负数，就表示从倒数位置开始删除。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;, &#39;f&#39;];
a.splice(-4, 2) // [&quot;c&quot;, &quot;d&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码表示，从倒数第四个位置<code>c</code>开始删除两个成员。</p><p>如果只是单纯地插入元素，<code>splice</code>方法的第二个参数可以设为<code>0</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = [1, 1, 1];

a.splice(1, 0, 2) // []
a // [1, 2, 1, 1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果只提供第一个参数，等同于将原数组在指定位置拆分成两个数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = [1, 2, 3, 4];
a.splice(2) // [3, 4]
a // [1, 2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort()</h3><p><code>sort</code>方法对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[&#39;d&#39;, &#39;c&#39;, &#39;b&#39;, &#39;a&#39;].sort()
// [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;]

[4, 3, 2, 1].sort()
// [1, 2, 3, 4]

[11, 101].sort()
// [101, 11]

[10111, 1101, 111].sort()
// [10111, 1101, 111]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的最后两个例子，需要特殊注意。<code>sort()</code>方法不是按照大小排序，而是按照字典顺序。也就是说，数值会被先转成字符串，再按照字典顺序进行比较，所以<code>101</code>排在<code>11</code>的前面。</p><p>如果想让<code>sort</code>方法按照自定义方式排序，可以传入一个函数作为参数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[10111, 1101, 111].sort(function (a, b) {
  return a - b;
})
// [111, 1101, 10111]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>sort</code>的参数函数本身接受两个参数，表示进行比较的两个数组成员。如果该函数的返回值大于<code>0</code>，表示第一个成员排在第二个成员后面；其他情况下，都是第一个元素排在第二个元素前面。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[
  { name: &quot;张三&quot;, age: 30 },
  { name: &quot;李四&quot;, age: 24 },
  { name: &quot;王五&quot;, age: 28  }
].sort(function (o1, o2) {
  return o1.age - o2.age;
})
// [
//   { name: &quot;李四&quot;, age: 24 },
//   { name: &quot;王五&quot;, age: 28  },
//   { name: &quot;张三&quot;, age: 30 }
// ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，自定义的排序函数应该返回数值，否则不同的浏览器可能有不同的实现，不能保证结果都一致。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// bad
[1, 4, 2, 6, 0, 6, 2, 6].sort((a, b) =&gt; a &gt; b)

// good
[1, 4, 2, 6, 0, 6, 2, 6].sort((a, b) =&gt; a - b)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，前一种排序算法返回的是布尔值，这是不推荐使用的。后一种是数值，才是更好的写法。</p><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map()</h3><p><code>map</code>方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var numbers = [1, 2, 3];

numbers.map(function (n) {
  return n + 1;
});
// [2, 3, 4]

numbers
// [1, 2, 3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>numbers</code>数组的所有成员依次执行参数函数，运行结果组成一个新数组返回，原数组没有变化。</p><p><code>map</code>方法接受一个函数作为参数。该函数调用时，<code>map</code>方法向它传入三个参数：当前成员、当前位置和数组本身。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[1, 2, 3].map(function(elem, index, arr) {
  return elem * index;
});
// [0, 2, 6]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>map</code>方法的回调函数有三个参数，<code>elem</code>为当前成员的值，<code>index</code>为当前成员的位置，<code>arr</code>为原数组（<code>[1, 2, 3]</code>）。</p><p><code>map</code>方法还可以接受第二个参数，用来绑定回调函数内部的<code>this</code>变量（详见《this 变量》一章）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];

[1, 2].map(function (e) {
  return this[e];
}, arr)
// [&#39;b&#39;, &#39;c&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码通过<code>map</code>方法的第二个参数，将回调函数内部的<code>this</code>对象，指向<code>arr</code>数组。</p><p>如果数组有空位，<code>map</code>方法的回调函数在这个位置不会执行，会跳过数组的空位。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var f = function (n) { return &#39;a&#39; };

[1, undefined, 2].map(f) // [&quot;a&quot;, &quot;a&quot;, &quot;a&quot;]
[1, null, 2].map(f) // [&quot;a&quot;, &quot;a&quot;, &quot;a&quot;]
[1, , 2].map(f) // [&quot;a&quot;, , &quot;a&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>map</code>方法不会跳过<code>undefined</code>和<code>null</code>，但是会跳过空位。</p><h3 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> forEach()</h3><p><code>forEach</code>方法与<code>map</code>方法很相似，也是对数组的所有成员依次执行参数函数。但是，<code>forEach</code>方法不返回值，只用来操作数据。这就是说，如果数组遍历的目的是为了得到返回值，那么使用<code>map</code>方法，否则使用<code>forEach</code>方法。</p><p><code>forEach</code>的用法与<code>map</code>方法一致，参数是一个函数，该函数同样接受三个参数：当前值、当前位置、整个数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function log(element, index, array) {
  console.log(&#39;[&#39; + index + &#39;] = &#39; + element);
}

[2, 5, 9].forEach(log);
// [0] = 2
// [1] = 5
// [2] = 9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>forEach</code>遍历数组不是为了得到返回值，而是为了在屏幕输出内容，所以不必使用<code>map</code>方法。</p><p><code>forEach</code>方法也可以接受第二个参数，绑定参数函数的<code>this</code>变量。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var out = [];

[1, 2, 3].forEach(function(elem) {
  this.push(elem * elem);
}, out);

out // [1, 4, 9]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，空数组<code>out</code>是<code>forEach</code>方法的第二个参数，结果，回调函数内部的<code>this</code>关键字就指向<code>out</code>。</p><p>注意，<code>forEach</code>方法无法中断执行，总是会将所有成员遍历完。如果希望符合某种条件时，就中断遍历，要使用<code>for</code>循环。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1, 2, 3];

for (var i = 0; i &lt; arr.length; i++) {
  if (arr[i] === 2) break;
  console.log(arr[i]);
}
// 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，执行到数组的第二个成员时，就会中断执行。<code>forEach</code>方法做不到这一点。</p><p><code>forEach</code>方法也会跳过数组的空位。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var log = function (n) {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>forEach</code>方法不会跳过<code>undefined</code>和<code>null</code>，但会跳过空位。</p><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter()</h3><p><code>filter</code>方法用于过滤数组成员，满足条件的成员组成一个新数组返回。</p><p>它的参数是一个函数，所有数组成员依次执行该函数，返回结果为<code>true</code>的成员组成一个新数组返回。该方法不会改变原数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[1, 2, 3, 4, 5].filter(function (elem) {
  return (elem &gt; 3);
})
// [4, 5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码将大于<code>3</code>的数组成员，作为一个新数组返回。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [0, 1, &#39;a&#39;, false];

arr.filter(Boolean)
// [1, &quot;a&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>filter</code>方法返回数组<code>arr</code>里面所有布尔值为<code>true</code>的成员。</p><p><code>filter</code>方法的参数函数可以接受三个参数：当前成员，当前位置和整个数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[1, 2, 3, 4, 5].filter(function (elem, index, arr) {
  return index % 2 === 0;
});
// [1, 3, 5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码返回偶数位置的成员组成的新数组。</p><p><code>filter</code>方法还可以接受第二个参数，用来绑定参数函数内部的<code>this</code>变量。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = { MAX: 3 };
var myFilter = function (item) {
  if (item &gt; this.MAX) return true;
};

var arr = [2, 8, 3, 4, 1, 3, 2, 9];
arr.filter(myFilter, obj) // [8, 4, 9]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，过滤器<code>myFilter</code>内部有<code>this</code>变量，它可以被<code>filter</code>方法的第二个参数<code>obj</code>绑定，返回大于<code>3</code>的成员。</p><h3 id="some-every" tabindex="-1"><a class="header-anchor" href="#some-every" aria-hidden="true">#</a> some()，every()</h3><p>这两个方法类似“断言”（assert），返回一个布尔值，表示判断数组成员是否符合某种条件。</p><p>它们接受一个函数作为参数，所有数组成员依次执行该函数。该函数接受三个参数：当前成员、当前位置和整个数组，然后返回一个布尔值。</p><p><code>some</code>方法是只要一个成员的返回值是<code>true</code>，则整个<code>some</code>方法的返回值就是<code>true</code>，否则返回<code>false</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1, 2, 3, 4, 5];
arr.some(function (elem, index, arr) {
  return elem &gt;= 3;
});
// true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，如果数组<code>arr</code>有一个成员大于等于3，<code>some</code>方法就返回<code>true</code>。</p><p><code>every</code>方法是所有成员的返回值都是<code>true</code>，整个<code>every</code>方法才返回<code>true</code>，否则返回<code>false</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1, 2, 3, 4, 5];
arr.every(function (elem, index, arr) {
  return elem &gt;= 3;
});
// false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，数组<code>arr</code>并非所有成员大于等于<code>3</code>，所以返回<code>false</code>。</p><p>注意，对于空数组，<code>some</code>方法返回<code>false</code>，<code>every</code>方法返回<code>true</code>，回调函数都不会执行。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function isEven(x) { return x % 2 === 0 }

[].some(isEven) // false
[].every(isEven) // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>some</code>和<code>every</code>方法还可以接受第二个参数，用来绑定参数函数内部的<code>this</code>变量。</p><h3 id="reduce-reduceright" tabindex="-1"><a class="header-anchor" href="#reduce-reduceright" aria-hidden="true">#</a> reduce()，reduceRight()</h3><p><code>reduce</code>方法和<code>reduceRight</code>方法依次处理数组的每个成员，最终累计为一个值。它们的差别是，<code>reduce</code>是从左到右处理（从第一个成员到最后一个成员），<code>reduceRight</code>则是从右到左（从最后一个成员到第一个成员），其他完全一样。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[1, 2, 3, 4, 5].reduce(function (a, b) {
  console.log(a, b);
  return a + b;
})
// 1 2
// 3 3
// 6 4
// 10 5
//最后结果：15
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>reduce</code>方法求出数组所有成员的和。第一次执行，<code>a</code>是数组的第一个成员<code>1</code>，<code>b</code>是数组的第二个成员<code>2</code>。第二次执行，<code>a</code>为上一轮的返回值<code>3</code>，<code>b</code>为第三个成员<code>3</code>。第三次执行，<code>a</code>为上一轮的返回值<code>6</code>，<code>b</code>为第四个成员<code>4</code>。第四次执行，<code>a</code>为上一轮返回值<code>10</code>，<code>b</code>为第五个成员<code>5</code>。至此所有成员遍历完成，整个方法的返回值就是最后一轮的返回值<code>15</code>。</p><p><code>reduce</code>方法和<code>reduceRight</code>方法的第一个参数都是一个函数。该函数接受以下四个参数。</p><ol><li>累积变量，默认为数组的第一个成员</li><li>当前变量，默认为数组的第二个成员</li><li>当前位置（从0开始）</li><li>原数组</li></ol><p>这四个参数之中，只有前两个是必须的，后两个则是可选的。</p><p>如果要对累积变量指定初值，可以把它放在<code>reduce</code>方法和<code>reduceRight</code>方法的第二个参数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[1, 2, 3, 4, 5].reduce(function (a, b) {
  return a + b;
}, 10);
// 25
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码指定参数<code>a</code>的初值为10，所以数组从10开始累加，最终结果为25。注意，这时<code>b</code>是从数组的第一个成员开始遍历。</p><p>上面的第二个参数相当于设定了默认值，处理空数组时尤其有用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function add(prev, cur) {
  return prev + cur;
}

[].reduce(add)
// TypeError: Reduce of empty array with no initial value
[].reduce(add, 1)
// 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，由于空数组取不到初始值，<code>reduce</code>方法会报错。这时，加上第二个参数，就能保证总是会返回一个值。</p><p>下面是一个<code>reduceRight</code>方法的例子。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function subtract(prev, cur) {
  return prev - cur;
}

[3, 2, 1].reduce(subtract) // 0
[3, 2, 1].reduceRight(subtract) // -4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>reduce</code>方法相当于<code>3</code>减去<code>2</code>再减去<code>1</code>，<code>reduceRight</code>方法相当于<code>1</code>减去<code>2</code>再减去<code>3</code>。</p><p>由于这两个方法会遍历数组，所以实际上还可以用来做一些遍历相关的操作。比如，找出字符长度最长的数组成员。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function findLongest(entries) {
  return entries.reduce(function (longest, entry) {
    return entry.length &gt; longest.length ? entry : longest;
  }, &#39;&#39;);
}

findLongest([&#39;aaa&#39;, &#39;bb&#39;, &#39;c&#39;]) // &quot;aaa&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>reduce</code>的参数函数会将字符长度较长的那个数组成员，作为累积值。这导致遍历所有成员之后，累积值就是字符长度最长的那个成员。</p><h3 id="indexof-lastindexof" tabindex="-1"><a class="header-anchor" href="#indexof-lastindexof" aria-hidden="true">#</a> indexOf()，lastIndexOf()</h3><p><code>indexOf</code>方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回<code>-1</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];

a.indexOf(&#39;b&#39;) // 1
a.indexOf(&#39;y&#39;) // -1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>indexOf</code>方法还可以接受第二个参数，表示搜索的开始位置。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;].indexOf(&#39;a&#39;, 1) // -1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码从1号位置开始搜索字符<code>a</code>，结果为<code>-1</code>，表示没有搜索到。</p><p><code>lastIndexOf</code>方法返回给定元素在数组中最后一次出现的位置，如果没有出现则返回<code>-1</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = [2, 5, 9, 2];
a.lastIndexOf(2) // 3
a.lastIndexOf(7) // -1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，这两个方法不能用来搜索<code>NaN</code>的位置，即它们无法确定数组成员是否包含<code>NaN</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[NaN].indexOf(NaN) // -1
[NaN].lastIndexOf(NaN) // -1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为这两个方法内部，使用严格相等运算符（<code>===</code>）进行比较，而<code>NaN</code>是唯一一个不等于自身的值。</p><h3 id="链式使用" tabindex="-1"><a class="header-anchor" href="#链式使用" aria-hidden="true">#</a> 链式使用</h3><p>上面这些数组方法之中，有不少返回的还是数组，所以可以链式使用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var users = [
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，先产生一个所有 Email 地址组成的数组，然后再过滤出以<code>t</code>开头的 Email 地址，最后将它打印出来。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2><ul><li>阮一峰 https://wangdoc.com/javascript/stdlib/array.html</li></ul>`,194),l=[s];function c(r,v){return d(),i("div",null,l)}const u=e(a,[["render",c],["__file","array.html.vue"]]);export{u as default};
