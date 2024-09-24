## vite plugin		

​		vite插件基于[rollup插件](https://link.juejin.cn?target=https%3A%2F%2Frollupjs.org%2Fguide%2Fen%2F%23plugin-development)，插件的hook函数返回值和参数类型完全依照rollup，但并没有全部接受rollup的hook函数。目前只[使用了7个hook函数](https://link.juejin.cn?target=https%3A%2F%2Fcn.vitejs.dev%2Fguide%2Fapi-plugin.html%23universal-hooks)。hook的参数与返回值可以从rollup官网获取到。同时vite提供了[5个独有的hook函数](https://link.juejin.cn?target=https%3A%2F%2Fcn.vitejs.dev%2Fguide%2Fapi-plugin.html%23vite-specific-hooks)。

​		插件就是一个实现了各个hook的对象

```
export default function Plugin() {
  return {
    name: 'my-plugin', //  必须的插件标志
    apply: 'build' | 'serve', //  表明此插件应用在何种模式
    enforce: 'post' | 'pre', //  插件排序

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
```


## markdown-it

markdown-it能够将markdown语法的内容转换为html内容

``` javascript
var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
var result = md.render('# markdown-it rulezz!');
```

## htmlparser2

htmlparser2 是最快的 HTML 解析器

```javascript
const htmlparser2 = require("htmlparser2");
const parser = new htmlparser2.Parser({
    onopentag(name, attributes) {
        /*
         * This fires when a new tag is opened.
         *
         * If you don't need an aggregated `attributes` object,
         * have a look at the `onopentagname` and `onattribute` events.
         */
        if (name === "script" && attributes.type === "text/javascript") {
            console.log("JS! Hooray!");
        }
    },
    ontext(text) {
        /*
         * Fires whenever a section of text was processed.
         *
         * Note that this can fire at any point within text and you might
         * have to stich together multiple pieces.
         */
        console.log("-->", text);
    },
    onclosetag(tagname) {
        /*
         * Fires when a tag is closed.
         *
         * You can rely on this event only firing when you have received an
         * equivalent opening tag before. Closing tags without corresponding
         * opening tags will be ignored.
         */
        if (tagname === "script") {
            console.log("That's it?!");
        }
    },
});
parser.write(
    "Xyz <script type='text/javascript'>const foo = '<<bar>>';</ script>"
);
parser.end();
```