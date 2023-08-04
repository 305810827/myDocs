### 一、定义

diff算法是一个对比算法，对比新旧虚拟dom，找到是哪个虚拟dom更改了，并更新对应的真实dom，而不需要更新其他没有变化的节点，实现最小化的精准更新真实dom，进而提高效率。

**使用虚拟DOM算法的损耗计算**： 总损耗 = 虚拟DOM增删改+（与Diff算法效率有关）真实DOM差异增删改+（较少的节点）排版与重绘

**直接操作真实DOM的损耗计算**： 总损耗 = 真实DOM完全增删改+（可能较多的节点）排版与重绘



### 二、原理

1、同层对比，深度优先遍历

![截屏2021-08-08 上午11.32.47.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5ca3d338e5a445ab80e40042c50ac79a~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

2、当数据改变时，触发setter方法，通过dep.notify通知订阅者watcher更新视图，watcher在更新视图前通过patch方法，整个patch方法就是diff算法的实现。

![截屏2021-08-08 上午11.49.38.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1db54647698e4c76b6fc38a02067ad72~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

3、patch方法

（1）通过sameVnode方法判断当前同层虚拟节点是否同一种类型的标签：

- 是，patchVnode继续深层对比
- 否，直接用新节点替换旧节点

（2）sameVnode方法，同一标签的定义

```javascript
function sameVnode(oldVnode, newVnode) {
  return (
    oldVnode.key === newVnode.key && // key值是否一样
    oldVnode.tagName === newVnode.tagName && // 标签名是否一样
    oldVnode.isComment === newVnode.isComment && // 是否都为注释节点
    isDef(oldVnode.data) === isDef(newVnode.data) && // 是否都定义了data
    sameInputType(oldVnode, newVnode) // 当标签为input时，type必须是否相同
  )
}
```

（3）patchVnode方法

- 如果新旧虚拟节点对象一样，直接终止
- 如果子节点都是文本，却不一样，则更新真实节点的文本节点即可
- 如果`oldVnode`有子节点而`newVnode`没有，则删除`el`的子节点
- 如果`oldVnode`没有子节点而`newVnode`有，则将`newVnode`的子节点真实化之后添加到`el`
- 如果两者都有子节点，则执行`updateChildren`函数比较子节点，这一步很重要

```
function patchVnode(oldVnode, newVnode) {
  const el = newVnode.el = oldVnode.el // 获取真实DOM对象
  // 获取新旧虚拟节点的子节点数组
  const oldCh = oldVnode.children, newCh = newVnode.children
  // 如果新旧虚拟节点是同一个对象，则终止
  if (oldVnode === newVnode) return
  // 如果新旧虚拟节点是文本节点，且文本不一样
  if (oldVnode.text !== null && newVnode.text !== null && oldVnode.text !== newVnode.text) {
    // 则直接将真实DOM中文本更新为新虚拟节点的文本
    api.setTextContent(el, newVnode.text)
  } else {
    // 否则

    if (oldCh && newCh && oldCh !== newCh) {
      // 新旧虚拟节点都有子节点，且子节点不一样

      // 对比子节点，并更新
      updateChildren(el, oldCh, newCh)
    } else if (newCh) {
      // 新虚拟节点有子节点，旧虚拟节点没有

      // 创建新虚拟节点的子节点，并更新到真实DOM上去
      createEle(newVnode)
    } else if (oldCh) {
      // 旧虚拟节点有子节点，新虚拟节点没有

      //直接删除真实DOM里对应的子节点
      api.removeChild(el)
    }
  }
}
```

（4）updateChildren

通过首尾指针法来对比新旧虚拟节点的子节点，对比出相同节点不同位置可以进行移动，减少删除和增加dom的操作。

```javascript
<ul>
    <li>a</li>
    <li>b</li>
    <li>c</li>
</ul>
修改数据后
<ul>
    <li>b</li>
    <li>c</li>
    <li>e</li>
    <li>a</li>
</ul>
```

![截屏2021-08-08 下午2.55.26.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3eb33b1b28e7461f9aedb857736a142c~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

然后会进行互相进行比较，总共有五种比较情况：

- 1、`oldS 和 newS `使用`sameVnode方法`进行比较，`sameVnode(oldS, newS)`
- 2、`oldS 和 newE `使用`sameVnode方法`进行比较，`sameVnode(oldS, newE)`
- 3、`oldE 和 newS `使用`sameVnode方法`进行比较，`sameVnode(oldE, newS)`
- 4、`oldE 和 newE `使用`sameVnode方法`进行比较，`sameVnode(oldE, newE)`
- 5、如果以上逻辑都匹配不到，再把所有旧子节点的 `key` 做一个映射到旧节点下标的 `key -> index` 表，然后用新 `vnode` 的 `key` 去找出在旧节点中可以复用的位置。

![截屏2021-08-08 下午2.57.22.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/727b5dd8a3424d22afd9dc5cf0dae05e~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

（5）案例

![截屏2021-08-08 下午3.03.31.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1efbc4e76c234dccb44cef0a75073d98~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

- 第一步

```js
oldS = a, oldE = c
newS = b, newE = a
```

比较结果：`oldS 和 newE` 相等，需要把`节点a`移动到`newE`所对应的位置，也就是末尾，同时`oldS++`，`newE--`

![截屏2021-08-08 下午3.26.25.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d7698f560bb44107911585580c241a99~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

- 第二步

```js
oldS = b, oldE = c
newS = b, newE = e
```

比较结果：`oldS 和 newS`相等，需要把`节点b`移动到`newS`所对应的位置，同时`oldS++`,`newS++`

![截屏2021-08-08 下午3.27.13.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1cda8545d6634bcdbf2d007193922092~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

- 第三步

```js
oldS = c, oldE = c
newS = c, newE = e
复制代码
```

比较结果：`oldS、oldE 和 newS`相等，需要把`节点c`移动到`newS`所对应的位置，同时`oldS++`,`newS++`

![截屏2021-08-08 下午3.31.48.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fdbca1cefdec4ba08637c37a70f26af6~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

- 第四步

`oldS > oldE`，则`oldCh`先遍历完成了，而`newCh`还没遍历完，说明`newCh比oldCh多`，所以需要将多出来的节点，插入到真实DOM上对应的位置上

![截屏2021-08-08 下午3.37.51.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ec374b664e94888b00721829738ea7a~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

```javascript
function updateChildren(parentElm, oldCh, newCh) {
  let oldStartIdx = 0, newStartIdx = 0
  let oldEndIdx = oldCh.length - 1
  let oldStartVnode = oldCh[0]
  let oldEndVnode = oldCh[oldEndIdx]
  let newEndIdx = newCh.length - 1
  let newStartVnode = newCh[0]
  let newEndVnode = newCh[newEndIdx]
  let oldKeyToIdx
  let idxInOld
  let elmToMove
  let before
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx]
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx]
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx]
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldStartVnode, newStartVnode)) {
      patchVnode(oldStartVnode, newStartVnode)
      oldStartVnode = oldCh[++oldStartIdx]
      newStartVnode = newCh[++newStartIdx]
    } else if (sameVnode(oldEndVnode, newEndVnode)) {
      patchVnode(oldEndVnode, newEndVnode)
      oldEndVnode = oldCh[--oldEndIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldStartVnode, newEndVnode)) {
      patchVnode(oldStartVnode, newEndVnode)
      api.insertBefore(parentElm, oldStartVnode.el, api.nextSibling(oldEndVnode.el))
      oldStartVnode = oldCh[++oldStartIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldEndVnode, newStartVnode)) {
      patchVnode(oldEndVnode, newStartVnode)
      api.insertBefore(parentElm, oldEndVnode.el, oldStartVnode.el)
      oldEndVnode = oldCh[--oldEndIdx]
      newStartVnode = newCh[++newStartIdx]
    } else {
      // 使用key时的比较
      if (oldKeyToIdx === undefined) {
        oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx) // 有key生成index表
      }
      idxInOld = oldKeyToIdx[newStartVnode.key]
      if (!idxInOld) {
        api.insertBefore(parentElm, createEle(newStartVnode).el, oldStartVnode.el)
        newStartVnode = newCh[++newStartIdx]
      }
      else {
        elmToMove = oldCh[idxInOld]
        if (elmToMove.sel !== newStartVnode.sel) {
          api.insertBefore(parentElm, createEle(newStartVnode).el, oldStartVnode.el)
        } else {
          patchVnode(elmToMove, newStartVnode)
          oldCh[idxInOld] = null
          api.insertBefore(parentElm, elmToMove.el, oldStartVnode.el)
        }
        newStartVnode = newCh[++newStartIdx]
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].el
    addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx)
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
  }
}
```

（6）index作为key

```javascript
<ul>                      <ul>
    <li key="0">a</li>        <li key="0">林三心</li>
    <li key="1">b</li>        <li key="1">a</li>
    <li key="2">c</li>        <li key="2">b</li>
                              <li key="3">c</li>
</ul>                     </ul>
```

从上面代码并结合patch判断统一类型的节点逻辑可以看出，key相同的会被判断为同一个节点，然而实际上原本的三个标签key都变了。diff算法会把key相同的li认为是同一类型的节点，进而执行patchVnode方法，判断子文本节点并且不一样，直接更新了文本节点，结果没有复用到节点。

![截屏2021-08-08 下午5.45.17.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ecc93fb2bc544a83b8cc7b7cbcaf1857~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

https://juejin.cn/post/6994959998283907102