### 一、什么是hooks

直译“钩子”，在程序中代表，系统运行在某一时期时，会调用注册在该时机的回调函数。例如浏览器提供的onload或addEventListener能注册在浏览器各种时机调用的方法。

### 二、react中的hooks

一系列以“use”作为开发的方法，提供在**函数式组件**中完成生命周期、状态管理、逻辑复用等几乎全部组件开发工作的能力

```javascript
import { useState, useEffect, useCallback } from 'react';
// 比如以上这几个方法，就是最为典型的 Hooks
```

### 三、vue中的hooks

在vue**组合式API**里，以”use“作为开头的，一系列提供了组件复用、状态管理等开发能力的方法。

```javascript
import { useSlots, useAttrs } from 'vue';
import { useRouter } from 'vue-router';
// 以上这些方法，也是 vue3 中相关的 Hook！
```

### 四、为什么需要hooks

##### 1、更好的状态复用

（1）mixins

**弊端一：难以追溯的方法与属性**

```javascript
export default {
  mixins: [ a, b, c, d, e, f, g ], // 当然，这只是表示它混入了很多能力
  mounted() {
    console.log(this.name)
    // mmp!这个 this.name 来自于谁？我难道要一个个混入看实现？
  }
}
```

**弊端二：覆盖、同名**

**弊端三：梅开二度，动态变量难以实现**

```javascript
// 动态生成mixin
function genNameMixin(key, funcKey) {
  return {
    data() {
      return {
        [key]: genRandomName()
      }
    },
    methods: {
      [funcKey]: function(v) {
        this.[key] = v
      } 
    }
  }
}

export default {
  mixins: [
    genNameMixin('firstName', 'setFirstName'),
    genNameMixin('lastName', 'setLastName'),
  ]
}
```

（2）hook的状态复用写法，解决了上述的问题

```javascript
// 单个name的写法
const { name, setName } = useName();

// 梅开二度的写法
const { name : firstName, setName : setFirstName } = useName();

const { name : secondName, setName : setSecondName } = useName();
```

##### 2、高度聚合，可阅读性提升

##### 3、比class组件更容易理解

在 `react` 的 `class` 写法中，随处可见各种各样的 `.bind(this)`。（甚至官方文档里也有专门的章节描述了“为什么绑定是必要的？”这一问题）

`vue` 玩家别笑，`computed: { a: () => { this } }` 里的 `this` 也是 `undefined`。

很显然，绑定虽然“必要”，但并不是“优点”，反而是“故障高发”地段。

但在`Hooks` 写法中，你就完全不必担心 `this` 的问题了。

##### 4、友好的渐进式

无论是 `vue` 还是 `react`，都只是提供了 `Hooks` API，并将它们的优劣利弊摆在了那里。并没有通过无法接受的 `break change` 来强迫你必须使用 `Hooks` 去改写之前的 `class` 组件。

你依然可以在项目里一边写 `class` 组件，一边写 `Hooks` 组件。

### 五、react 的 `Hooks` 写法

```javascript
// my-component.js
import { useState, useEffect } from 'React'

export default () => {
  // 通过 useState 可以创建一个 状态属性 和一个赋值方法
  const [ name, setName ] = useState('')

  // 通过 useEffect 可以对副作用进行处理
  useEffect(() => {
    console.log(name)
  }, [ name ])

  // 通过 useMemo 能生成一个依赖 name 的变量 message
  const message = useMemo(() => {
    return `hello, my name is ${name}`
  }, [name])

  return <div>{ message }</div>
}

```

### 六、vue 的 `Hooks` 写法

```javascript
<template>
  <div>
    {{ message }}
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
// 定义了一个 ref 对象
const name = ref('')
// 定义了一个依赖 name.value 的计算属性
const message = computed(() => {
  return `hello, my name is ${name.value}`
})
</script>
```

### 七、 `vue` 和 `react` 自定义 `Hook` 的异同

- 相似点： 总体思路是一致的 都遵照着 "定义状态数据"，"操作状态数据"，"隐藏细节" 作为核心思路。
- 差异点： `组合式API` 和 `React函数组件` 有着本质差异
  `vue3` 的组件里， `setup` 是作为一个早于 “created” 的生命周期存在的，无论如何，在一个组件的渲染过程中只会进入一次。
  `React函数组件` 则完全不同，如果没有被 `memorized`，它们可能会被不停地触发，不停地进入并执行方法，因此需要开销的心智相比于`vue`其实是更多的。