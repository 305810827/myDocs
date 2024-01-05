import{_ as l,r as d,o as r,c as v,b as e,d as n,e as s,a}from"./app-53705635.js";const c={},t=e("h2",{id:"vite-plugin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vite-plugin","aria-hidden":"true"},"#"),n(" vite plugin")],-1),o={href:"https://link.juejin.cn?target=https%3A%2F%2Frollupjs.org%2Fguide%2Fen%2F%23plugin-development",target:"_blank",rel:"noopener noreferrer"},u={href:"https://link.juejin.cn?target=https%3A%2F%2Fcn.vitejs.dev%2Fguide%2Fapi-plugin.html%23universal-hooks",target:"_blank",rel:"noopener noreferrer"},m={href:"https://link.juejin.cn?target=https%3A%2F%2Fcn.vitejs.dev%2Fguide%2Fapi-plugin.html%23vite-specific-hooks",target:"_blank",rel:"noopener noreferrer"},b=a(`<p>​ 插件就是一个实现了各个hook的对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default function Plugin() {
  return {
    name: &#39;my-plugin&#39;, //  必须的插件标志
    apply: &#39;build&#39; | &#39;serve&#39;, //  表明此插件应用在何种模式
    enforce: &#39;post&#39; | &#39;pre&#39;, //  插件排序

    // rollup通用插件，ctx是一个plugins集合的上下文
    options(ctx,pluginOptions) {
      //  返回plugin opthons ，类型：async, sequential
      return somePluginOptions
    },
    buildStart(ctx,pluginOptions) {
      //  在服务启动前开始执行，类型：async, parallel
      //  ...do something
    },
    resolveId(ctx,srouce, importer, pluginOptions) {
      //  srouce为资源的路径，importer为引入此资源的文件
      //  如果有返回值，则将替换掉importer中引入的路径，同时将返回值传递给其他hook
      //  类型 async, first
      //  ...do something
      return srouce
    },
    load(ctx,id, srr) {
      //  id为resolveId返回的值
      //  加载资源并返回 类型 async, first
      //  ...do something
      return code
    },
    transform(ctx,code, id, ssr) {
      //  code为load返回的值，id为resolveId返回的值
      //  转译code并返回转译结果 类型 async, first，
      //  ...do something
      return transformCode
    },
    buildEnd(err) {
      //  构建结束的回调，可以捕获错误。类型 async, parallel
    },
    closeBundle() {
      //  构建结束的最终回调，类型 async, parallel
    },

    //  vite 独有插件
    config(config, env) {
      //  返回一个配置对象，merge到最终config中
      //  类型 sync, sequential
      return config
    },
    configResolved(config) {
      //  解析 Vite 配置后调用 类型 sync, parallel
    },
    configureServer(server) {
      //  服务器配置完后的hook 类型 sync, paralle
    },
    transformIndexHtml() {
      // 转换 index.html 的专用钩子。钩子接收当前的 HTML 字符串和转换上下文
      // 类型 async, sequential
    },
    handleHotUpdate(HmrContext) {
      //  触发热更新时的hook，可以更加精确的控制hmr
      //  类型
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function p(h,g){const i=d("ExternalLinkIcon");return r(),v("div",null,[t,e("p",null,[n("​ vite插件基于"),e("a",o,[n("rollup插件"),s(i)]),n("，插件的hook函数返回值和参数类型完全依照rollup，但并没有全部接受rollup的hook函数。目前只"),e("a",u,[n("使用了7个hook函数"),s(i)]),n("。hook的参数与返回值可以从rollup官网获取到。同时vite提供了"),e("a",m,[n("5个独有的hook函数"),s(i)]),n("。")]),b])}const _=l(c,[["render",p],["__file","vite插件开发.html.vue"]]);export{_ as default};
