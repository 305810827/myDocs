# 跨域请求如何携带cookie

1、客户端请求时的request对象设置属性withCredentials为true

2、服务端在response的header中配置“access-control-allow-origin”为*或者是对方域名

3、服务端在response的header中配置Access-Control-Allow-Credentials为true

https://juejin.cn/post/7066420545327218725