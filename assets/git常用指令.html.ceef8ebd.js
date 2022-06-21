import{_ as i,e}from"./app.659fa32e.js";const n={},d=e(`<h1 id="\u4E00\u3001\u5E38\u7528\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5E38\u7528\u6307\u4EE4" aria-hidden="true">#</a> \u4E00\u3001\u5E38\u7528\u6307\u4EE4</h1><h3 id="\u7528\u6237\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u914D\u7F6E" aria-hidden="true">#</a> \u7528\u6237\u914D\u7F6E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git config --global user.name &quot;bettyaner&quot;
git config --global user.email bettyaner@163.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5DE5\u4F5C\u5E38\u7528\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u4F5C\u5E38\u7528\u6307\u4EE4" aria-hidden="true">#</a> \u5DE5\u4F5C\u5E38\u7528\u6307\u4EE4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u521D\u59CB\u5316\u4ED3\u5E93
git init 

// \u5BF9\u72B6\u6001\u7684\u8DDF\u8E2A\u3001\u5206\u4E3A\u5185\u5BB9\u72B6\u6001\u548C\u6587\u4EF6\u72B6\u6001
// \u5185\u5BB9\u72B6\u6001\u6807\u793A\u5185\u5BB9\u6587\u4EF6\u7684\u6539\u53D8\uFF0C\u6709\u4E09\u4E2A\u533A\u57DF\uFF1A\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u6682\u5B58\u533A\u548C\u63D0\u4EA4\u533A
// \u6587\u4EF6\u72B6\u6001\u6709\u4E24\u4E2A\u72B6\u6001\uFF1A\u5DF2\u8DDF\u8E2A\u548C\u672A\u8DDF\u8E2A
git status

// \u6DFB\u52A0\u6587\u4EF6\u5185\u5BB9\u5230\u6682\u5B58\u533A\uFF08\u540C\u65F6\u6587\u4EF6\u88AB\u8DDF\u8E2A\uFF09
git add

// \u6DFB\u52A0\u6240\u6709\u6587\u4EF6
git add .

// \u4EC5\u4ECE\u6682\u5B58\u533A\u5220\u9664
git rm --cached
// \u4ECE\u6682\u5B58\u533A\u4E0E\u5DE5\u4F5C\u76EE\u5F55\u540C\u65F6\u5220\u9664
git rm

// \u4ECE\u6682\u5B58\u533A\u63D0\u4EA4 -m\uFF1A\u6CE8\u91CA
git commit -m &#39;first commit&#39; 
// \u4ECE\u5DE5\u4F5C\u533A\u63D0\u4EA4
git commit -a -m &#39;full commit&#39;

// \u67E5\u770B\u63D0\u4EA4\u5386\u53F2\u8BB0\u5F55
git log

// \u5DE5\u4F5C\u533A\u4E0E\u6682\u5B58\u533A\u7684\u5DEE\u5F02
git diff
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F" aria-hidden="true">#</a> \u5206\u652F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5207\u6362\u5206\u652F
git checkout newBranch
// \u653E\u5F03\u5DE5\u4F5C\u533A\u4E2D\u5168\u90E8\u7684\u4FEE\u6539
git checkout .
// \u5C06\u6587\u4EF6\u5185\u5BB9\u4ECE\u6682\u5B58\u533A\u590D\u5236\u5230\u5DE5\u4F5C\u76EE\u5F55, \u653E\u5F03\u5DE5\u4F5C\u533A\u4E2D\u67D0\u4E2A\u6587\u4EF6\u7684\u4FEE\u6539
git checkout -- filename
// \u5C06\u5185\u5BB9\u4ECE\u4E0A\u6B21\u63D0\u4EA4\u590D\u5236\u5230\u5DE5\u4F5C\u76EE\u5F55
git checkout HEAD -- &lt;file&gt; 
// \u5F3A\u5236\u653E\u5F03 index \u548C \u5DE5\u4F5C\u533A \u7684\u6539\u52A8\uFF1A
git checkout -f

// \u5217\u51FA\u6240\u6709\u672C\u5730\u5206\u652F
git branch
// \u5217\u51FA\u6240\u6709\u8FDC\u7A0B\u5206\u652F
git branch -r
// \u5217\u51FA\u6240\u6709\u672C\u5730\u5206\u652F\u548C\u8FDC\u7A0B\u5206\u652F
git branch -a
// \u521B\u5EFA\u5206\u652F
git branch newBranch [origin/newBranch]
// \u5220\u9664\u5206\u652F
git branch -d [branch-name]

# \u5220\u9664\u8FDC\u7A0B\u5206\u652F
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]

# \u5408\u5E76\u6307\u5B9A\u5206\u652F\u5230\u5F53\u524D\u5206\u652F
git merge [branch]

# \u9009\u62E9\u4E00\u4E2Acommit\uFF0C\u5408\u5E76\u8FDB\u5F53\u524D\u5206\u652F
git cherry-pick [commit]

git rebase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u64A4\u9500" tabindex="-1"><a class="header-anchor" href="#\u64A4\u9500" aria-hidden="true">#</a> \u64A4\u9500</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u53EF\u4EE5\u6307\u5B9A\u9000\u56DE\u67D0\u4E00\u6B21\u63D0\u4EA4\u7684\u7248\u672C
// --mixed\u4E3A\u9ED8\u8BA4, \u91CD\u7F6E\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\u7684\u67D0\u6B21add, \u5DE5\u4F5C\u533A\u4FDD\u6301\u539F\u6709\u4FEE\u6539
// --soft, \u91CD\u7F6E\u672C\u5730\u4ED3\u5E93\u7684\u67D0\u6B21commit\u63D0\u4EA4, \u5DE5\u4F5C\u533A\u548C\u6682\u7F13\u533A\u4FDD\u6301\u539F\u6709\u4FEE\u6539
// --hard, \u91CD\u7F6E\u672C\u5730\u4ED3\u5E93\u3001\u6682\u5B58\u533A\u4E0E\u5DE5\u4F5C\u533A\uFF0C\u4E0E\u4E0A\u4E00\u6B21commit\u4FDD\u6301\u4E00\u81F4, \u653E\u5F03\u539F\u6709\u4FEE\u6539
// --keep, \u91CD\u7F6E\u5F53\u524DHEAD\u4E3A\u6307\u5B9Acommit\uFF0C\u4F46\u4FDD\u6301\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u4E0D\u53D8
git reset [--soft | --mixed | --hard \uFF5C --keep] [HEAD]

// \u65B0\u5EFA\u4E00\u4E2Acommit\uFF0C\u7528\u6765\u64A4\u9500\u6307\u5B9Acommit
// \u540E\u8005\u7684\u6240\u6709\u53D8\u5316\u90FD\u5C06\u88AB\u524D\u8005\u62B5\u6D88\uFF0C\u5E76\u4E14\u5E94\u7528\u5230\u5F53\u524D\u5206\u652F
git revert [commit]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FDC\u7A0B\u540C\u6B65" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u540C\u6B65" aria-hidden="true">#</a> \u8FDC\u7A0B\u540C\u6B65</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4E0B\u8F7D\u8FDC\u7A0B\u4ED3\u5E93\u7684\u6240\u6709\u53D8\u52A8
git fetch [remote]

// \u663E\u793A\u6240\u6709\u8FDC\u7A0B\u4ED3\u5E93
git remote -v
// \u6DFB\u52A0\u65B0\u7684\u8FDC\u7A0B\u4ED3\u5E93
git remote add [shortname] [url]

// \u53D6\u56DE\u8FDC\u7A0B\u4ED3\u5E93\u53D8\u5316\uFF0C\u4E0E\u672C\u5730\u5206\u652F\u5408\u5E76
// git pull = git fetch + git merge FETCH_HEAD 
// git pull --rebase =  git fetch + git rebase FETCH_HEAD 
git pull [remote] [branch]

// \u4E0A\u4F20\u672C\u5730\u6307\u5B9A\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93
git push [remote] [branch]

// \u5F3A\u884C\u63A8\u884C\u5F53\u524D\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5373\u4F7F\u6709\u51B2\u7A81
git push [remote] --force
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6253\u5305\u6307\u5B9A\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305\u6307\u5B9A\u5206\u652F" aria-hidden="true">#</a> \u6253\u5305\u6307\u5B9A\u5206\u652F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u751F\u6210\u9879\u76EE\u538B\u7F29\u5305\uFF0C\u9075\u5B88.gitignore
git archive -o ./dist.zip HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u4E8C\u3001\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5E94\u7528" aria-hidden="true">#</a> \u4E8C\u3001\u5E94\u7528</h1><h3 id="\u64A4\u9500\u672C\u5730\u4ED3\u5E93\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u64A4\u9500\u672C\u5730\u4ED3\u5E93\u4FEE\u6539" aria-hidden="true">#</a> \u64A4\u9500\u672C\u5730\u4ED3\u5E93\u4FEE\u6539</h3><p><strong>\u4E00\u3001\u672A\u4F7F\u7528 git add \u7F13\u5B58\u4EE3\u7801\u65F6</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u653E\u5F03\u6307\u5B9A\u6587\u4EF6\u7684\u4FEE\u6539
git checkout -- [readme.md]
// \u653E\u5F03\u6240\u6709\u7684\u6587\u4EF6\u4FEE\u6539
git checkout . 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B \u4E0D\u8981\u5FD8\u8BB0\u4E2D\u95F4\u7684 \u201C--\u201D \uFF0C\u4E0D\u5199\u5C31\u6210\u4E86\u68C0\u51FA\u5206\u652F\u4E86\uFF01\uFF01</p><p>\u200B \u6B64\u547D\u4EE4\u7528\u6765\u653E\u5F03\u6389\u6240\u6709\u8FD8\u6CA1\u6709\u52A0\u5165\u5230\u7F13\u5B58\u533A\uFF08\u5C31\u662F git add \u547D\u4EE4\uFF09\u7684\u4FEE\u6539\uFF1A\u5185\u5BB9\u4FEE\u6539\u4E0E\u6574\u4E2A\u6587\u4EF6\u5220\u9664\u3002\u4F46\u662F\u6B64\u547D\u4EE4\u4E0D\u4F1A\u5220\u9664\u6389\u521A\u65B0\u5EFA\u7684\u6587\u4EF6\u3002\u56E0\u4E3A\u521A\u65B0\u5EFA\u7684\u6587\u4EF6\u8FD8\u6CA1\u5DF2\u6709\u52A0\u5165\u5230 git \u7684\u7BA1\u7406\u7CFB\u7EDF\u4E2D\u3002\u6240\u4EE5\u5BF9\u4E8Egit\u662F\u672A\u77E5\u7684\u3002\u81EA\u5DF1\u624B\u52A8\u5220\u9664\u5C31\u597D\u4E86\u3002</p><p><strong>\u4E8C\u3001\u5DF2\u7ECF\u4F7F\u7528\u4E86 git add \u7F13\u5B58\u4E86\u4EE3\u7801</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u653E\u5F03\u6307\u5B9A\u6587\u4EF6\u7684\u7F13\u5B58
git reset HEAD [readme.md]
// \u653E\u5F03\u6240\u4EE5\u7684\u7F13\u5B58\u53EF\u4EE5\u4F7F\u7528
git reset HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B \u6B64\u547D\u4EE4\u7528\u6765\u6E05\u9664 git \u5BF9\u4E8E\u6587\u4EF6\u4FEE\u6539\u7684\u7F13\u5B58\u3002\u76F8\u5F53\u4E8E\u64A4\u9500 git add \u547D\u4EE4\u6240\u5728\u7684\u5DE5\u4F5C\u3002\u5728\u4F7F\u7528\u672C\u547D\u4EE4\u540E\uFF0C\u672C\u5730\u7684\u4FEE\u6539\u5E76\u4E0D\u4F1A\u6D88\u5931\uFF0C\u800C\u662F\u56DE\u5230\u4E86\u5982\uFF08\u4E00\uFF09\u6240\u793A\u7684\u72B6\u6001\u3002\u7EE7\u7EED\u7528\uFF08\u4E00\uFF09\u4E2D\u7684\u64CD\u4F5C\uFF0C\u5C31\u53EF\u4EE5\u653E\u5F03\u672C\u5730\u7684\u4FEE\u6539\u3002</p><p><strong>\u4E09\u3001\u5DF2\u7ECF\u7528 git commit \u63D0\u4EA4\u4E86\u4EE3\u7801</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> // \u56DE\u9000\u5230\u4E0A\u4E00\u6B21commit\u7684\u72B6\u6001
 git reset --hard HEAD^
 // \u56DE\u9000\u5230\u4EFB\u610F\u7248\u672C
 git reset --hard commitid
 // \u53EF\u4EE5\u67E5\u770B\u8BF7\u4EA4\u5386\u53F2\u8BB0\u5F55 
 git log 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B</p><h3 id="\u60F3\u8981\u64A4\u56DE\u4E2D\u95F4\u67D0\u6B21commit-\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4revert" tabindex="-1"><a class="header-anchor" href="#\u60F3\u8981\u64A4\u56DE\u4E2D\u95F4\u67D0\u6B21commit-\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4revert" aria-hidden="true">#</a> \u60F3\u8981\u64A4\u56DE\u4E2D\u95F4\u67D0\u6B21commit\uFF0C\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4revert</h3><p><strong>revert</strong></p><div class="language-undefined ext-undefined line-numbers-mode"><pre class="language-undefined"><code>// \u65B0\u5EFA\u4E00\u4E2Acommit\uFF0C\u7528\u6765\u64A4\u9500\u6307\u5B9Acommit
git revert commit_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B \u7136\u540E\u5982\u679C\u6709\u51B2\u7A81\uFF0C\u89E3\u51B3\u51B2\u7A81\uFF0C\u7136\u540E\u91CD\u65B0commit\uFF0Cpush\u5230\u8FDC\u7A0B\u5206\u652F\uFF0C\u8FD9\u65F6\u8FDC\u7A0B\u4ED3\u5E93\u4F1A\u591A\u4E86\u4E00\u4E2Acommit\uFF0C\u800C\u539F\u6765\u60F3\u8981\u64A4\u9500\u7684\u90A3\u6761commit\u8BB0\u5F55\u8FD8\u5728\uFF0C\u4F46\u662F\u6700\u7EC8\u4EE3\u7801\uFF0C\u4E5F\u5C31\u662F\u6700\u65B0\u7684commit\uFF0C\u5DF2\u7ECF\u628A\u4E0D\u8981\u7684\u4EE3\u7801\u79FB\u9664\u4E86\uFF0C\u6B64\u65F6\u8FBE\u5230\u4E86\u6211\u4EEC\u7684\u76EE\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5982\u679C\u60F3\u64A4\u9500\u7684\u4E0D\u662F\u4E00\u6B21commit\uFF0C\u800C\u662F\u8FDE\u7740\u7684\u51E0\u6B21\uFF0C\u90A3\u4E48
git revert --no-commit commit1..commit2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>cherry-pick</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u56DE\u9000\u5230\u51FA\u9519\u7248\u672C\u524D\u4E00\u4E2Acommit
git reset --hard 1d7444
// \u5C06\u67D0\u6B21commit\u7684\u66F4\u6539\u5E94\u7528\u5230\u5F53\u524D\u7248\u672C(\u5C06\u51FA\u9519 commit \u4E4B\u540E\u522B\u4EBA\u63D0\u4EA4\u7684\u4EE3\u7801\u5408\u5E76\u5230\u5F53\u524D\u6B63\u5E38\u4EE3\u7801\u5206\u652F\u4E0A)
git cherry-pick 626335
// \u5F3A\u5236\u63D0\u4EA4
git push origin HEAD --force
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32);function s(a,l){return d}var v=i(n,[["render",s],["__file","git\u5E38\u7528\u6307\u4EE4.html.vue"]]);export{v as default};
