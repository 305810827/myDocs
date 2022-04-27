(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{527:function(t,e,o){"use strict";o.r(e);var _=o(62),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("blockquote",[o("h3",{attrs:{id:"_1-创建-submodule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建-submodule"}},[t._v("#")]),t._v(" "),o("strong",[t._v("1.创建 submodule")])])]),t._v(" "),o("p",[t._v("使用 "),o("code",[t._v("git submodule add <submodule_url>")]),t._v(" 命令可以在项目中创建一个子模块。")]),t._v(" "),o("p",[t._v("此时项目仓库中会多出两个文件："),o("code",[t._v(".gitmodules")]),t._v(" 和 "),o("code",[t._v("project-sub-1")]),t._v(" 。")]),t._v(" "),o("p",[t._v("前者的内容是这样的，事实上就是子模块的相关信息；而后者那个文件，实际上保存的是子模块当前版本的版本号信息。")]),t._v(" "),o("blockquote",[o("p",[t._v('[submodule "project-sub-1"]\npath = project-sub-1\nurl = '),o("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/username/project-sub-1.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/username/project-sub-1.git"),o("OutboundLink")],1)])]),t._v(" "),o("p",[t._v("如果此前项目中已经存在 "),o("code",[t._v(".gitmodules")]),t._v(" 文件，则会在文件内容中多出上述三行记录。")]),t._v(" "),o("p",[t._v("通常此时可以使用 "),o("code",[t._v('git commit -m "add submodule xxx"')]),t._v(" 提交一次，表示引入了某个子模块。提交后，在主项目仓库中，会显示出子模块文件夹，并带上其所在仓库的版本号。")]),t._v(" "),o("blockquote",[o("h3",{attrs:{id:"_2-获取-submodule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取-submodule"}},[t._v("#")]),t._v(" "),o("strong",[t._v("2.获取 submodule")])])]),t._v(" "),o("p",[t._v("上述步骤在创建子模块的过程中，会自动将相关代码克隆到对应路径，但对于后续使用者而言，对于主项目使用普通的 "),o("code",[t._v("clone")]),t._v(" 操作并不会拉取到子模块中的实际代码。")]),t._v(" "),o("p",[t._v("使用以下命令进行克隆，完成后 "),o("code",[t._v("project-main/project-sub-1")]),t._v(" 文件夹是空的：")]),t._v(" "),o("blockquote",[o("p",[t._v("cd /path/to/temp\ngit clone "),o("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/username/project-main.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/username/project-main.git"),o("OutboundLink")],1)])]),t._v(" "),o("p",[t._v("如果希望子模块代码也获取到，一种方式是在克隆主项目的时候带上参数 "),o("code",[t._v("--recurse-submodules")]),t._v("，这样会递归地将项目中所有子模块的代码拉取。")]),t._v(" "),o("blockquote",[o("p",[t._v("cd /path/to/temp2\ngit clone "),o("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/username/project-main.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/username/project-main.git"),o("OutboundLink")],1),t._v(" --recurse-submodules")])]),t._v(" "),o("p",[t._v("此时 "),o("code",[t._v("project-main/project-sub-1")]),t._v(" 文件夹是有内容的，并且固定在某个 Git 提交的版本上。")]),t._v(" "),o("p",[t._v("另外一种可行的方式是，在当前主项目中执行：")]),t._v(" "),o("blockquote",[o("p",[t._v("git submodule init\ngit submodule update")])]),t._v(" "),o("p",[t._v("则会根据主项目的配置信息，拉取更新子模块中的代码。")]),t._v(" "),o("blockquote",[o("h3",{attrs:{id:"_3-子模块内容的更新"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-子模块内容的更新"}},[t._v("#")]),t._v(" "),o("strong",[t._v("3.子模块内容的更新")])])]),t._v(" "),o("p",[t._v("对于子模块而言，并不需要知道引用自己的主项目的存在。对于自身来讲，子模块就是一个完整的 Git 仓库，按照正常的 Git 代码管理规范操作即可。")]),t._v(" "),o("p",[t._v("对于主项目而言，子模块的内容发生变动时，通常有三种情况：")]),t._v(" "),o("p",[t._v("1）当前项目下子模块文件夹内的内容发生了未跟踪的内容变动；")]),t._v(" "),o("p",[t._v("2）当前项目下子模块文件夹内的内容发生了版本变化；")]),t._v(" "),o("p",[t._v("3）当前项目下子模块文件夹内的内容没变，远程有更新；")]),t._v(" "),o("blockquote",[o("p",[t._v("> 情况1：子模块有未跟踪的内容变动")])]),t._v(" "),o("p",[t._v("对于第1种情况，通常是在开发环境中，直接修改子模块文件夹中的代码导致的。")]),t._v(" "),o("p",[t._v("此时在主项目中使用 "),o("code",[t._v("git status")]),t._v(" 能够看到关于子模块尚未暂存以备提交的变更，但是于主项目而言是无能为力的，使用 "),o("code",[t._v("git add/commit")]),t._v(" 对其也不会产生影响。")]),t._v(" "),o("blockquote",[o("p",[t._v('➜ project-main git:(master) git status\n位于分支 master\n您的分支与上游分支 \'origin/master\' 一致。\n尚未暂存以备提交的变更：\n（使用 "git add <文件>..." 更新要提交的内容）\n（使用 "git checkout -- <文件>..." 丢弃工作区的改动）\n（提交或丢弃子模组中未跟踪或修改的内容）\n修改： project-sub-1 (未跟踪的内容)\n修改尚未加入提交（使用 "git add" 和/或 "git commit -a"）')])]),t._v(" "),o("p",[t._v("在此情景下，通常需要进入子模块文件夹，按照子模块内部的版本控制体系提交代码。")]),t._v(" "),o("p",[t._v("当提交完成后，主项目的状态则进入了情况2，即当前项目下子模块文件夹内的内容发生了版本变化。")]),t._v(" "),o("blockquote",[o("p",[t._v("> 情况2：子模块有版本变化")])]),t._v(" "),o("p",[t._v("当子模块版本变化时，在主项目中使用 "),o("code",[t._v("git status")]),t._v(" 查看仓库状态时，会显示子模块有新的提交：")]),t._v(" "),o("blockquote",[o("p",[t._v('➜ project-main git:(master) ✗ git status\n位于分支 master\n您的分支与上游分支 \'origin/master\' 一致。\n尚未暂存以备提交的变更：\n（使用 "git add <文件>..." 更新要提交的内容）\n（使用 "git checkout -- <文件>..." 丢弃工作区的改动）\n修改： project-sub-1 (新提交)\n修改尚未加入提交（使用 "git add" 和/或 "git commit -a"）')])]),t._v(" "),o("p",[t._v("在这种情况下，可以使用 "),o("code",[t._v("git add/commit")]),t._v(" 将其添加到主项目的代码提交中，实际的改动就是那个子模块 "),o("code",[t._v("文件")]),t._v(" 所表示的版本信息：")]),t._v(" "),o("blockquote",[o("p",[t._v("git diff HEAD HEAD^\ndiff --git a/project-sub-1 b/project-sub-1\nindex ace9770..7097c48 160000\n--- a/project-sub-1\n+++ b/project-sub-1\n@@ -1 +1 @@\n-Subproject commit ace977071f94f4f88935f9bb9a33ac0f8b4ba935\n+Subproject commit 7097c4887798b71cee360e99815f7dbd1aa17eb4")])]),t._v(" "),o("p",[t._v("通常当子项目更新后，主项目修改其所依赖的版本时，会产生类似这种情景的 commit 提交信息。")]),t._v(" "),o("blockquote",[o("p",[t._v("> 情况3：子模块远程有更新")])]),t._v(" "),o("p",[t._v("通常来讲，主项目与子模块的开发不会恰好是同时进行的。通常是子模块负责维护自己的版本升级后，推送到远程仓库，并告知主项目可以更新对子模块的版本依赖。")]),t._v(" "),o("p",[t._v("在这种情况下，主项目是比较茫然的。")]),t._v(" "),o("p",[t._v("之前曾经提到，主项目可以使用 "),o("code",[t._v("git submodule update")]),t._v(" 更新子模块的代码，但那是指 "),o("code",[t._v("当前主项目文件夹下的子模块目录内容")]),t._v(" 与 "),o("code",[t._v("当前主项目记录的子模块版本")]),t._v(" 不一致时，会参考后者进行更新。")]),t._v(" "),o("p",[t._v("但如今这种情况下，后者 "),o("code",[t._v("当前主项目记录的子模块版本")]),t._v(" 还没有变化，在主项目看来当前情况一切正常。")]),t._v(" "),o("p",[t._v("此时，需要让主项目主动进入子模块拉取新版代码，进行升级操作。")]),t._v(" "),o("p",[t._v("通常流程是：")]),t._v(" "),o("blockquote",[o("p",[t._v("cd project-sub-1\ngit pull origin master")])]),t._v(" "),o("p",[t._v("子模块目录下的代码版本会发生变化，转到情况2的流程进行主项目的提交。")]),t._v(" "),o("p",[t._v("当主项目的子项目特别多时，可能会不太方便，此时可以使用 "),o("code",[t._v("git submodule")]),t._v(" 的一个命令 "),o("code",[t._v("foreach")]),t._v(" 执行：")]),t._v(" "),o("blockquote",[o("p",[t._v("git submodule foreach 'git pull origin master'")])]),t._v(" "),o("blockquote",[o("p",[t._v("> 情况汇总")])]),t._v(" "),o("p",[t._v("终上所述，可知在不同场景下子模块的更新方式如下：")]),t._v(" "),o("ul",[o("li",[t._v("对于子模块，只需要管理好自己的版本，并推送到远程分支即可；")]),t._v(" "),o("li",[t._v("对于父模块，若子模块版本信息未提交，需要更新子模块目录下的代码，并执行 "),o("code",[t._v("commit")]),t._v(" 操作提交子模块版本信息；")]),t._v(" "),o("li",[t._v("对于父模块，若子模块版本信息已提交，需要使用 "),o("code",[t._v("git submodule update")]),t._v(" ，Git 会自动根据子模块版本信息更新所有子模块目录的相关代码。")])]),t._v(" "),o("blockquote",[o("h3",{attrs:{id:"_4-删除子模块"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-删除子模块"}},[t._v("#")]),t._v(" "),o("strong",[t._v("4.删除子模块")])])]),t._v(" "),o("p",[t._v("网上流传了一些偏法，主要步骤是直接移除模块，并手动修改 "),o("code",[t._v(".gitmodules")]),t._v("、"),o("code",[t._v(".git/config")]),t._v(" 和 "),o("code",[t._v(".git/modules")]),t._v(" 内容。包含了一大堆类似"),o("code",[t._v("git rm --cached <sub-module>")]),t._v("、"),o("code",[t._v("rm -rf <sub-moduel>")]),t._v("、"),o("code",[t._v("rm .gitmodules")]),t._v(" 和 "),o("code",[t._v("git rm --cached")]),t._v(" 之类的代码。")]),t._v(" "),o("p",[t._v("实际上这是一种比较野的做法，不建议使用。")]),t._v(" "),o("p",[t._v("根据官方文档的说明，应该使用 "),o("code",[t._v("git submodule deinit")]),t._v(" 命令卸载一个子模块。这个命令如果添加上参数 "),o("code",[t._v("--force")]),t._v("，则子模块工作区内即使有本地的修改，也会被移除。")]),t._v(" "),o("blockquote",[o("p",[t._v("git submodule deinit project-sub-1\ngit rm project-sub-1")])]),t._v(" "),o("p",[t._v("执行 "),o("code",[t._v("git submodule deinit project-sub-1")]),t._v(" 命令的实际效果，是自动在 "),o("code",[t._v(".git/config")]),t._v(" 中删除了以下内容：")]),t._v(" "),o("blockquote",[o("p",[t._v('[submodule "project-sub-1"]\nurl = '),o("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/username/project-sub-1.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/username/project-sub-1.git"),o("OutboundLink")],1)])]),t._v(" "),o("p",[t._v("执行 "),o("code",[t._v("git rm project-sub-1")]),t._v(" 的效果，是移除了 "),o("code",[t._v("project-sub-1")]),t._v(" 文件夹，并自动在 "),o("code",[t._v(".gitmodules")]),t._v(" 中删除了以下内容：")]),t._v(" "),o("blockquote",[o("p",[t._v('[submodule "project-sub-1"]\npath = project-sub-1\nurl = '),o("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/username/project-sub-1.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/username/project-sub-1.git"),o("OutboundLink")],1)])]),t._v(" "),o("p",[t._v("此时，主项目中关于子模块的信息基本已经删除（虽然貌似 "),o("code",[t._v(".git/modules")]),t._v(" 目录下还有残余）：")]),t._v(" "),o("blockquote",[o("p",[t._v("➜ project-main git:(master) ✗ gs\n位于分支 master\n您的分支与上游分支 'origin/master' 一致。\n要提交的变更：\n（使用 \"git reset HEAD <文件>...\" 以取消暂存）\n修改： .gitmodules\n删除： project-sub-1")])]),t._v(" "),o("p",[t._v("可以提交代码：")]),t._v(" "),o("blockquote",[o("p",[t._v('git commit -m "delete submodule project-sub-1"')])]),t._v(" "),o("p",[t._v("至此完成对子模块的删除。")])])}),[],!1,null,null,null);e.default=v.exports}}]);