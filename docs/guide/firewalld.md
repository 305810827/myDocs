# 宝塔面板防火墙firewalld命令行

#### 1、查看已放行端口

```
firewall-cmd --list-all
```

#### 2、操作firewalld

```
启动： systemctl start firewalld
查看状态： systemctl status firewalld
停止： systemctl disable firewalld
禁用： systemctl stop firewalld
```

#### 3、firewalld开放端口

```
sudo firewall-cmd --zone=public --add-port=3000/tcp --permanent
sudo firewall-cmd --reload
```

