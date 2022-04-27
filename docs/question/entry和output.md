## entry

entry是配置入口的起点，每个 HTML 页面都有一个入口起点。单页应用(SPA)：一个入口起点，多页应用(MPA)：多个入口起点。

output对应的输出文件，可以配置输出路径和文件名。



1、单页面配置，传递字符串。打包形成一个chunk，输出一个bundle文件，此时chunk的名称默认是main

```
entry: {
	'./background.js'
}
output: {
	path    : path.resolve(__dirname, './dist'),
  filename: '[name].js'
}
```

2、单页面配置，传递数组。所有入口文件最终只会形成一个chunk，输出出去只有一个bundle文件。

```
entry: {
	['./background1.js', './background2.js']
}
output: {
	path    : path.resolve(__dirname, './dist'),
  filename: '[name].js'
}
```

3、多页面配置，传递对象。有多少个入口文件就形成多少个chunk，输出多少的bundle文件。

`[name]` 被 chunk 的 name 替换。

`[hash]` 被 compilation 生命周期的 hash 替换。

`[chunkhash]` 被 chunk 的 hash 替换。

```
entry: {
	'background1': './background1.js',
	'background2': './background2.js'
}
output: {
	path    : path.resolve(__dirname, './dist'),
  filename: '[name].js'
}
```

