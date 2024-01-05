import{_ as e,o as n,c as i,a as s}from"./app-53705635.js";const a={},d=s(`<h1 id="一、概念" tabindex="-1"><a class="header-anchor" href="#一、概念" aria-hidden="true">#</a> 一、概念</h1><h5 id="type-类型别名" tabindex="-1"><a class="header-anchor" href="#type-类型别名" aria-hidden="true">#</a> type : 类型别名</h5><p>概念：可以给一个或多个数据类型（string、number、…）取一个别名； 举例： type dataType=number (给一个) type dataType=number | string | turple</p><h5 id="interface-接口" tabindex="-1"><a class="header-anchor" href="#interface-接口" aria-hidden="true">#</a> interface：接口</h5><p>概念：定义参数或方法的数据类型；</p><h1 id="二、两者的异同" tabindex="-1"><a class="header-anchor" href="#二、两者的异同" aria-hidden="true">#</a> 二、两者的异同</h1><h2 id="_1-相同点" tabindex="-1"><a class="header-anchor" href="#_1-相同点" aria-hidden="true">#</a> 1.相同点</h2><ol><li><p>都可以描述一个对象或者函数</p><p><strong>interface</strong></p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface User {
    name: string;
    age: number;
}

interface SetUser {
	(name: string, age: number): void;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ <strong>type</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type User = {
    name: string;
    age: number
}


type SetUser = (name: string, age: number): void;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、interface和type都可以拓展，并且两者并不是互相独立的，也就是说interface可以extends type, type也可以extends interface. 虽然效果差不多，但是语法不同。</p><p><strong>interface extends interface</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface Name {
    name: string;
}

interface User extends Name {
    age: number;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>type extends type</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type Name = {
    name: string;
}

type User = Name &amp; { age: number }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>interface extends type</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type Name = {
    name: string;
}

interface User extends Name {
    age: number;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>type extends interface</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface Name {
    name: string;
}

type User = Name &amp; {
    age: number;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-不同点" tabindex="-1"><a class="header-anchor" href="#_2-不同点" aria-hidden="true">#</a> 2.不同点</h2><p>1、 类型别名可以用于其它类型 （联合类型、元组类型、基本类型（原始值）），interface不支持</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type PartialPointX = { x: number };
type PartialPointY = { y: number };

// union(联合)
type PartialPoint = PartialPointX | PartialPointY;

// tuple(元祖)
type Data = [PartialPointX, PartialPointY];

//primitive(原始值)
type Name = Number;

// typeof的返回值
let div = document.createElement(&#39;div&#39;);
type B = typeof div;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、 interface 可以多次定义 并被视为合并所有声明成员 type 不支持</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface Point {
  x: number;
}
interface Point {
  y: number;
}

const point: Point = { x: 1, y: 2 };
\`\`\`c
interface User {
    name: string;
    age: number;
}

interface User {
    sex: string;
}
//User接口为：
{
    name: string;
    age: number;
    sex: string;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、 type 能使用 in 关键字生成映射类型，但 interface 不行。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type Keys = &#39;firstname&#39; | &#39;surname&#39;;

type DudeType = {
  [key in Keys]: string;
};

const test: DudeType = {
  firstname: &#39;Pawel&#39;,
  surname: &#39;Grzybek&#39;,
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、 默认导出方式不同</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// inerface 支持同时声明，默认导出 而type必须先声明后导出
export default interface Config {
  name: string;
}
// 同一个js模块只能存在一个默认导出哦
 type Config2 = {name: string}
  export default Config2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>type其他用法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type StringOrNumber = string | number;
type Text = string | { text: string };
type NameLookup = Dictionary&lt;string, Person&gt;;
type Callback&lt;T&gt; = (data: T) =&gt; void;
type Pair&lt;T&gt; = [T, T];
type Coordinates = Pair&lt;number&gt;;
type Tree&lt;T&gt; = T | { left: Tree&lt;T&gt;, right: Tree&lt;T&gt; };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),r=[d];function l(t,v){return n(),i("div",null,r)}const u=e(a,[["render",l],["__file","interface和type.html.vue"]]);export{u as default};
