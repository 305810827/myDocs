添加dns解析缓存，加速页面访问

#### 1、查询网址的ip地址

例如需要加速访问github.com，打开网站 [IPAddress.com](https://www.ipaddress.com/)
查询 **github.global.ssl.fastly.net** 和 **github.com** 两个地址
找到对应的IP地址在命令行Ping通

#### **2、修改本地hosts文件**

windows系统的hosts文件的位置如下：C:\Windows\System32\drivers\etc\hosts
mac/linux系统的hosts文件的位置如下：/etc/hosts
最好把文件粘贴到桌面修改，在覆盖到对应文件夹
在文件末尾加上

```text
140.82.113.3	github.com
199.232.69.194	github.global.ssl.fastly.net
```

#### 3、让配置文件生效

命令行中输入

```
ipconfig /flushdns
```
