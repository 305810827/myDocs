### BFC概念

BFC（Block Formatting Context）块级格式化上下文，它是页面中的一块渲染区域，并有自己的一套渲染规则

1、内部css盒子会在垂直方向上一个接一个的放置

2、margin合并

3、BFC区域不会与其它的BFC区域重叠，比如设置了float的元素就属于BFC，float元素之间不会重叠

4、计算BFC高度时，浮动元素也算

5、BFC是页面上的一个隔离的独立容器，里面的元素样式不影响外部的元素样式，外部也不影响里面

### BFC触发

1、html根元素

2、浮动元素，float：left、right

3、overflow不为visible，为auto、scroll、hidden

4、display： inline-block、table、flex、grid

5、position：absolute、fixed