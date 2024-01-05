import{_ as e,o as n,c as i,a as l}from"./app-53705635.js";const d={},s=l(`<h1 id="call、apply、bind实现" tabindex="-1"><a class="header-anchor" href="#call、apply、bind实现" aria-hidden="true">#</a> call、apply、bind实现</h1><h3 id="call的使用" tabindex="-1"><a class="header-anchor" href="#call的使用" aria-hidden="true">#</a> call的使用</h3><p>需要传多个参数时，直接后面接着传参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let people = {
    name: &#39;鲁迅&#39;
}
let peopleFn = function (str) {
    return \`\${str}\${this.name}\`
}
peopleFn(&#39;我叫&#39;)  // 我叫
peopleFn.call(people, &#39;我叫&#39;) // 我叫鲁迅
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="call的实现" tabindex="-1"><a class="header-anchor" href="#call的实现" aria-hidden="true">#</a> call的实现</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let people = {
    name: &#39;鲁迅&#39;
}
let peopleFn = function (str) {
    return \`\${str}\${this.name}\`
}

Function.prototype.myCall = function(context){
		context = context || window
    let arg = [...arguments].slice(1)
    let fn = Symbol(&#39;fn&#39;)
    context[fn] = this
    let result = context[fn](arg)
		delete context[fn]
		return result
}

peopleFn(&#39;我叫&#39;)  // 我叫
peopleFn.myCall(people, &#39;我叫&#39;) // 我叫鲁迅
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="apply的使用" tabindex="-1"><a class="header-anchor" href="#apply的使用" aria-hidden="true">#</a> apply的使用</h3><p>与call不同的是，使用数组实现传多个参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>peopleFn.apply(people, [&#39;我叫&#39;, &#39;,也叫周树人&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="apply的实现" tabindex="-1"><a class="header-anchor" href="#apply的实现" aria-hidden="true">#</a> apply的实现</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let people = {
    name: &#39;鲁迅&#39;
}
let peopleFn = function (str, endStr) {
    return \`\${str}\${this.name}\${endStr}\`
}

Function.prototype.myApply = function(context, arg){
    if (!Array.isArray(arg)) throw new Error(&#39;参数必须为数组&#39;)
    context = context || window
    let fn = Symbol(&#39;fn&#39;)
    context[fn] = this
    let result = context[fn](...arg)
    delete context[fn]
    return result
}
peopleFn.myApply(people, [&#39;我叫&#39;,&#39;,也叫周树人&#39;]) // 我叫鲁迅,也叫周树人
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bind的使用" tabindex="-1"><a class="header-anchor" href="#bind的使用" aria-hidden="true">#</a> bind的使用</h3><p>跟call一样接受多个参数，单返回的是一个函数，不会立即执行，返回的函数可以继续传参执行，属于柯里化函数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let people = {
    name: &#39;鲁迅&#39;
}
let peopleFn = function (first, second, third) {
    return \`\${this.name},\${first},\${second},\${third}\`
}


let fn = peopleFn.bind(people, &#39;文学家&#39;, &#39;思想家&#39;)
fn(&#39;革命家&#39;) // 鲁迅,文学家,思想家,革命家
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bind的实现" tabindex="-1"><a class="header-anchor" href="#bind的实现" aria-hidden="true">#</a> bind的实现</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let people = {
    name: &#39;鲁迅&#39;
}
let peopleFn = function (first, second, third) {
    return \`\${this.name},\${first},\${second},\${third}\`
}

Function.prototype.myBind = function(context){
    context = context || window
    let fn = Symbol(&#39;fn&#39;)
    let arg = [...arguments].slice(1)
    context[fn] = this
    
    return function () {
         let arg1 = [...arguments]
         let result = context[fn](...arg, ...arg1)
         delete context[fn]
         return result
    }
}
let fn = peopleFn.myBind(people, &#39;文学家&#39;, &#39;思想家&#39;)
fn(&#39;革命家&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),a=[s];function r(t,c){return n(),i("div",null,a)}const u=e(d,[["render",r],["__file","call、apply、bind.html.vue"]]);export{u as default};
