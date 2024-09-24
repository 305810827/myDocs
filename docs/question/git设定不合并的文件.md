# git设定不合并的文件

场景：自己self分支的代码想要合并到master主分支，但是有一个read.me文件与主分支的read.me文件不一样，但是又不想合并到read.me文件。



1、启用merge策略, 设置git merge配置项

git config --global merge.ours.driver true

2、新建.gitattributes文件，配置要忽略merge的文件

根目录下创建.gitattributes文件，在文件中写入：read.me merge=ours

3、提交推送.gitattributes文件

git add/ commit/push

4、我们切到master分支，执行git merge，read.me文件不会合并

