import{_ as e,o as d,c as n,a as i}from"./app-53705635.js";const t={},c=i(`<h1 id="object-对象" tabindex="-1"><a class="header-anchor" href="#object-对象" aria-hidden="true">#</a> Object 对象</h1><p>JavaScript 原生提供<code>Object</code>对象（注意起首的<code>O</code>是大写），本章介绍该对象原生的各种方法。</p><p>JavaScript 的所有其他对象都继承自<code>Object</code>对象，即那些对象都是<code>Object</code>的实例。</p><p><code>Object</code>对象的原生方法分成两类：<code>Object</code>本身的方法与<code>Object</code>的实例方法。</p><p><strong>（1）<code>Object</code>对象本身的方法</strong></p><p>所谓“本身的方法”就是直接定义在<code>Object</code>对象的方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Object.print = function (o) { console.log(o) };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，<code>print</code>方法就是直接定义在<code>Object</code>对象上。</p><p><strong>（2）<code>Object</code>的实例方法</strong></p><p>所谓实例方法就是定义在<code>Object</code>原型对象<code>Object.prototype</code>上的方法。它可以被<code>Object</code>实例直接使用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Object.prototype.print = function () {
  console.log(this);
};

var obj = new Object();
obj.print() // Object
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>Object.prototype</code>定义了一个<code>print</code>方法，然后生成一个<code>Object</code>的实例<code>obj</code>。<code>obj</code>直接继承了<code>Object.prototype</code>的属性和方法，可以直接使用<code>obj.print</code>调用<code>print</code>方法。也就是说，<code>obj</code>对象的<code>print</code>方法实质上就是调用<code>Object.prototype.print</code>方法。</p><p>关于原型对象<code>object.prototype</code>的详细解释，参见《面向对象编程》章节。这里只要知道，凡是定义在<code>Object.prototype</code>对象上面的属性和方法，将被所有实例对象共享就可以了。</p><p>以下先介绍<code>Object</code>作为函数的用法，然后再介绍<code>Object</code>对象的原生方法，分成对象自身的方法（又称为“静态方法”）和实例方法两部分。</p><h2 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> Object()</h2><p><code>Object</code>本身是一个函数，可以当作工具方法使用，将任意值转为对象。这个方法常用于保证某个值一定是对象。</p><p>如果参数为空（或者为<code>undefined</code>和<code>null</code>），<code>Object()</code>返回一个空对象。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = Object();
// 等同于
var obj = Object(undefined);
var obj = Object(null);

obj instanceof Object // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的含义，是将<code>undefined</code>和<code>null</code>转为对象，结果得到了一个空对象<code>obj</code>。</p><p><code>instanceof</code>运算符用来验证，一个对象是否为指定的构造函数的实例。<code>obj instanceof Object</code>返回<code>true</code>，就表示<code>obj</code>对象是<code>Object</code>的实例。</p><p>如果参数是原始类型的值，<code>Object</code>方法将其转为对应的包装对象的实例（参见《原始类型的包装对象》一章）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = Object(1);
obj instanceof Object // true
obj instanceof Number // true

var obj = Object(&#39;foo&#39;);
obj instanceof Object // true
obj instanceof String // true

var obj = Object(true);
obj instanceof Object // true
obj instanceof Boolean // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>Object</code>函数的参数是各种原始类型的值，转换成对象就是原始类型值对应的包装对象。</p><p>如果<code>Object</code>方法的参数是一个对象，它总是返回该对象，即不用转换。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [];
var obj = Object(arr); // 返回原数组
obj === arr // true

var value = {};
var obj = Object(value) // 返回原对象
obj === value // true

var fn = function () {};
var obj = Object(fn); // 返回原函数
obj === fn // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用这一点，可以写一个判断变量是否为对象的函数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function isObject(value) {
  return value === Object(value);
}

isObject([]) // true
isObject(true) // false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-构造函数" tabindex="-1"><a class="header-anchor" href="#object-构造函数" aria-hidden="true">#</a> Object 构造函数</h2><p><code>Object</code>不仅可以当作工具函数使用，还可以当作构造函数使用，即前面可以使用<code>new</code>命令。</p><p><code>Object</code>构造函数的首要用途，是直接通过它来生成新对象。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = new Object();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>注意，通过<code>var obj = new Object()</code>的写法生成新对象，与字面量的写法<code>var obj = {}</code>是等价的。或者说，后者只是前者的一种简便写法。</p></blockquote><p><code>Object</code>构造函数的用法与工具方法很相似，几乎一模一样。使用时，可以接受一个参数，如果该参数是一个对象，则直接返回这个对象；如果是一个原始类型的值，则返回该值对应的包装对象（详见《包装对象》一章）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var o1 = {a: 1};
var o2 = new Object(o1);
o1 === o2 // true

var obj = new Object(123);
obj instanceof Number // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然用法相似，但是<code>Object(value)</code>与<code>new Object(value)</code>两者的语义是不同的，<code>Object(value)</code>表示将<code>value</code>转成一个对象，<code>new Object(value)</code>则表示新生成一个对象，它的值是<code>value</code>。</p><h2 id="object-的静态方法" tabindex="-1"><a class="header-anchor" href="#object-的静态方法" aria-hidden="true">#</a> Object 的静态方法</h2><p>所谓“静态方法”，是指部署在<code>Object</code>对象自身的方法。</p><h3 id="keys" tabindex="-1"><a class="header-anchor" href="#keys" aria-hidden="true">#</a> keys()</h3><p><code>Object.keys</code>方法和<code>Object.getOwnPropertyNames</code>方法都用来遍历对象的属性。</p><p><code>Object.keys</code>方法的参数是一个对象，返回一个数组。该数组的成员都是该对象自身的（而不是继承的）所有属性名。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = {
  p1: 123,
  p2: 456
};

Object.keys(obj) // [&quot;p1&quot;, &quot;p2&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getownpropertynames" tabindex="-1"><a class="header-anchor" href="#getownpropertynames" aria-hidden="true">#</a> getOwnPropertyNames()</h3><p><code>Object.getOwnPropertyNames</code>方法与<code>Object.keys</code>类似，也是接受一个对象作为参数，返回一个数组，包含了该对象自身的所有属性名。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = {
  p1: 123,
  p2: 456
};

Object.getOwnPropertyNames(obj) // [&quot;p1&quot;, &quot;p2&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于一般的对象来说，<code>Object.keys()</code>和<code>Object.getOwnPropertyNames()</code>返回的结果是一样的。只有涉及不可枚举属性时，才会有不一样的结果。<code>Object.keys</code>方法只返回可枚举的属性（详见《对象属性的描述对象》一章），<code>Object.getOwnPropertyNames</code>方法还返回不可枚举的属性名。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = [&#39;Hello&#39;, &#39;World&#39;];

Object.keys(a) // [&quot;0&quot;, &quot;1&quot;]
Object.getOwnPropertyNames(a) // [&quot;0&quot;, &quot;1&quot;, &quot;length&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，数组的<code>length</code>属性是不可枚举的属性，所以只出现在<code>Object.getOwnPropertyNames</code>方法的返回结果中。</p><p>由于 JavaScript 没有提供计算对象属性个数的方法，所以可以用这两个方法代替。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = {
  p1: 123,
  p2: 456
};

Object.keys(obj).length // 2
Object.getOwnPropertyNames(obj).length // 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般情况下，几乎总是使用<code>Object.keys</code>方法，遍历对象的属性。</p><h3 id="其他方法" tabindex="-1"><a class="header-anchor" href="#其他方法" aria-hidden="true">#</a> 其他方法</h3><p>除了上面提到的两个方法，<code>Object</code>还有不少其他静态方法，将在后文逐一详细介绍。</p><p><strong>（1）对象属性模型的相关方法</strong></p><ul><li><code>Object.getOwnPropertyDescriptor()</code>：获取某个属性的描述对象。</li><li><code>Object.defineProperty()</code>：通过描述对象，定义某个属性。</li><li><code>Object.defineProperties()</code>：通过描述对象，定义多个属性。</li></ul><p><strong>（2）控制对象状态的方法</strong></p><ul><li><code>Object.preventExtensions()</code>：防止对象扩展。</li><li><code>Object.isExtensible()</code>：判断对象是否可扩展。</li><li><code>Object.seal()</code>：禁止对象配置。</li><li><code>Object.isSealed()</code>：判断一个对象是否可配置。</li><li><code>Object.freeze()</code>：冻结一个对象。</li><li><code>Object.isFrozen()</code>：判断一个对象是否被冻结。</li></ul><p><strong>（3）原型链相关方法</strong></p><ul><li><code>Object.create()</code>：该方法可以指定原型对象和属性，返回一个新的对象。</li><li><code>Object.getPrototypeOf()</code>：获取对象的<code>Prototype</code>对象。</li></ul><h2 id="object-的实例方法" tabindex="-1"><a class="header-anchor" href="#object-的实例方法" aria-hidden="true">#</a> Object 的实例方法</h2><p>除了静态方法，还有不少方法定义在<code>Object.prototype</code>对象。它们称为实例方法，所有<code>Object</code>的实例对象都继承了这些方法。</p><p><code>Object</code>实例对象的方法，主要有以下六个。</p><ul><li><code>Object.prototype.valueOf()</code>：返回当前对象对应的值。</li><li><code>Object.prototype.toString()</code>：返回当前对象对应的字符串形式。</li><li><code>Object.prototype.toLocaleString()</code>：返回当前对象对应的本地字符串形式。</li><li><code>Object.prototype.hasOwnProperty()</code>：判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性。</li><li><code>Object.prototype.isPrototypeOf()</code>：判断当前对象是否为另一个对象的原型。</li><li><code>Object.prototype.propertyIsEnumerable()</code>：判断某个属性是否可枚举。</li></ul><p>本节介绍前四个方法，另外两个方法将在后文相关章节介绍。</p><h3 id="valueof" tabindex="-1"><a class="header-anchor" href="#valueof" aria-hidden="true">#</a> valueOf()</h3><p><code>valueOf</code>方法的作用是返回一个对象的“值”，默认情况下返回对象本身。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = new Object();
obj.valueOf() === obj // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码比较<code>obj.valueOf()</code>与<code>obj</code>本身，两者是一样的。</p><p><code>valueOf</code>方法的主要用途是，JavaScript 自动类型转换时会默认调用这个方法（详见《数据类型转换》一章）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = new Object();
1 + obj // &quot;1[object Object]&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码将对象<code>obj</code>与数字<code>1</code>相加，这时 JavaScript 就会默认调用<code>valueOf()</code>方法，求出<code>obj</code>的值再与<code>1</code>相加。所以，如果自定义<code>valueOf</code>方法，就可以得到想要的结果。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = new Object();
obj.valueOf = function () {
  return 2;
};

1 + obj // 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码自定义了<code>obj</code>对象的<code>valueOf</code>方法，于是<code>1 + obj</code>就得到了<code>3</code>。这种方法就相当于用自定义的<code>obj.valueOf</code>，覆盖<code>Object.prototype.valueOf</code>。</p><h3 id="tostring" tabindex="-1"><a class="header-anchor" href="#tostring" aria-hidden="true">#</a> toString()</h3><p><code>toString</code>方法的作用是返回一个对象的字符串形式，默认情况下返回类型字符串。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var o1 = new Object();
o1.toString() // &quot;[object Object]&quot;

var o2 = {a:1};
o2.toString() // &quot;[object Object]&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码表示，对于一个对象调用<code>toString</code>方法，会返回字符串<code>[object Object]</code>，该字符串说明对象的类型。</p><p>字符串<code>[object Object]</code>本身没有太大的用处，但是通过自定义<code>toString</code>方法，可以让对象在自动类型转换时，得到想要的字符串形式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = new Object();

obj.toString = function () {
  return &#39;hello&#39;;
};

obj + &#39; &#39; + &#39;world&#39; // &quot;hello world&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码表示，当对象用于字符串加法时，会自动调用<code>toString</code>方法。由于自定义了<code>toString</code>方法，所以返回字符串<code>hello world</code>。</p><p>数组、字符串、函数、Date 对象都分别部署了自定义的<code>toString</code>方法，覆盖了<code>Object.prototype.toString</code>方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[1, 2, 3].toString() // &quot;1,2,3&quot;

&#39;123&#39;.toString() // &quot;123&quot;

(function () {
  return 123;
}).toString()
// &quot;function () {
//   return 123;
// }&quot;

(new Date()).toString()
// &quot;Tue May 10 2016 09:11:31 GMT+0800 (CST)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，数组、字符串、函数、Date 对象调用<code>toString</code>方法，并不会返回<code>[object Object]</code>，因为它们都自定义了<code>toString</code>方法，覆盖原始方法。</p><h3 id="tostring-1" tabindex="-1"><a class="header-anchor" href="#tostring-1" aria-hidden="true">#</a> toString()</h3><p><code>Object.prototype.toString</code>方法返回对象的类型字符串，因此可以用来判断一个值的类型。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = {};
obj.toString() // &quot;[object Object]&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码调用空对象的<code>toString</code>方法，结果返回一个字符串<code>object Object</code>，其中第二个<code>Object</code>表示该值的构造函数。这是一个十分有用的判断数据类型的方法。</p><p>由于实例对象可能会自定义<code>toString</code>方法，覆盖掉<code>Object.prototype.toString</code>方法，所以为了得到类型字符串，最好直接使用<code>Object.prototype.toString</code>方法。通过函数的<code>call</code>方法，可以在任意值上调用这个方法，帮助我们判断这个值的类型。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Object.prototype.toString.call(value)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码表示对<code>value</code>这个值调用<code>Object.prototype.toString</code>方法。</p><p>不同数据类型的<code>Object.prototype.toString</code>方法返回值如下。</p><ul><li>数值：返回<code>[object Number]</code>。</li><li>字符串：返回<code>[object String]</code>。</li><li>布尔值：返回<code>[object Boolean]</code>。</li><li>undefined：返回<code>[object Undefined]</code>。</li><li>null：返回<code>[object Null]</code>。</li><li>数组：返回<code>[object Array]</code>。</li><li>arguments 对象：返回<code>[object Arguments]</code>。</li><li>函数：返回<code>[object Function]</code>。</li><li>Error 对象：返回<code>[object Error]</code>。</li><li>Date 对象：返回<code>[object Date]</code>。</li><li>RegExp 对象：返回<code>[object RegExp]</code>。</li><li>其他对象：返回<code>[object Object]</code>。</li></ul><p>这就是说，<code>Object.prototype.toString</code>可以看出一个值到底是什么类型。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Object.prototype.toString.call(2) // &quot;[object Number]&quot;
Object.prototype.toString.call(&#39;&#39;) // &quot;[object String]&quot;
Object.prototype.toString.call(true) // &quot;[object Boolean]&quot;
Object.prototype.toString.call(undefined) // &quot;[object Undefined]&quot;
Object.prototype.toString.call(null) // &quot;[object Null]&quot;
Object.prototype.toString.call(Math) // &quot;[object Math]&quot;
Object.prototype.toString.call({}) // &quot;[object Object]&quot;
Object.prototype.toString.call([]) // &quot;[object Array]&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用这个特性，可以写出一个比<code>typeof</code>运算符更准确的类型判断函数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var type = function (o){
  var s = Object.prototype.toString.call(o);
  return s.match(/\\[object (.*?)\\]/)[1].toLowerCase();
};

type({}); // &quot;object&quot;
type([]); // &quot;array&quot;
type(5); // &quot;number&quot;
type(null); // &quot;null&quot;
type(); // &quot;undefined&quot;
type(/abcd/); // &quot;regex&quot;
type(new Date()); // &quot;date&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面这个<code>type</code>函数的基础上，还可以加上专门判断某种类型数据的方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var type = function (o){
  var s = Object.prototype.toString.call(o);
  return s.match(/\\[object (.*?)\\]/)[1].toLowerCase();
};

[&#39;Null&#39;,
 &#39;Undefined&#39;,
 &#39;Object&#39;,
 &#39;Array&#39;,
 &#39;String&#39;,
 &#39;Number&#39;,
 &#39;Boolean&#39;,
 &#39;Function&#39;,
 &#39;RegExp&#39;
].forEach(function (t) {
  type[&#39;is&#39; + t] = function (o) {
    return type(o) === t.toLowerCase();
  };
});

type.isObject({}) // true
type.isNumber(NaN) // true
type.isRegExp(/abc/) // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tolocalestring" tabindex="-1"><a class="header-anchor" href="#tolocalestring" aria-hidden="true">#</a> toLocaleString()</h3><p><code>Object.prototype.toLocaleString</code>方法与<code>toString</code>的返回结果相同，也是返回一个值的字符串形式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = {};
obj.toString(obj) // &quot;[object Object]&quot;
obj.toLocaleString(obj) // &quot;[object Object]&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个方法的主要作用是留出一个接口，让各种不同的对象实现自己版本的<code>toLocaleString</code>，用来返回针对某些地域的特定的值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var person = {
  toString: function () {
    return &#39;Henry Norman Bethune&#39;;
  },
  toLocaleString: function () {
    return &#39;白求恩&#39;;
  }
};

person.toString() // Henry Norman Bethune
person.toLocaleString() // 白求恩
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>toString()</code>方法返回对象的一般字符串形式，<code>toLocaleString()</code>方法返回本地的字符串形式。</p><p>目前，主要有三个对象自定义了<code>toLocaleString</code>方法。</p><ul><li>Array.prototype.toLocaleString()</li><li>Number.prototype.toLocaleString()</li><li>Date.prototype.toLocaleString()</li></ul><p>举例来说，日期的实例对象的<code>toString</code>和<code>toLocaleString</code>返回值就不一样，而且<code>toLocaleString</code>的返回值跟用户设定的所在地域相关。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var date = new Date();
date.toString() // &quot;Tue Jan 01 2018 12:01:33 GMT+0800 (CST)&quot;
date.toLocaleString() // &quot;1/01/2018, 12:01:33 PM&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hasownproperty" tabindex="-1"><a class="header-anchor" href="#hasownproperty" aria-hidden="true">#</a> hasOwnProperty()</h3><p><code>Object.prototype.hasOwnProperty</code>方法接受一个字符串作为参数，返回一个布尔值，表示该实例对象自身是否具有该属性。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = {
  p: 123
};

obj.hasOwnProperty(&#39;p&#39;) // true
obj.hasOwnProperty(&#39;toString&#39;) // false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，对象<code>obj</code>自身具有<code>p</code>属性，所以返回<code>true</code>。<code>toString</code>属性是继承的，所以返回<code>false</code>。</p>`,111),o=[c];function a(l,r){return d(),n("div",null,o)}const v=e(t,[["render",a],["__file","object.html.vue"]]);export{v as default};
