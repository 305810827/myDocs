import{_ as e,e as n}from"./app.659fa32e.js";const i={},l=n(`<h1 id="call\u3001apply\u3001bind\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#call\u3001apply\u3001bind\u5B9E\u73B0" aria-hidden="true">#</a> call\u3001apply\u3001bind\u5B9E\u73B0</h1><h3 id="call\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#call\u7684\u4F7F\u7528" aria-hidden="true">#</a> call\u7684\u4F7F\u7528</h3><p>\u9700\u8981\u4F20\u591A\u4E2A\u53C2\u6570\u65F6\uFF0C\u76F4\u63A5\u540E\u9762\u63A5\u7740\u4F20\u53C2\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let people = {
    name: &#39;\u9C81\u8FC5&#39;
}
let peopleFn = function (str) {
    return \`\${str}\${this.name}\`
}
peopleFn(&#39;\u6211\u53EB&#39;)  // \u6211\u53EB
peopleFn.call(people, &#39;\u6211\u53EB&#39;) // \u6211\u53EB\u9C81\u8FC5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="call\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#call\u7684\u5B9E\u73B0" aria-hidden="true">#</a> call\u7684\u5B9E\u73B0</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let people = {
    name: &#39;\u9C81\u8FC5&#39;
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

peopleFn(&#39;\u6211\u53EB&#39;)  // \u6211\u53EB
peopleFn.myCall(people, &#39;\u6211\u53EB&#39;) // \u6211\u53EB\u9C81\u8FC5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="apply\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#apply\u7684\u4F7F\u7528" aria-hidden="true">#</a> apply\u7684\u4F7F\u7528</h3><p>\u4E0Ecall\u4E0D\u540C\u7684\u662F\uFF0C\u4F7F\u7528\u6570\u7EC4\u5B9E\u73B0\u4F20\u591A\u4E2A\u53C2\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>peopleFn.apply(people, [&#39;\u6211\u53EB&#39;, &#39;,\u4E5F\u53EB\u5468\u6811\u4EBA&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="apply\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#apply\u7684\u5B9E\u73B0" aria-hidden="true">#</a> apply\u7684\u5B9E\u73B0</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let people = {
    name: &#39;\u9C81\u8FC5&#39;
}
let peopleFn = function (str, endStr) {
    return \`\${str}\${this.name}\${endStr}\`
}

Function.prototype.myApply = function(context, arg){
    if (!Array.isArray(arg)) throw new Error(&#39;\u53C2\u6570\u5FC5\u987B\u4E3A\u6570\u7EC4&#39;)
    context = context || window
    let fn = Symbol(&#39;fn&#39;)
    context[fn] = this
    let result = context[fn](...arg)
    delete context[fn]
    return result
}
peopleFn.myApply(people, [&#39;\u6211\u53EB&#39;,&#39;,\u4E5F\u53EB\u5468\u6811\u4EBA&#39;]) // \u6211\u53EB\u9C81\u8FC5,\u4E5F\u53EB\u5468\u6811\u4EBA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bind\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#bind\u7684\u4F7F\u7528" aria-hidden="true">#</a> bind\u7684\u4F7F\u7528</h3><p>\u8DDFcall\u4E00\u6837\u63A5\u53D7\u591A\u4E2A\u53C2\u6570\uFF0C\u5355\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4E0D\u4F1A\u7ACB\u5373\u6267\u884C\uFF0C\u8FD4\u56DE\u7684\u51FD\u6570\u53EF\u4EE5\u7EE7\u7EED\u4F20\u53C2\u6267\u884C\uFF0C\u5C5E\u4E8E\u67EF\u91CC\u5316\u51FD\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let people = {
    name: &#39;\u9C81\u8FC5&#39;
}
let peopleFn = function (first, second, third) {
    return \`\${this.name},\${first},\${second},\${third}\`
}


let fn = peopleFn.bind(people, &#39;\u6587\u5B66\u5BB6&#39;, &#39;\u601D\u60F3\u5BB6&#39;)
fn(&#39;\u9769\u547D\u5BB6&#39;) // \u9C81\u8FC5,\u6587\u5B66\u5BB6,\u601D\u60F3\u5BB6,\u9769\u547D\u5BB6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bind\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#bind\u7684\u5B9E\u73B0" aria-hidden="true">#</a> bind\u7684\u5B9E\u73B0</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let people = {
    name: &#39;\u9C81\u8FC5&#39;
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
let fn = peopleFn.myBind(people, &#39;\u6587\u5B66\u5BB6&#39;, &#39;\u601D\u60F3\u5BB6&#39;)
fn(&#39;\u9769\u547D\u5BB6&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function d(s,a){return l}var t=e(i,[["render",d],["__file","call\u3001apply\u3001bind.html.vue"]]);export{t as default};
