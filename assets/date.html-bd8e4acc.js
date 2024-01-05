import{_ as e,o as d,c as i,a as n}from"./app-53705635.js";const a={},l=n(`<h1 id="date-对象" tabindex="-1"><a class="header-anchor" href="#date-对象" aria-hidden="true">#</a> Date 对象</h1><p>网道（WangDoc.com），互联网文档计划</p><p><code>Date</code>对象是 JavaScript 原生的时间库。它以国际标准时间（UTC）1970年1月1日00:00:00作为时间的零点，可以表示的时间范围是前后各1亿天（单位为毫秒）。</p><h2 id="普通函数的用法" tabindex="-1"><a class="header-anchor" href="#普通函数的用法" aria-hidden="true">#</a> 普通函数的用法</h2><p><code>Date</code>对象可以作为普通函数直接调用，返回一个代表当前时间的字符串。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Date()
// &quot;Tue Dec 01 2015 09:34:43 GMT+0800 (CST)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，即使带有参数，<code>Date</code>作为普通函数使用时，返回的还是当前时间。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Date(2000, 1, 1)
// &quot;Tue Dec 01 2015 09:34:43 GMT+0800 (CST)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码说明，无论有没有参数，直接调用<code>Date</code>总是返回当前时间。</p><h2 id="构造函数的用法" tabindex="-1"><a class="header-anchor" href="#构造函数的用法" aria-hidden="true">#</a> 构造函数的用法</h2><p><code>Date</code>还可以当作构造函数使用。对它使用<code>new</code>命令，会返回一个<code>Date</code>对象的实例。如果不加参数，实例代表的就是当前时间。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var today = new Date();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Date</code>实例有一个独特的地方。其他对象求值的时候，都是默认调用<code>.valueOf()</code>方法，但是<code>Date</code>实例求值的时候，默认调用的是<code>toString()</code>方法。这导致对<code>Date</code>实例求值，返回的是一个字符串，代表该实例对应的时间。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var today = new Date();

today
// &quot;Tue Dec 01 2015 09:34:43 GMT+0800 (CST)&quot;

// 等同于
today.toString()
// &quot;Tue Dec 01 2015 09:34:43 GMT+0800 (CST)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>today</code>是<code>Date</code>的实例，直接求值等同于调用<code>toString</code>方法。</p><p>作为构造函数时，<code>Date</code>对象可以接受多种格式的参数，返回一个该参数对应的时间实例。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 参数为时间零点开始计算的毫秒数
new Date(1378218728000)
// Tue Sep 03 2013 22:32:08 GMT+0800 (CST)

// 参数为日期字符串
new Date(&#39;January 6, 2013&#39;);
// Sun Jan 06 2013 00:00:00 GMT+0800 (CST)

// 参数为多个整数，
// 代表年、月、日、小时、分钟、秒、毫秒
new Date(2013, 0, 1, 0, 0, 0, 0)
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于<code>Date</code>构造函数的参数，有几点说明。</p><p>第一点，参数可以是负整数，代表1970年元旦之前的时间。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Date(-1378218728000)
// Fri Apr 30 1926 17:27:52 GMT+0800 (CST)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第二点，只要是能被<code>Date.parse()</code>方法解析的字符串，都可以当作参数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Date(&#39;2013-2-15&#39;)
new Date(&#39;2013/2/15&#39;)
new Date(&#39;02/15/2013&#39;)
new Date(&#39;2013-FEB-15&#39;)
new Date(&#39;FEB, 15, 2013&#39;)
new Date(&#39;FEB 15, 2013&#39;)
new Date(&#39;February, 15, 2013&#39;)
new Date(&#39;February 15, 2013&#39;)
new Date(&#39;15 Feb 2013&#39;)
new Date(&#39;15, February, 2013&#39;)
// Fri Feb 15 2013 00:00:00 GMT+0800 (CST)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面多种日期字符串的写法，返回的都是同一个时间。</p><p>第三，参数为年、月、日等多个整数时，年和月是不能省略的，其他参数都可以省略的。也就是说，这时至少需要两个参数，因为如果只使用“年”这一个参数，<code>Date</code>会将其解释为毫秒数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Date(2013)
// Thu Jan 01 1970 08:00:02 GMT+0800 (CST)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，2013被解释为毫秒数，而不是年份。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Date(2013, 0)
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
new Date(2013, 0, 1)
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
new Date(2013, 0, 1, 0)
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
new Date(2013, 0, 1, 0, 0, 0, 0)
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，不管有几个参数，返回的都是2013年1月1日零点。</p><p>最后，各个参数的取值范围如下。</p><ul><li>年：使用四位数年份，比如<code>2000</code>。如果写成两位数或个位数，则加上<code>1900</code>，即<code>10</code>代表1910年。如果是负数，表示公元前。</li><li>月：<code>0</code>表示一月，依次类推，<code>11</code>表示12月。</li><li>日：<code>1</code>到<code>31</code>。</li><li>小时：<code>0</code>到<code>23</code>。</li><li>分钟：<code>0</code>到<code>59</code>。</li><li>秒：<code>0</code>到<code>59</code></li><li>毫秒：<code>0</code>到<code>999</code>。</li></ul><p>注意，月份从<code>0</code>开始计算，但是，天数从<code>1</code>开始计算。另外，除了日期的默认值为<code>1</code>，小时、分钟、秒钟和毫秒的默认值都是<code>0</code>。</p><p>这些参数如果超出了正常范围，会被自动折算。比如，如果月设为<code>15</code>，就折算为下一年的4月。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Date(2013, 15)
// Tue Apr 01 2014 00:00:00 GMT+0800 (CST)
new Date(2013, 0, 0)
// Mon Dec 31 2012 00:00:00 GMT+0800 (CST)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的第二个例子，日期设为<code>0</code>，就代表上个月的最后一天。</p><p>参数还可以使用负数，表示扣去的时间。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Date(2013, -1)
// Sat Dec 01 2012 00:00:00 GMT+0800 (CST)
new Date(2013, 0, -1)
// Sun Dec 30 2012 00:00:00 GMT+0800 (CST)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，分别对月和日使用了负数，表示从基准日扣去相应的时间。</p><h2 id="日期的运算" tabindex="-1"><a class="header-anchor" href="#日期的运算" aria-hidden="true">#</a> 日期的运算</h2><p>类型自动转换时，<code>Date</code>实例如果转为数值，则等于对应的毫秒数；如果转为字符串，则等于对应的日期字符串。所以，两个日期实例对象进行减法运算时，返回的是它们间隔的毫秒数；进行加法运算时，返回的是两个字符串连接而成的新字符串。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var d1 = new Date(2000, 2, 1);
var d2 = new Date(2000, 3, 1);

d2 - d1
// 2678400000
d2 + d1
// &quot;Sat Apr 01 2000 00:00:00 GMT+0800 (CST)Wed Mar 01 2000 00:00:00 GMT+0800 (CST)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态方法" tabindex="-1"><a class="header-anchor" href="#静态方法" aria-hidden="true">#</a> 静态方法</h2><h3 id="date-now" tabindex="-1"><a class="header-anchor" href="#date-now" aria-hidden="true">#</a> Date.now()</h3><p><code>Date.now</code>方法返回当前时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数，相当于 Unix 时间戳乘以1000。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Date.now() // 1364026285194
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="date-parse" tabindex="-1"><a class="header-anchor" href="#date-parse" aria-hidden="true">#</a> Date.parse()</h3><p><code>Date.parse</code>方法用来解析日期字符串，返回该时间距离时间零点（1970年1月1日 00:00:00）的毫秒数。</p><p>日期字符串应该符合 RFC 2822 和 ISO 8061 这两个标准，即<code>YYYY-MM-DDTHH:mm:ss.sssZ</code>格式，其中最后的<code>Z</code>表示时区。但是，其他格式也可以被解析，请看下面的例子。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Date.parse(&#39;Aug 9, 1995&#39;)
Date.parse(&#39;January 26, 2011 13:51:50&#39;)
Date.parse(&#39;Mon, 25 Dec 1995 13:30:00 GMT&#39;)
Date.parse(&#39;Mon, 25 Dec 1995 13:30:00 +0430&#39;)
Date.parse(&#39;2011-10-10&#39;)
Date.parse(&#39;2011-10-10T14:48:00&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的日期字符串都可以解析。</p><p>如果解析失败，返回<code>NaN</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Date.parse(&#39;xxx&#39;) // NaN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="date-utc" tabindex="-1"><a class="header-anchor" href="#date-utc" aria-hidden="true">#</a> Date.UTC()</h3><p><code>Date.UTC</code>方法接受年、月、日等变量作为参数，返回该时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 格式
Date.UTC(year, month[, date[, hrs[, min[, sec[, ms]]]]])

// 用法
Date.UTC(2011, 0, 1, 2, 3, 4, 567)
// 1293847384567
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该方法的参数用法与<code>Date</code>构造函数完全一致，比如月从<code>0</code>开始计算，日期从<code>1</code>开始计算。区别在于<code>Date.UTC</code>方法的参数，会被解释为 UTC 时间（世界标准时间），<code>Date</code>构造函数的参数会被解释为当前时区的时间。</p><h2 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法" aria-hidden="true">#</a> 实例方法</h2><p><code>Date</code>的实例对象，有几十个自己的方法，除了<code>valueOf</code>和<code>toString</code>，可以分为以下三类。</p><ul><li><code>to</code>类：从<code>Date</code>对象返回一个字符串，表示指定的时间。</li><li><code>get</code>类：获取<code>Date</code>对象的日期和时间。</li><li><code>set</code>类：设置<code>Date</code>对象的日期和时间。</li></ul><h3 id="valueof" tabindex="-1"><a class="header-anchor" href="#valueof" aria-hidden="true">#</a> valueOf()</h3><p><code>valueOf</code>方法返回实例对象距离时间零点（1970年1月1日00:00:00 UTC）对应的毫秒数，该方法等同于<code>getTime</code>方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var d = new Date();

d.valueOf() // 1362790014817
d.getTime() // 1362790014817
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>预期为数值的场合，<code>Date</code>实例会自动调用该方法，所以可以用下面的方法计算时间的间隔。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var start = new Date();
// ...
var end = new Date();
var elapsed = end - start;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tostring" tabindex="-1"><a class="header-anchor" href="#tostring" aria-hidden="true">#</a> toString()</h3><p><code>toString</code>方法返回一个完整的日期字符串。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var d = new Date(2013, 0, 1);

d.toString()
// &quot;Tue Jan 01 2013 00:00:00 GMT+0800 (CST)&quot;
d
// &quot;Tue Jan 01 2013 00:00:00 GMT+0800 (CST)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为<code>toString</code>是默认的调用方法，所以如果直接读取<code>Date</code>实例，就相当于调用这个方法。</p><h3 id="toutcstring" tabindex="-1"><a class="header-anchor" href="#toutcstring" aria-hidden="true">#</a> toUTCString()</h3><p><code>toUTCString</code>方法返回对应的 UTC 时间，也就是比北京时间晚8个小时。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var d = new Date(2013, 0, 1);

d.toUTCString()
// &quot;Mon, 31 Dec 2012 16:00:00 GMT&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="toisostring" tabindex="-1"><a class="header-anchor" href="#toisostring" aria-hidden="true">#</a> toISOString()</h3><p><code>toISOString</code>方法返回对应时间的 ISO8601 写法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var d = new Date(2013, 0, 1);

d.toISOString()
// &quot;2012-12-31T16:00:00.000Z&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，<code>toISOString</code>方法返回的总是 UTC 时区的时间。</p><h3 id="tojson" tabindex="-1"><a class="header-anchor" href="#tojson" aria-hidden="true">#</a> <strong>toJSON()</strong></h3><p><code>toJSON</code>方法返回一个符合 JSON 格式的 ISO 日期字符串，与<code>toISOString</code>方法的返回结果完全相同。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var d = new Date(2013, 0, 1);

d.toJSON()
// &quot;2012-12-31T16:00:00.000Z&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="todatestring" tabindex="-1"><a class="header-anchor" href="#todatestring" aria-hidden="true">#</a> <strong>toDateString()</strong></h3><p><code>toDateString</code>方法返回日期字符串（不含小时、分和秒）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var d = new Date(2013, 0, 1);
d.toDateString() // &quot;Tue Jan 01 2013&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="totimestring" tabindex="-1"><a class="header-anchor" href="#totimestring" aria-hidden="true">#</a> <strong>toTimeString()</strong></h3><p><code>toTimeString</code>方法返回时间字符串（不含年月日）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var d = new Date(2013, 0, 1);
d.toTimeString() // &quot;00:00:00 GMT+0800 (CST)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（7）本地时间</strong></p><p>以下三种方法，可以将 Date 实例转为表示本地时间的字符串。</p><ul><li><code>Date.prototype.toLocaleString()</code>：完整的本地时间。</li><li><code>Date.prototype.toLocaleDateString()</code>：本地日期（不含小时、分和秒）。</li><li><code>Date.prototype.toLocaleTimeString()</code>：本地时间（不含年月日）。</li></ul><p>下面是用法实例。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var d = new Date(2013, 0, 1);

d.toLocaleString()
// 中文版浏览器为&quot;2013年1月1日 上午12:00:00&quot;
// 英文版浏览器为&quot;1/1/2013 12:00:00 AM&quot;

d.toLocaleDateString()
// 中文版浏览器为&quot;2013年1月1日&quot;
// 英文版浏览器为&quot;1/1/2013&quot;

d.toLocaleTimeString()
// 中文版浏览器为&quot;上午12:00:00&quot;
// 英文版浏览器为&quot;12:00:00 AM&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这三个方法都有两个可选的参数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dateObj.toLocaleString([locales[, options]])
dateObj.toLocaleDateString([locales[, options]])
dateObj.toLocaleTimeString([locales[, options]])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两个参数中，<code>locales</code>是一个指定所用语言的字符串，<code>options</code>是一个配置对象。下面是<code>locales</code>的例子，分别采用<code>en-US</code>和<code>zh-CN</code>语言设定。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var d = new Date(2013, 0, 1);

d.toLocaleString(&#39;en-US&#39;) // &quot;1/1/2013, 12:00:00 AM&quot;
d.toLocaleString(&#39;zh-CN&#39;) // &quot;2013/1/1 上午12:00:00&quot;

d.toLocaleDateString(&#39;en-US&#39;) // &quot;1/1/2013&quot;
d.toLocaleDateString(&#39;zh-CN&#39;) // &quot;2013/1/1&quot;

d.toLocaleTimeString(&#39;en-US&#39;) // &quot;12:00:00 AM&quot;
d.toLocaleTimeString(&#39;zh-CN&#39;) // &quot;上午12:00:00&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>options</code>配置对象有以下属性。</p><ul><li><code>dateStyle</code>：可能的值为<code>full</code>、<code>long</code>、<code>medium</code>、<code>short</code>。</li><li><code>timeStyle</code>：可能的值为<code>full</code>、<code>long</code>、<code>medium</code>、<code>short</code>。</li><li><code>month</code>：可能的值为<code>numeric</code>、<code>2-digit</code>、<code>long</code>、<code>short</code>、<code>narrow</code>。</li><li><code>year</code>：可能的值为<code>numeric</code>、<code>2-digit</code>。</li><li><code>weekday</code>：可能的值为<code>long</code>、<code>short</code>、<code>narrow</code>。</li><li><code>day</code>、<code>hour</code>、<code>minute</code>、<code>second</code>：可能的值为<code>numeric</code>、<code>2-digit</code>。</li><li><code>timeZone</code>：可能的值为 IANA 的时区数据库。</li><li><code>timeZooneName</code>：可能的值为<code>long</code>、<code>short</code>。</li><li><code>hour12</code>：24小时周期还是12小时周期，可能的值为<code>true</code>、<code>false</code>。</li></ul><p>下面是用法实例。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var d = new Date(2013, 0, 1);

d.toLocaleDateString(&#39;en-US&#39;, {
  weekday: &#39;long&#39;,
  year: &#39;numeric&#39;,
  month: &#39;long&#39;,
  day: &#39;numeric&#39;
})
// &quot;Tuesday, January 1, 2013&quot;

d.toLocaleDateString(&#39;en-US&#39;, {
  day: &quot;2-digit&quot;,
  month: &quot;long&quot;,
  year: &quot;2-digit&quot;
});
// &quot;January 01, 13&quot;

d.toLocaleTimeString(&#39;en-US&#39;, {
  timeZone: &#39;UTC&#39;,
  timeZoneName: &#39;short&#39;
})
// &quot;4:00:00 PM UTC&quot;

d.toLocaleTimeString(&#39;en-US&#39;, {
  timeZone: &#39;Asia/Shanghai&#39;,
  timeZoneName: &#39;long&#39;
})
// &quot;12:00:00 AM China Standard Time&quot;

d.toLocaleTimeString(&#39;en-US&#39;, {
  hour12: false
})
// &quot;00:00:00&quot;

d.toLocaleTimeString(&#39;en-US&#39;, {
  hour12: true
})
// &quot;12:00:00 AM&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-类方法" tabindex="-1"><a class="header-anchor" href="#get-类方法" aria-hidden="true">#</a> get 类方法</h3><p><code>Date</code>对象提供了一系列<code>get*</code>方法，用来获取实例对象某个方面的值。</p><ul><li><code>getTime()</code>：返回实例距离1970年1月1日00:00:00的毫秒数，等同于<code>valueOf</code>方法。</li><li><code>getDate()</code>：返回实例对象对应每个月的几号（从1开始）。</li><li><code>getDay()</code>：返回星期几，星期日为0，星期一为1，以此类推。</li><li><code>getFullYear()</code>：返回四位的年份。</li><li><code>getMonth()</code>：返回月份（0表示1月，11表示12月）。</li><li><code>getHours()</code>：返回小时（0-23）。</li><li><code>getMilliseconds()</code>：返回毫秒（0-999）。</li><li><code>getMinutes()</code>：返回分钟（0-59）。</li><li><code>getSeconds()</code>：返回秒（0-59）。</li><li><code>getTimezoneOffset()</code>：返回当前时间与 UTC 的时区差异，以分钟表示，返回结果考虑到了夏令时因素。</li></ul><p>所有这些<code>get*</code>方法返回的都是整数，不同方法返回值的范围不一样。</p><ul><li>分钟和秒：0 到 59</li><li>小时：0 到 23</li><li>星期：0（星期天）到 6（星期六）</li><li>日期：1 到 31</li><li>月份：0（一月）到 11（十二月）</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var d = new Date(&#39;January 6, 2013&#39;);

d.getDate() // 6
d.getMonth() // 0
d.getFullYear() // 2013
d.getTimezoneOffset() // -480
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，最后一行返回<code>-480</code>，即 UTC 时间减去当前时间，单位是分钟。<code>-480</code>表示 UTC 比当前时间少480分钟，即当前时区比 UTC 早8个小时。</p><p>下面是一个例子，计算本年度还剩下多少天。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function leftDays() {
  var today = new Date();
  var endYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59, 999);
  var msPerDay = 24 * 60 * 60 * 1000;
  return Math.round((endYear.getTime() - today.getTime()) / msPerDay);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这些<code>get*</code>方法返回的都是当前时区的时间，<code>Date</code>对象还提供了这些方法对应的 UTC 版本，用来返回 UTC 时间。</p><ul><li><code>getUTCDate()</code></li><li><code>getUTCFullYear()</code></li><li><code>getUTCMonth()</code></li><li><code>getUTCDay()</code></li><li><code>getUTCHours()</code></li><li><code>getUTCMinutes()</code></li><li><code>getUTCSeconds()</code></li><li><code>getUTCMilliseconds()</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var d = new Date(&#39;January 6, 2013&#39;);

d.getDate() // 6
d.getUTCDate() // 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，实例对象<code>d</code>表示当前时区（东八时区）的1月6日0点0分0秒，这个时间对于当前时区来说是1月6日，所以<code>getDate</code>方法返回6，对于 UTC 时区来说是1月5日，所以<code>getUTCDate</code>方法返回5。</p><h3 id="set-类方法" tabindex="-1"><a class="header-anchor" href="#set-类方法" aria-hidden="true">#</a> set 类方法</h3><p><code>Date</code>对象提供了一系列<code>set*</code>方法，用来设置实例对象的各个方面。</p><ul><li><code>setDate(date)</code>：设置实例对象对应的每个月的几号（1-31），返回改变后毫秒时间戳。</li><li><code>setFullYear(year [, month, date])</code>：设置四位年份。</li><li><code>setHours(hour [, min, sec, ms])</code>：设置小时（0-23）。</li><li><code>setMilliseconds()</code>：设置毫秒（0-999）。</li><li><code>setMinutes(min [, sec, ms])</code>：设置分钟（0-59）。</li><li><code>setMonth(month [, date])</code>：设置月份（0-11）。</li><li><code>setSeconds(sec [, ms])</code>：设置秒（0-59）。</li><li><code>setTime(milliseconds)</code>：设置毫秒时间戳。</li></ul><p>这些方法基本是跟<code>get*</code>方法一一对应的，但是没有<code>setDay</code>方法，因为星期几是计算出来的，而不是设置的。另外，需要注意的是，凡是涉及到设置月份，都是从0开始算的，即<code>0</code>是1月，<code>11</code>是12月。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var d = new Date (&#39;January 6, 2013&#39;);

d // Sun Jan 06 2013 00:00:00 GMT+0800 (CST)
d.setDate(9) // 1357660800000
d // Wed Jan 09 2013 00:00:00 GMT+0800 (CST)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>set*</code>方法的参数都会自动折算。以<code>setDate()</code>为例，如果参数超过当月的最大天数，则向下一个月顺延，如果参数是负数，表示从上个月的最后一天开始减去的天数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var d1 = new Date(&#39;January 6, 2013&#39;);

d1.setDate(32) // 1359648000000
d1 // Fri Feb 01 2013 00:00:00 GMT+0800 (CST)

var d2 = new Date (&#39;January 6, 2013&#39;);

d2.setDate(-1) // 1356796800000
d2 // Sun Dec 30 2012 00:00:00 GMT+0800 (CST)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>d1.setDate(32)</code>将日期设为1月份的32号，因为1月份只有31号，所以自动折算为2月1日。<code>d2.setDate(-1)</code>表示设为上个月的倒数第二天，即12月30日。</p><p><code>set</code>类方法和<code>get</code>类方法，可以结合使用，得到相对时间。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var d = new Date();

// 将日期向后推1000天
d.setDate(d.getDate() + 1000);
// 将时间设为6小时后
d.setHours(d.getHours() + 6);
// 将年份设为去年
d.setFullYear(d.getFullYear() - 1);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>set*</code>系列方法除了<code>setTime()</code>，都有对应的 UTC 版本，即设置 UTC 时区的时间。</p><ul><li><code>setUTCDate()</code></li><li><code>setUTCFullYear()</code></li><li><code>setUTCHours()</code></li><li><code>setUTCMilliseconds()</code></li><li><code>setUTCMinutes()</code></li><li><code>setUTCMonth()</code></li><li><code>setUTCSeconds()</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var d = new Date(&#39;January 6, 2013&#39;);
d.getUTCHours() // 16
d.setUTCHours(22) // 1357423200000
d // Sun Jan 06 2013 06:00:00 GMT+0800 (CST)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，本地时区（东八时区）的1月6日0点0分，是 UTC 时区的前一天下午16点。设为 UTC 时区的22点以后，就变为本地时区的上午6点。</p>`,123),s=[l];function c(t,o){return d(),i("div",null,s)}const v=e(a,[["render",c],["__file","date.html.vue"]]);export{v as default};
