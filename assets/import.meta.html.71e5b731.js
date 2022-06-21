import{_ as n,e}from"./app.659fa32e.js";const a={},s=e(`<h3 id="import-meta" tabindex="-1"><a class="header-anchor" href="#import-meta" aria-hidden="true">#</a> i<wbr>mport.meta</h3><p>i<wbr>mport.meta \u662F\u4E00\u4E2A\u7ED9 JavaScript \u6A21\u5757\u66B4\u9732\u7279\u5B9A\u4E0A\u4E0B\u6587\u7684\u5143\u6570\u636E\u5C5E\u6027\u7684\u5BF9\u8C61\uFF0C\u5B83\u5305\u542B\u4E86\u8FD9\u4E2A\u6A21\u5757\u7684\u4FE1\u606F\u3002</p><p>i<wbr>mport.meta \u5BF9\u8C61\u662F\u7531 ECMAScript \u5B9E\u73B0\u7684\uFF0C\u5B83\u5E26\u6709\u4E00\u4E2A null \u7684\u539F\u578B\u5BF9\u8C61\u3002\u8FD9\u4E2A\u5BF9\u8C61\u53EF\u4EE5\u6269\u5C55\uFF0C\u5E76\u4E14\u5B83\u7684\u5C5E\u6027\u90FD\u662F\u53EF\u5199\uFF0C\u53EF\u914D\u7F6E\u548C\u53EF\u679A\u4E3E\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;module&quot;</span><span class="token operator">&gt;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">)</span>  <span class="token comment">// {url: &#39;http://127.0.0.1:5500/dist/index.html?a=1&#39;}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vite \u901A\u8FC7\u7279\u6B8A\u7684 i<wbr>mport.meta.hot \u5BF9\u8C61\u66B4\u9732\u624B\u52A8 HMR API\u3002 https://github.com/vitejs/vite/blob/main/packages/vite/src/client/client.ts#L412</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>interface ImportMeta {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vite HMR API\uFF1Ahttps://cn.vitejs.dev/guide/api-hmr.html</p>`,7);function i(t,d){return s}var c=n(a,[["render",i],["__file","import.meta.html.vue"]]);export{c as default};
