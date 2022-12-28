1、 HTML 文档的标准结构：

```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <!-- Metadata and such -->
  </head>

  <body>
    <!-- Where the content begins -->
  <body>

</html>
```



2、html为文档的根元素，是所有其他元素的最顶层。head构成body唯一直接落在里面的两个元素html

CSS 中有一个:root选择器, 与html标签选择器目标相同。

```css
:root {

}
html {

}
```

其中`:root`具有更高的特异性：(0, 0, 1, 0) vs (0, 0, 0, 1)。



3、通常认为`<html>`是文档的根元素。`<html>`在层次结构中取代`<body>`，因此它必须包含所有全局样式。

但事实并非如此。事实上，以下的内联属性[最初是在规范中指定](http://www.w3.org/TR/html-markup/body.html)的`<body>`：

- background
- bgcolor
- marginbottom
- marginleft
- marginright
- margintop
- text

虽然这些属性现在被认为已过时，但建议使用 CSS 代替它们对应的 CSS 

| **Inline Attribute** | **CSS Property**                                             |
| -------------------- | ------------------------------------------------------------ |
| background           | [background](https://css-tricks.com/almanac/properties/b/background/) |
| bgcolor              | [background](https://css-tricks.com/almanac/properties/b/background/) [background-color](https://css-tricks.com/almanac/properties/b/background-color/) |
| marginbottom         | [margin-bottom](https://css-tricks.com/almanac/properties/m/margin/) |
| marginleft           | [margin-left](https://css-tricks.com/almanac/properties/m/margin/) |
| marginright          | [margin-right](https://css-tricks.com/almanac/properties/m/margin/) |
| margintop            | [margin-top](https://css-tricks.com/almanac/properties/m/margin/) |
| text                 | [font](https://css-tricks.com/almanac/properties/f/font/)    |

鉴于这些 CSS 属性源自为 编写的内联属性，`<body>`它们也应该直接应用于`<body>`CSS 中，而不是将它们推入`<html>`元素中，这似乎是合适的。