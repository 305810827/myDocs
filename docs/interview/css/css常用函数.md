CSS（层叠样式表）提供了许多内置函数来帮助开发者设计和控制网页布局和样式。以下是一些常用的CSS函数：

1. **calc()**
    - 动态计算值的函数。它可以用于几乎任何数值属性上，允许混合使用不同的单位。
   ```css
   width: calc(100% - 50px);
   ```

2. **var()**
    - 用于引用自定义属性（CSS变量）的值。
   ```css
   :root {
     --main-color: #06c;
   }
   div {
     color: var(--main-color);
   }
   ```

3. **rgb() / rgba()**
    - 用于定义红、绿、蓝三个颜色通道的值，rgba()还包括了透明度(alpha)。
   ```css
   color: rgb(255, 0, 0); /* 纯红色 */
   background-color: rgba(255, 0, 0, 0.5); /* 半透明红色 */
   ```

4. **hsl() / hsla()**
    - 与rgb/rgba类似，但是使用色相（H）、饱和度（S）和亮度（L）来定义颜色，hsla()添加了透明度(alpha)。
   ```css
   color: hsl(120, 100%, 50%); /* 纯绿色 */
   background-color: hsla(120, 100%, 50%, 0.3); /* 半透明绿色 */
   ```

5. **url()**
    - 用于链接外部资源，如图片。
   ```css
   background-image: url(images/bg.jpg);
   ```

6. **attr()**
    - 用于获取HTML元素上的属性值，并将其用作样式的值。
   ```css
   width: attr(data-width px);
   ```

7. **min() / max()**
    - `min()`和`max()`函数用于在几个值之间选择最小值或最大值。
   ```css
   width: min(100vw, 500px);
   ```

8. **clamp()**
    - 用于根据给定的范围约束一个值，它接受三个参数：最小值、理想值和最大值。
   ```css
   font-size: clamp(1rem, 2vw, 2rem);
   ```

9. **fit-content()**
    - 用于将元素的尺寸设置为内容的自然大小，但不超过最大可用空间。
   ```css
   width: fit-content(50%);
   ```

10. **repeat()**
    - 在定义网格布局时，用于简化重复的行或列大小定义。
    ```css
    grid-template-columns: repeat(3, 1fr);
    ```

11. **constant() / env()**
 ```css
   padding-top: constant(safe-area-inset-top); /* iOS 11.0 */
   padding-top: env(safe-area-inset-top); /* iOS 11.2以及之后的版本 */
 ```

constant()最初在Apple推出的iOS 11中引入，用于解决与刘海屏幕（notch）和其他设备特定的显示特性相关的布局问题。但随后，CSS工作小组选择了一个更通用的env()函数来替代constant()。因此，constant()在后续的浏览器实现中已不再使用。

在写兼容性代码时，有时候开发者会同时使用constant()和env()来确保在不同版本的iOS上都能正确处理安全区域：

实际上，这样的做法是为了向后兼容，在旧版本的iOS设备上也能正确地使用安全区域。但是现今的前端开发中通常只需要使用env()就足够了。
