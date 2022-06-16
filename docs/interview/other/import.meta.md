### import.meta

import.meta 是一个给 JavaScript 模块暴露特定上下文的元数据属性的对象，它包含了这个模块的信息。

import.meta 对象是由 ECMAScript 实现的，它带有一个 null 的原型对象。这个对象可以扩展，并且它的属性都是可写，可配置和可枚举的。

```javascript
<script type="module">
	console.log(import.meta)  // {url: 'http://127.0.0.1:5500/dist/index.html?a=1'}
</script>
```

Vite 通过特殊的 import.meta.hot 对象暴露手动 HMR API。
https://github.com/vitejs/vite/blob/main/packages/vite/src/client/client.ts#L412

```
interface ImportMeta {
  readonly hot?: {
    readonly data: any

    accept(): void
    accept(cb: (mod: any) => void): void
    accept(dep: string, cb: (mod: any) => void): void
    accept(deps: string[], cb: (mods: any[]) => void): void
    
    prune(cb: () => void): void
    dispose(cb: (data: any) => void): void
    decline(): void
    invalidate(): void
    
    on(event: string, cb: (...args: any[]) => void): void

  }
}
```

vite HMR API：https://cn.vitejs.dev/guide/api-hmr.html