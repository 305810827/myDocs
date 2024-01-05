import{_ as e,o as t,c as n,a as s}from"./app-53705635.js";const a={},l=s(`<p>页面是怎么来的，首先是通过我们在浏览器输入的网址，这个网址会在浏览器的解析下找到对应的服务器，向服务器请求返回一个html文件（其他资源不谈），html内容就是开发者写的代码，浏览器拿到html内容字符流，通过状态机去解析出里面的词（token），相当于浏览器可拆分识别的最小单位。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p class=&quot;a&quot;&gt;text text text&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这段代码拆分词（token）有</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p              “标签开始”的开始;
class=&quot;a&quot;       属性；
&gt;               “标签开始”的结束;
text text text  文本; 
&lt;/p&gt;            标签结束。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[l];function d(c,r){return t(),n("div",null,i)}const u=e(a,[["render",d],["__file","页面是怎么来的.html.vue"]]);export{u as default};
