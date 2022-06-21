import{_ as n,e as s}from"./app.659fa32e.js";const a={},t=s(`<p>\u867D\u7136\u6D4B\u8BD5\u5168\u8FC7\uFF0C\u4F46\u662FresolvePromise\u8DDFv8\u7684promise\u6E90\u7801\u5B9E\u73B0\u6709\u4E9B\u4E0D\u540C\uFF0C\u5BFC\u81F4then\u65B9\u6CD5\u91CCreturn promise\u65F6\u5C11\u4E86\u4E00\u6B21\u5FAE\u4EFB\u52A1</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u89E3\u51B3\u95EE\u9898\u601D\u8DEF</span>
<span class="token comment">// 1\u3001\u5B9A\u4E49class \u5B9E\u73B0 resolve reject then \u65B9\u6CD5</span>
<span class="token comment">// 2\u3001\u89E3\u51B3\u5F02\u6B65resolve</span>
<span class="token comment">// 3\u3001\u89E3\u51B3\u591A\u6B21\u8C03\u7528then</span>
<span class="token comment">// 4\u3001\u89E3\u51B3then\u7684\u94FE\u5F0F\u8C03\u7528\uFF0Cthen\u7684return\u7ED3\u679C\u5206\u4E3Apromise\u548C\u666E\u901A\u503C</span>
<span class="token comment">// 5\u3001\u89E3\u51B3then\u65B9\u6CD5\u91CC\u8FD4\u56DEpromise\u81EA\u5DF1</span>
<span class="token comment">// 6\u3001\u6355\u83B7\u6267\u884C\u5668\u4E2D\u7684\u6267\u884C\u7684\u9519\u8BEF</span>
<span class="token comment">// 7\u3001then\u6267\u884C\u4E2D\u9519\u8BEF\u6355\u83B7</span>
<span class="token comment">// 8\u3001\u5F02\u6B65\u4EFB\u52A1\u3001reject\u5B8C\u55844567\u6B65\u9AA4</span>
<span class="token comment">// 9\u3001then\u7684\u9ED8\u8BA4\u51FD\u6570</span>

<span class="token keyword">let</span> <span class="token constant">PENDING</span> <span class="token operator">=</span> <span class="token string">&#39;pending&#39;</span>
<span class="token keyword">let</span> <span class="token constant">FULFILLED</span> <span class="token operator">=</span> <span class="token string">&#39;fulfilled&#39;</span>
<span class="token keyword">let</span> <span class="token constant">REJECTED</span> <span class="token operator">=</span> <span class="token string">&#39;rejected&#39;</span>
<span class="token keyword">class</span> <span class="token class-name">myPromise</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token function">executor</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>resolve<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>reject<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    state <span class="token operator">=</span> <span class="token constant">PENDING</span>
    value <span class="token operator">=</span> <span class="token keyword">null</span>
    reason <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token comment">// \u5B58\u50A8\u6210\u529F\u56DE\u8C03\u51FD\u6570</span>
    onFulfilledCallbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token comment">// \u5B58\u50A8\u5931\u8D25\u56DE\u8C03\u51FD\u6570</span>
    onRejectedCallbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u6267\u884C\u72B6\u6001\u4FEE\u6539\u4E3A\u6210\u529F</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token constant">FULFILLED</span>
            <span class="token comment">// \u6267\u884C\u6210\u529F\u540E\u4FDD\u5B58\u7684\u503C</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
            <span class="token comment">// resolve\u91CC\u9762\u5C06\u6240\u6709\u6210\u529F\u7684\u56DE\u8C03\u62FF\u51FA\u6765\u6267\u884C</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>onFulfilledCallbacks<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>onFulfilledCallbacks<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function-variable function">reject</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u6267\u884C\u72B6\u6001\u4FEE\u6539\u4E3A\u5931\u8D25</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token constant">REJECTED</span>
            <span class="token comment">// \u6267\u884C\u5931\u8D25\u540E\u4FDD\u5B58\u7684\u503C</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>reason <span class="token operator">=</span> reason
             <span class="token comment">// reject\u91CC\u9762\u5C06\u6240\u6709\u5931\u8D25\u7684\u56DE\u8C03\u62FF\u51FA\u6765\u6267\u884C</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>onRejectedCallbacks<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>onRejectedCallbacks<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">onFulfilled<span class="token punctuation">,</span> onRejected</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u9ED8\u8BA4\u51FD\u6570</span>
        <span class="token keyword">const</span> realOnFulfilled <span class="token operator">=</span> <span class="token keyword">typeof</span> onFulfilled <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">?</span> <span class="token function-variable function">onFulfilled</span> <span class="token operator">:</span> <span class="token parameter">value</span> <span class="token operator">=&gt;</span> value
        <span class="token keyword">const</span> realOnRejected <span class="token operator">=</span> <span class="token keyword">typeof</span> onRejected <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">?</span> <span class="token function-variable function">onRejected</span> <span class="token operator">:</span> <span class="token parameter">reason</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token keyword">throw</span> reason<span class="token punctuation">}</span>


        <span class="token comment">// \u4E3A\u4E86\u94FE\u5F0F\u8C03\u7528\u8FD9\u91CC\u76F4\u63A5\u521B\u5EFA\u4E00\u4E2A MyPromise\uFF0C\u5E76\u5728\u540E\u9762 return \u51FA\u53BB</span>
        <span class="token keyword">let</span> promise2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">myPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u83B7\u53D6\u6210\u529F\u56DE\u8C03\u51FD\u6570\u7684\u6267\u884C\u7ED3\u679C</span>
            <span class="token keyword">const</span> <span class="token function-variable function">fulfilledMicrotask</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u5FAE\u4EFB\u52A1\u7B49\u5F85 promise2 \u5B8C\u6210\u521D\u59CB\u5316</span>
                <span class="token function">queueMicrotask</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">realOnFulfilled</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
                        <span class="token comment">// \u4F20\u5165 resolvePromise \u96C6\u4E2D\u5904\u7406</span>
                        <span class="token function">resolvePromise</span><span class="token punctuation">(</span>promise2<span class="token punctuation">,</span> res<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// \u83B7\u53D6\u5931\u8D25\u56DE\u8C03\u51FD\u6570\u7684\u6267\u884C\u7ED3\u679C</span>
            <span class="token keyword">const</span> <span class="token function-variable function">rejectedMicrotask</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u5FAE\u4EFB\u52A1\u7B49\u5F85 promise2 \u5B8C\u6210\u521D\u59CB\u5316</span>
                <span class="token function">queueMicrotask</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">realOnRejected</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>reason<span class="token punctuation">)</span>
                        <span class="token comment">// \u4F20\u5165 resolvePromise \u96C6\u4E2D\u5904\u7406</span>
                        <span class="token function">resolvePromise</span><span class="token punctuation">(</span>promise2<span class="token punctuation">,</span> res<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token constant">FULFILLED</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">fulfilledMicrotask</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token constant">REJECTED</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">rejectedMicrotask</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">// onRejected(this.reason)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>onFulfilledCallbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fulfilledMicrotask<span class="token punctuation">)</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>onRejectedCallbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>rejectedMicrotask<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> promise2
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token function">resolve</span> <span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>param <span class="token keyword">instanceof</span> <span class="token class-name">myPromise</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> param
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">myPromise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">static</span> <span class="token function">reject</span> <span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">myPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function-variable function">catch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">rejectFn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;catch&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">resolvePromise</span> <span class="token punctuation">(</span><span class="token parameter">promise<span class="token punctuation">,</span> x<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>promise <span class="token operator">===</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;The promise and the return value are the same&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// x \u4E3A null \u76F4\u63A5\u8FD4\u56DE\uFF0C\u8D70\u540E\u9762\u7684\u903B\u8F91\u4F1A\u62A5\u9519</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">let</span> then<span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u628A x.then \u8D4B\u503C\u7ED9 then</span>
          then <span class="token operator">=</span> x<span class="token punctuation">.</span>then<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u5982\u679C\u53D6 x.then \u7684\u503C\u65F6\u629B\u51FA\u9519\u8BEF error \uFF0C\u5219\u4EE5 error \u4E3A\u636E\u56E0\u62D2\u7EDD promise</span>
          <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// \u5982\u679C then \u662F\u51FD\u6570</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> then <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">let</span> called <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
          <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token function">then</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>
              x<span class="token punctuation">,</span> <span class="token comment">// this \u6307\u5411 x</span>
              <span class="token comment">// \u5982\u679C resolvePromise \u4EE5\u503C y \u4E3A\u53C2\u6570\u88AB\u8C03\u7528\uFF0C\u5219\u8FD0\u884C [[Resolve]](promise, y)</span>
              <span class="token parameter">y</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u5982\u679C resolvePromise \u548C rejectPromise \u5747\u88AB\u8C03\u7528\uFF0C</span>
                <span class="token comment">// \u6216\u8005\u88AB\u540C\u4E00\u53C2\u6570\u8C03\u7528\u4E86\u591A\u6B21\uFF0C\u5219\u4F18\u5148\u91C7\u7528\u9996\u6B21\u8C03\u7528\u5E76\u5FFD\u7565\u5269\u4E0B\u7684\u8C03\u7528</span>
                <span class="token comment">// \u5B9E\u73B0\u8FD9\u6761\u9700\u8981\u524D\u9762\u52A0\u4E00\u4E2A\u53D8\u91CF called</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>called<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
                called <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token function">resolvePromise</span><span class="token punctuation">(</span>promise<span class="token punctuation">,</span> y<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token comment">// \u5982\u679C rejectPromise \u4EE5\u636E\u56E0 r \u4E3A\u53C2\u6570\u88AB\u8C03\u7528\uFF0C\u5219\u4EE5\u636E\u56E0 r \u62D2\u7EDD promise</span>
              <span class="token parameter">r</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>called<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
                called <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5982\u679C\u8C03\u7528 then \u65B9\u6CD5\u629B\u51FA\u4E86\u5F02\u5E38 error\uFF1A</span>
            <span class="token comment">// \u5982\u679C resolvePromise \u6216 rejectPromise \u5DF2\u7ECF\u88AB\u8C03\u7528\uFF0C\u76F4\u63A5\u8FD4\u56DE</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>called<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

            <span class="token comment">// \u5426\u5219\u4EE5 error \u4E3A\u636E\u56E0\u62D2\u7EDD promise</span>
            <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u5982\u679C then \u4E0D\u662F\u51FD\u6570\uFF0C\u4EE5 x \u4E3A\u53C2\u6570\u6267\u884C promise</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C x \u4E0D\u4E3A\u5BF9\u8C61\u6216\u8005\u51FD\u6570\uFF0C\u4EE5 x \u4E3A\u53C2\u6570\u6267\u884C promise</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


module<span class="token punctuation">.</span>exports <span class="token operator">=</span> myPromise
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>https://juejin.cn/post/6945319439772434469</p>`,3);function p(e,o){return t}var l=n(a,[["render",p],["__file","\u624B\u5199promise.html.vue"]]);export{l as default};
