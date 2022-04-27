### css盒子模型

**标准盒子模型**，W3C规定的盒子模型，css中定义的宽高 = 盒子实际内容（content）的宽高，盒子的总宽高 = css定义的宽高width + padding + border + margin

**IE盒子模型也叫怪异盒模型**，css定义的宽高width属性不是内容的宽度，而是内容、内边距和边框的宽度的总和。盒子的总宽高 = width/heigth + margin = 内容区宽度/高度 + padding + border + margin。

**CSS如何设置标准模型和IE模型**

如果doctype协议缺失，会由浏览器自己界定，在IE浏览器中IE9以下（IE6.IE7.IE8）的版本触发怪异模式，其他浏览器中会默认为W3c标准模式。

box-sizing: content-box 标准盒模型

box-sizing: border-box IE盒模型