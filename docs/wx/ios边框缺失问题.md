IOS机型上会有边框缺失（然而经常出现缺不能稳定复现）， 而Android机型上边框比较粗

##### 原因:

上面这两种表现形式很难联系到一起

首先先看IOS边框缺失的问题，借鉴网络上前辈们的经验

当父元素的高度为奇数，容易出现上下边框缺失，同理宽度为奇数，容易出现左右边框缺失
解决办法是在边框内部添加一个1rpx的元素或者伪元素， 撑开内部使父元素的宽高是偶数。

然而我们发现这种方案在Iphone 6等2倍屏可以生效， 但放在如Iphone X等3倍屏下面就很飘了， 还是经常会出现边框缺失的情况， 这种情况下再去把父元素改为2和3共同的倍数就非常不现实了。

再回过头看导致边框缺失的具体原因是啥。

在这之前需要了解下高分屏的物理像素和虚拟像素的概念

简单来说物理像素是设备的实际像素

虚拟像素是设备的坐标点， 可以简单理解为css像素

而rpx类似rem，渲染后实际转换成px之后可能存在小数，在不同的设备上多多少少会存在渲染的问题。而1rpx的问题就更加明显，因为不足1个物理像素的话，在IOS会进行四舍五入，而安卓好像统一向上取整，这也是上面两种设备表现不同的原因。

##### 解决方法

我们采用的方法是采用translate:scale(0.5)的方法对边框进行缩放

具体的代码如下

```css
.border1rpx, .border1rpx_before{
  position: relative;
  border-width: 0rpx !important;
  padding: 0.5rpx;
  z-index: 0;
}
.border1rpx::after, .border1rpx_before::before{
  content: "";
  border-style: inherit;
  border-color: inherit;
  border-radius: inherit;
  box-sizing: border-box !important;
  position: absolute;
  border-width: 2rpx !important;
  left: 0;
  top: 0;
  width: 200% !important;
  height: 200% !important;
  transform-origin: 0 0;
  transform: scale(0.5) !important;
  z-index: -1;
}
.border1rpx-full { margin: -1rpx; }
```

给.border1rpx的元素设置边框宽度为0
给::after伪元素宽高为两倍，边框设置2rpx，
边框其他样式继承元素的设置
然后再缩放0.5来达到边框为1rpx的效果

##### 用法

基础用法
给相应的元素添加border1rpx的class即可，

（.borde1rpx说：我们不生产边框，只是边框的搬运工，要显示边框样式的话还需要在元素上自行设置）

圆角边框
圆角边框需要自行设置相应伪元素::before 或 ::after的border-raduis值为预期的2倍， 如原本想要设置10rpx的圆角，需要设置.xxx::after{border-raduis: 20rpx;}

边框内部填充
由于设计原因，目标元素会留1rpx的padding用于显示伪元素的边框，如果内部元素是填充的，正常会看到填充元素和目标元素有小部分间隙，此时需要给填充元素添加.border1rpx_full来解决

##### 注意点

此方案默认使用::after伪元素实现边框，如果目标元素的after被占用(如iconfont)，请使用.border1rpx_before
如单独设置边框(如上边框), border: 1rpx solid red;border-width: 1rpx 0 0 0;不能被正确继承，请使用简写border-top: 1rpx solid red;
由于设计原因，目标元素请最少设置1rpx的padding用于显示边框,(上面的样式已经有了默认的padding，不写也可以， 只是不要用padding:0覆盖)
请自行测试点击功能是否正常，防止层级关系导致元素区域被伪元素覆盖
