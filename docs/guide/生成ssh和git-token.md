---
typora-root-url: ..\imagech
---

# 生成ssh和git token

### 一、生成ssh

在cmd输入命令行：ssh-keygen -t rsa -C "你的邮箱"，输入后一路回车即可,即会生成你的ssh key。

![image-20230518152049638](../image/生成ssh和git-token/image-20230518152049638.png)

找到划红线的目录，打开文件并复制内容。添加到自己git中的SSH and GPG keys中

![image-20230518152317104](../image/生成ssh和git-token/image-20230518152317104.png)



### 一、git token

1、点击你的GitHub头像，选择下拉框中的“settings”:

![image-20230518153014278](../image/生成ssh和git-token/1684395007878.png)

2、选择左侧菜单的“Developer settings”一项：

![image-20230518153259174](../image/生成ssh和git-token/1684394840187.png)

3、选择“tokens(classic)”、点击“Generate new token”:

![image-20230518154637285](../image/生成ssh和git-token/image-20230518154637285-16843960045041.png)

4、按自己需求选择，然后便可生成一个token：

![image-20230518154842405](../image/生成ssh和git-token/image-20230518154842405-16843961246082.png)