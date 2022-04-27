# v2ray配置IP代理

https://www.v2fly.org/config/multiple_config.html#%E8%A7%84%E5%88%99%E8%AF%B4%E6%98%8E

## 安装v2ray

解压：unzip v2ray-linux.zip -d ./
- 命令文件geoip.dat  geosite.dat  v2ctl  v2ray 用mv移动到 /usr/local/bin/（mv geoip.dat  geosite.dat  v2ctl  v2ray /usr/local/bin/）

- 配置文件config.json 用mv移动到/usr/local/etc/v2ray/ （自行创建文件夹v2ray）（mkdir /usr/local/etc/v2ray/）

- 文件 v2ray.service 用mv移动到 /etc/systemd/system/（mv v2ray.service /etc/systemd/system/

  systemctl enable v2ray

  systemctl daemon-reload


## 启动
systemctl start  v2ray

systemctl restart  v2ray

systemctl stop  v2ray

systemctl status  v2ray

## Config.json

```
{
  "log"      : {
    "loglevel": "warn"
  },
  "inbounds" : [
    {
      "protocol": "socks",
      "port"    : 21127,
      "listen":"0.0.0.0",
      "settings": {
        "auth": "noauth"
      }
    },
    {
      "port"    : 21128,
      "protocol": "vmess",
      "settings": {
        "clients": [
          {
            "id"     : "00e0a3ff-674d-486d-8de0-ea8a8e4792e3",
            "alterId": 35
          }
        ]
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "freedom",
      "tag"     : "direct"
    }
  ]
}
```



curl测试：curl --proxy 协议://ip:端口 www.baidu.com