import{_ as e,o as i,c as n,a as s}from"./app-53705635.js";const l={},r=s(`<h1 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h1><h3 id="eslintrc-js" tabindex="-1"><a class="header-anchor" href="#eslintrc-js" aria-hidden="true">#</a> eslintrc.js</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [&#39;plugin:vue/essential&#39;, &#39;@vue/prettier&#39;],
  plugins: [&#39;vue&#39;],
  parserOptions: {
    parser: &#39;babel-eslint&#39;,
  },
  rules: {
    // 自定义规则，可根据团队规范和个人偏好进行配置
    &#39;no-console&#39;: &#39;off&#39;, // 允许使用 console
    &#39;no-debugger&#39;: &#39;off&#39;, // 允许使用 debugger
    &#39;vue/html-indent&#39;: [&#39;error&#39;, 2], // html 缩进两个空格
    &#39;vue/max-attributes-per-line&#39;: [
      &#39;error&#39;,
      {
        singleline: 3, // 单行最多三个属性
        multiline: {
          max: 1, // 多行只能有一个属性
          allowFirstLine: false, // 允许第一个属性在同一行
        },
      },
    ],
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多参考：https://eslint.org/docs/latest/use/configure/rules</p><h3 id="prettierrc-js" tabindex="-1"><a class="header-anchor" href="#prettierrc-js" aria-hidden="true">#</a> prettierrc.js</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  semi: true,    // 末尾分号
  trailingComma: &#39;all&#39;,  // 多行逗号分隔有尾逗号
  singleQuote: true,    // 单引号
  printWidth: 120,     // 换行长度
  tabWidth: 2,         // 缩进空格数
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多参考https://prettier.io/docs/en/configuration.html</p>`,7),d=[r];function a(t,v){return i(),n("div",null,d)}const u=e(l,[["render",a],["__file","eslintrc和prettierrc.html.vue"]]);export{u as default};
