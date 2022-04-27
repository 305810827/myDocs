## Cookie

##### name和value

Name和Value是一个键值对。Name是Cookie的名称，Cookie一旦创建，名称便不可更改，一般名称不区分大小写；Value是该名称对应的Cookie的值，如果值为Unicode字符，需要为字符编码。如果值为二进制数据，则需要使用BASE64编码。

```
document.cookie = 'name=xxx;';
```

##### domain

Domain决定Cookie在哪个域是有效的，也就是决定在向该域发送请求时是否携带此Cookie，Domain的设置是对子域生效的，如Doamin设置为 .a.com,则b.a.com和c.a.com均可使用该Cookie，但如果设置为b.a.com,则c.a.com不可使用该Cookie。

##### path

Path是Cookie的有效路径，和Domain类似，也对子路径生效，如Cookie1和Cookie2的Domain均为a.com，但Path不同，Cookie1的Path为 /b/,而Cookie的Path为 /b/c/,则在a.com/b页面时只可以访问Cookie1，在a.com/b/c页面时，可访问Cookie1和Cookie2。Path属性需要使用符号“/”结尾。

##### Expires/Max-age

Expires和Max-age均为Cookie的有效期，Expires是该Cookie被删除时的时间戳，格式为GMT,若设置为以前的时间，则该Cookie立刻被删除，并且该时间戳是服务器时间，不是本地时间！若不设置则默认页面关闭时删除该Cookie。 Max-age也是Cookie的有效期，但它的单位为秒，即多少秒之后失效，若Max-age设置为0，则立刻失效，设置为负数，则在页面关闭时失效。Max-age默认为 -1。

##### size

Szie是此Cookie的大小。在所有浏览器中，任何cookie大小超过限制都被忽略，且永远不会被设置。各个浏览器对Cookie的最大值和最大数目有不同的限制

##### HttpOnly

HttpOnly值为 true 或 false,若设置为true，则不允许通过脚本document.cookie去更改这个值，同样这个值在document.cookie中也不可见，但在发送请求时依旧会携带此Cookie

##### secure

Secure为Cookie的安全属性，若设置为true，则浏览器只会在HTTPS和SSL等安全协议中传输此Cookie，不会在不安全的HTTP协议中传输此Cookie。

##### sameSite

SameSite 可以设置为以下几个值

- none (旧 chrome 版本（80以下）默认规则)

浏览器会在同站请求、跨站请求下继续发送 cookies，不区分大小写。网站可以选择显式关闭SameSite属性，将其设为None。不过，前提是必须同时设置Secure属性（Cookie 只能通过 HTTPS 协议发送），否则无效。

- Strict

浏览器将只在访问相同站点时发送 cookie。

- Lax （新 chrome 版本默认规则）

规则稍稍放宽，大多数情况也是不发送第三方 cookie，但是导航到目标网址的 get 请求除外。

导航到目标网址的 get 请求，只包括三种情况：链接，预加载请求，get 表单。详见下表。

| 请求类型  | 示例                                 | 正常情况            | Lax         |
| --------- | ------------------------------------ | ------------------- | ----------- |
| 链接      | `<a href="..."></a>`                 | 发送 Cookie         | 发送 Cookie |
| 预加载    | `<link rel="prerender" href="..."/`> | 发送 Cookie	发送 | Cookie      |
| GET 表单  | `<form method="GET" action="...">`   | 发送 Cookie	发送 | Cookie      |
| POST 表单 | `<form method="POST" action="...">`  | 发送 Cookie         | 不发送      |
| iframe    | `<iframe src="..."></iframe>`        | 发送 Cookie         | 不发送      |
| AJAX      | `$.get("...")`                       | 发送 Cookie         | 不发送      |
| Image     | `<img src="...">`                    | 发送 Cookie         | 不发送      |

设置为 Lax 和 Strict 可以杜绝很多 csrf 攻击

##### Priority

优先级，chrome的提案，定义了三种优先级，Low/Medium/High，当cookie数量超出时，低优先级的cookie会被优先清除。



### Cookie、localStorage、sessionStorage

##### 生命周期：

cookie：可设置失效时间，没有设置的话，默认是关闭浏览器后失效

localStorage：除非被手动清除，否则将会永久保存。

sessionStorage： 仅在当前网页会话下有效，关闭页面或浏览器后就会被清除。

##### 存放数据大小：

cookie：4KB左右

localStorage和sessionStorage：可以保存5MB的信息。

##### http请求：

cookie：每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题

localStorage和sessionStorage：仅在客户端（即浏览器）中保存，不参与和服务器的通信
