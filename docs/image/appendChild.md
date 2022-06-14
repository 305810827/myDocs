1.appendChild() 方法可向节点的子节点列表的末尾添加新的子节点。

```javascript
var node=document.createElement("LI");
var textnode=document.createTextNode("Water");
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);
```

2.appendChild() 方法从一个元素向另一个元素移动元素。

```javascript
 const fragment = document.createDocumentFragment();
 let firstChild;
 while (firstChild = el.firstChild) {
 	fragment.appendChild(firstChild);
 }
 return fragment
```

