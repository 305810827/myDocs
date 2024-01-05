import{_ as i,o as e,c as n,a as d}from"./app-53705635.js";const s={},a=d(`<h1 id="一、常用指令" tabindex="-1"><a class="header-anchor" href="#一、常用指令" aria-hidden="true">#</a> 一、常用指令</h1><h3 id="用户配置" tabindex="-1"><a class="header-anchor" href="#用户配置" aria-hidden="true">#</a> 用户配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global user.name &quot;bettyaner&quot;
git config --global user.email bettyaner@163.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="工作常用指令" tabindex="-1"><a class="header-anchor" href="#工作常用指令" aria-hidden="true">#</a> 工作常用指令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 初始化仓库
git init 

// 对状态的跟踪、分为内容状态和文件状态
// 内容状态标示内容文件的改变，有三个区域：工作目录，暂存区和提交区
// 文件状态有两个状态：已跟踪和未跟踪
git status

// 添加文件内容到暂存区（同时文件被跟踪）
git add

// 添加所有文件
git add .

// 仅从暂存区删除
git rm --cached
// 从暂存区与工作目录同时删除
git rm

// 从暂存区提交 -m：注释
git commit -m &#39;first commit&#39; 
// 从工作区提交
git commit -a -m &#39;full commit&#39;

// 查看提交历史记录
git log

// 工作区与暂存区的差异
git diff
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 切换分支
git checkout newBranch
// 放弃工作区中全部的修改
git checkout .
// 将文件内容从暂存区复制到工作目录, 放弃工作区中某个文件的修改
git checkout -- filename
// 将内容从上次提交复制到工作目录
git checkout HEAD -- &lt;file&gt; 
// 强制放弃 index 和 工作区 的改动：
git checkout -f

// 列出所有本地分支
git branch
// 列出所有远程分支
git branch -r
// 列出所有本地分支和远程分支
git branch -a
// 创建分支
git branch newBranch [origin/newBranch]
// 删除分支
git branch -d [branch-name]

# 删除远程分支
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]

# 合并指定分支到当前分支
git merge [branch]

# 选择一个commit，合并进当前分支
git cherry-pick [commit]

git rebase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="撤销" tabindex="-1"><a class="header-anchor" href="#撤销" aria-hidden="true">#</a> 撤销</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 可以指定退回某一次提交的版本
// --mixed为默认, 重置暂存区的指定文件的某次add, 工作区保持原有修改
// --soft, 重置本地仓库的某次commit提交, 工作区和暂缓区保持原有修改
// --hard, 重置本地仓库、暂存区与工作区，与上一次commit保持一致, 放弃原有修改
// --keep, 重置当前HEAD为指定commit，但保持暂存区和工作区不变
git reset [--soft | --mixed | --hard ｜ --keep] [HEAD]

// 新建一个commit，用来撤销指定commit
// 后者的所有变化都将被前者抵消，并且应用到当前分支
git revert [commit]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="远程同步" tabindex="-1"><a class="header-anchor" href="#远程同步" aria-hidden="true">#</a> 远程同步</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 下载远程仓库的所有变动
git fetch [remote]

// 显示所有远程仓库
git remote -v
// 添加新的远程仓库
git remote add [shortname] [url]

// 取回远程仓库变化，与本地分支合并
// git pull = git fetch + git merge FETCH_HEAD 
// git pull --rebase =  git fetch + git rebase FETCH_HEAD 
git pull [remote] [branch]

// 上传本地指定分支到远程仓库
git push [remote] [branch]

// 强行推行当前分支到远程仓库，即使有冲突
git push [remote] --force
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包指定分支" tabindex="-1"><a class="header-anchor" href="#打包指定分支" aria-hidden="true">#</a> 打包指定分支</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 生成项目压缩包，遵守.gitignore
git archive -o ./dist.zip HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="缓存修改" tabindex="-1"><a class="header-anchor" href="#缓存修改" aria-hidden="true">#</a> 缓存修改</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git stash         // 存储当前分支下的所有改动
git stash list    // 查看所有的存储列表
git stash pop     // 释放最近一次保存的内容，并且将该次保存的内容出栈
git stash apply stash@{0}   // 应用某一次的存储内容，但不删除改内容
git stash push .../.../     // 存储指定的文件修改
git stash show stash@{0}    // 查看某一个压栈修改了哪几个文件  -p 查看修改内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="二、应用" tabindex="-1"><a class="header-anchor" href="#二、应用" aria-hidden="true">#</a> 二、应用</h1><h3 id="撤销本地仓库修改" tabindex="-1"><a class="header-anchor" href="#撤销本地仓库修改" aria-hidden="true">#</a> 撤销本地仓库修改</h3><p><strong>一、未使用 git add 缓存代码时</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 放弃指定文件的修改
git checkout -- [readme.md]
// 放弃所有的文件修改
git checkout . 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 不要忘记中间的 “--” ，不写就成了检出分支了！！</p><p>​ 此命令用来放弃掉所有还没有加入到缓存区（就是 git add 命令）的修改：内容修改与整个文件删除。但是此命令不会删除掉刚新建的文件。因为刚新建的文件还没已有加入到 git 的管理系统中。所以对于git是未知的。自己手动删除就好了。</p><p><strong>二、已经使用了 git add 缓存了代码</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 放弃指定文件的缓存
git reset HEAD [readme.md]
// 放弃所以的缓存可以使用
git reset HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 此命令用来清除 git 对于文件修改的缓存。相当于撤销 git add 命令所在的工作。在使用本命令后，本地的修改并不会消失，而是回到了如（一）所示的状态。继续用（一）中的操作，就可以放弃本地的修改。</p><p><strong>三、已经用 git commit 提交了代码</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> // 回退到上一次commit的状态
 git reset --hard HEAD^
 // 回退到任意版本
 git reset --hard commitid
 // 可以查看请交历史记录 
 git log 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><h3 id="想要撤回中间某次commit-可以使用命令revert" tabindex="-1"><a class="header-anchor" href="#想要撤回中间某次commit-可以使用命令revert" aria-hidden="true">#</a> 想要撤回中间某次commit，可以使用命令revert</h3><p><strong>revert</strong></p><div class="language-undefined line-numbers-mode" data-ext="undefined"><pre class="language-undefined"><code>// 新建一个commit，用来撤销指定commit
git revert commit_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 然后如果有冲突，解决冲突，然后重新commit，push到远程分支，这时远程仓库会多了一个commit，而原来想要撤销的那条commit记录还在，但是最终代码，也就是最新的commit，已经把不要的代码移除了，此时达到了我们的目的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 如果想撤销的不是一次commit，而是连着的几次，那么
git revert --no-commit commit1..commit2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>cherry-pick</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 回退到出错版本前一个commit
git reset --hard 1d7444
// 将某次commit的更改应用到当前版本(将出错 commit 之后别人提交的代码合并到当前正常代码分支上)
git cherry-pick 626335
// 强制提交
git push origin HEAD --force
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),l=[a];function r(t,v){return e(),n("div",null,l)}const m=i(s,[["render",r],["__file","git常用指令.html.vue"]]);export{m as default};
