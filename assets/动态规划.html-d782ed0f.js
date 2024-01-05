import{_ as e,o as n,c as i,a as t}from"./app-53705635.js";const s={},a=t(`<p>动态规划（英语：Dynamic programming，简称 DP）是一种在数学、管理科学、计算机科学、经济学和生物信息学中使用的，通过把原问题分解为相对简单的子问题的方式求解复杂问题的方法。</p><p>动态规划不是某一种具体的算法，而是一种算法思想：若要解一个给定问题，我们需要解其不同部分（即子问题），再根据子问题的解以得出原问题的解。</p><h4 id="最优子结构" tabindex="-1"><a class="header-anchor" href="#最优子结构" aria-hidden="true">#</a> 最优子结构</h4><p>最优子结构规定的是子问题与原问题的关系，当我们在求一个问题最优解的时候，如果可以把这个问题分解成多个子问题，然后递归地找到每个子问题的最优解，最后通过一定的数学方法对各个子问题的最优解进行组合得出最终的结果。总结来说就是一个问题的最优解是由它的各个子问题的最优解决定的。</p><h4 id="重复子问题" tabindex="-1"><a class="header-anchor" href="#重复子问题" aria-hidden="true">#</a> 重复子问题</h4><p>重复子问题规定的是子问题与子问题的关系。当我们在递归地寻找每个子问题的最优解的时候，有可能会重复地遇到一些更小的子问题，而且这些子问题会重叠地出现在子问题里，出现这样的情况，会有很多重复的计算，动态规划可以保证每个重叠的子问题只会被求解一次。</p><p>重复子问题不是保证解的正确性必须的，但是如果递归求解子问题时，没有出现重复子问题，则没有必要用动态规划，直接普通的递归就可以了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>A * &quot;1+1+1+1+1+1+1+1 =？&quot; *

A : &quot;上面等式的值是多少&quot;
B : *计算* &quot;8!&quot;

A *在上面等式的左边写上 &quot;1+&quot; *
A : &quot;此时等式的值为多少&quot;
B : *quickly* &quot;9!&quot;
A : &quot;你怎么这么快就知道答案了&quot;
A : &quot;只要在8的基础上加1就行了&quot;
A : &quot;所以你不用重新计算因为你记住了第一个等式的值为8!动态规划算法也可以说是 &#39;记住求过的解来节省时间&#39;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面已经知道动态规划算法的核心是记住已经求过的解，记住求解的方式有两种：①<strong>自顶向下的备忘录法</strong> ②<strong>自底向上。</strong></p><p>https://blog.csdn.net/u013309870/article/details/75193592</p>`,10),d=[a];function r(o,l){return n(),i("div",null,d)}const c=e(s,[["render",r],["__file","动态规划.html.vue"]]);export{c as default};
