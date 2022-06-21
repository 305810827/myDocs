import{_ as e,e as i}from"./app.659fa32e.js";const n={},s=i(`<h1 id="v2ray\u914D\u7F6Eip\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#v2ray\u914D\u7F6Eip\u4EE3\u7406" aria-hidden="true">#</a> v2ray\u914D\u7F6EIP\u4EE3\u7406</h1><p>https://www.v2fly.org/config/multiple_config.html#%E8%A7%84%E5%88%99%E8%AF%B4%E6%98%8E</p><h2 id="\u5B89\u88C5v2ray" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5v2ray" aria-hidden="true">#</a> \u5B89\u88C5v2ray</h2><p>\u89E3\u538B\uFF1Aunzip v2ray-linux.zip -d ./</p><ul><li><p>\u547D\u4EE4\u6587\u4EF6geoip.dat geosite.dat v2ctl v2ray \u7528mv\u79FB\u52A8\u5230 /usr/local/bin/\uFF08mv geoip.dat geosite.dat v2ctl v2ray /usr/local/bin/\uFF09</p></li><li><p>\u914D\u7F6E\u6587\u4EF6config.json \u7528mv\u79FB\u52A8\u5230/usr/local/etc/v2ray/ \uFF08\u81EA\u884C\u521B\u5EFA\u6587\u4EF6\u5939v2ray\uFF09\uFF08mkdir /usr/local/etc/v2ray/\uFF09</p></li><li><p>\u6587\u4EF6 v2ray.service \u7528mv\u79FB\u52A8\u5230 /etc/systemd/system/\uFF08mv v2ray.service /etc/systemd/system/</p><p>systemctl enable v2ray</p><p>systemctl daemon-reload</p></li></ul><h2 id="\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8" aria-hidden="true">#</a> \u542F\u52A8</h2><p>systemctl start v2ray</p><p>systemctl restart v2ray</p><p>systemctl stop v2ray</p><p>systemctl status v2ray</p><h2 id="config-json" tabindex="-1"><a class="header-anchor" href="#config-json" aria-hidden="true">#</a> Config.json</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>curl\u6D4B\u8BD5\uFF1Acurl --proxy \u534F\u8BAE://ip:\u7AEF\u53E3 www.baidu.com</p>`,13);function t(a,l){return s}var r=e(n,[["render",t],["__file","v2ray\u914D\u7F6EIP\u4EE3\u7406.html.vue"]]);export{r as default};
