button标签和input标签之间会存在一个间距。原因是input是内联块状元素(inline-block)；
内联元素是当做字体来处理的，字体之间是存在间隔的，所以内联元素之间也会有间隔。
但是大多数网站搜索框都会消除它们中间的间距。具体的做法有2种：

一、font-size:0

![img.png](./img/img.png)

![img.png](./img/img1.png)

二、设置input为块元素，并且给一个左浮动

```css
.search-wrapper .search input{    
    display: block;    
    float: left; 
}
```

