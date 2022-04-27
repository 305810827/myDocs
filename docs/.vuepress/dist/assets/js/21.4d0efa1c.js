(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{444:function(a,e,v){"use strict";v.r(e);var r=v(62),t=Object(r.a)({},(function(){var a=this,e=a.$createElement,v=a._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"array-对象"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#array-对象"}},[a._v("#")]),a._v(" Array 对象")]),a._v(" "),v("p",[v("code",[a._v("Array")]),a._v("是 JavaScript 的原生对象，同时也是一个构造函数，可以用它生成新的数组。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var arr = new Array(2);\narr.length // 2\narr // [ empty x 2 ]\n")])])]),v("p",[a._v("上面代码中，"),v("code",[a._v("Array()")]),a._v("构造函数的参数"),v("code",[a._v("2")]),a._v("，表示生成一个两个成员的数组，每个位置都是空值。")]),a._v(" "),v("p",[a._v("如果没有使用"),v("code",[a._v("new")]),a._v("关键字，运行结果也是一样的。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var arr = Array(2);\n// 等同于\nvar arr = new Array(2);\n")])])]),v("p",[a._v("考虑到语义性，以及与其他构造函数用法保持一致，建议总是加上"),v("code",[a._v("new")]),a._v("。")]),a._v(" "),v("p",[v("code",[a._v("Array()")]),a._v("构造函数有一个很大的缺陷，不同的参数个数会导致不一致的行为。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("// 无参数时，返回一个空数组\nnew Array() // []\n\n// 单个正整数参数，表示返回的新数组的长度\nnew Array(1) // [ empty ]\nnew Array(2) // [ empty x 2 ]\n\n// 非正整数的数值作为参数，会报错\nnew Array(3.2) // RangeError: Invalid array length\nnew Array(-3) // RangeError: Invalid array length\n\n// 单个非数值（比如字符串、布尔值、对象等）作为参数，\n// 则该参数是返回的新数组的成员\nnew Array('abc') // ['abc']\nnew Array([1]) // [Array[1]]\n\n// 多参数时，所有参数都是返回的新数组的成员\nnew Array(1, 2) // [1, 2]\nnew Array('a', 'b', 'c') // ['a', 'b', 'c']\n")])])]),v("p",[a._v("可以看到，"),v("code",[a._v("Array()")]),a._v("作为构造函数，行为很不一致。因此，不建议使用它生成新数组，直接使用数组字面量是更好的做法。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("// bad\nvar arr = new Array(1, 2);\n\n// good\nvar arr = [1, 2];\n")])])]),v("p",[a._v("注意，如果参数是一个正整数，返回数组的成员都是空位。虽然读取的时候返回"),v("code",[a._v("undefined")]),a._v("，但实际上该位置没有任何值。虽然这时可以读取到"),v("code",[a._v("length")]),a._v("属性，但是取不到键名。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var a = new Array(3);\nvar b = [undefined, undefined, undefined];\n\na.length // 3\nb.length // 3\n\na[0] // undefined\nb[0] // undefined\n\n0 in a // false\n0 in b // true\n")])])]),v("p",[a._v("上面代码中，"),v("code",[a._v("a")]),a._v("是"),v("code",[a._v("Array()")]),a._v("生成的一个长度为3的空数组，"),v("code",[a._v("b")]),a._v("是一个三个成员都是"),v("code",[a._v("undefined")]),a._v("的数组，这两个数组是不一样的。读取键值的时候，"),v("code",[a._v("a")]),a._v("和"),v("code",[a._v("b")]),a._v("都返回"),v("code",[a._v("undefined")]),a._v("，但是"),v("code",[a._v("a")]),a._v("的键名（成员的序号）都是空的，"),v("code",[a._v("b")]),a._v("的键名是有值的。")]),a._v(" "),v("h2",{attrs:{id:"静态方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#静态方法"}},[a._v("#")]),a._v(" 静态方法")]),a._v(" "),v("h3",{attrs:{id:"array-isarray"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#array-isarray"}},[a._v("#")]),a._v(" Array.isArray()")]),a._v(" "),v("p",[v("code",[a._v("Array.isArray")]),a._v("方法返回一个布尔值，表示参数是否为数组。它可以弥补"),v("code",[a._v("typeof")]),a._v("运算符的不足。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v('var arr = [1, 2, 3];\n\ntypeof arr // "object"\nArray.isArray(arr) // true\n')])])]),v("p",[a._v("上面代码中，"),v("code",[a._v("typeof")]),a._v("运算符只能显示数组的类型是"),v("code",[a._v("Object")]),a._v("，而"),v("code",[a._v("Array.isArray")]),a._v("方法可以识别数组。")]),a._v(" "),v("h2",{attrs:{id:"实例方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#实例方法"}},[a._v("#")]),a._v(" 实例方法")]),a._v(" "),v("h3",{attrs:{id:"valueof-tostring"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#valueof-tostring"}},[a._v("#")]),a._v(" valueOf()，toString()")]),a._v(" "),v("p",[v("code",[a._v("valueOf")]),a._v("方法是一个所有对象都拥有的方法，表示对该对象求值。不同对象的"),v("code",[a._v("valueOf")]),a._v("方法不尽一致，数组的"),v("code",[a._v("valueOf")]),a._v("方法返回数组本身。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var arr = [1, 2, 3];\narr.valueOf() // [1, 2, 3]\n")])])]),v("p",[v("code",[a._v("toString")]),a._v("方法也是对象的通用方法，数组的"),v("code",[a._v("toString")]),a._v("方法返回数组的字符串形式。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v('var arr = [1, 2, 3];\narr.toString() // "1,2,3"\n\nvar arr = [1, 2, 3, [4, 5, 6]];\narr.toString() // "1,2,3,4,5,6"\n')])])]),v("h3",{attrs:{id:"push-pop"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#push-pop"}},[a._v("#")]),a._v(" push()，pop()")]),a._v(" "),v("p",[v("code",[a._v("push")]),a._v("方法用于在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var arr = [];\n\narr.push(1) // 1\narr.push('a') // 2\narr.push(true, {}) // 4\narr // [1, 'a', true, {}]\n")])])]),v("p",[a._v("上面代码使用"),v("code",[a._v("push")]),a._v("方法，往数组中添加了四个成员。")]),a._v(" "),v("p",[v("code",[a._v("pop")]),a._v("方法用于删除数组的最后一个元素，并返回该元素。注意，该方法会改变原数组。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var arr = ['a', 'b', 'c'];\n\narr.pop() // 'c'\narr // ['a', 'b']\n")])])]),v("p",[a._v("对空数组使用"),v("code",[a._v("pop")]),a._v("方法，不会报错，而是返回"),v("code",[a._v("undefined")]),a._v("。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("[].pop() // undefined\n")])])]),v("p",[v("code",[a._v("push")]),a._v("和"),v("code",[a._v("pop")]),a._v("结合使用，就构成了“后进先出”的栈结构（stack）。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var arr = [];\narr.push(1, 2);\narr.push(3);\narr.pop();\narr // [1, 2]\n")])])]),v("p",[a._v("上面代码中，"),v("code",[a._v("3")]),a._v("是最后进入数组的，但是最早离开数组。")]),a._v(" "),v("h3",{attrs:{id:"shift-unshift"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#shift-unshift"}},[a._v("#")]),a._v(" shift()，unshift()")]),a._v(" "),v("p",[v("code",[a._v("shift()")]),a._v("方法用于删除数组的第一个元素，并返回该元素。注意，该方法会改变原数组。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var a = ['a', 'b', 'c'];\n\na.shift() // 'a'\na // ['b', 'c']\n")])])]),v("p",[a._v("上面代码中，使用"),v("code",[a._v("shift()")]),a._v("方法以后，原数组就变了。")]),a._v(" "),v("p",[v("code",[a._v("shift()")]),a._v("方法可以遍历并清空一个数组。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var list = [1, 2, 3, 4];\nvar item;\n\nwhile (item = list.shift()) {\n  console.log(item);\n}\n\nlist // []\n")])])]),v("p",[a._v("上面代码通过"),v("code",[a._v("list.shift()")]),a._v("方法每次取出一个元素，从而遍历数组。它的前提是数组元素不能是"),v("code",[a._v("0")]),a._v("或任何布尔值等于"),v("code",[a._v("false")]),a._v("的元素，因此这样的遍历不是很可靠。")]),a._v(" "),v("p",[v("code",[a._v("push()")]),a._v("和"),v("code",[a._v("shift()")]),a._v("结合使用，就构成了“先进先出”的队列结构（queue）。")]),a._v(" "),v("p",[v("code",[a._v("unshift()")]),a._v("方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var a = ['a', 'b', 'c'];\n\na.unshift('x'); // 4\na // ['x', 'a', 'b', 'c']\n")])])]),v("p",[v("code",[a._v("unshift()")]),a._v("方法可以接受多个参数，这些参数都会添加到目标数组头部。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var arr = [ 'c', 'd' ];\narr.unshift('a', 'b') // 4\narr // [ 'a', 'b', 'c', 'd' ]\n")])])]),v("h3",{attrs:{id:"join"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#join"}},[a._v("#")]),a._v(" join()")]),a._v(" "),v("p",[v("code",[a._v("join()")]),a._v("方法以指定参数作为分隔符，将所有数组成员连接为一个字符串返回。如果不提供参数，默认用逗号分隔。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var a = [1, 2, 3, 4];\n\na.join(' ') // '1 2 3 4'\na.join(' | ') // \"1 | 2 | 3 | 4\"\na.join() // \"1,2,3,4\"\n")])])]),v("p",[a._v("如果数组成员是"),v("code",[a._v("undefined")]),a._v("或"),v("code",[a._v("null")]),a._v("或空位，会被转成空字符串。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("[undefined, null].join('#')\n// '#'\n\n['a',, 'b'].join('-')\n// 'a--b'\n")])])]),v("p",[a._v("通过"),v("code",[a._v("call")]),a._v("方法，这个方法也可以用于字符串或类似数组的对象。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("Array.prototype.join.call('hello', '-')\n// \"h-e-l-l-o\"\n\nvar obj = { 0: 'a', 1: 'b', length: 2 };\nArray.prototype.join.call(obj, '-')\n// 'a-b'\n")])])]),v("h3",{attrs:{id:"concat"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#concat"}},[a._v("#")]),a._v(" concat()")]),a._v(" "),v("p",[v("code",[a._v("concat")]),a._v("方法用于多个数组的合并。它将新数组的成员，添加到原数组成员的后部，然后返回一个新数组，原数组不变。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("['hello'].concat(['world'])\n// [\"hello\", \"world\"]\n\n['hello'].concat(['world'], ['!'])\n// [\"hello\", \"world\", \"!\"]\n\n[].concat({a: 1}, {b: 2})\n// [{ a: 1 }, { b: 2 }]\n\n[2].concat({a: 1})\n// [2, {a: 1}]\n")])])]),v("p",[a._v("除了数组作为参数，"),v("code",[a._v("concat")]),a._v("也接受其他类型的值作为参数，添加到目标数组尾部。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("[1, 2, 3].concat(4, 5, 6)\n// [1, 2, 3, 4, 5, 6]\n")])])]),v("p",[a._v("如果数组成员包括对象，"),v("code",[a._v("concat")]),a._v("方法返回当前数组的一个浅拷贝。所谓“浅拷贝”，指的是新数组拷贝的是对象的引用。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var obj = { a: 1 };\nvar oldArray = [obj];\n\nvar newArray = oldArray.concat();\n\nobj.a = 2;\nnewArray[0].a // 2\n")])])]),v("p",[a._v("上面代码中，原数组包含一个对象，"),v("code",[a._v("concat")]),a._v("方法生成的新数组包含这个对象的引用。所以，改变原对象以后，新数组跟着改变。")]),a._v(" "),v("h3",{attrs:{id:"reverse"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#reverse"}},[a._v("#")]),a._v(" reverse()")]),a._v(" "),v("p",[v("code",[a._v("reverse")]),a._v("方法用于颠倒排列数组元素，返回改变后的数组。注意，该方法将改变原数组。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v('var a = [\'a\', \'b\', \'c\'];\n\na.reverse() // ["c", "b", "a"]\na // ["c", "b", "a"]\n')])])]),v("h3",{attrs:{id:"slice"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#slice"}},[a._v("#")]),a._v(" slice()")]),a._v(" "),v("p",[v("code",[a._v("slice()")]),a._v("方法用于提取目标数组的一部分，返回一个新数组，原数组不变。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("arr.slice(start, end);\n")])])]),v("p",[a._v("它的第一个参数为起始位置（从0开始，会包括在返回的新数组之中），第二个参数为终止位置（但该位置的元素本身不包括在内）。如果省略第二个参数，则一直返回到原数组的最后一个成员。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v('var a = [\'a\', \'b\', \'c\'];\n\na.slice(0) // ["a", "b", "c"]\na.slice(1) // ["b", "c"]\na.slice(1, 2) // ["b"]\na.slice(2, 6) // ["c"]\na.slice() // ["a", "b", "c"]\n')])])]),v("p",[a._v("上面代码中，最后一个例子"),v("code",[a._v("slice()")]),a._v("没有参数，实际上等于返回一个原数组的拷贝。")]),a._v(" "),v("p",[a._v("如果"),v("code",[a._v("slice()")]),a._v("方法的参数是负数，则表示倒数计算的位置。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var a = ['a', 'b', 'c'];\na.slice(-2) // [\"b\", \"c\"]\na.slice(-2, -1) // [\"b\"]\n")])])]),v("p",[a._v("上面代码中，"),v("code",[a._v("-2")]),a._v("表示倒数计算的第二个位置，"),v("code",[a._v("-1")]),a._v("表示倒数计算的第一个位置。")]),a._v(" "),v("p",[a._v("如果第一个参数大于等于数组长度，或者第二个参数小于第一个参数，则返回空数组。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var a = ['a', 'b', 'c'];\na.slice(4) // []\na.slice(2, 1) // []\n")])])]),v("p",[v("code",[a._v("slice()")]),a._v("方法的一个重要应用，是将类似数组的对象转为真正的数组。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 })\n// ['a', 'b']\n\nArray.prototype.slice.call(document.querySelectorAll(\"div\"));\nArray.prototype.slice.call(arguments);\n")])])]),v("p",[a._v("上面代码的参数都不是数组，但是通过"),v("code",[a._v("call")]),a._v("方法，在它们上面调用"),v("code",[a._v("slice()")]),a._v("方法，就可以把它们转为真正的数组。")]),a._v(" "),v("h3",{attrs:{id:"splice"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#splice"}},[a._v("#")]),a._v(" splice()")]),a._v(" "),v("p",[v("code",[a._v("splice()")]),a._v("方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。注意，该方法会改变原数组。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("arr.splice(start, count, addElement1, addElement2, ...);\n")])])]),v("p",[v("code",[a._v("splice")]),a._v("的第一个参数是删除的起始位置（从0开始），第二个参数是被删除的元素个数。如果后面还有更多的参数，则表示这些就是要被插入数组的新元素。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var a = ['a', 'b', 'c', 'd', 'e', 'f'];\na.splice(4, 2) // [\"e\", \"f\"]\na // [\"a\", \"b\", \"c\", \"d\"]\n")])])]),v("p",[a._v("上面代码从原数组4号位置，删除了两个数组成员。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var a = ['a', 'b', 'c', 'd', 'e', 'f'];\na.splice(4, 2, 1, 2) // [\"e\", \"f\"]\na // [\"a\", \"b\", \"c\", \"d\", 1, 2]\n")])])]),v("p",[a._v("上面代码除了删除成员，还插入了两个新成员。")]),a._v(" "),v("p",[a._v("起始位置如果是负数，就表示从倒数位置开始删除。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var a = ['a', 'b', 'c', 'd', 'e', 'f'];\na.splice(-4, 2) // [\"c\", \"d\"]\n")])])]),v("p",[a._v("上面代码表示，从倒数第四个位置"),v("code",[a._v("c")]),a._v("开始删除两个成员。")]),a._v(" "),v("p",[a._v("如果只是单纯地插入元素，"),v("code",[a._v("splice")]),a._v("方法的第二个参数可以设为"),v("code",[a._v("0")]),a._v("。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var a = [1, 1, 1];\n\na.splice(1, 0, 2) // []\na // [1, 2, 1, 1]\n")])])]),v("p",[a._v("如果只提供第一个参数，等同于将原数组在指定位置拆分成两个数组。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var a = [1, 2, 3, 4];\na.splice(2) // [3, 4]\na // [1, 2]\n")])])]),v("h3",{attrs:{id:"sort"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sort"}},[a._v("#")]),a._v(" sort()")]),a._v(" "),v("p",[v("code",[a._v("sort")]),a._v("方法对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("['d', 'c', 'b', 'a'].sort()\n// ['a', 'b', 'c', 'd']\n\n[4, 3, 2, 1].sort()\n// [1, 2, 3, 4]\n\n[11, 101].sort()\n// [101, 11]\n\n[10111, 1101, 111].sort()\n// [10111, 1101, 111]\n")])])]),v("p",[a._v("上面代码的最后两个例子，需要特殊注意。"),v("code",[a._v("sort()")]),a._v("方法不是按照大小排序，而是按照字典顺序。也就是说，数值会被先转成字符串，再按照字典顺序进行比较，所以"),v("code",[a._v("101")]),a._v("排在"),v("code",[a._v("11")]),a._v("的前面。")]),a._v(" "),v("p",[a._v("如果想让"),v("code",[a._v("sort")]),a._v("方法按照自定义方式排序，可以传入一个函数作为参数。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("[10111, 1101, 111].sort(function (a, b) {\n  return a - b;\n})\n// [111, 1101, 10111]\n")])])]),v("p",[a._v("上面代码中，"),v("code",[a._v("sort")]),a._v("的参数函数本身接受两个参数，表示进行比较的两个数组成员。如果该函数的返回值大于"),v("code",[a._v("0")]),a._v("，表示第一个成员排在第二个成员后面；其他情况下，都是第一个元素排在第二个元素前面。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v('[\n  { name: "张三", age: 30 },\n  { name: "李四", age: 24 },\n  { name: "王五", age: 28  }\n].sort(function (o1, o2) {\n  return o1.age - o2.age;\n})\n// [\n//   { name: "李四", age: 24 },\n//   { name: "王五", age: 28  },\n//   { name: "张三", age: 30 }\n// ]\n')])])]),v("p",[a._v("注意，自定义的排序函数应该返回数值，否则不同的浏览器可能有不同的实现，不能保证结果都一致。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("// bad\n[1, 4, 2, 6, 0, 6, 2, 6].sort((a, b) => a > b)\n\n// good\n[1, 4, 2, 6, 0, 6, 2, 6].sort((a, b) => a - b)\n")])])]),v("p",[a._v("上面代码中，前一种排序算法返回的是布尔值，这是不推荐使用的。后一种是数值，才是更好的写法。")]),a._v(" "),v("h3",{attrs:{id:"map"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[a._v("#")]),a._v(" map()")]),a._v(" "),v("p",[v("code",[a._v("map")]),a._v("方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var numbers = [1, 2, 3];\n\nnumbers.map(function (n) {\n  return n + 1;\n});\n// [2, 3, 4]\n\nnumbers\n// [1, 2, 3]\n")])])]),v("p",[a._v("上面代码中，"),v("code",[a._v("numbers")]),a._v("数组的所有成员依次执行参数函数，运行结果组成一个新数组返回，原数组没有变化。")]),a._v(" "),v("p",[v("code",[a._v("map")]),a._v("方法接受一个函数作为参数。该函数调用时，"),v("code",[a._v("map")]),a._v("方法向它传入三个参数：当前成员、当前位置和数组本身。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("[1, 2, 3].map(function(elem, index, arr) {\n  return elem * index;\n});\n// [0, 2, 6]\n")])])]),v("p",[a._v("上面代码中，"),v("code",[a._v("map")]),a._v("方法的回调函数有三个参数，"),v("code",[a._v("elem")]),a._v("为当前成员的值，"),v("code",[a._v("index")]),a._v("为当前成员的位置，"),v("code",[a._v("arr")]),a._v("为原数组（"),v("code",[a._v("[1, 2, 3]")]),a._v("）。")]),a._v(" "),v("p",[v("code",[a._v("map")]),a._v("方法还可以接受第二个参数，用来绑定回调函数内部的"),v("code",[a._v("this")]),a._v("变量（详见《this 变量》一章）。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var arr = ['a', 'b', 'c'];\n\n[1, 2].map(function (e) {\n  return this[e];\n}, arr)\n// ['b', 'c']\n")])])]),v("p",[a._v("上面代码通过"),v("code",[a._v("map")]),a._v("方法的第二个参数，将回调函数内部的"),v("code",[a._v("this")]),a._v("对象，指向"),v("code",[a._v("arr")]),a._v("数组。")]),a._v(" "),v("p",[a._v("如果数组有空位，"),v("code",[a._v("map")]),a._v("方法的回调函数在这个位置不会执行，会跳过数组的空位。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v('var f = function (n) { return \'a\' };\n\n[1, undefined, 2].map(f) // ["a", "a", "a"]\n[1, null, 2].map(f) // ["a", "a", "a"]\n[1, , 2].map(f) // ["a", , "a"]\n')])])]),v("p",[a._v("上面代码中，"),v("code",[a._v("map")]),a._v("方法不会跳过"),v("code",[a._v("undefined")]),a._v("和"),v("code",[a._v("null")]),a._v("，但是会跳过空位。")]),a._v(" "),v("h3",{attrs:{id:"foreach"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#foreach"}},[a._v("#")]),a._v(" forEach()")]),a._v(" "),v("p",[v("code",[a._v("forEach")]),a._v("方法与"),v("code",[a._v("map")]),a._v("方法很相似，也是对数组的所有成员依次执行参数函数。但是，"),v("code",[a._v("forEach")]),a._v("方法不返回值，只用来操作数据。这就是说，如果数组遍历的目的是为了得到返回值，那么使用"),v("code",[a._v("map")]),a._v("方法，否则使用"),v("code",[a._v("forEach")]),a._v("方法。")]),a._v(" "),v("p",[v("code",[a._v("forEach")]),a._v("的用法与"),v("code",[a._v("map")]),a._v("方法一致，参数是一个函数，该函数同样接受三个参数：当前值、当前位置、整个数组。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("function log(element, index, array) {\n  console.log('[' + index + '] = ' + element);\n}\n\n[2, 5, 9].forEach(log);\n// [0] = 2\n// [1] = 5\n// [2] = 9\n")])])]),v("p",[a._v("上面代码中，"),v("code",[a._v("forEach")]),a._v("遍历数组不是为了得到返回值，而是为了在屏幕输出内容，所以不必使用"),v("code",[a._v("map")]),a._v("方法。")]),a._v(" "),v("p",[v("code",[a._v("forEach")]),a._v("方法也可以接受第二个参数，绑定参数函数的"),v("code",[a._v("this")]),a._v("变量。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var out = [];\n\n[1, 2, 3].forEach(function(elem) {\n  this.push(elem * elem);\n}, out);\n\nout // [1, 4, 9]\n")])])]),v("p",[a._v("上面代码中，空数组"),v("code",[a._v("out")]),a._v("是"),v("code",[a._v("forEach")]),a._v("方法的第二个参数，结果，回调函数内部的"),v("code",[a._v("this")]),a._v("关键字就指向"),v("code",[a._v("out")]),a._v("。")]),a._v(" "),v("p",[a._v("注意，"),v("code",[a._v("forEach")]),a._v("方法无法中断执行，总是会将所有成员遍历完。如果希望符合某种条件时，就中断遍历，要使用"),v("code",[a._v("for")]),a._v("循环。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var arr = [1, 2, 3];\n\nfor (var i = 0; i < arr.length; i++) {\n  if (arr[i] === 2) break;\n  console.log(arr[i]);\n}\n// 1\n")])])]),v("p",[a._v("上面代码中，执行到数组的第二个成员时，就会中断执行。"),v("code",[a._v("forEach")]),a._v("方法做不到这一点。")]),a._v(" "),v("p",[v("code",[a._v("forEach")]),a._v("方法也会跳过数组的空位。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var log = function (n) {\n  console.log(n + 1);\n};\n\n[1, undefined, 2].forEach(log)\n// 2\n// NaN\n// 3\n\n[1, null, 2].forEach(log)\n// 2\n// 1\n// 3\n\n[1, , 2].forEach(log)\n// 2\n// 3\n")])])]),v("p",[a._v("上面代码中，"),v("code",[a._v("forEach")]),a._v("方法不会跳过"),v("code",[a._v("undefined")]),a._v("和"),v("code",[a._v("null")]),a._v("，但会跳过空位。")]),a._v(" "),v("h3",{attrs:{id:"filter"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#filter"}},[a._v("#")]),a._v(" filter()")]),a._v(" "),v("p",[v("code",[a._v("filter")]),a._v("方法用于过滤数组成员，满足条件的成员组成一个新数组返回。")]),a._v(" "),v("p",[a._v("它的参数是一个函数，所有数组成员依次执行该函数，返回结果为"),v("code",[a._v("true")]),a._v("的成员组成一个新数组返回。该方法不会改变原数组。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("[1, 2, 3, 4, 5].filter(function (elem) {\n  return (elem > 3);\n})\n// [4, 5]\n")])])]),v("p",[a._v("上面代码将大于"),v("code",[a._v("3")]),a._v("的数组成员，作为一个新数组返回。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var arr = [0, 1, 'a', false];\n\narr.filter(Boolean)\n// [1, \"a\"]\n")])])]),v("p",[a._v("上面代码中，"),v("code",[a._v("filter")]),a._v("方法返回数组"),v("code",[a._v("arr")]),a._v("里面所有布尔值为"),v("code",[a._v("true")]),a._v("的成员。")]),a._v(" "),v("p",[v("code",[a._v("filter")]),a._v("方法的参数函数可以接受三个参数：当前成员，当前位置和整个数组。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("[1, 2, 3, 4, 5].filter(function (elem, index, arr) {\n  return index % 2 === 0;\n});\n// [1, 3, 5]\n")])])]),v("p",[a._v("上面代码返回偶数位置的成员组成的新数组。")]),a._v(" "),v("p",[v("code",[a._v("filter")]),a._v("方法还可以接受第二个参数，用来绑定参数函数内部的"),v("code",[a._v("this")]),a._v("变量。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var obj = { MAX: 3 };\nvar myFilter = function (item) {\n  if (item > this.MAX) return true;\n};\n\nvar arr = [2, 8, 3, 4, 1, 3, 2, 9];\narr.filter(myFilter, obj) // [8, 4, 9]\n")])])]),v("p",[a._v("上面代码中，过滤器"),v("code",[a._v("myFilter")]),a._v("内部有"),v("code",[a._v("this")]),a._v("变量，它可以被"),v("code",[a._v("filter")]),a._v("方法的第二个参数"),v("code",[a._v("obj")]),a._v("绑定，返回大于"),v("code",[a._v("3")]),a._v("的成员。")]),a._v(" "),v("h3",{attrs:{id:"some-every"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#some-every"}},[a._v("#")]),a._v(" some()，every()")]),a._v(" "),v("p",[a._v("这两个方法类似“断言”（assert），返回一个布尔值，表示判断数组成员是否符合某种条件。")]),a._v(" "),v("p",[a._v("它们接受一个函数作为参数，所有数组成员依次执行该函数。该函数接受三个参数：当前成员、当前位置和整个数组，然后返回一个布尔值。")]),a._v(" "),v("p",[v("code",[a._v("some")]),a._v("方法是只要一个成员的返回值是"),v("code",[a._v("true")]),a._v("，则整个"),v("code",[a._v("some")]),a._v("方法的返回值就是"),v("code",[a._v("true")]),a._v("，否则返回"),v("code",[a._v("false")]),a._v("。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var arr = [1, 2, 3, 4, 5];\narr.some(function (elem, index, arr) {\n  return elem >= 3;\n});\n// true\n")])])]),v("p",[a._v("上面代码中，如果数组"),v("code",[a._v("arr")]),a._v("有一个成员大于等于3，"),v("code",[a._v("some")]),a._v("方法就返回"),v("code",[a._v("true")]),a._v("。")]),a._v(" "),v("p",[v("code",[a._v("every")]),a._v("方法是所有成员的返回值都是"),v("code",[a._v("true")]),a._v("，整个"),v("code",[a._v("every")]),a._v("方法才返回"),v("code",[a._v("true")]),a._v("，否则返回"),v("code",[a._v("false")]),a._v("。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var arr = [1, 2, 3, 4, 5];\narr.every(function (elem, index, arr) {\n  return elem >= 3;\n});\n// false\n")])])]),v("p",[a._v("上面代码中，数组"),v("code",[a._v("arr")]),a._v("并非所有成员大于等于"),v("code",[a._v("3")]),a._v("，所以返回"),v("code",[a._v("false")]),a._v("。")]),a._v(" "),v("p",[a._v("注意，对于空数组，"),v("code",[a._v("some")]),a._v("方法返回"),v("code",[a._v("false")]),a._v("，"),v("code",[a._v("every")]),a._v("方法返回"),v("code",[a._v("true")]),a._v("，回调函数都不会执行。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("function isEven(x) { return x % 2 === 0 }\n\n[].some(isEven) // false\n[].every(isEven) // true\n")])])]),v("p",[v("code",[a._v("some")]),a._v("和"),v("code",[a._v("every")]),a._v("方法还可以接受第二个参数，用来绑定参数函数内部的"),v("code",[a._v("this")]),a._v("变量。")]),a._v(" "),v("h3",{attrs:{id:"reduce-reduceright"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#reduce-reduceright"}},[a._v("#")]),a._v(" reduce()，reduceRight()")]),a._v(" "),v("p",[v("code",[a._v("reduce")]),a._v("方法和"),v("code",[a._v("reduceRight")]),a._v("方法依次处理数组的每个成员，最终累计为一个值。它们的差别是，"),v("code",[a._v("reduce")]),a._v("是从左到右处理（从第一个成员到最后一个成员），"),v("code",[a._v("reduceRight")]),a._v("则是从右到左（从最后一个成员到第一个成员），其他完全一样。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("[1, 2, 3, 4, 5].reduce(function (a, b) {\n  console.log(a, b);\n  return a + b;\n})\n// 1 2\n// 3 3\n// 6 4\n// 10 5\n//最后结果：15\n")])])]),v("p",[a._v("上面代码中，"),v("code",[a._v("reduce")]),a._v("方法求出数组所有成员的和。第一次执行，"),v("code",[a._v("a")]),a._v("是数组的第一个成员"),v("code",[a._v("1")]),a._v("，"),v("code",[a._v("b")]),a._v("是数组的第二个成员"),v("code",[a._v("2")]),a._v("。第二次执行，"),v("code",[a._v("a")]),a._v("为上一轮的返回值"),v("code",[a._v("3")]),a._v("，"),v("code",[a._v("b")]),a._v("为第三个成员"),v("code",[a._v("3")]),a._v("。第三次执行，"),v("code",[a._v("a")]),a._v("为上一轮的返回值"),v("code",[a._v("6")]),a._v("，"),v("code",[a._v("b")]),a._v("为第四个成员"),v("code",[a._v("4")]),a._v("。第四次执行，"),v("code",[a._v("a")]),a._v("为上一轮返回值"),v("code",[a._v("10")]),a._v("，"),v("code",[a._v("b")]),a._v("为第五个成员"),v("code",[a._v("5")]),a._v("。至此所有成员遍历完成，整个方法的返回值就是最后一轮的返回值"),v("code",[a._v("15")]),a._v("。")]),a._v(" "),v("p",[v("code",[a._v("reduce")]),a._v("方法和"),v("code",[a._v("reduceRight")]),a._v("方法的第一个参数都是一个函数。该函数接受以下四个参数。")]),a._v(" "),v("ol",[v("li",[a._v("累积变量，默认为数组的第一个成员")]),a._v(" "),v("li",[a._v("当前变量，默认为数组的第二个成员")]),a._v(" "),v("li",[a._v("当前位置（从0开始）")]),a._v(" "),v("li",[a._v("原数组")])]),a._v(" "),v("p",[a._v("这四个参数之中，只有前两个是必须的，后两个则是可选的。")]),a._v(" "),v("p",[a._v("如果要对累积变量指定初值，可以把它放在"),v("code",[a._v("reduce")]),a._v("方法和"),v("code",[a._v("reduceRight")]),a._v("方法的第二个参数。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("[1, 2, 3, 4, 5].reduce(function (a, b) {\n  return a + b;\n}, 10);\n// 25\n")])])]),v("p",[a._v("上面代码指定参数"),v("code",[a._v("a")]),a._v("的初值为10，所以数组从10开始累加，最终结果为25。注意，这时"),v("code",[a._v("b")]),a._v("是从数组的第一个成员开始遍历。")]),a._v(" "),v("p",[a._v("上面的第二个参数相当于设定了默认值，处理空数组时尤其有用。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("function add(prev, cur) {\n  return prev + cur;\n}\n\n[].reduce(add)\n// TypeError: Reduce of empty array with no initial value\n[].reduce(add, 1)\n// 1\n")])])]),v("p",[a._v("上面代码中，由于空数组取不到初始值，"),v("code",[a._v("reduce")]),a._v("方法会报错。这时，加上第二个参数，就能保证总是会返回一个值。")]),a._v(" "),v("p",[a._v("下面是一个"),v("code",[a._v("reduceRight")]),a._v("方法的例子。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("function subtract(prev, cur) {\n  return prev - cur;\n}\n\n[3, 2, 1].reduce(subtract) // 0\n[3, 2, 1].reduceRight(subtract) // -4\n")])])]),v("p",[a._v("上面代码中，"),v("code",[a._v("reduce")]),a._v("方法相当于"),v("code",[a._v("3")]),a._v("减去"),v("code",[a._v("2")]),a._v("再减去"),v("code",[a._v("1")]),a._v("，"),v("code",[a._v("reduceRight")]),a._v("方法相当于"),v("code",[a._v("1")]),a._v("减去"),v("code",[a._v("2")]),a._v("再减去"),v("code",[a._v("3")]),a._v("。")]),a._v(" "),v("p",[a._v("由于这两个方法会遍历数组，所以实际上还可以用来做一些遍历相关的操作。比如，找出字符长度最长的数组成员。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("function findLongest(entries) {\n  return entries.reduce(function (longest, entry) {\n    return entry.length > longest.length ? entry : longest;\n  }, '');\n}\n\nfindLongest(['aaa', 'bb', 'c']) // \"aaa\"\n")])])]),v("p",[a._v("上面代码中，"),v("code",[a._v("reduce")]),a._v("的参数函数会将字符长度较长的那个数组成员，作为累积值。这导致遍历所有成员之后，累积值就是字符长度最长的那个成员。")]),a._v(" "),v("h3",{attrs:{id:"indexof-lastindexof"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#indexof-lastindexof"}},[a._v("#")]),a._v(" indexOf()，lastIndexOf()")]),a._v(" "),v("p",[v("code",[a._v("indexOf")]),a._v("方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回"),v("code",[a._v("-1")]),a._v("。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var a = ['a', 'b', 'c'];\n\na.indexOf('b') // 1\na.indexOf('y') // -1\n")])])]),v("p",[v("code",[a._v("indexOf")]),a._v("方法还可以接受第二个参数，表示搜索的开始位置。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("['a', 'b', 'c'].indexOf('a', 1) // -1\n")])])]),v("p",[a._v("上面代码从1号位置开始搜索字符"),v("code",[a._v("a")]),a._v("，结果为"),v("code",[a._v("-1")]),a._v("，表示没有搜索到。")]),a._v(" "),v("p",[v("code",[a._v("lastIndexOf")]),a._v("方法返回给定元素在数组中最后一次出现的位置，如果没有出现则返回"),v("code",[a._v("-1")]),a._v("。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var a = [2, 5, 9, 2];\na.lastIndexOf(2) // 3\na.lastIndexOf(7) // -1\n")])])]),v("p",[a._v("注意，这两个方法不能用来搜索"),v("code",[a._v("NaN")]),a._v("的位置，即它们无法确定数组成员是否包含"),v("code",[a._v("NaN")]),a._v("。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("[NaN].indexOf(NaN) // -1\n[NaN].lastIndexOf(NaN) // -1\n")])])]),v("p",[a._v("这是因为这两个方法内部，使用严格相等运算符（"),v("code",[a._v("===")]),a._v("）进行比较，而"),v("code",[a._v("NaN")]),a._v("是唯一一个不等于自身的值。")]),a._v(" "),v("h3",{attrs:{id:"链式使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#链式使用"}},[a._v("#")]),a._v(" 链式使用")]),a._v(" "),v("p",[a._v("上面这些数组方法之中，有不少返回的还是数组，所以可以链式使用。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("var users = [\n  {name: 'tom', email: 'tom@example.com'},\n  {name: 'peter', email: 'peter@example.com'}\n];\n\nusers\n.map(function (user) {\n  return user.email;\n})\n.filter(function (email) {\n  return /^t/.test(email);\n})\n.forEach(function (email) {\n  console.log(email);\n});\n// \"tom@example.com\"\n")])])]),v("p",[a._v("上面代码中，先产生一个所有 Email 地址组成的数组，然后再过滤出以"),v("code",[a._v("t")]),a._v("开头的 Email 地址，最后将它打印出来。")]),a._v(" "),v("h2",{attrs:{id:"参考链接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[a._v("#")]),a._v(" 参考链接")]),a._v(" "),v("ul",[v("li",[a._v("阮一峰 https://wangdoc.com/javascript/stdlib/array.html")])])])}),[],!1,null,null,null);e.default=t.exports}}]);