import{_ as e,o as a,c as s,a as i}from"./app-53705635.js";const r={},n=i(`<h4 id="_1、安装v2ray" tabindex="-1"><a class="header-anchor" href="#_1、安装v2ray" aria-hidden="true">#</a> 1、安装v2ray</h4><p>Https://github.com/v2fly/v2ray-core/releases</p><h4 id="_2、解压和配置v2ray" tabindex="-1"><a class="header-anchor" href="#_2、解压和配置v2ray" aria-hidden="true">#</a> 2、解压和配置v2ray</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>unzip v2ray-linux.zip -d ./

mv将文件geoip.dat   geosite.dat   v2ctl   v2ray 移动到 /usr/local/bin/

配置文件config.json 用mv移动到/usr/local/etc/v2ray/  (自行创建文件夹v2ray)

将文件v2ray.service 用mv移动到/etc/systemd/system/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、启用加载v2ray" tabindex="-1"><a class="header-anchor" href="#_3、启用加载v2ray" aria-hidden="true">#</a> 3、启用加载v2ray</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl enable v2ray
systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、命令" tabindex="-1"><a class="header-anchor" href="#_4、命令" aria-hidden="true">#</a> 4、命令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl start v2ray
systemctl restart v2ray
systemctl stop v2ray
systemctl status v2ray
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),d=[n];function t(l,c){return a(),s("div",null,d)}const u=e(r,[["render",t],["__file","配置v2ray.html.vue"]]);export{u as default};
