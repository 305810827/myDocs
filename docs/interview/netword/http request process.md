#### http的三次握手

1、客户端第一次发起握手，请求建立tcp连接。

2、服务端接收到请求，知道客户端发送正常，为了让客户端知道服务端发送和接收信息正常，发起第二次握手，告诉客户端接收到了请求，并答应建立tcp连接

3、客户端接收到了服务端的确认建立tcp连接报文，知道了服务端接收和发送信息正常，但此时服务端不知道客户端是否接收信息正常，为了让服务端确认客户端接收信息正常，发送第三次握手，告诉服务端，客服端接收到了服务端发起的确认建立tcp连接的报文。最终建立tcp连接

如果只有两次握手，客户端第一次握手，发送报文时，延迟超时触发了客户端重发机制，使报文失效并重发一条新的报文，客户端只想建立一条tcp连接，而服务端接收到了延迟超时失效的报文和正常报文，无法区分，直接会建立两条tcp连接。如果有第三次握手，客户端接收到了服务端回应的确认建立tcp连接报文,能知道哪个是回复失效的报文，从而只建立有效的tcp连接。

#### 四次挥手

1、客户端第一次挥手，告诉服务端数据发完了，请求断开连接

2、服务端接收到了客服端数据发完了的通知，为了让客户端知道服务端收到了信息，发起第二次挥手

3、此时服务端不一定数据发完了，所以等到服务端数据也发送完了，才会发起第三次请求告诉客服端数据发完了，请求断开连接。

4、客服端接收到了服务端请求断开连接，为了让服务端知道客户端接收到了信息，发起第四次挥手。

https://baijiahao.baidu.com/s?id=1674791753672583610&wfr=spider&for=pc