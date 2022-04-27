# 2021  CSS实用新功能

## 自定义属性与变量

译者注：这里的自定义属性（Custom Properties）和我们所说的变量是一个东西，见 [MDN Web Doc](https://developer.mozilla.org/zh-CN/docs/Web/CSS/--*)

自定义属性基本上允许我们定义 CSS 属性的替代品以用于我们的设计。一个例子就能让你理解为什么说这个功能有用：

通常，在构建主题时，我们会选择一种[**配色方案**](https://websitesetup.org/website-color-schemes/)，然后在必要时声明这些颜色。

```css
a {
    color: #cd2653;
}

.social-icons a {
    background: #cd2653;
}

.wp-block-button.is-style-outline {
    color: #cd2653;
}

```

这种方法的问题是，如果我们想要更改一种颜色，则必须在每一处使用了这个颜色的地方做出对应的修改。尽管[**代码编辑器**](https://torquemag.io/2015/12/17-best-code-editors-wordpress-developers-users/)可以通过搜索和替换轻松地做到这一点，但这仍然很烦人。尤其是如果我们只是想进行快速测试，并且必须再次撤消所有操作。

### 更好的解决方案

自定义属性就解决了这个问题。在它们的帮助下，我们可以轻松地将刚才所说的配色分配给一个变量，然后每次使用该颜色时，只需将其作为 CSS 属性输入即可，如下所示：

```css
:root {
    --global--color-primary: #28303d;
}

a {
    color: var(--global--color-primary);
}

.social-icons a {
    background: var(--global--color-primary);
}

```

这样，每当我们想要对配色进行更改时，只需要在一个地方进行更改即可。太酷了吧？过去，我们还需要使用 [Sass](https://torquemag.io/2017/06/start-using-sass-wordpress-npm-scripts/) 之类的预处理器来使用变量，而现在它是 CSS 的原生功能。

正如您在上面看到的，自定义属性也非常易于使用。在 `:root` 选择器下的文档开始处定义变量（请注意，变量前面应使用双连字符 `--`，这是将变量称为自定义属性的原因，它们也区分大小写！）。之后我们就可以通过 `var()` 函数在整个文档中使用它们。

如果要更改变量，只需更改 `:root` 下面的声明就可以了。

## @supports

接下来，有一个类似于媒体查询的 CSS 规则。不过我们不是用它基于屏幕大小或设备类型编写特定的样式，而是根据用户浏览器支持的 CSS 属性和值，应用特定的样式。

这有什么用？

正如你将在本文中看到的那样，并非所有的浏览器和设备都支持所有 CSS 功能。尽管我们通常可以使用优雅降级来处理此问题，但在某些情况下，如果我们不专门包括对最新的技术的支持，则使用这些技术可能会严重破坏我们的网站的样式结构。

此外，我们还可以使用 `@supports` 为支持特定功能的更现代的浏览器添加额外的功能或样式（这就是为什么使用的查询 `@supports` 也称为“功能查询”的原因）。

### 如何使用功能查询

如果您熟悉媒体查询，则使用支持检查将非常容易。使用方法如下：

```css
@supports (display: grid) {
    .site-content {
        display: grid;
    }
}

```

如你所见，其实不过就是规则的声明后跟要在方括号中检查的属性或属性 — 值对，再加上我们平时用的 CSS 声明用于说明满足条件时要应用哪些样式规则。

上面的示例指出，如果浏览器支持 CSS 网格功能（稍后将对此进行详细介绍），则应用 `display: grid;` 样式到 `.site-content` 的元素。

同样重要的是要注意 `@supports` 支持使用运算符 `not`、`and` 和 `or`（也可以结合使用）以创建更具体的规则，例如对不支持该特定功能的浏览器的优雅降级：

```css
@supports not (display: grid) {
    .site-content {
        float: left;
    }
}

```

为了能够正常使用 `@supports` 功能，你需要知道哪些浏览器支持它（我知道，这是一种元数据）。好消息是**[所有的现代浏览器都支持](https://caniuse.com/css-featurequeries)**。

## 内容可见性

`content-visibility` 是 CSS 中一个非常酷的新功能，能够有效[提高网站性能](https://torquemag.io/2015/08/ways-to-speed-up-wordpress-decrease-page-load-time/)。它基本上像[延迟加载](https://torquemag.io/2018/01/lazy-load-wordpress/)一样工作，而且不仅适用于图像，还适用于任何 HTML 元素。我们可以使用它来实现网站的懒加载。

使用也超级容易。只需将其应用于我们选择的元素，如下所示：

```css
.content-below-fold {
    content-visibility: auto;
}

```

`content-visibility` 支持三个值。默认情况下为 `visible`，此时元素将照常加载。我们可以将其设置为 `hidden`，即无论元素是否可见都不会呈现该元素。设置为 `auto` 时，则会跳过可见区域之外的元素，然后在它们出现在屏幕上时才开始进行渲染。

这可是很酷的东西，对不对？

在这种情况下可能也很重要的一件事是考虑一下 `contain-intrinsic-size`。由于设置为 `content-visibility: hidden;` 的元素的大小实际上为零，因此我们可以将理论高度和宽度应用于隐藏的元素，以便浏览器可以从一开始就将其考虑在内，而不是在渲染元素时考虑。这样，我们可以避免在滚动过程中布局被突然改变。

浏览器支持方面，[`content-visibility`](https://caniuse.com/css-content-visibility) 仍然有些差劲，不过正在朝着那个方向前进着，[`contain-intrinsic-size`](https://caniuse.com/mdn-css_properties_contain-intrinsic-size) 同理。

## 滚动捕捉

滚动捕捉让我们可以选择将用户的视口锁定到站点的某些部分或元素。对于创建很酷的过渡效果并在向下滚动页面帮助用户专注于最重要的页面元素的场景而言，这个功能非常有用。我们可以[在这里](https://codepen.io/tutsplus/pen/qpJYaK)找到一个简单的演示。

这种效果在移动设备的应用程序中很明显，但是，通过滚动捕捉，我们也可以将其带到网站上。

在最基本的情况上用法也相对简单。我们只需将滚动捕捉的类型应用于容器并定义其子对象应捕捉到的位置。

```css
.container {
    scroll-snap-type: y mandatory;
}

.container div {
    scroll-snap-align: start;
}

```

当然还有更多有关它的使用特色。如果你想了解它，CSS Tricks 已经有了一篇[**很完美的文章**](https://css-tricks.com/practical-css-scroll-snapping/)了。

## :is 和 :where

你可能不知道的新 CSS 功能列表中的最后一个条目是 `:is` 和 `:where` 伪类，它们允许我们通过缩短 CSS 选择器列表来减少 CSS 样式中的重复代码。

例如：

```css
.main a:hover,
.sidebar a:hover,
.site-footer a:hover {
    /* 样式 */
}

```

还有这个：

```css
:is(.main, .sidebar, .site-footer) a:hover {
    /* 样式 */
}

```

同理 `:where`:

```css
:where(.main, .sidebar, .site-footer) a:hover {
    /* 样式 */
}

```

如果包含的样式标记相同，那又会有什么区别？区别在于 `:is` 更加具体。它采用括号中最具体元素的针对性级别。与此相反，`:where` 的针对性始终为零。因此更容易按照案例进行覆盖。