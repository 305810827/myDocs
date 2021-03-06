# **能说一说双向绑定使用和原理吗？**

### 一、定义

vue中的双向绑定指的v-modal指令，它可以绑定一个响应时数据到视图，同时在视图数据修改时，该数据也会修改。



### 二、作用

v-modal其实就是一个语法糖，默认是:value和绑定一个input的事件，也会根据不同的表单元素编译成不同的属性和事件，主要免去了开发阶段大量的dom操作和事件处理的代码，提高开发效率。



### 三、使用场景

经常使用在表单项上，通过双向绑定方便的验证或者获取表单项上值的修改。还可以使用在自定义组件，表示某个值的输入和输出控制。



### 四、详细使用

可以直接v-modal将xxx变量绑定到表单元素上，对于checkbox，可以使用`true-value`和false-value指定特殊的值，对于radio可以使用value指定特殊的值；对于select可以通过options元素的value设置特殊的值；还可以结合.lazy,.number,.trim对v-mode的行为做进一步限定；v-modal在自定义组件上，v2中是通过在自组件的modal属性设置prop、event设置属性和事件，而在v3中v-modal类似v-bind.sync的作用，默认绑定modalValue属性和update:modalValue事件，也可以指定多个绑定，例如v-modal:foo和v-modal:bar。



### 五、源码分析

`v-model`是一个指令，它的神奇魔法实际上是vue的编译器完成的。编译器根据表单元素的不同会展开不同的DOM属性和事件对，比如text类型的input和textarea会展开为value和input事件；checkbox和radio类型的input会展开为checked和change事件；select用value作为属性，用change作为事件。