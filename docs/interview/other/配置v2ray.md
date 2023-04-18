#### 1、安装v2ray

Https://github.com/v2fly/v2ray-core/releases

#### 2、解压和配置v2ray

```
unzip v2ray-linux.zip -d ./

mv将文件geoip.dat   geosite.dat   v2ctl   v2ray 移动到 /usr/local/bin/

配置文件config.json 用mv移动到/usr/local/etc/v2ray/  (自行创建文件夹v2ray)

将文件v2ray.service 用mv移动到/etc/systemd/system/
```

#### 3、启用加载v2ray

```
systemctl enable v2ray
systemctl daemon-reload
```

#### 4、命令

```
systemctl start v2ray
systemctl restart v2ray
systemctl stop v2ray
systemctl status v2ray
```

