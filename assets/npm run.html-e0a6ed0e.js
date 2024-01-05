import{_ as e,o as n,c as a,a as i}from"./app-53705635.js";const s={},d=i(`<h2 id="npm-和-package-json" tabindex="-1"><a class="header-anchor" href="#npm-和-package-json" aria-hidden="true">#</a> npm 和 package.json</h2><h5 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h5><p>Node Package Manager（npm）是 JavaScript 生态系统的包管理工具，允许开发人员安装、发布和管理各种 JavaScript 包。它是 Node.js 的一部分，为了协同开发和依赖管理而诞生。</p><p>&quot;npm run&quot;用于执行各种脚本任务，例如启动开发服务器、运行测试套件或自定义构建过程。</p><h5 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h5><p>每个 Node.js 项目都伴随着一个 package.json 文件，这是项目的核心配置文件。它包含了项目的元数据（如名称、版本、作者等）以及最重要的部分——&quot;scripts&quot;，其中定义了可通过 &quot;npm run&quot; 命令执行的脚本。</p><h2 id="npm-run-命令的作用" tabindex="-1"><a class="header-anchor" href="#npm-run-命令的作用" aria-hidden="true">#</a> npm run 命令的作用</h2><h5 id="执行一个脚本" tabindex="-1"><a class="header-anchor" href="#执行一个脚本" aria-hidden="true">#</a> 执行一个脚本</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run script-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将触发名为 &quot;script-name&quot; 的脚本的执行。</p><h5 id="运行自定义脚本" tabindex="-1"><a class="header-anchor" href="#运行自定义脚本" aria-hidden="true">#</a> 运行自定义脚本</h5><p>开发者可以在 package.json 文件的 &quot;scripts&quot; 部分定义自己的脚本。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;scripts&quot;: {
    &quot;dev&quot;: &quot;cross-env NODE_ENV=DEVELOPMENT gulp --release=002&quot;,
}
// cross-env用于不同环境的变量设置,p<wbr>rocess.env.NODE_ENV为DEVELOPMENT
// --release=002向npm脚本传入参数，通过process.argv.slice(2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="工作流程" tabindex="-1"><a class="header-anchor" href="#工作流程" aria-hidden="true">#</a> 工作流程</h5><p>![image-20231213162954125](../image/npm run/image-20231213162954125.png)</p><h2 id="自定义脚本的高级用法" tabindex="-1"><a class="header-anchor" href="#自定义脚本的高级用法" aria-hidden="true">#</a> 自定义脚本的高级用法</h2><p>npm 脚本的原理非常简单。每当执行npm run，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令。因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。</p><h5 id="传递参数给脚本" tabindex="-1"><a class="header-anchor" href="#传递参数给脚本" aria-hidden="true">#</a> <strong>传递参数给脚本</strong></h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run my-script -- arg1 arg2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>向 npm 脚本传入参数，要使用--标明。</p><p><strong>使用环境变量</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;scripts&quot;: {
    &quot;my-script&quot;: &quot;NODE_ENV=production node my-script.js&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>串联多个脚本</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;scripts&quot;: {
    &quot;build&quot;: &quot;npm run clean &amp;&amp; npm run compile &amp;&amp; npm run minify&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>npm 脚本钩子</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;scripts&quot;: {
    &quot;prebuild&quot;: &quot;npm run lint&quot;,
    &quot;build&quot;: &quot;webpack&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，“prebuild”脚本将在“build”脚本之前运行，可以用于在构建之前执行代码检查或其他操作。</p><p><strong>使用外部工具和插件</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;scripts&quot;: {
    &quot;build&quot;: &quot;glup&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你还可以在脚本中使用外部工具和插件，例如 Grunt、Gulp 或 Webpack，以执行更复杂的任务。</p>`,30),r=[d];function t(u,l){return n(),a("div",null,r)}const o=e(s,[["render",t],["__file","npm run.html.vue"]]);export{o as default};
