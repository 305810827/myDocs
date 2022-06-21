import{_ as e,e as d}from"./app.659fa32e.js";const i={},n=d(`<h1 id="date-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#date-\u5BF9\u8C61" aria-hidden="true">#</a> Date \u5BF9\u8C61</h1><p>\u7F51\u9053\uFF08WangDoc.com\uFF09\uFF0C\u4E92\u8054\u7F51\u6587\u6863\u8BA1\u5212</p><p><code>Date</code>\u5BF9\u8C61\u662F JavaScript \u539F\u751F\u7684\u65F6\u95F4\u5E93\u3002\u5B83\u4EE5\u56FD\u9645\u6807\u51C6\u65F6\u95F4\uFF08UTC\uFF091970\u5E741\u67081\u65E500:00:00\u4F5C\u4E3A\u65F6\u95F4\u7684\u96F6\u70B9\uFF0C\u53EF\u4EE5\u8868\u793A\u7684\u65F6\u95F4\u8303\u56F4\u662F\u524D\u540E\u54041\u4EBF\u5929\uFF08\u5355\u4F4D\u4E3A\u6BEB\u79D2\uFF09\u3002</p><h2 id="\u666E\u901A\u51FD\u6570\u7684\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u51FD\u6570\u7684\u7528\u6CD5" aria-hidden="true">#</a> \u666E\u901A\u51FD\u6570\u7684\u7528\u6CD5</h2><p><code>Date</code>\u5BF9\u8C61\u53EF\u4EE5\u4F5C\u4E3A\u666E\u901A\u51FD\u6570\u76F4\u63A5\u8C03\u7528\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u4EE3\u8868\u5F53\u524D\u65F6\u95F4\u7684\u5B57\u7B26\u4E32\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Date()
// &quot;Tue Dec 01 2015 09:34:43 GMT+0800 (CST)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C\u5373\u4F7F\u5E26\u6709\u53C2\u6570\uFF0C<code>Date</code>\u4F5C\u4E3A\u666E\u901A\u51FD\u6570\u4F7F\u7528\u65F6\uFF0C\u8FD4\u56DE\u7684\u8FD8\u662F\u5F53\u524D\u65F6\u95F4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Date(2000, 1, 1)
// &quot;Tue Dec 01 2015 09:34:43 GMT+0800 (CST)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u8BF4\u660E\uFF0C\u65E0\u8BBA\u6709\u6CA1\u6709\u53C2\u6570\uFF0C\u76F4\u63A5\u8C03\u7528<code>Date</code>\u603B\u662F\u8FD4\u56DE\u5F53\u524D\u65F6\u95F4\u3002</p><h2 id="\u6784\u9020\u51FD\u6570\u7684\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570\u7684\u7528\u6CD5" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570\u7684\u7528\u6CD5</h2><p><code>Date</code>\u8FD8\u53EF\u4EE5\u5F53\u4F5C\u6784\u9020\u51FD\u6570\u4F7F\u7528\u3002\u5BF9\u5B83\u4F7F\u7528<code>new</code>\u547D\u4EE4\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2A<code>Date</code>\u5BF9\u8C61\u7684\u5B9E\u4F8B\u3002\u5982\u679C\u4E0D\u52A0\u53C2\u6570\uFF0C\u5B9E\u4F8B\u4EE3\u8868\u7684\u5C31\u662F\u5F53\u524D\u65F6\u95F4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var today = new Date();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Date</code>\u5B9E\u4F8B\u6709\u4E00\u4E2A\u72EC\u7279\u7684\u5730\u65B9\u3002\u5176\u4ED6\u5BF9\u8C61\u6C42\u503C\u7684\u65F6\u5019\uFF0C\u90FD\u662F\u9ED8\u8BA4\u8C03\u7528<code>.valueOf()</code>\u65B9\u6CD5\uFF0C\u4F46\u662F<code>Date</code>\u5B9E\u4F8B\u6C42\u503C\u7684\u65F6\u5019\uFF0C\u9ED8\u8BA4\u8C03\u7528\u7684\u662F<code>toString()</code>\u65B9\u6CD5\u3002\u8FD9\u5BFC\u81F4\u5BF9<code>Date</code>\u5B9E\u4F8B\u6C42\u503C\uFF0C\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u4EE3\u8868\u8BE5\u5B9E\u4F8B\u5BF9\u5E94\u7684\u65F6\u95F4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var today = new Date();

today
// &quot;Tue Dec 01 2015 09:34:43 GMT+0800 (CST)&quot;

// \u7B49\u540C\u4E8E
today.toString()
// &quot;Tue Dec 01 2015 09:34:43 GMT+0800 (CST)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>today</code>\u662F<code>Date</code>\u7684\u5B9E\u4F8B\uFF0C\u76F4\u63A5\u6C42\u503C\u7B49\u540C\u4E8E\u8C03\u7528<code>toString</code>\u65B9\u6CD5\u3002</p><p>\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u65F6\uFF0C<code>Date</code>\u5BF9\u8C61\u53EF\u4EE5\u63A5\u53D7\u591A\u79CD\u683C\u5F0F\u7684\u53C2\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u8BE5\u53C2\u6570\u5BF9\u5E94\u7684\u65F6\u95F4\u5B9E\u4F8B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u53C2\u6570\u4E3A\u65F6\u95F4\u96F6\u70B9\u5F00\u59CB\u8BA1\u7B97\u7684\u6BEB\u79D2\u6570
new Date(1378218728000)
// Tue Sep 03 2013 22:32:08 GMT+0800 (CST)

// \u53C2\u6570\u4E3A\u65E5\u671F\u5B57\u7B26\u4E32
new Date(&#39;January 6, 2013&#39;);
// Sun Jan 06 2013 00:00:00 GMT+0800 (CST)

// \u53C2\u6570\u4E3A\u591A\u4E2A\u6574\u6570\uFF0C
// \u4EE3\u8868\u5E74\u3001\u6708\u3001\u65E5\u3001\u5C0F\u65F6\u3001\u5206\u949F\u3001\u79D2\u3001\u6BEB\u79D2
new Date(2013, 0, 1, 0, 0, 0, 0)
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5173\u4E8E<code>Date</code>\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\uFF0C\u6709\u51E0\u70B9\u8BF4\u660E\u3002</p><p>\u7B2C\u4E00\u70B9\uFF0C\u53C2\u6570\u53EF\u4EE5\u662F\u8D1F\u6574\u6570\uFF0C\u4EE3\u88681970\u5E74\u5143\u65E6\u4E4B\u524D\u7684\u65F6\u95F4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new Date(-1378218728000)
// Fri Apr 30 1926 17:27:52 GMT+0800 (CST)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E8C\u70B9\uFF0C\u53EA\u8981\u662F\u80FD\u88AB<code>Date.parse()</code>\u65B9\u6CD5\u89E3\u6790\u7684\u5B57\u7B26\u4E32\uFF0C\u90FD\u53EF\u4EE5\u5F53\u4F5C\u53C2\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new Date(&#39;2013-2-15&#39;)
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u591A\u79CD\u65E5\u671F\u5B57\u7B26\u4E32\u7684\u5199\u6CD5\uFF0C\u8FD4\u56DE\u7684\u90FD\u662F\u540C\u4E00\u4E2A\u65F6\u95F4\u3002</p><p>\u7B2C\u4E09\uFF0C\u53C2\u6570\u4E3A\u5E74\u3001\u6708\u3001\u65E5\u7B49\u591A\u4E2A\u6574\u6570\u65F6\uFF0C\u5E74\u548C\u6708\u662F\u4E0D\u80FD\u7701\u7565\u7684\uFF0C\u5176\u4ED6\u53C2\u6570\u90FD\u53EF\u4EE5\u7701\u7565\u7684\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u8FD9\u65F6\u81F3\u5C11\u9700\u8981\u4E24\u4E2A\u53C2\u6570\uFF0C\u56E0\u4E3A\u5982\u679C\u53EA\u4F7F\u7528\u201C\u5E74\u201D\u8FD9\u4E00\u4E2A\u53C2\u6570\uFF0C<code>Date</code>\u4F1A\u5C06\u5176\u89E3\u91CA\u4E3A\u6BEB\u79D2\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new Date(2013)
// Thu Jan 01 1970 08:00:02 GMT+0800 (CST)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C2013\u88AB\u89E3\u91CA\u4E3A\u6BEB\u79D2\u6570\uFF0C\u800C\u4E0D\u662F\u5E74\u4EFD\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new Date(2013, 0)
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
new Date(2013, 0, 1)
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
new Date(2013, 0, 1, 0)
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
new Date(2013, 0, 1, 0, 0, 0, 0)
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u4E0D\u7BA1\u6709\u51E0\u4E2A\u53C2\u6570\uFF0C\u8FD4\u56DE\u7684\u90FD\u662F2013\u5E741\u67081\u65E5\u96F6\u70B9\u3002</p><p>\u6700\u540E\uFF0C\u5404\u4E2A\u53C2\u6570\u7684\u53D6\u503C\u8303\u56F4\u5982\u4E0B\u3002</p><ul><li>\u5E74\uFF1A\u4F7F\u7528\u56DB\u4F4D\u6570\u5E74\u4EFD\uFF0C\u6BD4\u5982<code>2000</code>\u3002\u5982\u679C\u5199\u6210\u4E24\u4F4D\u6570\u6216\u4E2A\u4F4D\u6570\uFF0C\u5219\u52A0\u4E0A<code>1900</code>\uFF0C\u5373<code>10</code>\u4EE3\u88681910\u5E74\u3002\u5982\u679C\u662F\u8D1F\u6570\uFF0C\u8868\u793A\u516C\u5143\u524D\u3002</li><li>\u6708\uFF1A<code>0</code>\u8868\u793A\u4E00\u6708\uFF0C\u4F9D\u6B21\u7C7B\u63A8\uFF0C<code>11</code>\u8868\u793A12\u6708\u3002</li><li>\u65E5\uFF1A<code>1</code>\u5230<code>31</code>\u3002</li><li>\u5C0F\u65F6\uFF1A<code>0</code>\u5230<code>23</code>\u3002</li><li>\u5206\u949F\uFF1A<code>0</code>\u5230<code>59</code>\u3002</li><li>\u79D2\uFF1A<code>0</code>\u5230<code>59</code></li><li>\u6BEB\u79D2\uFF1A<code>0</code>\u5230<code>999</code>\u3002</li></ul><p>\u6CE8\u610F\uFF0C\u6708\u4EFD\u4ECE<code>0</code>\u5F00\u59CB\u8BA1\u7B97\uFF0C\u4F46\u662F\uFF0C\u5929\u6570\u4ECE<code>1</code>\u5F00\u59CB\u8BA1\u7B97\u3002\u53E6\u5916\uFF0C\u9664\u4E86\u65E5\u671F\u7684\u9ED8\u8BA4\u503C\u4E3A<code>1</code>\uFF0C\u5C0F\u65F6\u3001\u5206\u949F\u3001\u79D2\u949F\u548C\u6BEB\u79D2\u7684\u9ED8\u8BA4\u503C\u90FD\u662F<code>0</code>\u3002</p><p>\u8FD9\u4E9B\u53C2\u6570\u5982\u679C\u8D85\u51FA\u4E86\u6B63\u5E38\u8303\u56F4\uFF0C\u4F1A\u88AB\u81EA\u52A8\u6298\u7B97\u3002\u6BD4\u5982\uFF0C\u5982\u679C\u6708\u8BBE\u4E3A<code>15</code>\uFF0C\u5C31\u6298\u7B97\u4E3A\u4E0B\u4E00\u5E74\u76844\u6708\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new Date(2013, 15)
// Tue Apr 01 2014 00:00:00 GMT+0800 (CST)
new Date(2013, 0, 0)
// Mon Dec 31 2012 00:00:00 GMT+0800 (CST)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u7684\u7B2C\u4E8C\u4E2A\u4F8B\u5B50\uFF0C\u65E5\u671F\u8BBE\u4E3A<code>0</code>\uFF0C\u5C31\u4EE3\u8868\u4E0A\u4E2A\u6708\u7684\u6700\u540E\u4E00\u5929\u3002</p><p>\u53C2\u6570\u8FD8\u53EF\u4EE5\u4F7F\u7528\u8D1F\u6570\uFF0C\u8868\u793A\u6263\u53BB\u7684\u65F6\u95F4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new Date(2013, -1)
// Sat Dec 01 2012 00:00:00 GMT+0800 (CST)
new Date(2013, 0, -1)
// Sun Dec 30 2012 00:00:00 GMT+0800 (CST)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u5206\u522B\u5BF9\u6708\u548C\u65E5\u4F7F\u7528\u4E86\u8D1F\u6570\uFF0C\u8868\u793A\u4ECE\u57FA\u51C6\u65E5\u6263\u53BB\u76F8\u5E94\u7684\u65F6\u95F4\u3002</p><h2 id="\u65E5\u671F\u7684\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u65E5\u671F\u7684\u8FD0\u7B97" aria-hidden="true">#</a> \u65E5\u671F\u7684\u8FD0\u7B97</h2><p>\u7C7B\u578B\u81EA\u52A8\u8F6C\u6362\u65F6\uFF0C<code>Date</code>\u5B9E\u4F8B\u5982\u679C\u8F6C\u4E3A\u6570\u503C\uFF0C\u5219\u7B49\u4E8E\u5BF9\u5E94\u7684\u6BEB\u79D2\u6570\uFF1B\u5982\u679C\u8F6C\u4E3A\u5B57\u7B26\u4E32\uFF0C\u5219\u7B49\u4E8E\u5BF9\u5E94\u7684\u65E5\u671F\u5B57\u7B26\u4E32\u3002\u6240\u4EE5\uFF0C\u4E24\u4E2A\u65E5\u671F\u5B9E\u4F8B\u5BF9\u8C61\u8FDB\u884C\u51CF\u6CD5\u8FD0\u7B97\u65F6\uFF0C\u8FD4\u56DE\u7684\u662F\u5B83\u4EEC\u95F4\u9694\u7684\u6BEB\u79D2\u6570\uFF1B\u8FDB\u884C\u52A0\u6CD5\u8FD0\u7B97\u65F6\uFF0C\u8FD4\u56DE\u7684\u662F\u4E24\u4E2A\u5B57\u7B26\u4E32\u8FDE\u63A5\u800C\u6210\u7684\u65B0\u5B57\u7B26\u4E32\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var d1 = new Date(2000, 2, 1);
var d2 = new Date(2000, 3, 1);

d2 - d1
// 2678400000
d2 + d1
// &quot;Sat Apr 01 2000 00:00:00 GMT+0800 (CST)Wed Mar 01 2000 00:00:00 GMT+0800 (CST)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9759\u6001\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u65B9\u6CD5" aria-hidden="true">#</a> \u9759\u6001\u65B9\u6CD5</h2><h3 id="date-now" tabindex="-1"><a class="header-anchor" href="#date-now" aria-hidden="true">#</a> Date.now()</h3><p><code>Date.now</code>\u65B9\u6CD5\u8FD4\u56DE\u5F53\u524D\u65F6\u95F4\u8DDD\u79BB\u65F6\u95F4\u96F6\u70B9\uFF081970\u5E741\u67081\u65E5 00:00:00 UTC\uFF09\u7684\u6BEB\u79D2\u6570\uFF0C\u76F8\u5F53\u4E8E Unix \u65F6\u95F4\u6233\u4E58\u4EE51000\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Date.now() // 1364026285194
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="date-parse" tabindex="-1"><a class="header-anchor" href="#date-parse" aria-hidden="true">#</a> Date.parse()</h3><p><code>Date.parse</code>\u65B9\u6CD5\u7528\u6765\u89E3\u6790\u65E5\u671F\u5B57\u7B26\u4E32\uFF0C\u8FD4\u56DE\u8BE5\u65F6\u95F4\u8DDD\u79BB\u65F6\u95F4\u96F6\u70B9\uFF081970\u5E741\u67081\u65E5 00:00:00\uFF09\u7684\u6BEB\u79D2\u6570\u3002</p><p>\u65E5\u671F\u5B57\u7B26\u4E32\u5E94\u8BE5\u7B26\u5408 RFC 2822 \u548C ISO 8061 \u8FD9\u4E24\u4E2A\u6807\u51C6\uFF0C\u5373<code>YYYY-MM-DDTHH:mm:ss.sssZ</code>\u683C\u5F0F\uFF0C\u5176\u4E2D\u6700\u540E\u7684<code>Z</code>\u8868\u793A\u65F6\u533A\u3002\u4F46\u662F\uFF0C\u5176\u4ED6\u683C\u5F0F\u4E5F\u53EF\u4EE5\u88AB\u89E3\u6790\uFF0C\u8BF7\u770B\u4E0B\u9762\u7684\u4F8B\u5B50\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Date.parse(&#39;Aug 9, 1995&#39;)
Date.parse(&#39;January 26, 2011 13:51:50&#39;)
Date.parse(&#39;Mon, 25 Dec 1995 13:30:00 GMT&#39;)
Date.parse(&#39;Mon, 25 Dec 1995 13:30:00 +0430&#39;)
Date.parse(&#39;2011-10-10&#39;)
Date.parse(&#39;2011-10-10T14:48:00&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u65E5\u671F\u5B57\u7B26\u4E32\u90FD\u53EF\u4EE5\u89E3\u6790\u3002</p><p>\u5982\u679C\u89E3\u6790\u5931\u8D25\uFF0C\u8FD4\u56DE<code>NaN</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Date.parse(&#39;xxx&#39;) // NaN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="date-utc" tabindex="-1"><a class="header-anchor" href="#date-utc" aria-hidden="true">#</a> Date.UTC()</h3><p><code>Date.UTC</code>\u65B9\u6CD5\u63A5\u53D7\u5E74\u3001\u6708\u3001\u65E5\u7B49\u53D8\u91CF\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD4\u56DE\u8BE5\u65F6\u95F4\u8DDD\u79BB\u65F6\u95F4\u96F6\u70B9\uFF081970\u5E741\u67081\u65E5 00:00:00 UTC\uFF09\u7684\u6BEB\u79D2\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u683C\u5F0F
Date.UTC(year, month[, date[, hrs[, min[, sec[, ms]]]]])

// \u7528\u6CD5
Date.UTC(2011, 0, 1, 2, 3, 4, 567)
// 1293847384567
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE5\u65B9\u6CD5\u7684\u53C2\u6570\u7528\u6CD5\u4E0E<code>Date</code>\u6784\u9020\u51FD\u6570\u5B8C\u5168\u4E00\u81F4\uFF0C\u6BD4\u5982\u6708\u4ECE<code>0</code>\u5F00\u59CB\u8BA1\u7B97\uFF0C\u65E5\u671F\u4ECE<code>1</code>\u5F00\u59CB\u8BA1\u7B97\u3002\u533A\u522B\u5728\u4E8E<code>Date.UTC</code>\u65B9\u6CD5\u7684\u53C2\u6570\uFF0C\u4F1A\u88AB\u89E3\u91CA\u4E3A UTC \u65F6\u95F4\uFF08\u4E16\u754C\u6807\u51C6\u65F6\u95F4\uFF09\uFF0C<code>Date</code>\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\u4F1A\u88AB\u89E3\u91CA\u4E3A\u5F53\u524D\u65F6\u533A\u7684\u65F6\u95F4\u3002</p><h2 id="\u5B9E\u4F8B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u65B9\u6CD5" aria-hidden="true">#</a> \u5B9E\u4F8B\u65B9\u6CD5</h2><p><code>Date</code>\u7684\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u6709\u51E0\u5341\u4E2A\u81EA\u5DF1\u7684\u65B9\u6CD5\uFF0C\u9664\u4E86<code>valueOf</code>\u548C<code>toString</code>\uFF0C\u53EF\u4EE5\u5206\u4E3A\u4EE5\u4E0B\u4E09\u7C7B\u3002</p><ul><li><code>to</code>\u7C7B\uFF1A\u4ECE<code>Date</code>\u5BF9\u8C61\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u6307\u5B9A\u7684\u65F6\u95F4\u3002</li><li><code>get</code>\u7C7B\uFF1A\u83B7\u53D6<code>Date</code>\u5BF9\u8C61\u7684\u65E5\u671F\u548C\u65F6\u95F4\u3002</li><li><code>set</code>\u7C7B\uFF1A\u8BBE\u7F6E<code>Date</code>\u5BF9\u8C61\u7684\u65E5\u671F\u548C\u65F6\u95F4\u3002</li></ul><h3 id="valueof" tabindex="-1"><a class="header-anchor" href="#valueof" aria-hidden="true">#</a> valueOf()</h3><p><code>valueOf</code>\u65B9\u6CD5\u8FD4\u56DE\u5B9E\u4F8B\u5BF9\u8C61\u8DDD\u79BB\u65F6\u95F4\u96F6\u70B9\uFF081970\u5E741\u67081\u65E500:00:00 UTC\uFF09\u5BF9\u5E94\u7684\u6BEB\u79D2\u6570\uFF0C\u8BE5\u65B9\u6CD5\u7B49\u540C\u4E8E<code>getTime</code>\u65B9\u6CD5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var d = new Date();

d.valueOf() // 1362790014817
d.getTime() // 1362790014817
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9884\u671F\u4E3A\u6570\u503C\u7684\u573A\u5408\uFF0C<code>Date</code>\u5B9E\u4F8B\u4F1A\u81EA\u52A8\u8C03\u7528\u8BE5\u65B9\u6CD5\uFF0C\u6240\u4EE5\u53EF\u4EE5\u7528\u4E0B\u9762\u7684\u65B9\u6CD5\u8BA1\u7B97\u65F6\u95F4\u7684\u95F4\u9694\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var start = new Date();
// ...
var end = new Date();
var elapsed = end - start;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tostring" tabindex="-1"><a class="header-anchor" href="#tostring" aria-hidden="true">#</a> toString()</h3><p><code>toString</code>\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u5B8C\u6574\u7684\u65E5\u671F\u5B57\u7B26\u4E32\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var d = new Date(2013, 0, 1);

d.toString()
// &quot;Tue Jan 01 2013 00:00:00 GMT+0800 (CST)&quot;
d
// &quot;Tue Jan 01 2013 00:00:00 GMT+0800 (CST)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u4E3A<code>toString</code>\u662F\u9ED8\u8BA4\u7684\u8C03\u7528\u65B9\u6CD5\uFF0C\u6240\u4EE5\u5982\u679C\u76F4\u63A5\u8BFB\u53D6<code>Date</code>\u5B9E\u4F8B\uFF0C\u5C31\u76F8\u5F53\u4E8E\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u3002</p><h3 id="toutcstring" tabindex="-1"><a class="header-anchor" href="#toutcstring" aria-hidden="true">#</a> toUTCString()</h3><p><code>toUTCString</code>\u65B9\u6CD5\u8FD4\u56DE\u5BF9\u5E94\u7684 UTC \u65F6\u95F4\uFF0C\u4E5F\u5C31\u662F\u6BD4\u5317\u4EAC\u65F6\u95F4\u665A8\u4E2A\u5C0F\u65F6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var d = new Date(2013, 0, 1);

d.toUTCString()
// &quot;Mon, 31 Dec 2012 16:00:00 GMT&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="toisostring" tabindex="-1"><a class="header-anchor" href="#toisostring" aria-hidden="true">#</a> toISOString()</h3><p><code>toISOString</code>\u65B9\u6CD5\u8FD4\u56DE\u5BF9\u5E94\u65F6\u95F4\u7684 ISO8601 \u5199\u6CD5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var d = new Date(2013, 0, 1);

d.toISOString()
// &quot;2012-12-31T16:00:00.000Z&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C<code>toISOString</code>\u65B9\u6CD5\u8FD4\u56DE\u7684\u603B\u662F UTC \u65F6\u533A\u7684\u65F6\u95F4\u3002</p><h3 id="tojson" tabindex="-1"><a class="header-anchor" href="#tojson" aria-hidden="true">#</a> <strong>toJSON()</strong></h3><p><code>toJSON</code>\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u7B26\u5408 JSON \u683C\u5F0F\u7684 ISO \u65E5\u671F\u5B57\u7B26\u4E32\uFF0C\u4E0E<code>toISOString</code>\u65B9\u6CD5\u7684\u8FD4\u56DE\u7ED3\u679C\u5B8C\u5168\u76F8\u540C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var d = new Date(2013, 0, 1);

d.toJSON()
// &quot;2012-12-31T16:00:00.000Z&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="todatestring" tabindex="-1"><a class="header-anchor" href="#todatestring" aria-hidden="true">#</a> <strong>toDateString()</strong></h3><p><code>toDateString</code>\u65B9\u6CD5\u8FD4\u56DE\u65E5\u671F\u5B57\u7B26\u4E32\uFF08\u4E0D\u542B\u5C0F\u65F6\u3001\u5206\u548C\u79D2\uFF09\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var d = new Date(2013, 0, 1);
d.toDateString() // &quot;Tue Jan 01 2013&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="totimestring" tabindex="-1"><a class="header-anchor" href="#totimestring" aria-hidden="true">#</a> <strong>toTimeString()</strong></h3><p><code>toTimeString</code>\u65B9\u6CD5\u8FD4\u56DE\u65F6\u95F4\u5B57\u7B26\u4E32\uFF08\u4E0D\u542B\u5E74\u6708\u65E5\uFF09\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var d = new Date(2013, 0, 1);
d.toTimeString() // &quot;00:00:00 GMT+0800 (CST)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\uFF087\uFF09\u672C\u5730\u65F6\u95F4</strong></p><p>\u4EE5\u4E0B\u4E09\u79CD\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5C06 Date \u5B9E\u4F8B\u8F6C\u4E3A\u8868\u793A\u672C\u5730\u65F6\u95F4\u7684\u5B57\u7B26\u4E32\u3002</p><ul><li><code>Date.prototype.toLocaleString()</code>\uFF1A\u5B8C\u6574\u7684\u672C\u5730\u65F6\u95F4\u3002</li><li><code>Date.prototype.toLocaleDateString()</code>\uFF1A\u672C\u5730\u65E5\u671F\uFF08\u4E0D\u542B\u5C0F\u65F6\u3001\u5206\u548C\u79D2\uFF09\u3002</li><li><code>Date.prototype.toLocaleTimeString()</code>\uFF1A\u672C\u5730\u65F6\u95F4\uFF08\u4E0D\u542B\u5E74\u6708\u65E5\uFF09\u3002</li></ul><p>\u4E0B\u9762\u662F\u7528\u6CD5\u5B9E\u4F8B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var d = new Date(2013, 0, 1);

d.toLocaleString()
// \u4E2D\u6587\u7248\u6D4F\u89C8\u5668\u4E3A&quot;2013\u5E741\u67081\u65E5 \u4E0A\u534812:00:00&quot;
// \u82F1\u6587\u7248\u6D4F\u89C8\u5668\u4E3A&quot;1/1/2013 12:00:00 AM&quot;

d.toLocaleDateString()
// \u4E2D\u6587\u7248\u6D4F\u89C8\u5668\u4E3A&quot;2013\u5E741\u67081\u65E5&quot;
// \u82F1\u6587\u7248\u6D4F\u89C8\u5668\u4E3A&quot;1/1/2013&quot;

d.toLocaleTimeString()
// \u4E2D\u6587\u7248\u6D4F\u89C8\u5668\u4E3A&quot;\u4E0A\u534812:00:00&quot;
// \u82F1\u6587\u7248\u6D4F\u89C8\u5668\u4E3A&quot;12:00:00 AM&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E09\u4E2A\u65B9\u6CD5\u90FD\u6709\u4E24\u4E2A\u53EF\u9009\u7684\u53C2\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dateObj.toLocaleString([locales[, options]])
dateObj.toLocaleDateString([locales[, options]])
dateObj.toLocaleTimeString([locales[, options]])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E24\u4E2A\u53C2\u6570\u4E2D\uFF0C<code>locales</code>\u662F\u4E00\u4E2A\u6307\u5B9A\u6240\u7528\u8BED\u8A00\u7684\u5B57\u7B26\u4E32\uFF0C<code>options</code>\u662F\u4E00\u4E2A\u914D\u7F6E\u5BF9\u8C61\u3002\u4E0B\u9762\u662F<code>locales</code>\u7684\u4F8B\u5B50\uFF0C\u5206\u522B\u91C7\u7528<code>en-US</code>\u548C<code>zh-CN</code>\u8BED\u8A00\u8BBE\u5B9A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var d = new Date(2013, 0, 1);

d.toLocaleString(&#39;en-US&#39;) // &quot;1/1/2013, 12:00:00 AM&quot;
d.toLocaleString(&#39;zh-CN&#39;) // &quot;2013/1/1 \u4E0A\u534812:00:00&quot;

d.toLocaleDateString(&#39;en-US&#39;) // &quot;1/1/2013&quot;
d.toLocaleDateString(&#39;zh-CN&#39;) // &quot;2013/1/1&quot;

d.toLocaleTimeString(&#39;en-US&#39;) // &quot;12:00:00 AM&quot;
d.toLocaleTimeString(&#39;zh-CN&#39;) // &quot;\u4E0A\u534812:00:00&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>options</code>\u914D\u7F6E\u5BF9\u8C61\u6709\u4EE5\u4E0B\u5C5E\u6027\u3002</p><ul><li><code>dateStyle</code>\uFF1A\u53EF\u80FD\u7684\u503C\u4E3A<code>full</code>\u3001<code>long</code>\u3001<code>medium</code>\u3001<code>short</code>\u3002</li><li><code>timeStyle</code>\uFF1A\u53EF\u80FD\u7684\u503C\u4E3A<code>full</code>\u3001<code>long</code>\u3001<code>medium</code>\u3001<code>short</code>\u3002</li><li><code>month</code>\uFF1A\u53EF\u80FD\u7684\u503C\u4E3A<code>numeric</code>\u3001<code>2-digit</code>\u3001<code>long</code>\u3001<code>short</code>\u3001<code>narrow</code>\u3002</li><li><code>year</code>\uFF1A\u53EF\u80FD\u7684\u503C\u4E3A<code>numeric</code>\u3001<code>2-digit</code>\u3002</li><li><code>weekday</code>\uFF1A\u53EF\u80FD\u7684\u503C\u4E3A<code>long</code>\u3001<code>short</code>\u3001<code>narrow</code>\u3002</li><li><code>day</code>\u3001<code>hour</code>\u3001<code>minute</code>\u3001<code>second</code>\uFF1A\u53EF\u80FD\u7684\u503C\u4E3A<code>numeric</code>\u3001<code>2-digit</code>\u3002</li><li><code>timeZone</code>\uFF1A\u53EF\u80FD\u7684\u503C\u4E3A IANA \u7684\u65F6\u533A\u6570\u636E\u5E93\u3002</li><li><code>timeZooneName</code>\uFF1A\u53EF\u80FD\u7684\u503C\u4E3A<code>long</code>\u3001<code>short</code>\u3002</li><li><code>hour12</code>\uFF1A24\u5C0F\u65F6\u5468\u671F\u8FD8\u662F12\u5C0F\u65F6\u5468\u671F\uFF0C\u53EF\u80FD\u7684\u503C\u4E3A<code>true</code>\u3001<code>false</code>\u3002</li></ul><p>\u4E0B\u9762\u662F\u7528\u6CD5\u5B9E\u4F8B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var d = new Date(2013, 0, 1);

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-\u7C7B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#get-\u7C7B\u65B9\u6CD5" aria-hidden="true">#</a> get \u7C7B\u65B9\u6CD5</h3><p><code>Date</code>\u5BF9\u8C61\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217<code>get*</code>\u65B9\u6CD5\uFF0C\u7528\u6765\u83B7\u53D6\u5B9E\u4F8B\u5BF9\u8C61\u67D0\u4E2A\u65B9\u9762\u7684\u503C\u3002</p><ul><li><code>getTime()</code>\uFF1A\u8FD4\u56DE\u5B9E\u4F8B\u8DDD\u79BB1970\u5E741\u67081\u65E500:00:00\u7684\u6BEB\u79D2\u6570\uFF0C\u7B49\u540C\u4E8E<code>valueOf</code>\u65B9\u6CD5\u3002</li><li><code>getDate()</code>\uFF1A\u8FD4\u56DE\u5B9E\u4F8B\u5BF9\u8C61\u5BF9\u5E94\u6BCF\u4E2A\u6708\u7684\u51E0\u53F7\uFF08\u4ECE1\u5F00\u59CB\uFF09\u3002</li><li><code>getDay()</code>\uFF1A\u8FD4\u56DE\u661F\u671F\u51E0\uFF0C\u661F\u671F\u65E5\u4E3A0\uFF0C\u661F\u671F\u4E00\u4E3A1\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</li><li><code>getFullYear()</code>\uFF1A\u8FD4\u56DE\u56DB\u4F4D\u7684\u5E74\u4EFD\u3002</li><li><code>getMonth()</code>\uFF1A\u8FD4\u56DE\u6708\u4EFD\uFF080\u8868\u793A1\u6708\uFF0C11\u8868\u793A12\u6708\uFF09\u3002</li><li><code>getHours()</code>\uFF1A\u8FD4\u56DE\u5C0F\u65F6\uFF080-23\uFF09\u3002</li><li><code>getMilliseconds()</code>\uFF1A\u8FD4\u56DE\u6BEB\u79D2\uFF080-999\uFF09\u3002</li><li><code>getMinutes()</code>\uFF1A\u8FD4\u56DE\u5206\u949F\uFF080-59\uFF09\u3002</li><li><code>getSeconds()</code>\uFF1A\u8FD4\u56DE\u79D2\uFF080-59\uFF09\u3002</li><li><code>getTimezoneOffset()</code>\uFF1A\u8FD4\u56DE\u5F53\u524D\u65F6\u95F4\u4E0E UTC \u7684\u65F6\u533A\u5DEE\u5F02\uFF0C\u4EE5\u5206\u949F\u8868\u793A\uFF0C\u8FD4\u56DE\u7ED3\u679C\u8003\u8651\u5230\u4E86\u590F\u4EE4\u65F6\u56E0\u7D20\u3002</li></ul><p>\u6240\u6709\u8FD9\u4E9B<code>get*</code>\u65B9\u6CD5\u8FD4\u56DE\u7684\u90FD\u662F\u6574\u6570\uFF0C\u4E0D\u540C\u65B9\u6CD5\u8FD4\u56DE\u503C\u7684\u8303\u56F4\u4E0D\u4E00\u6837\u3002</p><ul><li>\u5206\u949F\u548C\u79D2\uFF1A0 \u5230 59</li><li>\u5C0F\u65F6\uFF1A0 \u5230 23</li><li>\u661F\u671F\uFF1A0\uFF08\u661F\u671F\u5929\uFF09\u5230 6\uFF08\u661F\u671F\u516D\uFF09</li><li>\u65E5\u671F\uFF1A1 \u5230 31</li><li>\u6708\u4EFD\uFF1A0\uFF08\u4E00\u6708\uFF09\u5230 11\uFF08\u5341\u4E8C\u6708\uFF09</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var d = new Date(&#39;January 6, 2013&#39;);

d.getDate() // 6
d.getMonth() // 0
d.getFullYear() // 2013
d.getTimezoneOffset() // -480
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u6700\u540E\u4E00\u884C\u8FD4\u56DE<code>-480</code>\uFF0C\u5373 UTC \u65F6\u95F4\u51CF\u53BB\u5F53\u524D\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u5206\u949F\u3002<code>-480</code>\u8868\u793A UTC \u6BD4\u5F53\u524D\u65F6\u95F4\u5C11480\u5206\u949F\uFF0C\u5373\u5F53\u524D\u65F6\u533A\u6BD4 UTC \u65E98\u4E2A\u5C0F\u65F6\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u8BA1\u7B97\u672C\u5E74\u5EA6\u8FD8\u5269\u4E0B\u591A\u5C11\u5929\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function leftDays() {
  var today = new Date();
  var endYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59, 999);
  var msPerDay = 24 * 60 * 60 * 1000;
  return Math.round((endYear.getTime() - today.getTime()) / msPerDay);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u8FD9\u4E9B<code>get*</code>\u65B9\u6CD5\u8FD4\u56DE\u7684\u90FD\u662F\u5F53\u524D\u65F6\u533A\u7684\u65F6\u95F4\uFF0C<code>Date</code>\u5BF9\u8C61\u8FD8\u63D0\u4F9B\u4E86\u8FD9\u4E9B\u65B9\u6CD5\u5BF9\u5E94\u7684 UTC \u7248\u672C\uFF0C\u7528\u6765\u8FD4\u56DE UTC \u65F6\u95F4\u3002</p><ul><li><code>getUTCDate()</code></li><li><code>getUTCFullYear()</code></li><li><code>getUTCMonth()</code></li><li><code>getUTCDay()</code></li><li><code>getUTCHours()</code></li><li><code>getUTCMinutes()</code></li><li><code>getUTCSeconds()</code></li><li><code>getUTCMilliseconds()</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var d = new Date(&#39;January 6, 2013&#39;);

d.getDate() // 6
d.getUTCDate() // 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u5B9E\u4F8B\u5BF9\u8C61<code>d</code>\u8868\u793A\u5F53\u524D\u65F6\u533A\uFF08\u4E1C\u516B\u65F6\u533A\uFF09\u76841\u67086\u65E50\u70B90\u52060\u79D2\uFF0C\u8FD9\u4E2A\u65F6\u95F4\u5BF9\u4E8E\u5F53\u524D\u65F6\u533A\u6765\u8BF4\u662F1\u67086\u65E5\uFF0C\u6240\u4EE5<code>getDate</code>\u65B9\u6CD5\u8FD4\u56DE6\uFF0C\u5BF9\u4E8E UTC \u65F6\u533A\u6765\u8BF4\u662F1\u67085\u65E5\uFF0C\u6240\u4EE5<code>getUTCDate</code>\u65B9\u6CD5\u8FD4\u56DE5\u3002</p><h3 id="set-\u7C7B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#set-\u7C7B\u65B9\u6CD5" aria-hidden="true">#</a> set \u7C7B\u65B9\u6CD5</h3><p><code>Date</code>\u5BF9\u8C61\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217<code>set*</code>\u65B9\u6CD5\uFF0C\u7528\u6765\u8BBE\u7F6E\u5B9E\u4F8B\u5BF9\u8C61\u7684\u5404\u4E2A\u65B9\u9762\u3002</p><ul><li><code>setDate(date)</code>\uFF1A\u8BBE\u7F6E\u5B9E\u4F8B\u5BF9\u8C61\u5BF9\u5E94\u7684\u6BCF\u4E2A\u6708\u7684\u51E0\u53F7\uFF081-31\uFF09\uFF0C\u8FD4\u56DE\u6539\u53D8\u540E\u6BEB\u79D2\u65F6\u95F4\u6233\u3002</li><li><code>setFullYear(year [, month, date])</code>\uFF1A\u8BBE\u7F6E\u56DB\u4F4D\u5E74\u4EFD\u3002</li><li><code>setHours(hour [, min, sec, ms])</code>\uFF1A\u8BBE\u7F6E\u5C0F\u65F6\uFF080-23\uFF09\u3002</li><li><code>setMilliseconds()</code>\uFF1A\u8BBE\u7F6E\u6BEB\u79D2\uFF080-999\uFF09\u3002</li><li><code>setMinutes(min [, sec, ms])</code>\uFF1A\u8BBE\u7F6E\u5206\u949F\uFF080-59\uFF09\u3002</li><li><code>setMonth(month [, date])</code>\uFF1A\u8BBE\u7F6E\u6708\u4EFD\uFF080-11\uFF09\u3002</li><li><code>setSeconds(sec [, ms])</code>\uFF1A\u8BBE\u7F6E\u79D2\uFF080-59\uFF09\u3002</li><li><code>setTime(milliseconds)</code>\uFF1A\u8BBE\u7F6E\u6BEB\u79D2\u65F6\u95F4\u6233\u3002</li></ul><p>\u8FD9\u4E9B\u65B9\u6CD5\u57FA\u672C\u662F\u8DDF<code>get*</code>\u65B9\u6CD5\u4E00\u4E00\u5BF9\u5E94\u7684\uFF0C\u4F46\u662F\u6CA1\u6709<code>setDay</code>\u65B9\u6CD5\uFF0C\u56E0\u4E3A\u661F\u671F\u51E0\u662F\u8BA1\u7B97\u51FA\u6765\u7684\uFF0C\u800C\u4E0D\u662F\u8BBE\u7F6E\u7684\u3002\u53E6\u5916\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u51E1\u662F\u6D89\u53CA\u5230\u8BBE\u7F6E\u6708\u4EFD\uFF0C\u90FD\u662F\u4ECE0\u5F00\u59CB\u7B97\u7684\uFF0C\u5373<code>0</code>\u662F1\u6708\uFF0C<code>11</code>\u662F12\u6708\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var d = new Date (&#39;January 6, 2013&#39;);

d // Sun Jan 06 2013 00:00:00 GMT+0800 (CST)
d.setDate(9) // 1357660800000
d // Wed Jan 09 2013 00:00:00 GMT+0800 (CST)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>set*</code>\u65B9\u6CD5\u7684\u53C2\u6570\u90FD\u4F1A\u81EA\u52A8\u6298\u7B97\u3002\u4EE5<code>setDate()</code>\u4E3A\u4F8B\uFF0C\u5982\u679C\u53C2\u6570\u8D85\u8FC7\u5F53\u6708\u7684\u6700\u5927\u5929\u6570\uFF0C\u5219\u5411\u4E0B\u4E00\u4E2A\u6708\u987A\u5EF6\uFF0C\u5982\u679C\u53C2\u6570\u662F\u8D1F\u6570\uFF0C\u8868\u793A\u4ECE\u4E0A\u4E2A\u6708\u7684\u6700\u540E\u4E00\u5929\u5F00\u59CB\u51CF\u53BB\u7684\u5929\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var d1 = new Date(&#39;January 6, 2013&#39;);

d1.setDate(32) // 1359648000000
d1 // Fri Feb 01 2013 00:00:00 GMT+0800 (CST)

var d2 = new Date (&#39;January 6, 2013&#39;);

d2.setDate(-1) // 1356796800000
d2 // Sun Dec 30 2012 00:00:00 GMT+0800 (CST)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>d1.setDate(32)</code>\u5C06\u65E5\u671F\u8BBE\u4E3A1\u6708\u4EFD\u768432\u53F7\uFF0C\u56E0\u4E3A1\u6708\u4EFD\u53EA\u670931\u53F7\uFF0C\u6240\u4EE5\u81EA\u52A8\u6298\u7B97\u4E3A2\u67081\u65E5\u3002<code>d2.setDate(-1)</code>\u8868\u793A\u8BBE\u4E3A\u4E0A\u4E2A\u6708\u7684\u5012\u6570\u7B2C\u4E8C\u5929\uFF0C\u537312\u670830\u65E5\u3002</p><p><code>set</code>\u7C7B\u65B9\u6CD5\u548C<code>get</code>\u7C7B\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u7ED3\u5408\u4F7F\u7528\uFF0C\u5F97\u5230\u76F8\u5BF9\u65F6\u95F4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var d = new Date();

// \u5C06\u65E5\u671F\u5411\u540E\u63A81000\u5929
d.setDate(d.getDate() + 1000);
// \u5C06\u65F6\u95F4\u8BBE\u4E3A6\u5C0F\u65F6\u540E
d.setHours(d.getHours() + 6);
// \u5C06\u5E74\u4EFD\u8BBE\u4E3A\u53BB\u5E74
d.setFullYear(d.getFullYear() - 1);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>set*</code>\u7CFB\u5217\u65B9\u6CD5\u9664\u4E86<code>setTime()</code>\uFF0C\u90FD\u6709\u5BF9\u5E94\u7684 UTC \u7248\u672C\uFF0C\u5373\u8BBE\u7F6E UTC \u65F6\u533A\u7684\u65F6\u95F4\u3002</p><ul><li><code>setUTCDate()</code></li><li><code>setUTCFullYear()</code></li><li><code>setUTCHours()</code></li><li><code>setUTCMilliseconds()</code></li><li><code>setUTCMinutes()</code></li><li><code>setUTCMonth()</code></li><li><code>setUTCSeconds()</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var d = new Date(&#39;January 6, 2013&#39;);
d.getUTCHours() // 16
d.setUTCHours(22) // 1357423200000
d // Sun Jan 06 2013 06:00:00 GMT+0800 (CST)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u672C\u5730\u65F6\u533A\uFF08\u4E1C\u516B\u65F6\u533A\uFF09\u76841\u67086\u65E50\u70B90\u5206\uFF0C\u662F UTC \u65F6\u533A\u7684\u524D\u4E00\u5929\u4E0B\u534816\u70B9\u3002\u8BBE\u4E3A UTC \u65F6\u533A\u768422\u70B9\u4EE5\u540E\uFF0C\u5C31\u53D8\u4E3A\u672C\u5730\u65F6\u533A\u7684\u4E0A\u53486\u70B9\u3002</p>`,123);function a(l,s){return n}var t=e(i,[["render",a],["__file","date.html.vue"]]);export{t as default};
