import{_ as e,o as i,c as n,a as d}from"./app-53705635.js";const s={},a=d(`<h1 id="module" tabindex="-1"><a class="header-anchor" href="#module" aria-hidden="true">#</a> <strong>Module</strong></h1><h3 id="配置-loader" tabindex="-1"><a class="header-anchor" href="#配置-loader" aria-hidden="true">#</a> 配置 Loader</h3><p>rules 配置模块的读取和解析规则，通常用来配置 Loader。其类型是一个数组，数组里每一项都描述了如何去处理部分文件。 配置一项 <code>rules</code> 时大致通过以下方式：</p><ol><li>条件匹配：通过 test 、 include 、 exclude 三个配置项来命中 Loader 要应用规则的文件。</li><li>应用规则：对选中后的文件通过 <code>use</code> 配置项来应用 Loader，可以只应用一个 Loader 或者按照从后往前的顺序应用一组 Loader，同时还可以分别给 Loader 传入参数。</li><li>重置顺序：一组 Loader 的执行顺序默认是从右到左执行，通过 <code>enforce</code> 选项可以让其中一个 Loader 的执行顺序放到最前或者最后。</li></ol><p>下面来通过一个例子来说明具体使用方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module: {
  rules: [
    {
      // 命中 JavaScript 文件
      test: /\\.js$/,
      // 用 babel-loader 转换 JavaScript 文件
      // ?cacheDirectory 表示传给 babel-loader 的参数，用于缓存 babel 编译结果加快重新编译速度
      use: [&#39;babel-loader?cacheDirectory&#39;],
      // 只命中src目录里的js文件，加快 Webpack 搜索速度
      include: path.resolve(__dirname, &#39;src&#39;)
    },
    {
      // 命中 SCSS 文件
      test: /\\.scss$/,
      // 使用一组 Loader 去处理 SCSS 文件。
      // 处理顺序为从后到前，即先交给 sass-loader 处理，再把结果交给 css-loader 最后再给 style-loader。
      use: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;sass-loader&#39;],
      // 排除 node_modules 目录下的文件
      exclude: path.resolve(__dirname, &#39;node_modules&#39;),
    },
    {
      // 对非文本文件采用 file-loader 加载
      test: /\\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
      use: [&#39;file-loader&#39;],
    },
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Loader 需要传入很多参数时，你还可以通过一个 Object 来描述，例如在上面的 babel-loader 配置中有如下代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use: [
  {
    loader:&#39;babel-loader&#39;,
    options:{
      cacheDirectory:true,
    },
    // enforce:&#39;post&#39; 的含义是把该 Loader 的执行顺序放到最后
    // enforce 的值还可以是 pre，代表把 Loader 的执行顺序放到最前面
    enforce:&#39;post&#39;
  },
  // 省略其它 Loader
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中 <code>test include exclude</code> 这三个命中文件的配置项只传入了一个字符串或正则，其实它们还都支持数组类型，使用如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="noparse" tabindex="-1"><a class="header-anchor" href="#noparse" aria-hidden="true">#</a> noParse</h2><p><code>noParse</code> 配置项可以让 Webpack 忽略对部分没采用模块化的文件的递归解析和处理，这样做的好处是能提高构建性能。 原因是一些库例如 jQuery 、ChartJS 它们庞大又没有采用模块化标准，让 Webpack 去解析这些文件耗时又没有意义。</p><p><code>noParse</code> 是可选配置项，类型需要是 <code>RegExp</code>、<code>[RegExp]</code>、<code>function</code> 其中一个。</p><p>例如想要忽略掉 jQuery 、ChartJS，可以使用如下代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 使用正则表达式
noParse: /jquery|chartjs/

// 使用函数，从 Webpack 3.0.0 开始支持
noParse: (content)=&gt; {
  // content 代表一个模块的文件路径
  // 返回 true or false
  return /jquery|chartjs/.test(content);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意被忽略掉的文件里不应该包含-import-、-require-、-define-等模块化语句-不然会导致构建出的代码中包含无法在浏览器环境下执行的模块化语句。" tabindex="-1"><a class="header-anchor" href="#注意被忽略掉的文件里不应该包含-import-、-require-、-define-等模块化语句-不然会导致构建出的代码中包含无法在浏览器环境下执行的模块化语句。" aria-hidden="true">#</a> 注意被忽略掉的文件里不应该包含 <code>import</code> 、 <code>require</code> 、 <code>define</code> 等模块化语句，不然会导致构建出的代码中包含无法在浏览器环境下执行的模块化语句。</h2><h2 id="parser" tabindex="-1"><a class="header-anchor" href="#parser" aria-hidden="true">#</a> parser</h2><p>因为 Webpack 是以模块化的 JavaScript 文件为入口，所以内置了对模块化 JavaScript 的解析功能，支持 AMD、CommonJS、SystemJS、ES6。 <code>parser</code> 属性可以更细粒度的配置哪些模块语法要解析哪些不解析，和 <code>noParse</code> 配置项的区别在于 <code>parser</code> 可以精确到语法层面， 而 noParse 只能控制哪些文件不被解析。 <code>parser</code> 使用如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module: {
  rules: [
    {
      test: /\\.js$/,
      use: [&#39;babel-loader&#39;],
      parser: {
      amd: false, // 禁用 AMD
      commonjs: false, // 禁用 CommonJS
      system: false, // 禁用 SystemJS
      harmony: false, // 禁用 ES6 import/export
      requireInclude: false, // 禁用 require.include
      requireEnsure: false, // 禁用 require.ensure
      requireContext: false, // 禁用 require.context
      browserify: false, // 禁用 browserify
      requireJs: false, // 禁用 requirejs
      }
    },
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),l=[a];function r(c,v){return i(),n("div",null,l)}const o=e(s,[["render",r],["__file","Module.html.vue"]]);export{o as default};
