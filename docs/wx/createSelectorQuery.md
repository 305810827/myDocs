## 在子组件中使用 `wx.createSelectorQuery()` 但获取不到元素信息



在微信小程序中，如果你在子组件中使用 `wx.createSelectorQuery()` 但获取不到元素信息，可能是由于组件的作用域问题。微信小程序中的自定义组件有自己的独立作用域，因此需要在子组件中使用 `this.createSelectorQuery()` 来代替 `wx.createSelectorQuery()`。

### 解决方案

### 1. **在自定义组件中使用 `this.createSelectorQuery()`**

在自定义组件中，不能直接使用 `wx.createSelectorQuery()`，因为它的选择器作用域是整个页面，而子组件的作用域是局部的。因此需要使用 `this.createSelectorQuery()` 来获取该组件内的节点信息。

#### 示例：

假设你有一个自定义组件，想要获取某个 `view` 的高度：

#### 1. **子组件的 `wxml` 文件**：

```
html复制代码<!-- components/my-component/my-component.wxml -->
<view class="container">
  <view id="myView" style="height: 200px;">我是一个子组件中的 view</view>
</view>
```

#### 2. **子组件的 `js` 文件**：

```
javascript复制代码// components/my-component/my-component.js
Component({
  methods: {
    // 获取 view 的布局信息
    getMyViewInfo() {
      const query = this.createSelectorQuery(); // 使用 this.createSelectorQuery
      query.select('#myView').boundingClientRect((rect) => {
        if (rect) {
          console.log('View 的布局信息:', rect);
        } else {
          console.error('未能获取 View 的布局信息');
        }
      }).exec();
    }
  }
});
```

#### 3. **页面 `js` 文件，调用子组件方法**：

```
javascript复制代码// pages/index/index.js
Page({
  onReady() {
    // 获取子组件实例
    const myComponent = this.selectComponent('#myComponent');
    // 调用子组件的方法获取布局信息
    if (myComponent) {
      myComponent.getMyViewInfo();
    }
  }
});
```

#### 4. **页面 `wxml` 文件，包含子组件**：

```
html复制代码<!-- pages/index/index.wxml -->
<my-component id="myComponent"></my-component>
```

### 2. **确保在 `ready` 或者方法调用之后使用 `createSelectorQuery()`**

和页面一样，组件中的 DOM 节点信息也只能在渲染完成之后获取，因此你需要确保在组件的 `ready` 生命周期中获取节点信息，或者在方法调用后获取。

#### 示例：

```
javascript复制代码Component({
  lifetimes: {
    ready() {
      // 在 ready 生命周期中获取节点信息
      this.getMyViewInfo();
    }
  },
  
  methods: {
    getMyViewInfo() {
      const query = this.createSelectorQuery();
      query.select('#myView').boundingClientRect((rect) => {
        console.log('View 的布局信息:', rect);
      }).exec();
    }
  }
});
```

### 3. **父组件调用子组件方法后再获取**

如果你希望在父组件（或页面）中调用子组件的方法来获取布局信息，确保父组件在调用时子组件已经渲染完毕。

#### 示例：

```
javascript复制代码Page({
  onReady() {
    // 在页面渲染完成后调用子组件的方法
    const myComponent = this.selectComponent('#myComponent');
    if (myComponent) {
      myComponent.getMyViewInfo();
    }
  }
});
```

### 4. **`wx:if` 的问题**

如果子组件的某些部分是通过 `wx:if` 条件渲染的，确保 `wx:if` 条件满足并且元素已经渲染到页面上之后再获取节点信息。

#### 示例：

```
html复制代码<!-- components/my-component/my-component.wxml -->
<view wx:if="{{isVisible}}" id="myView" style="height: 200px;">我是子组件中的 view</view>
```

#### 在 `js` 中：

```
javascript复制代码Component({
  methods: {
    getMyViewInfo() {
      if (this.data.isVisible) {  // 确保元素已渲染
        const query = this.createSelectorQuery();
        query.select('#myView').boundingClientRect((rect) => {
          console.log('View 的布局信息:', rect);
        }).exec();
      }
    }
  }
});
```

### 总结

- **子组件中使用 `this.createSelectorQuery()`，而不是 `wx.createSelectorQuery()`**。
- **确保在 `ready` 生命周期中获取布局信息**，或者在调用方法时确保组件已经渲染完毕。
- **父组件调用子组件方法时**，需要等子组件渲染完成（如在 `onReady` 生命周期中调用）。
- **确保没有 `wx:if` 或 `hidden` 条件影响元素的渲染**，否则布局信息可能获取不到。
