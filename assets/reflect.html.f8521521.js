import{_ as e,e as n}from"./app.659fa32e.js";const i={},r=n(`<p>1\u3001object.defineProperty\u3001reflect.defineProperty</p><p>object.defineProperty\u9047\u5230\u65E0\u6CD5\u5B9A\u4E49\u7684\u5C5E\u6027\u65F6\uFF0C\u76F4\u63A5\u4FDD\u5B58\uFF0C\u9700\u8981\u5957\u4E00\u5C42try catch\u3002reflect.defineProperty\u4E0D\u4F1A\u62A5\u9519\uFF0C\u4F1A\u8FD4\u56DEfalse\u3002</p><p>reflect.defineProperty\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F\u76EE\u6807\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u6539\u53D8this\u7684\u6307\u5411\u3002</p><p>2\u3001Proxy \u53EA\u80FD\u591F\u62E6\u622A\u5BF9\u4E00\u4E2A\u5BF9\u8C61\u7684\u57FA\u672C\u64CD\u4F5C\uFF0C\u4E0D\u80FD\u62E6\u622A\u5BF9\u4E00\u4E2A\u5BF9\u8C61\u7684\u590D\u5408\u64CD\u4F5C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const obj = {
    name: &#39;coboy&#39;,
    fn() {
        console.log(this.name, this === p)
    }
}

const p = new Proxy(obj, {
    get(target, key, receiver) {
        return Reflect.get(target, key)
    }
})

p.fn() // \u6253\u5370 &#39;coboy&#39;, true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Proxy \u53EA\u80FD\u591F\u62E6\u622A\u5BF9\u4E00\u4E2A\u5BF9\u8C61\u7684\u57FA\u672C\u64CD\u4F5C\uFF0C\u4E0D\u80FD\u62E6\u622A\u5BF9\u4E00\u4E2A\u5BF9\u8C61\u7684\u590D\u5408\u64CD\u4F5C\u3002\u8C03\u7528\u5BF9\u8C61\u4E0B\u7684\u65B9\u6CD5\u5C31\u662F\u5178\u578B\u7684\u975E\u57FA\u672C\u64CD\u4F5C\uFF0C\u5982\u4E0A\u9762\u7684\uFF1Ap.fn() \u5B9E\u9645\u4E0A\u8C03\u7528\u4E00\u4E2A\u5BF9\u8C61\u4E0B\u7684\u65B9\u6CD5\uFF0C\u662F\u7531\u4E24\u4E2A\u57FA\u672C\u8BED\u4E49\u7EC4\u6210\u7684\u3002\u7B2C\u4E00\u4E2A\u57FA\u672C\u8BED\u4E49\u662F get\uFF0C\u5373\u5148\u901A\u8FC7 get \u64CD\u4F5C\u5F97\u5230 p.fn \u5C5E\u6027\u3002\u7B2C\u4E8C\u4E2A\u57FA\u672C\u8BED\u4E49\u662F\u51FD\u6570\u8C03\u7528\uFF0C\u5373\u901A\u8FC7 get \u5F97\u5230 p.fn \u7684\u503C\u540E\u518D\u8C03\u7528\u5B83\u3002p \u662F\u4EE3\u7406\u5BF9\u8C61\uFF0C\u800C\u51FD\u6570\u4E2D\u7684 this \u662F\u8C01\u8C03\u7528\u5B83\uFF0C\u5B83\u5C31\u6307\u5411\u8C01\uFF0C\u6240\u4EE5\u6B64\u65F6 fn \u4E2D\u7684 this \u5C31\u6307\u5411\u4E86\u4EE3\u7406\u5BF9\u8C61 p\u3002\u7531\u4E8E Proxy \u4E0D\u80FD\u62E6\u622A\u5BF9\u4E00\u4E2A\u5BF9\u8C61\u7684\u590D\u5408\u64CD\u4F5C\uFF0C\u6240\u4EE5 p.fn() \u6267\u884C\u8FD9\u4E00\u52A8\u4F5C\u662F\u65E0\u6CD5\u6355\u6349\u7684\u3002</p>`,6);function t(s,l){return r}var c=e(i,[["render",t],["__file","reflect.html.vue"]]);export{c as default};
