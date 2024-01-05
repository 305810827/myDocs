import{_ as e,o as a,c as n,a as r}from"./app-53705635.js";const l={},o=r(`<h1 id="array-与array-length-0的区别" tabindex="-1"><a class="header-anchor" href="#array-与array-length-0的区别" aria-hidden="true">#</a> Array=[]与Array.length=0的区别</h1><p>1、Array = []，在内存中创建一个新数组，将数组的引用赋给了变量，原数组值不改变。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let foo = [1,2,3]
let foo1 = foo
foo = []
console.log(foo, foo1) // [] [1,2,3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、Array.length = 0，修改数组本身，没有创建新的数组，改变了原数组的值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let foo = [1,2,3]
let foo1 = foo
foo.length = 0
console.log(foo, foo1) // [] []
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),i=[o];function t(s,d){return a(),n("div",null,i)}const v=e(l,[["render",t],["__file","Array___与Array.length_0.html.vue"]]);export{v as default};
