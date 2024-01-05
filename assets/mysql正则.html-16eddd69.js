import{_ as e,o as d,c as t,a as n}from"./app-53705635.js";const i={},a=n(`<p>mysql</p><p>REGEXP</p><p>假设，我现在需要匹配不仅仅是包含100数字的用户，而是100,200，或者300，只要是整百的都需要匹配。或者说，我需要所有名字里面包含数字的，无论什么数字。那么使用<code>LIKE</code>来实现就会显得十分的困难。而正则表达式就会显得十分简单。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT * FROM my_user WHERE \`name\` REGEXP &#39;.00&#39;; // 匹配包含整百的名字，如100,200,300等等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>表达式<code>.00</code>里面的点，代表的任意字符。也就是无论是1还是2还是9，或者是字母什么的都可以匹配，匹配任意。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT * FROM my_user WHERE \`name\` REGEXP &#39;[0-9]&#39;; // 匹配所有名字里面包含数字的用户
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或查询也叫<code>OR</code>查询，是条件并列查询的一种情况。类似于编程语言里面的<code>if else</code>只要有一个条件符合就会被匹配。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT * FROM my_user WHERE \`name\` REGEXP &#39;100|200&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>正则匹配中有一种特殊的<code>OR</code>匹配。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT * FROM my_user WHERE \`name\` REGEXP &#39;[12]&#39;;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用预定义字符集" tabindex="-1"><a class="header-anchor" href="#使用预定义字符集" aria-hidden="true">#</a> 使用预定义字符集</h2><table><thead><tr><th>类</th><th>说明</th></tr></thead><tbody><tr><td>[:alnum:]</td><td>任意数字和字母。相当于[a-zA-Z0-9]</td></tr><tr><td>[:alpha:]</td><td>任意字符。相当于[a-zA-z]</td></tr><tr><td>[:blank:]</td><td>空格和制表。相当于[（双斜杠，segmentfault这里双斜杠打不出来）t]</td></tr><tr><td>[:cntrl:]</td><td>ASCII控制字符（ASCII 0 到31和127）</td></tr><tr><td>[:digit:]</td><td>任意数字。相当于[0-9]</td></tr><tr><td>[:graph:]</td><td>与[:print:]相同，但是不包含空格</td></tr><tr><td>[:lower:]</td><td>任意的小写字母。相当于[a-z]</td></tr><tr><td>[:print:]</td><td>任意可打印字符</td></tr><tr><td>[:punct:]</td><td>既不在[:alnum:]又不在[:cntrl:]中的任意字符</td></tr><tr><td>[:space:]</td><td>包括空格在内的任意空白字符。</td></tr><tr><td>[:upper:]</td><td>任意大写字母。相当于[A-Z]</td></tr><tr><td>[:xdigit:]</td><td>任意十六进制的数字。相当于[a-fA-F0-9]</td></tr></tbody></table><h2 id="元字符" tabindex="-1"><a class="header-anchor" href="#元字符" aria-hidden="true">#</a> 元字符</h2><table><thead><tr><th>元字符</th><th>作用</th></tr></thead><tbody><tr><td>*</td><td>重复0次或者多次</td></tr><tr><td>+</td><td>重复一次或者多次。相当于{1,}</td></tr><tr><td>?</td><td>重复0次或者1次</td></tr><tr><td>{n}</td><td>重复n次</td></tr><tr><td>{n,}</td><td>重复至少n次</td></tr><tr><td>{n,m}</td><td>重复n-m次</td></tr></tbody></table><h2 id="定位元字符" tabindex="-1"><a class="header-anchor" href="#定位元字符" aria-hidden="true">#</a> 定位元字符</h2><p>除了之前的重复元字符，正则还有一种特殊的定位元字符</p><table><thead><tr><th>元字符</th><th>作用</th></tr></thead><tbody><tr><td>^</td><td>文本开始</td></tr><tr><td>$</td><td>文本结尾</td></tr><tr><td>[[:&lt;:]]</td><td>词的开始</td></tr><tr><td>[[:&gt;:]]</td><td>词的结尾</td></tr></tbody></table><h2 id="regexp-replace" tabindex="-1"><a class="header-anchor" href="#regexp-replace" aria-hidden="true">#</a> REGEXP_REPLACE</h2><p>例子</p><p>下面的示例进行检查<code>phone_number</code>，寻找模式*<code>xxx</code><em>。</em><code>xxx</code><em>. <em><code>xxxx</code></em>. Oracle 使用 ( <em><code>xxx</code></em>) <em><code>xxx</code></em>-重新格式化此模式</em><code>xxxx</code>*。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
选择
  REGEXP_REPLACE（电话号码，
                 &#39;([[:digit:]]{3})\\.([[:digit:]]{3})\\.([[:digit:]]{4})&#39;,
                 &#39;(\\\\1) \\\\2-\\\\3&#39;) &quot;REGEXP_REPLACE&quot;
  来自员工
  ORDER BY &quot;REGEXP_REPLACE&quot;;

REGEXP_REPLACE
-------------------------------------------------- ------------------------------
(515) 123-4444
(515) 123-4567
(515) 123-4568
(515) 123-4569
(515) 123-5555
. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下示例检查<code>country_name</code>. Oracle 在字符串中的每个非空字符后放置一个空格。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
选择
  REGEXP_REPLACE(country_name, &#39;(.)&#39;, &#39;\\\\1 &#39;) &quot;REGEXP_REPLACE&quot;
  来自国家；

REGEXP_REPLACE
-------------------------------------------------- ------------------------------
阿根廷
澳大利亚
比利时
巴西
加拿大
. . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下示例检查字符串，查找两个或多个空格。Oracle 将每次出现的两个或多个空格替换为一个空格。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
选择
  REGEXP_REPLACE(&#39;500 Oracle Parkway, Redwood Shores, CA&#39;,
                 &#39;( ){2,}&#39;, &#39; &#39;) &quot;REGEXP_REPLACE&quot;
  从双重;

REGEXP_REPLACE
-------------------------------
500 Oracle Parkway, Redwood Shores, CA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>REGEXP_REPLACE 模式匹配：示例</strong></p><p>以下语句创建一个表 regexp_temp 并向其中插入值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
创建表 regexp_temp(empName varchar2(20), emailID varchar2(20));

INSERT INTO regexp_temp (empName, emailID) VALUES (&#39;John Doe&#39;, &#39;johndoe@example.com&#39;);
INSERT INTO regexp_temp (empName, emailID) VALUES (&#39;Jane Doe&#39;, &#39;janedoe@example.com&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下语句将字符串 &#39;Jane&#39; 替换为 &#39;John&#39;：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
SELECT empName, REGEXP_REPLACE (empName, &#39;Jane&#39;, &#39;John&#39;) &quot;STRING_REPLACE&quot; FROM regexp_temp;

EMPNAME STRING_REPLACE

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下语句将字符串 &#39;John&#39; 替换为 &#39;Jane&#39;：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
SELECT empName, REGEXP_REPLACE (empName, &#39;Jane&#39;, &#39;John&#39;) &quot;STRING_REPLACE&quot; FROM regexp_temp;

EMPNAME STRING_REPLACE

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>update</strong> t_wb_blog t1,</p><p>(<strong>SELECT</strong> * <strong>FROM</strong> t_wb_blog</p><p><strong>WHERE</strong> Frelease_time <strong>REGEXP</strong> &#39;^[0-9]+\\-[0-9]+\\ [0-9]+\\:[0-9]+$&#39;) <strong>as</strong> t2</p><p><strong>set</strong> t1.Frelease_time = <strong>REGEXP_REPLACE</strong>(t1.Frelease_time, &#39;([0-9]+\\-[0-9]+)(\\ [0-9]+\\:[0-9]+)&#39;, &#39;2021-\\1&#39;)</p><p><strong>where</strong> t1.Fid = t2.Fid;</p>`,37),r=[a];function s(l,c){return d(),t("div",null,r)}const m=e(i,[["render",s],["__file","mysql正则.html.vue"]]);export{m as default};
