import{_ as e,o as i,c as n,a as s}from"./app-53705635.js";const d={},a=s(`<h2 id="一、git-push自动部署" tabindex="-1"><a class="header-anchor" href="#一、git-push自动部署" aria-hidden="true">#</a> 一、git push自动部署</h2><h5 id="_1、创建用于工作流的文件" tabindex="-1"><a class="header-anchor" href="#_1、创建用于工作流的文件" aria-hidden="true">#</a> 1、创建用于工作流的文件</h5><p>在项目根目录下创建一个用于 GitHub Actions 的工作流 <code>.yml</code> 文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>name: docs

on:
  # 每当 push 到 main 分支时触发部署
  push:
    branches: [main]
  # 手动触发部署
  workflow_dispatch:

jobs:
  docs:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
        with:
          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
          fetch-depth: 0

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          # 选择要使用的 pnpm 版本
          version: 8
          # 使用 pnpm 安装依赖
          run_install: true

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          # 选择要使用的 node 版本
          node-version: 18
          # 缓存 pnpm 依赖
          cache: pnpm

      # 运行构建脚本
      - name: Build VuePress site
        run: pnpm docs:build

      # 查看 workflow 的文档来获取更多信息
      # @see https://github.com/crazy-max/ghaction-github-pages
      - name: Deploy to GitHub Pages
        uses: crazy-max/ghaction-github-pages@v4
        with:
          # 部署到 gh-pages 分支
          target_branch: gh-pages
          # 部署目录为 VuePress 的默认输出目录
          build_dir: docs/.vuepress/dist
        env:
          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、开放当前仓库的读写权限" tabindex="-1"><a class="header-anchor" href="#_2、开放当前仓库的读写权限" aria-hidden="true">#</a> 2、开放当前仓库的读写权限</h5><p>因为每个 GitHub 仓库都默认只让 GitHub Actions 读取仓库内容，不允许读写，因此需为 GitHub Actions 开放当前仓库的读写权限，否则无法正常构建 GitHub Pages</p><p>点击仓库选项卡 Settings→Actions→General，在 Workflow permissions中选择读写权限 Read and write permissions后，点击保存即可</p><p>![image-20231207152102539](../image/VuePress 部署到GitHub Pages/image-20231207152102539.png)</p><p>执行 <code>git push</code> 就会自动触发工作流</p><h5 id="_3、设置部署分支" tabindex="-1"><a class="header-anchor" href="#_3、设置部署分支" aria-hidden="true">#</a> 3、设置部署分支</h5><p>将vuepress构建后的 <code>src/.vuepress/dist/</code> 目录 push 到 GitHub 仓库中的 <code>gh-pages</code> 分支（本地仓库没有该分支）</p><p>点击仓库选项卡 <code>Settings</code>-<code>Pages</code> 后，进行如下操作：</p><p>![image-20231207152033821](../image/VuePress 部署到GitHub Pages/image-20231207152033821.png)</p><h2 id="二、执行脚本部署" tabindex="-1"><a class="header-anchor" href="#二、执行脚本部署" aria-hidden="true">#</a> 二、执行脚本部署</h2><h5 id="_1、项目根目录下新建deploy-sh脚本" tabindex="-1"><a class="header-anchor" href="#_1、项目根目录下新建deploy-sh脚本" aria-hidden="true">#</a> 1、项目根目录下新建deploy.sh脚本</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
 echo &#39;doc.frontdoc.cn&#39; &gt; CNAME

git init
git add -A
git commit -m &#39;deploy&#39;

# 如果发布到 https://&lt;USERNAME&gt;.github.io
# git push -f git@github.com:&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io.git master

# 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;
git push -f git@github.com:305810827/myDocs.git master:gh-pages

cd -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#打开gitbash执行部署脚本</span>
./deploy.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样每次执行deploy脚本后，github的Actions会自动执行部署工作流，页面就会自动更新.</p><h2 id="三、自定义域名" tabindex="-1"><a class="header-anchor" href="#三、自定义域名" aria-hidden="true">#</a> 三、自定义域名</h2><p>自定义域名需要在自己的域名上添加解析</p><p>![image-20231207152227563](../image/VuePress 部署到GitHub Pages/image-20231207152227563.png)</p><p>![image-20231207152332281](../image/VuePress 部署到GitHub Pages/image-20231207152332281.png)</p>`,22),l=[a];function r(c,v){return i(),n("div",null,l)}const t=e(d,[["render",r],["__file","VuePress 部署到GitHub Pages.html.vue"]]);export{t as default};
