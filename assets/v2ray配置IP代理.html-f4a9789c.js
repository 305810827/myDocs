import{_ as e,o as i,c as n,a as s}from"./app-53705635.js";const t={},a=s(`<h1 id="v2ray配置ip代理" tabindex="-1"><a class="header-anchor" href="#v2ray配置ip代理" aria-hidden="true">#</a> v2ray配置IP代理</h1><p>https://www.v2fly.org/config/multiple_config.html#%E8%A7%84%E5%88%99%E8%AF%B4%E6%98%8E</p><h2 id="安装v2ray" tabindex="-1"><a class="header-anchor" href="#安装v2ray" aria-hidden="true">#</a> 安装v2ray</h2><p>解压：unzip v2ray-linux.zip -d ./</p><ul><li><p>命令文件geoip.dat geosite.dat v2ctl v2ray 用mv移动到 /usr/local/bin/（mv geoip.dat geosite.dat v2ctl v2ray /usr/local/bin/）</p></li><li><p>配置文件config.json 用mv移动到/usr/local/etc/v2ray/ （自行创建文件夹v2ray）（mkdir /usr/local/etc/v2ray/）</p></li><li><p>文件 v2ray.service 用mv移动到 /etc/systemd/system/（mv v2ray.service /etc/systemd/system/</p><p>systemctl enable v2ray</p><p>systemctl daemon-reload</p></li></ul><h2 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h2><p>systemctl start v2ray</p><p>systemctl restart v2ray</p><p>systemctl stop v2ray</p><p>systemctl status v2ray</p><h2 id="config-json" tabindex="-1"><a class="header-anchor" href="#config-json" aria-hidden="true">#</a> Config.json</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;log&quot;      : {
    &quot;loglevel&quot;: &quot;warn&quot;
  },
  &quot;inbounds&quot; : [
    {
      &quot;protocol&quot;: &quot;socks&quot;,
      &quot;port&quot;    : 21127,
      &quot;listen&quot;:&quot;0.0.0.0&quot;,
      &quot;settings&quot;: {
        &quot;auth&quot;: &quot;noauth&quot;
      }
    },
    {
      &quot;port&quot;    : 21128,
      &quot;protocol&quot;: &quot;vmess&quot;,
      &quot;settings&quot;: {
        &quot;clients&quot;: [
          {
            &quot;id&quot;     : &quot;00e0a3ff-674d-486d-8de0-ea8a8e4792e3&quot;,
            &quot;alterId&quot;: 35
          }
        ]
      }
    }
  ],
  &quot;outbounds&quot;: [
    {
      &quot;protocol&quot;: &quot;freedom&quot;,
      &quot;tag&quot;     : &quot;direct&quot;
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>curl测试：curl --proxy 协议://ip:端口 www.baidu.com</p>`,13),l=[a];function d(o,r){return i(),n("div",null,l)}const v=e(t,[["render",d],["__file","v2ray配置IP代理.html.vue"]]);export{v as default};
