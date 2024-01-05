import{_ as a,o as e,c as n,a as h}from"./app-53705635.js";const i={},r=h('<h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><p>Nginx是一个高性能的HTTP和反向代理服务器，同时也是一个IMAP/POP3/SMTP 代理服务器。其特点是占有内存少，并发能力强，易于开发，部署方便。Nginx 支持多语言通用服务器。</p><h3 id="正向代理" tabindex="-1"><a class="header-anchor" href="#正向代理" aria-hidden="true">#</a> 正向代理</h3><p>正向代理，就是<code>代理服务器代理了客户端</code>，去和目标服务器进行交互，例如翻墙。</p><h3 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h3><p>反向代理，就是<code>代理服务器代理了目标服务器</code>，去和客户端进行交互。</p><h3 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h3><p>实际生产环境中，反向代理服务器代理的目标服务器可能不止一个。比如开发好的某个应用部署在一台 Tomcat 服务器上，而 Tomcat 的并发上限不优化情况下，默认只有两百左右，这时候为了解决高并发的问题，就只能选择更替服务器或者搭建多台服务器通过反向代理与负载均衡的技术解决并发问题。</p><p><strong>「负载均衡」</strong>（Load Balance）是由**「多台服务器以对称的方式组成一个服务器集群」<strong>，每台服务器都具有等价的地位，都可以单独对外提供服务而无须其他服务器的辅助。经过某种负载分管技术，将外部发送来的</strong>「中央请求均匀分配」<strong>到对称结构中的</strong>「某一台服务器」**上。</p><h3 id="负载均衡策略" tabindex="-1"><a class="header-anchor" href="#负载均衡策略" aria-hidden="true">#</a> 负载均衡策略</h3><h4 id="轮询" tabindex="-1"><a class="header-anchor" href="#轮询" aria-hidden="true">#</a> 轮询</h4><p>轮询去访问机器，把不正常的机器剔除，每个请求会按时间顺序被逐一分配到不同的后端服务器。</p><h4 id="least-conn最小连接" tabindex="-1"><a class="header-anchor" href="#least-conn最小连接" aria-hidden="true">#</a> least_conn最小连接</h4><p>把请求转发给连接数较少的后端服务器，轮询算法是把请求平均的转发给各个后端，使他们负载大致相同。而每个请求不同，请求的资源和时间都不同，还是会导致有些机器还是负载过大，这种情况，least_conn就是处理这种情况的调度策略。</p><h4 id="ip-hash" tabindex="-1"><a class="header-anchor" href="#ip-hash" aria-hidden="true">#</a> ip_hash</h4><p>按照客户端IP地址的分配方式，可以确保相同客户端的请求一直发送到相同的服务器。这样每个访客都固定访问一个后端服务器。</p><h3 id="nginx、apache两者比较" tabindex="-1"><a class="header-anchor" href="#nginx、apache两者比较" aria-hidden="true">#</a> Nginx、Apache两者比较</h3><p>1.Nginx 配置简洁, Apache 复杂 ;Nginx 静态处理性能比 Apache 高 3倍以上 ;</p><p>2.Apache 对 PHP 支持比较简单，Nginx 需要配合其他后端用；Apache 的组件比 Nginx 多 ;</p><p>3.apache是同步多进程模型，一个连接对应一个进程；Nginx是异步的，多个连接(万级别)可以对应一个进程；</p><p>4.Nginx处理静态文件好，耗费内存少；动态请求由apache去做，Nginx只适合静态和反向；</p><p>5.Nginx适合做前端服务器，负载性能很好；Nginx本身就是一个反向代理服务器 ，且支持负载均衡。</p>',22),d=[r];function c(t,s){return e(),n("div",null,d)}const p=a(i,[["render",c],["__file","nginx.html.vue"]]);export{p as default};
