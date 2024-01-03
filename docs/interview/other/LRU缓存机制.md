#### 概述

LRU是Least Recently Used的缩写，译为最近最少使用。它的理论基础为 “最近使用的数据会在未来一段时期内仍然被使用，已经很久没有使用的数据大概率在未来很长一段时间仍然不会被使用” 由于该思想非常契合业务场景 ，并且可以解决很多实际开发中的问题，所以我们经常通过LRU的思想来作缓存，一般也将其称为LRU缓存机制。

#### 原理

实现LRU时，我们需要关注它的读性能和写性能，理想的LRU应该可以在O(1)的时间内读取一条数据或更新一条数据，也就是说读写的时间复杂度都是O(1)。

此时很容易想到使用哈希表，根据数据的键访问数据可以达到O(1)的速度。但是更新缓存的速度却无法达到O(1)，因为需要确定哪一条数据的访问时间最早，这需要遍历所有缓存才能找到。

因此，我们需要一种既按访问时间排序，又能在常数时间内随机访问的数据结构。

这可以通过哈希表+双向链表实现：

- 哈希表保证通过key访问数据的时间为O(1).
- 双向链表则按照访问时间的顺序依次穿过每个数据。

之所以选择双向链表而不是单链表，是为了可以从中间任意结点修改链表结构，而不必从头结点开始遍历。



#### leetcode算法题

[146. LRU 缓存](https://leetcode.cn/problems/lru-cache/)

请你设计并实现一个满足 [LRU (最近最少使用) 缓存](https://baike.baidu.com/item/LRU) 约束的数据结构。

实现 `LRUCache` 类：

- `LRUCache(int capacity)` 以 **正整数** 作为容量 `capacity` 初始化 LRU 缓存
- `int get(int key)` 如果关键字 `key` 存在于缓存中，则返回关键字的值，否则返回 `-1` 。
- `void put(int key, int value)` 如果关键字 `key` 已经存在，则变更其数据值 `value` ；如果不存在，则向缓存中插入该组 `key-value` 。如果插入操作导致关键字数量超过 `capacity` ，则应该 **逐出** 最久未使用的关键字。

函数 `get` 和 `put` 必须以 `O(1)` 的平均时间复杂度运行。



**实现**

![img](https://pic.leetcode.cn/1696039105-PSyHej-146-3-c.png)

```javascript
class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.dummy = new Node()
        this.dummy.prev = this.dummy
        this.dummy.next = this.dummy
        this.keyToNode = new Map()
    }

    getNode(key) {
        if (!this.keyToNode.has(key)) {
            return null
        }
        const node = this.keyToNode.get(key)
        this.remove(node)
        this.pushFront(node)
        return node
    }

    remove(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
    }

    pushFront(node) {
        node.prev = this.dummy
        node.next = this.dummy.next

        node.prev.next = node
        node.next.prev = node
    }

    get(key) {
        const node = this.getNode(key);
        return node ? node.value : -1;
    }

    put(key, value) {
        let node = this.getNode(key)
        if (node) {
            node.value = value
            return
        }

        node = new Node(key, value)
        this.keyToNode.set(key, node)
        this.pushFront(node)

        if (this.keyToNode.size > this.capacity) {
            // 最后一个节点
            const backNode = this.dummy.prev;
            this.keyToNode.delete(backNode.key)
            this.remove(backNode);
        }

    }

    pushFront(node) {
        node.prev = this.dummy;
        node.next = this.dummy.next;
        node.prev.next = node;
        node.next.prev = node;
    }
}
```

