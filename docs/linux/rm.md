

### 一、rm

删除匹配的文件
find ./testtmp -name "*.c" | xargs rm -rf



删除中文乱码目录或文件 

\# 首先找到文件或目录的inode

$ls -i

\# 使用find命令查询并删除此文件或目录

`find -inum 2623190 -delete`
注意：此方法只适用于删除文件或空的文件夹。

```
find -inum 2236429 -exec rm -rf {} \;
此方法只适用于删除文件或非空文件夹
```
