import{_ as n,o as e,c as a,a as s}from"./app-53705635.js";const i={},t=s(`<h3 id="import-meta" tabindex="-1"><a class="header-anchor" href="#import-meta" aria-hidden="true">#</a> i<wbr>mport.meta</h3><p>i<wbr>mport.meta 是一个给 JavaScript 模块暴露特定上下文的元数据属性的对象，它包含了这个模块的信息。</p><p>i<wbr>mport.meta 对象是由 ECMAScript 实现的，它带有一个 null 的原型对象。这个对象可以扩展，并且它的属性都是可写，可配置和可枚举的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;module&quot;</span><span class="token operator">&gt;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">)</span>  <span class="token comment">// {url: &#39;http://127.0.0.1:5500/dist/index.html?a=1&#39;}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vite 通过特殊的 i<wbr>mport.meta.hot 对象暴露手动 HMR API。 https://github.com/vitejs/vite/blob/main/packages/vite/src/client/client.ts#L412</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface ImportMeta {
  readonly hot?: {
    readonly data: any

    accept(): void
    accept(cb: (mod: any) =&gt; void): void
    accept(dep: string, cb: (mod: any) =&gt; void): void
    accept(deps: string[], cb: (mods: any[]) =&gt; void): void
    
    prune(cb: () =&gt; void): void
    dispose(cb: (data: any) =&gt; void): void
    decline(): void
    invalidate(): void
    
    on(event: string, cb: (...args: any[]) =&gt; void): void

  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vite HMR API：https://cn.vitejs.dev/guide/api-hmr.html</p>`,7),d=[t];function c(o,l){return e(),a("div",null,d)}const p=n(i,[["render",c],["__file","import.meta.html.vue"]]);export{p as default};
