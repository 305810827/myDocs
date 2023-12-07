**1、使用`label`元素：** 使用 `label` 元素可以扩大输入框的可点击区域，并且能够提供更好的可访问性

```
<label for="myInput">
  <input id="myInput" type="text" />
</label>
```

**2、通过`cover-view`或`cover-image`元素：** 使用 `cover-view` 或 `cover-image` 元素可以创建一个覆盖在 `input` 上方的视图，从而增加可点击区域。

```
<cover-view bindtap="handleClick">
  <input type="text" />
</cover-view>
```
**2、通过`focus`设置input聚焦状态：** 使用 `view` 元素可以创建一个覆盖在 `input` 上方的视图，从而增加可点击区域。

```
<view bindtap="handleFocus">
  <input type="text" focus={{focus}} />
</view>
```

