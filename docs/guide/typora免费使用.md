---
typora-root-url: ..\image
---

# typora免费使用

typora最后免费版本0.11.18，各种版本的下载地址下载：https://download.csdn.net/download/m0_37820751/87796159

#### 一、window安装后无法使用的问题

第一步：按Windows+R打开运行窗口，在输入框输入regedit，打开注册表管理器。

![image-20230518150555173](/typora免费使用/image-20230518150555173.png)

第二步：打开注册表，按以下路径展开

计算机\HKEY_CURRENT_USER\Software\Typora

![image-20230518151031206](/typora免费使用/image-20230518151031206.png)



![image-20230518151108256](/typora免费使用/image-20230518151108256.png)

第三步：在Typora上点右键，点权限选项，选择Administrtors，再把底下权限全部设置为拒绝即可。
必须选择Administrtors

![image-20230518151146360](/typora免费使用/image-20230518151146360.png)