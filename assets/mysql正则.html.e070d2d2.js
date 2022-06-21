import{_ as e,e as d}from"./app.659fa32e.js";const t={},n=d(`<p>mysql</p><p>REGEXP</p><p>\u5047\u8BBE\uFF0C\u6211\u73B0\u5728\u9700\u8981\u5339\u914D\u4E0D\u4EC5\u4EC5\u662F\u5305\u542B100\u6570\u5B57\u7684\u7528\u6237\uFF0C\u800C\u662F100,200\uFF0C\u6216\u8005300\uFF0C\u53EA\u8981\u662F\u6574\u767E\u7684\u90FD\u9700\u8981\u5339\u914D\u3002\u6216\u8005\u8BF4\uFF0C\u6211\u9700\u8981\u6240\u6709\u540D\u5B57\u91CC\u9762\u5305\u542B\u6570\u5B57\u7684\uFF0C\u65E0\u8BBA\u4EC0\u4E48\u6570\u5B57\u3002\u90A3\u4E48\u4F7F\u7528<code>LIKE</code>\u6765\u5B9E\u73B0\u5C31\u4F1A\u663E\u5F97\u5341\u5206\u7684\u56F0\u96BE\u3002\u800C\u6B63\u5219\u8868\u8FBE\u5F0F\u5C31\u4F1A\u663E\u5F97\u5341\u5206\u7B80\u5355\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT * FROM my_user WHERE \`name\` REGEXP &#39;.00&#39;; // \u5339\u914D\u5305\u542B\u6574\u767E\u7684\u540D\u5B57\uFF0C\u5982100,200,300\u7B49\u7B49
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8868\u8FBE\u5F0F<code>.00</code>\u91CC\u9762\u7684\u70B9\uFF0C\u4EE3\u8868\u7684\u4EFB\u610F\u5B57\u7B26\u3002\u4E5F\u5C31\u662F\u65E0\u8BBA\u662F1\u8FD8\u662F2\u8FD8\u662F9\uFF0C\u6216\u8005\u662F\u5B57\u6BCD\u4EC0\u4E48\u7684\u90FD\u53EF\u4EE5\u5339\u914D\uFF0C\u5339\u914D\u4EFB\u610F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT * FROM my_user WHERE \`name\` REGEXP &#39;[0-9]&#39;; // \u5339\u914D\u6240\u6709\u540D\u5B57\u91CC\u9762\u5305\u542B\u6570\u5B57\u7684\u7528\u6237
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6216\u67E5\u8BE2\u4E5F\u53EB<code>OR</code>\u67E5\u8BE2\uFF0C\u662F\u6761\u4EF6\u5E76\u5217\u67E5\u8BE2\u7684\u4E00\u79CD\u60C5\u51B5\u3002\u7C7B\u4F3C\u4E8E\u7F16\u7A0B\u8BED\u8A00\u91CC\u9762\u7684<code>if else</code>\u53EA\u8981\u6709\u4E00\u4E2A\u6761\u4EF6\u7B26\u5408\u5C31\u4F1A\u88AB\u5339\u914D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT * FROM my_user WHERE \`name\` REGEXP &#39;100|200&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6B63\u5219\u5339\u914D\u4E2D\u6709\u4E00\u79CD\u7279\u6B8A\u7684<code>OR</code>\u5339\u914D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT * FROM my_user WHERE \`name\` REGEXP &#39;[12]&#39;;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528\u9884\u5B9A\u4E49\u5B57\u7B26\u96C6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u9884\u5B9A\u4E49\u5B57\u7B26\u96C6" aria-hidden="true">#</a> \u4F7F\u7528\u9884\u5B9A\u4E49\u5B57\u7B26\u96C6</h2><table><thead><tr><th>\u7C7B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>[:alnum:]</td><td>\u4EFB\u610F\u6570\u5B57\u548C\u5B57\u6BCD\u3002\u76F8\u5F53\u4E8E[a-zA-Z0-9]</td></tr><tr><td>[:alpha:]</td><td>\u4EFB\u610F\u5B57\u7B26\u3002\u76F8\u5F53\u4E8E[a-zA-z]</td></tr><tr><td>[:blank:]</td><td>\u7A7A\u683C\u548C\u5236\u8868\u3002\u76F8\u5F53\u4E8E[\uFF08\u53CC\u659C\u6760\uFF0Csegmentfault\u8FD9\u91CC\u53CC\u659C\u6760\u6253\u4E0D\u51FA\u6765\uFF09t]</td></tr><tr><td>[:cntrl:]</td><td>ASCII\u63A7\u5236\u5B57\u7B26\uFF08ASCII 0 \u523031\u548C127\uFF09</td></tr><tr><td>[:digit:]</td><td>\u4EFB\u610F\u6570\u5B57\u3002\u76F8\u5F53\u4E8E[0-9]</td></tr><tr><td>[:graph:]</td><td>\u4E0E[:print:]\u76F8\u540C\uFF0C\u4F46\u662F\u4E0D\u5305\u542B\u7A7A\u683C</td></tr><tr><td>[:lower:]</td><td>\u4EFB\u610F\u7684\u5C0F\u5199\u5B57\u6BCD\u3002\u76F8\u5F53\u4E8E[a-z]</td></tr><tr><td>[:print:]</td><td>\u4EFB\u610F\u53EF\u6253\u5370\u5B57\u7B26</td></tr><tr><td>[:punct:]</td><td>\u65E2\u4E0D\u5728[:alnum:]\u53C8\u4E0D\u5728[:cntrl:]\u4E2D\u7684\u4EFB\u610F\u5B57\u7B26</td></tr><tr><td>[:space:]</td><td>\u5305\u62EC\u7A7A\u683C\u5728\u5185\u7684\u4EFB\u610F\u7A7A\u767D\u5B57\u7B26\u3002</td></tr><tr><td>[:upper:]</td><td>\u4EFB\u610F\u5927\u5199\u5B57\u6BCD\u3002\u76F8\u5F53\u4E8E[A-Z]</td></tr><tr><td>[:xdigit:]</td><td>\u4EFB\u610F\u5341\u516D\u8FDB\u5236\u7684\u6570\u5B57\u3002\u76F8\u5F53\u4E8E[a-fA-F0-9]</td></tr></tbody></table><h2 id="\u5143\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#\u5143\u5B57\u7B26" aria-hidden="true">#</a> \u5143\u5B57\u7B26</h2><table><thead><tr><th>\u5143\u5B57\u7B26</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>*</td><td>\u91CD\u590D0\u6B21\u6216\u8005\u591A\u6B21</td></tr><tr><td>+</td><td>\u91CD\u590D\u4E00\u6B21\u6216\u8005\u591A\u6B21\u3002\u76F8\u5F53\u4E8E{1,}</td></tr><tr><td>?</td><td>\u91CD\u590D0\u6B21\u6216\u80051\u6B21</td></tr><tr><td>{n}</td><td>\u91CD\u590Dn\u6B21</td></tr><tr><td>{n,}</td><td>\u91CD\u590D\u81F3\u5C11n\u6B21</td></tr><tr><td>{n,m}</td><td>\u91CD\u590Dn-m\u6B21</td></tr></tbody></table><h2 id="\u5B9A\u4F4D\u5143\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4F4D\u5143\u5B57\u7B26" aria-hidden="true">#</a> \u5B9A\u4F4D\u5143\u5B57\u7B26</h2><p>\u9664\u4E86\u4E4B\u524D\u7684\u91CD\u590D\u5143\u5B57\u7B26\uFF0C\u6B63\u5219\u8FD8\u6709\u4E00\u79CD\u7279\u6B8A\u7684\u5B9A\u4F4D\u5143\u5B57\u7B26</p><table><thead><tr><th>\u5143\u5B57\u7B26</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>^</td><td>\u6587\u672C\u5F00\u59CB</td></tr><tr><td>$</td><td>\u6587\u672C\u7ED3\u5C3E</td></tr><tr><td>[[:&lt;:]]</td><td>\u8BCD\u7684\u5F00\u59CB</td></tr><tr><td>[[:&gt;:]]</td><td>\u8BCD\u7684\u7ED3\u5C3E</td></tr></tbody></table><h2 id="regexp-replace" tabindex="-1"><a class="header-anchor" href="#regexp-replace" aria-hidden="true">#</a> REGEXP_REPLACE</h2><p>\u4F8B\u5B50</p><p>\u4E0B\u9762\u7684\u793A\u4F8B\u8FDB\u884C\u68C0\u67E5<code>phone_number</code>\uFF0C\u5BFB\u627E\u6A21\u5F0F*<code>xxx</code><em>\u3002</em><code>xxx</code><em>. <em><code>xxxx</code></em>. Oracle \u4F7F\u7528 ( <em><code>xxx</code></em>) <em><code>xxx</code></em>-\u91CD\u65B0\u683C\u5F0F\u5316\u6B64\u6A21\u5F0F</em><code>xxxx</code>*\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u9009\u62E9
  REGEXP_REPLACE\uFF08\u7535\u8BDD\u53F7\u7801\uFF0C
                 &#39;([[:digit:]]{3})\\.([[:digit:]]{3})\\.([[:digit:]]{4})&#39;,
                 &#39;(\\\\1) \\\\2-\\\\3&#39;) &quot;REGEXP_REPLACE&quot;
  \u6765\u81EA\u5458\u5DE5
  ORDER BY &quot;REGEXP_REPLACE&quot;;

REGEXP_REPLACE
-------------------------------------------------- ------------------------------
(515) 123-4444
(515) 123-4567
(515) 123-4568
(515) 123-4569
(515) 123-5555
. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0B\u793A\u4F8B\u68C0\u67E5<code>country_name</code>. Oracle \u5728\u5B57\u7B26\u4E32\u4E2D\u7684\u6BCF\u4E2A\u975E\u7A7A\u5B57\u7B26\u540E\u653E\u7F6E\u4E00\u4E2A\u7A7A\u683C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u9009\u62E9
  REGEXP_REPLACE(country_name, &#39;(.)&#39;, &#39;\\\\1 &#39;) &quot;REGEXP_REPLACE&quot;
  \u6765\u81EA\u56FD\u5BB6\uFF1B

REGEXP_REPLACE
-------------------------------------------------- ------------------------------
\u963F\u6839\u5EF7
\u6FB3\u5927\u5229\u4E9A
\u6BD4\u5229\u65F6
\u5DF4\u897F
\u52A0\u62FF\u5927
. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0B\u793A\u4F8B\u68C0\u67E5\u5B57\u7B26\u4E32\uFF0C\u67E5\u627E\u4E24\u4E2A\u6216\u591A\u4E2A\u7A7A\u683C\u3002Oracle \u5C06\u6BCF\u6B21\u51FA\u73B0\u7684\u4E24\u4E2A\u6216\u591A\u4E2A\u7A7A\u683C\u66FF\u6362\u4E3A\u4E00\u4E2A\u7A7A\u683C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u9009\u62E9
  REGEXP_REPLACE(&#39;500 Oracle Parkway, Redwood Shores, CA&#39;,
                 &#39;( ){2,}&#39;, &#39; &#39;) &quot;REGEXP_REPLACE&quot;
  \u4ECE\u53CC\u91CD;

REGEXP_REPLACE
-------------------------------
500 Oracle Parkway, Redwood Shores, CA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>REGEXP_REPLACE \u6A21\u5F0F\u5339\u914D\uFF1A\u793A\u4F8B</strong></p><p>\u4EE5\u4E0B\u8BED\u53E5\u521B\u5EFA\u4E00\u4E2A\u8868 regexp_temp \u5E76\u5411\u5176\u4E2D\u63D2\u5165\u503C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u521B\u5EFA\u8868 regexp_temp(empName varchar2(20), emailID varchar2(20));

INSERT INTO regexp_temp (empName, emailID) VALUES (&#39;John Doe&#39;, &#39;johndoe@example.com&#39;);
INSERT INTO regexp_temp (empName, emailID) VALUES (&#39;Jane Doe&#39;, &#39;janedoe@example.com&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0B\u8BED\u53E5\u5C06\u5B57\u7B26\u4E32 &#39;Jane&#39; \u66FF\u6362\u4E3A &#39;John&#39;\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
SELECT empName, REGEXP_REPLACE (empName, &#39;Jane&#39;, &#39;John&#39;) &quot;STRING_REPLACE&quot; FROM regexp_temp;

EMPNAME STRING_REPLACE

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0B\u8BED\u53E5\u5C06\u5B57\u7B26\u4E32 &#39;John&#39; \u66FF\u6362\u4E3A &#39;Jane&#39;\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
SELECT empName, REGEXP_REPLACE (empName, &#39;Jane&#39;, &#39;John&#39;) &quot;STRING_REPLACE&quot; FROM regexp_temp;

EMPNAME STRING_REPLACE

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>update</strong> t_wb_blog t1,</p><p>(<strong>SELECT</strong> * <strong>FROM</strong> t_wb_blog</p><p><strong>WHERE</strong> Frelease_time <strong>REGEXP</strong> &#39;^[0-9]+\\-[0-9]+\\ [0-9]+\\:[0-9]+$&#39;) <strong>as</strong> t2</p><p><strong>set</strong> t1.Frelease_time = <strong>REGEXP_REPLACE</strong>(t1.Frelease_time, &#39;([0-9]+\\-[0-9]+)(\\ [0-9]+\\:[0-9]+)&#39;, &#39;2021-\\1&#39;)</p><p><strong>where</strong> t1.Fid = t2.Fid;</p>`,37);function i(r,a){return n}var l=e(t,[["render",i],["__file","mysql\u6B63\u5219.html.vue"]]);export{l as default};
