## **WebAssembly SIMD**

Chrome 91默认开启了[WebAssembly SIMD](https://link.zhihu.com/?target=https%3A//www.chromestatus.com/feature/6533147810332672)。

[SIMD](https://link.zhihu.com/?target=https%3A//www.chromestatus.com/feature/6533147810332672)是**S**ingle **I**nstruction **M**ultiple **D**ata的缩写，中文术语为“单指令多数据流”，顾名思义，就是可以使用单条指令同时处理多个数据。

SIMD是一种特殊的CPU指令，它可以实现数据层面的并行处理。如下图，当我们需要对两个长度为4的数组做加法时，使用普通的指令，则需要执行4次普通加法指令；如果使用SIMD指令的话，则只需要执行1次向量加法即可：

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/11f4f84cfa104a2384e016f56c83f329~tplv-k3u1fbpfcp-zoom-1.image)

SIMD常用于视频、音频、图像、加密、动画、游戏、AI等需要处理大量数据的应用场景，可以极大地提高向量类型的数据处理性能。主流的CPU都有SIMD指令，比如x86的SSE、ARM的Neon。

WebAssembly SIMD为WebAssembly新增了一个变量类型v128及其一系列v128的运算符，这些运算符就是SIMD指令。另外，由名字可知v128类型的长度是固定的，为128比特。

SIMD的指令非常多，而且不同CPU的SIMD是不一样的，WebAssembly SIMD只选取了各个CPU都支持的部分最常用的SIMD指令。因此，可以将WebAssembly SIMD理解为各个CPU的SIMD指令的子集，同时将各个CPU的SIMD指令进行了一层抽象和统一。

### WebSockets over HTTP/2

Chrome 91支持基于HTTP/2的Websocket。

### Block HTTP port 10080

为了缓解NAT Slipstream 2.0攻击，Chrome 91又屏蔽了一个新的端口：10080。

自从去年11月底NAT Splipstream被发现以来，Chrome已经屏蔽了11个端口了，具体如下表：

Chrome版本

屏蔽端口

Chrome 91

10080

Chrome 90

554

Chrome 87

5060、5061、69、137、161、 1719、1720、1723、6566

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/579765754a074ddcadfa110876e92a86~tplv-k3u1fbpfcp-zoom-1.image)

### GravitySensor API

Chrome 91新增了[GravitySensor API](https://link.zhihu.com/?target=https%3A//www.chromestatus.com/feature/5384099747332096)，用于获取设备（比如手机）由于地球重力而产生的加速度。

GravitySensor API可以用于开发游戏，比如在赛车类游戏中，通过倾斜手机控制赛车的方向。事实上，GravitySensor API这个需求也正是是游戏引擎Unity的开发者反馈给Chrome团队的。



## File-System-access-api

#### 1、window.showDirectoryPicker() 得到文件夹句柄

`const rootDirHandle = await window.showDirectoryPicker();` 

![image-20210621003352705](/Users/xuyanjie/Library/Application Support/typora-user-images/image-20210621003352705.png)



##### （1）FileSystemDirectoryHandle.entries() 得到文件夹下一级目录的内容文件（夹）列表

有如下代码：

```
for await (const [key, value] of rootDirHandle.entries()) {
  console.log(value)
} 
```

![截屏2021-05-28 下午7.12.39.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/94657456d4804606b9bb492c31f895c9~tplv-k3u1fbpfcp-watermark.image)



##### （2）FileSystemDirectoryHandle.getDirectoryHandle(x, {}) 得到文件夹句柄 FileSystemDirectoryHandle

作用：在现有目录下获取或创建新的文件夹，并得到其文件夹句柄。

有以下代码：

```
const testDirHandle = await rootDirHandle.getDirectoryHandle("testDir", {
    create: true
});
```



##### （3）FileSystemDirectoryHandle.getFileHandle(x, {}) 得到文件句柄 FileSystemFileHandle

作用：在现有目录下获取或创建新的文件，并得到其文件句柄。

有如下代码：

```
// 获得一个文件句柄
let txtFileHandle = await rootDirHandle.getFileHandle("txt.txt", {
  create: true
});
```

![截屏2021-05-28 下午7.18.57.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/82dec36f5a7348a086a61921b134b041~tplv-k3u1fbpfcp-watermark.image)



##### （4）FileSystemFileHandle.createWritable() 得到一个可写文件流 FileSystemWritableFileStream

有以下代码：

```
// 获取 txt 文件句柄
const txtFileHandle = await rootDirHandle.getFileHandle("txt.txt");
// 创建一个 txt 文件的可写文件流
const txtFileWritable = await txtFileHandle.createWritable();
```



##### （5）FileSystemWritableFileStream.write(x) 写入文件内容

在获得了文件的可写文件流以后，便可以更改文件内容了。其实写入什么内容都可以，取决于你。这里以文本和图片为示例。

有如下代码：

```
// 这里是文本文件，可以使用换行符换行，ps: 不同操作系统换行符可能不同
await txtFileWritable.write("haha\nhaha");
// 在内容末尾再追加内容
await txtFileWritable.write("😄");
await txtFileWritable.close();
```

![截屏2021-05-28 下午7.21.18.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8cdba5bc789f4758899bae0bfb133341~tplv-k3u1fbpfcp-watermark.image)



##### （6）FileSystemFileHandle.getFile() 得到文件 File

有如下代码：

```
// 获取 txt 文件句柄
const txtFileHandle = await rootDirHandle.getFileHandle("txt.txt");
// 获取 txt 文件
const txtFile = await txtFileHandle.getFile();
console.log(await txtFile.text());
```

首先获得 github 文件夹下的 txt.txt 文件句柄，然后获取到 txt 的 File 类型对象。File 是啥不是本文重点，不做介绍。 ![截屏2021-05-28 下午7.19.27.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5f04072d1f5d4fbb8c17afbf3d0e613e~tplv-k3u1fbpfcp-watermark.image)



##### （7）FileSystemDirectoryHandle.removeEntry(x, {}) 删除文件（夹）

```
// recursive 为递归删除内部文件（夹）
await rootDirHandle.removeEntry(testDir, { recursive: true });
```

recursive: true 代表递归删除 testDir 目录下所有内容。比如只想删除空文件夹，有内容就跳过的情况。

那按 recursive: true 的情况执行代码。文件夹及以内文件（夹）全部被删除