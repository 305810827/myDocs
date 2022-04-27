px、em、rem、vw、vh

### px

1px就是一个显示像素，绝对长度单位，设置之后不会在变。

### em

em作为font-size的单位时，代表的是父元素的字体大小，em作为其他属性单位时，代表自身字体的大小，自身字体在未设置时默认继承父元素的字体大小。最终会转为px。

### rem

rem作用于非根元素时，代表的时根元素的字体大小，如果作用于根元素字体大小时，相对于初始字体的大小(16px)

### vw

视口宽度的1/100

#### vh

视口高度的1/100

```html
<!DOCTYPE html>
<html>
    <head>
        <title>
            22
        </title>
    </head>
    <body>
        2222
        <div style="font-size: 30px;">aaaa
            <div style="font-size:2rem; width: 1em;">aaa</div>
        </div>
    </body>
</html>
```

