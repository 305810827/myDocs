## 1 现象

  当div / a……中包含img时，父元素的高度比`img`图片的高度多出3px

```xml
<div>
    <img src=" ">
<div>
```

  结果运行之后发现，不管是在移动端还是pc端，都会出现这种问题。刚开始以为是父元素初始化了`margin`和`padding`的原因，排查css无果，又怀疑是html空格的原因，把html改成

```xml
<div><img src=" "/></div>
```

仍不行，排除html空格的问题

## 2 原因

  通过google了解到原因，`img`是一种类似`text`的标签元素，在结束的时候，会在末尾加上一个空白符（匿名文本），这个文本外有一个匿名行级盒子，它默认的`vertical-align`是`baseline`的，而且往往因为上文`line-height`的影响，使它有个`line-height`，从而使其有了高度，因为`baseline`对齐的原因，这个匿名盒子就会下沉，往下撑开一些距离，所以把`a`撑高了

## 3 解决方案

（1）消除掉匿名盒子的高度，给a设置`line-height:0`或`font-size:0` 
（2）给两者`vertical-align:top`，让其top对齐，而不是`baseline`对齐 
（3）【推荐】：给img以`display:block`，让它和匿名行级盒子不在一个布局上下文中，也就不存在行级盒的对齐问题