#### 一、在 TypeScript 中，`|`, `!`, `?`, `as` 以及其他符号有各自的含义和用法：

1. `|`：类型联合
   - 用于定义一个变量可以接受多个不同类型的值。
   - 例如：`let age: number | string;` 表示 `age` 可以是一个数字或者一个字符串类型。
2. `!`：非空断言
   - 用于告诉 TypeScript 某个变量一定是非空的，可以避免出现空值错误。
   - 例如：`document.getElementById('app')!;` 表示断言 `document.getElementById('app')` 不为空。
3. `?`：可选属性
   - 用于定义一个对象的属性是可选的，可以不传入该属性。
   - 例如：`interface Person { name: string; age?: number; }` 表示 `age` 属性是可选的。
4. `as`：类型断言
   - 用于告诉 TypeScript 某个变量的具体类型，通常在开发者明确知道变量的类型时使用。
   - 例如：`let num: any = 123; let strLength = (num as string).length;` 表示将 `num` 断言为字符串类型，并获取其长度。

#### 二、其他常见符号的含义和用法：

- `:`：类型注解
  - 用于标注变量、函数参数或函数返回值的类型。
  - 例如：`let age: number; function add(a: number, b: number): number { ... }`
- `!`：非空断言
  - 在变量后面加上 `!` 表示告诉 TypeScript 该变量一定是非空的，可以避免空值错误。
- `&`：交叉类型
  - 用于合并多个类型为一个新的类型。
  - 例如：`interface A { name: string; } interface B { age: number; } type C = A & B;` 表示 `C` 是 `A` 和 `B` 的交叉类型，即包含 `name` 和 `age` 属性。
- `typeof`：类型查询
  - 用于获取一个变量或值的类型。
  - 例如：`let num: number = 123; type NumType = typeof num;` 表示 `NumType` 是 `number` 类型。
- `keyof`：索引类型查询
  - 用于获取一个对象的键的联合类型。
  - 例如：`interface Person { name: string; age: number; } type PersonKeys = keyof Person;` 表示 `PersonKeys` 是 `'name' | 'age'` 的联合类型。
- `in`：迭代类型
  - 用于遍历一个对象的所有键。
  - 例如：`type Colors = 'red' | 'blue' | 'green'; for (let color in Colors) { ... }`
- `extends`：泛型约束
  - 用于限制泛型类型的范围。
  - 例如：`function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U { ... }` 表示 `T` 和 `U` 必须是对象类型。
