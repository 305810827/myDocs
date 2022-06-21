import{_ as e,e as i}from"./app.659fa32e.js";const n={},d=i(`<h1 id="module" tabindex="-1"><a class="header-anchor" href="#module" aria-hidden="true">#</a> <strong>Module</strong></h1><h3 id="\u914D\u7F6E-loader" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-loader" aria-hidden="true">#</a> \u914D\u7F6E Loader</h3><p>rules \u914D\u7F6E\u6A21\u5757\u7684\u8BFB\u53D6\u548C\u89E3\u6790\u89C4\u5219\uFF0C\u901A\u5E38\u7528\u6765\u914D\u7F6E Loader\u3002\u5176\u7C7B\u578B\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u91CC\u6BCF\u4E00\u9879\u90FD\u63CF\u8FF0\u4E86\u5982\u4F55\u53BB\u5904\u7406\u90E8\u5206\u6587\u4EF6\u3002 \u914D\u7F6E\u4E00\u9879 <code>rules</code> \u65F6\u5927\u81F4\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\uFF1A</p><ol><li>\u6761\u4EF6\u5339\u914D\uFF1A\u901A\u8FC7 test \u3001 include \u3001 exclude \u4E09\u4E2A\u914D\u7F6E\u9879\u6765\u547D\u4E2D Loader \u8981\u5E94\u7528\u89C4\u5219\u7684\u6587\u4EF6\u3002</li><li>\u5E94\u7528\u89C4\u5219\uFF1A\u5BF9\u9009\u4E2D\u540E\u7684\u6587\u4EF6\u901A\u8FC7 <code>use</code> \u914D\u7F6E\u9879\u6765\u5E94\u7528 Loader\uFF0C\u53EF\u4EE5\u53EA\u5E94\u7528\u4E00\u4E2A Loader \u6216\u8005\u6309\u7167\u4ECE\u540E\u5F80\u524D\u7684\u987A\u5E8F\u5E94\u7528\u4E00\u7EC4 Loader\uFF0C\u540C\u65F6\u8FD8\u53EF\u4EE5\u5206\u522B\u7ED9 Loader \u4F20\u5165\u53C2\u6570\u3002</li><li>\u91CD\u7F6E\u987A\u5E8F\uFF1A\u4E00\u7EC4 Loader \u7684\u6267\u884C\u987A\u5E8F\u9ED8\u8BA4\u662F\u4ECE\u53F3\u5230\u5DE6\u6267\u884C\uFF0C\u901A\u8FC7 <code>enforce</code> \u9009\u9879\u53EF\u4EE5\u8BA9\u5176\u4E2D\u4E00\u4E2A Loader \u7684\u6267\u884C\u987A\u5E8F\u653E\u5230\u6700\u524D\u6216\u8005\u6700\u540E\u3002</li></ol><p>\u4E0B\u9762\u6765\u901A\u8FC7\u4E00\u4E2A\u4F8B\u5B50\u6765\u8BF4\u660E\u5177\u4F53\u4F7F\u7528\u65B9\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module: {
  rules: [
    {
      // \u547D\u4E2D JavaScript \u6587\u4EF6
      test: /\\.js$/,
      // \u7528 babel-loader \u8F6C\u6362 JavaScript \u6587\u4EF6
      // ?cacheDirectory \u8868\u793A\u4F20\u7ED9 babel-loader \u7684\u53C2\u6570\uFF0C\u7528\u4E8E\u7F13\u5B58 babel \u7F16\u8BD1\u7ED3\u679C\u52A0\u5FEB\u91CD\u65B0\u7F16\u8BD1\u901F\u5EA6
      use: [&#39;babel-loader?cacheDirectory&#39;],
      // \u53EA\u547D\u4E2Dsrc\u76EE\u5F55\u91CC\u7684js\u6587\u4EF6\uFF0C\u52A0\u5FEB Webpack \u641C\u7D22\u901F\u5EA6
      include: path.resolve(__dirname, &#39;src&#39;)
    },
    {
      // \u547D\u4E2D SCSS \u6587\u4EF6
      test: /\\.scss$/,
      // \u4F7F\u7528\u4E00\u7EC4 Loader \u53BB\u5904\u7406 SCSS \u6587\u4EF6\u3002
      // \u5904\u7406\u987A\u5E8F\u4E3A\u4ECE\u540E\u5230\u524D\uFF0C\u5373\u5148\u4EA4\u7ED9 sass-loader \u5904\u7406\uFF0C\u518D\u628A\u7ED3\u679C\u4EA4\u7ED9 css-loader \u6700\u540E\u518D\u7ED9 style-loader\u3002
      use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;sass-loader&#39;],
      // \u6392\u9664 node_modules \u76EE\u5F55\u4E0B\u7684\u6587\u4EF6
      exclude: path.resolve(__dirname, &#39;node_modules&#39;),
    },
    {
      // \u5BF9\u975E\u6587\u672C\u6587\u4EF6\u91C7\u7528 file-loader \u52A0\u8F7D
      test: /\\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
      use: [&#39;file-loader&#39;],
    },
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 Loader \u9700\u8981\u4F20\u5165\u5F88\u591A\u53C2\u6570\u65F6\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E2A Object \u6765\u63CF\u8FF0\uFF0C\u4F8B\u5982\u5728\u4E0A\u9762\u7684 babel-loader \u914D\u7F6E\u4E2D\u6709\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>use: [
  {
    loader:&#39;babel-loader&#39;,
    options:{
      cacheDirectory:true,
    },
    // enforce:&#39;post&#39; \u7684\u542B\u4E49\u662F\u628A\u8BE5 Loader \u7684\u6267\u884C\u987A\u5E8F\u653E\u5230\u6700\u540E
    // enforce \u7684\u503C\u8FD8\u53EF\u4EE5\u662F pre\uFF0C\u4EE3\u8868\u628A Loader \u7684\u6267\u884C\u987A\u5E8F\u653E\u5230\u6700\u524D\u9762
    enforce:&#39;post&#39;
  },
  // \u7701\u7565\u5176\u5B83 Loader
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D <code>test include exclude</code> \u8FD9\u4E09\u4E2A\u547D\u4E2D\u6587\u4EF6\u7684\u914D\u7F6E\u9879\u53EA\u4F20\u5165\u4E86\u4E00\u4E2A\u5B57\u7B26\u4E32\u6216\u6B63\u5219\uFF0C\u5176\u5B9E\u5B83\u4EEC\u8FD8\u90FD\u652F\u6301\u6570\u7EC4\u7C7B\u578B\uFF0C\u4F7F\u7528\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  test:[
    /\\.jsx?$/,
    /\\.tsx?$/
  ],
  include:[
    path.resolve(__dirname, &#39;src&#39;),
    path.resolve(__dirname, &#39;tests&#39;),
  ],
  exclude:[
    path.resolve(__dirname, &#39;node_modules&#39;),
    path.resolve(__dirname, &#39;bower_modules&#39;),
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="noparse" tabindex="-1"><a class="header-anchor" href="#noparse" aria-hidden="true">#</a> noParse</h2><p><code>noParse</code> \u914D\u7F6E\u9879\u53EF\u4EE5\u8BA9 Webpack \u5FFD\u7565\u5BF9\u90E8\u5206\u6CA1\u91C7\u7528\u6A21\u5757\u5316\u7684\u6587\u4EF6\u7684\u9012\u5F52\u89E3\u6790\u548C\u5904\u7406\uFF0C\u8FD9\u6837\u505A\u7684\u597D\u5904\u662F\u80FD\u63D0\u9AD8\u6784\u5EFA\u6027\u80FD\u3002 \u539F\u56E0\u662F\u4E00\u4E9B\u5E93\u4F8B\u5982 jQuery \u3001ChartJS \u5B83\u4EEC\u5E9E\u5927\u53C8\u6CA1\u6709\u91C7\u7528\u6A21\u5757\u5316\u6807\u51C6\uFF0C\u8BA9 Webpack \u53BB\u89E3\u6790\u8FD9\u4E9B\u6587\u4EF6\u8017\u65F6\u53C8\u6CA1\u6709\u610F\u4E49\u3002</p><p><code>noParse</code> \u662F\u53EF\u9009\u914D\u7F6E\u9879\uFF0C\u7C7B\u578B\u9700\u8981\u662F <code>RegExp</code>\u3001<code>[RegExp]</code>\u3001<code>function</code> \u5176\u4E2D\u4E00\u4E2A\u3002</p><p>\u4F8B\u5982\u60F3\u8981\u5FFD\u7565\u6389 jQuery \u3001ChartJS\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F
noParse: /jquery|chartjs/

// \u4F7F\u7528\u51FD\u6570\uFF0C\u4ECE Webpack 3.0.0 \u5F00\u59CB\u652F\u6301
noParse: (content)=&gt; {
  // content \u4EE3\u8868\u4E00\u4E2A\u6A21\u5757\u7684\u6587\u4EF6\u8DEF\u5F84
  // \u8FD4\u56DE true or false
  return /jquery|chartjs/.test(content);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6CE8\u610F\u88AB\u5FFD\u7565\u6389\u7684\u6587\u4EF6\u91CC\u4E0D\u5E94\u8BE5\u5305\u542B-import-\u3001-require-\u3001-define-\u7B49\u6A21\u5757\u5316\u8BED\u53E5-\u4E0D\u7136\u4F1A\u5BFC\u81F4\u6784\u5EFA\u51FA\u7684\u4EE3\u7801\u4E2D\u5305\u542B\u65E0\u6CD5\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\u6267\u884C\u7684\u6A21\u5757\u5316\u8BED\u53E5\u3002" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u88AB\u5FFD\u7565\u6389\u7684\u6587\u4EF6\u91CC\u4E0D\u5E94\u8BE5\u5305\u542B-import-\u3001-require-\u3001-define-\u7B49\u6A21\u5757\u5316\u8BED\u53E5-\u4E0D\u7136\u4F1A\u5BFC\u81F4\u6784\u5EFA\u51FA\u7684\u4EE3\u7801\u4E2D\u5305\u542B\u65E0\u6CD5\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\u6267\u884C\u7684\u6A21\u5757\u5316\u8BED\u53E5\u3002" aria-hidden="true">#</a> \u6CE8\u610F\u88AB\u5FFD\u7565\u6389\u7684\u6587\u4EF6\u91CC\u4E0D\u5E94\u8BE5\u5305\u542B <code>import</code> \u3001 <code>require</code> \u3001 <code>define</code> \u7B49\u6A21\u5757\u5316\u8BED\u53E5\uFF0C\u4E0D\u7136\u4F1A\u5BFC\u81F4\u6784\u5EFA\u51FA\u7684\u4EE3\u7801\u4E2D\u5305\u542B\u65E0\u6CD5\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\u6267\u884C\u7684\u6A21\u5757\u5316\u8BED\u53E5\u3002</h2><h2 id="parser" tabindex="-1"><a class="header-anchor" href="#parser" aria-hidden="true">#</a> parser</h2><p>\u56E0\u4E3A Webpack \u662F\u4EE5\u6A21\u5757\u5316\u7684 JavaScript \u6587\u4EF6\u4E3A\u5165\u53E3\uFF0C\u6240\u4EE5\u5185\u7F6E\u4E86\u5BF9\u6A21\u5757\u5316 JavaScript \u7684\u89E3\u6790\u529F\u80FD\uFF0C\u652F\u6301 AMD\u3001CommonJS\u3001SystemJS\u3001ES6\u3002 <code>parser</code> \u5C5E\u6027\u53EF\u4EE5\u66F4\u7EC6\u7C92\u5EA6\u7684\u914D\u7F6E\u54EA\u4E9B\u6A21\u5757\u8BED\u6CD5\u8981\u89E3\u6790\u54EA\u4E9B\u4E0D\u89E3\u6790\uFF0C\u548C <code>noParse</code> \u914D\u7F6E\u9879\u7684\u533A\u522B\u5728\u4E8E <code>parser</code> \u53EF\u4EE5\u7CBE\u786E\u5230\u8BED\u6CD5\u5C42\u9762\uFF0C \u800C noParse \u53EA\u80FD\u63A7\u5236\u54EA\u4E9B\u6587\u4EF6\u4E0D\u88AB\u89E3\u6790\u3002 <code>parser</code> \u4F7F\u7528\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module: {
  rules: [
    {
      test: /\\.js$/,
      use: [&#39;babel-loader&#39;],
      parser: {
      amd: false, // \u7981\u7528 AMD
      commonjs: false, // \u7981\u7528 CommonJS
      system: false, // \u7981\u7528 SystemJS
      harmony: false, // \u7981\u7528 ES6 import/export
      requireInclude: false, // \u7981\u7528 require.include
      requireEnsure: false, // \u7981\u7528 require.ensure
      requireContext: false, // \u7981\u7528 require.context
      browserify: false, // \u7981\u7528 browserify
      requireJs: false, // \u7981\u7528 requirejs
      }
    },
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function s(r,l){return d}var c=e(n,[["render",s],["__file","Module.html.vue"]]);export{c as default};
