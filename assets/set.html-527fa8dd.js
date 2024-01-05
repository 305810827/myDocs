import{_ as s,r,o as i,c as o,b as e,e as a,d as n,a as l}from"./app-53705635.js";const d={},c=l(`<h1 id="set-对象" tabindex="-1"><a class="header-anchor" href="#set-对象" aria-hidden="true">#</a> Set 对象</h1><p><strong><code>Set</code></strong> 对象允许你存储任何类型的唯一值，无论是[原始值](javascript:if(confirm(&#39;https://developer.mozilla.org/en-US/docs/Glossary/커뮤니티 \\n\\n该文件无法用 Teleport Ultra 下载, 因为 它是一个域或路径外部被设置为它的启始地址的地址。 \\n\\n你想在服务器上打开它?&#39;))window.location=&#39;https://developer.mozilla.org/en-US/docs/Glossary/커뮤니티&#39;)或者是对象引用。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Set([iterable]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h5><ul><li><p>iterable</p><p>如果传递一个[可迭代对象](javascript:if(confirm(&#39;https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of \\n\\n该文件无法用 Teleport Ultra 下载, 因为 它是一个域或路径外部被设置为它的启始地址的地址。 \\n\\n你想在服务器上打开它?&#39;))window.location=&#39;https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of&#39;)，它的所有元素将被添加到新的 <strong>Set</strong>中。如果不指定此参数或其值为null，则新的 <strong>Set</strong>为空。</p></li><li><p>返回值一个新的Set对象。</p></li></ul><h2 id="简述" tabindex="-1"><a class="header-anchor" href="#简述" aria-hidden="true">#</a> 简述</h2><p><code>Set</code>对象是值的集合，你可以按照插入的顺序迭代它的元素。 Set中的元素只会出现一次，即 Set 中的元素是唯一的。</p><h5 id="值的相等" tabindex="-1"><a class="header-anchor" href="#值的相等" aria-hidden="true">#</a> 值的相等</h5><p>因为 Set 中的值总是唯一的，所以需要判断两个值是否相等。判断相等的算法与严格相等（===操作符）不同。具体来说，对于 Set ， +0 （+0 严格相等于-0）和-0是不同的值。尽管在最新的 ECMAScript 6规范中这点已被更改。从Gecko 29.0和 [recent nightly Chrome](javascript:if(confirm(&#39;https://code.google.com/p/v8/issues/mozbrowserloadstart \\n\\n该文件无法用 Teleport Ultra 下载, 因为 它是一个域或路径外部被设置为它的启始地址的地址。 \\n\\n你想在服务器上打开它?&#39;))window.location=&#39;https://code.google.com/p/v8/issues/mozbrowserloadstart&#39;)开始，Set 视 +0 和 -0 为相同的值。另外，<code>NaN</code>和<code>undefined</code>都可以被存储在Set 中， <code>NaN</code>之间被视为相同的值（尽管 NaN !== NaN）。</p><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>`,11),u={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/size",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"Set.prototype.size",-1),v=e("p",null,"返回 Set 对象中的值的个数",-1),m=e("h2",{id:"实例方法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#实例方法","aria-hidden":"true"},"#"),n(" 实例方法")],-1),b={id:"add-value",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#add-value","aria-hidden":"true"},"#",-1),p={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/add",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"add(*value*)",-1),f=e("p",null,[n("在"),e("code",null,"Set"),n("对象尾部添加一个元素。返回该"),e("code",null,"Set"),n("对象。")],-1),y={id:"clear",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#clear","aria-hidden":"true"},"#",-1),x={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/clear",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"clear()",-1),z=e("p",null,[n("移除"),e("code",null,"Set"),n("对象内的所有元素。")],-1),k={id:"delete-value",tabindex:"-1"},N=e("a",{class:"header-anchor",href:"#delete-value","aria-hidden":"true"},"#",-1),w={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/delete",target:"_blank",rel:"noopener noreferrer"},A=e("code",null,"delete(*value*)",-1),j=l("<p>移除<code>Set</code>中与这个值相等的元素，返回<code>Set.prototype.has(value)</code>在这个操作前会返回的值（即如果该元素存在，返回<code>true</code>，否则返回<code>false</code>）。<code>Set.prototype.has(value)</code>在此后会返回<code>false</code>。</p>",1),C={id:"entries",tabindex:"-1"},G=e("a",{class:"header-anchor",href:"#entries","aria-hidden":"true"},"#",-1),J={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/entries",target:"_blank",rel:"noopener noreferrer"},R=e("code",null,"entries()",-1),W=e("p",null,[n("返回一个新的迭代器对象，该对象包含"),e("code",null,"Set"),n("对象中的按插入顺序排列的所有元素的值的"),e("code",null,"[value, value]"),n("数组。为了使这个方法和"),e("code",null,"Map"),n("对象保持相似， 每个值的键和值相等。")],-1),O={id:"foreach",tabindex:"-1"},E=e("a",{class:"header-anchor",href:"#foreach","aria-hidden":"true"},"#",-1),U={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"forEach()",-1),B=e("p",null,[n("按照插入顺序，为Set对象中的每一个值调用一次callBackFn。如果提供了"),e("code",null,"thisArg"),n("参数，回调中的"),e("code",null,"this"),n("会是这个参数。")],-1),L={id:"has-value",tabindex:"-1"},M=e("a",{class:"header-anchor",href:"#has-value","aria-hidden":"true"},"#",-1),V={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/has",target:"_blank",rel:"noopener noreferrer"},I=e("code",null,"has(*value*)",-1),F=e("p",null,[n("返回一个布尔值，表示该值在"),e("code",null,"Set"),n("中存在与否。")],-1),H={id:"keys",tabindex:"-1"},D=e("a",{class:"header-anchor",href:"#keys","aria-hidden":"true"},"#",-1),K={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"keys()",-1),Q=e("p",null,[n("与**"),e("code",null,"values()"),n("**方法相同，返回一个新的迭代器对象，该对象包含"),e("code",null,"Set"),n("对象中的按插入顺序排列的所有元素的值。")],-1),X={id:"values",tabindex:"-1"},Y=e("a",{class:"header-anchor",href:"#values","aria-hidden":"true"},"#",-1),Z={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/values",target:"_blank",rel:"noopener noreferrer"},$=e("code",null,"values()",-1),ee=e("p",null,[n("返回一个新的迭代器对象，该对象包含"),e("code",null,"Set"),n("对象中的按插入顺序排列的所有元素的值。")],-1),ne={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator",target:"_blank",rel:"noopener noreferrer"},te=e("code",null,"Set.prototype[@@iterator]()",-1),ae=e("p",null,[n("返回一个新的迭代器对象，该对象包含"),e("code",null,"Set"),n("对象中的按插入顺序排列的所有元素的值。")],-1),le=l(`<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="使用set对象" tabindex="-1"><a class="header-anchor" href="#使用set对象" aria-hidden="true">#</a> 使用<code>Set</code>对象</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let mySet = new Set();
mySet.add(1);
// Set(1) {1}
mySet.add(5);
// Set(2) {1, 5}
mySet.add(&quot;some text&quot;);
// Set(3) {1, 5, &quot;some text&quot;}
mySet.has(1);
// true
mySet.has(3);
// false
mySet.has(5);
// true
mySet.has(Math.sqrt(25));
// true
mySet.has(&quot;Some Text&quot;.toLowerCase());
// true
mySet.size;
// 3
mySet.delete(5);
// true,  从set中移除5
mySet.has(5);
// false, 5已经被移除
mySet.size;
// 2, 我们刚刚移除了一个值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="迭代set" tabindex="-1"><a class="header-anchor" href="#迭代set" aria-hidden="true">#</a> 迭代Set</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 迭代整个set
// 按顺序输出：1, &quot;some text&quot;
for (let item of mySet) console.log(item);
// 按顺序输出：1, &quot;some text&quot;
for (let item of mySet.keys()) console.log(item);
// 按顺序输出：1, &quot;some text&quot;
for (let item of mySet.values()) console.log(item);
// 按顺序输出：1, &quot;some text&quot;
//(键与值相等)
for (let [key, value] of mySet.entries()) console.log(key);
// 转换Set为Array (with Array comprehensions)
var myArr = [v for (v of mySet)]; // [1, &quot;some text&quot;]
// 替代方案(with Array.from)
var myArr = Array.from(mySet); // [1, &quot;some text&quot;]
// 如果在HTML文档中工作，也可以：
mySet.add(document.body);
mySet.has(document.querySelector(&quot;body&quot;)); // true
// Set和Array互换
mySet2 = new Set([1,2,3,4]);
mySet2.size; // 4
[...mySet2]; // [1,2,3,4]
// 截取  
var intersection = new Set([x for (x of set1) if (set2.has(x))]);
// 用forEach迭代
mySet.forEach(function(value) {
  console.log(value);
});
// 1
// 2
// 3
// 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="与-array-的联系" tabindex="-1"><a class="header-anchor" href="#与-array-的联系" aria-hidden="true">#</a> 与 <code>Array 的联系</code></h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var myArray = [&quot;value1&quot;, &quot;value2&quot;, &quot;value3&quot;];
// 用Set构造器将Array转换为Set
var mySet = new Set(myArray);
mySet.has(&quot;value1&quot;); // returns true
// 用...(展开操作符)操作符将Set转换为Array
console.log([...mySet]); // 与myArray完全一致
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function se(re,ie){const t=r("ExternalLinkIcon");return i(),o("div",null,[c,e("ul",null,[e("li",null,[e("p",null,[e("a",u,[h,a(t)])]),v])]),m,e("ul",null,[e("li",null,[e("h3",b,[_,n(),e("a",p,[S,a(t)])]),f]),e("li",null,[e("h3",y,[g,n(),e("a",x,[q,a(t)])]),z]),e("li",null,[e("h3",k,[N,n(),e("a",w,[A,a(t)])]),j]),e("li",null,[e("h3",C,[G,n(),e("a",J,[R,a(t)])]),W]),e("li",null,[e("h3",O,[E,n(),e("a",U,[T,a(t)])]),B]),e("li",null,[e("h3",L,[M,n(),e("a",V,[I,a(t)])]),F]),e("li",null,[e("h3",H,[D,n(),e("a",K,[P,n(),a(t)])]),Q]),e("li",null,[e("h3",X,[Y,n(),e("a",Z,[$,a(t)])]),ee]),e("li",null,[e("p",null,[e("a",ne,[te,a(t)])]),ae])]),le])}const de=s(d,[["render",se],["__file","set.html.vue"]]);export{de as default};
