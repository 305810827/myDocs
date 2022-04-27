虽然测试全过，但是resolvePromise跟v8的promise源码实现有些不同，导致then方法里return promise时少了一次微任务

```javascript
// 解决问题思路
// 1、定义class 实现 resolve reject then 方法
// 2、解决异步resolve
// 3、解决多次调用then
// 4、解决then的链式调用，then的return结果分为promise和普通值
// 5、解决then方法里返回promise自己
// 6、捕获执行器中的执行的错误
// 7、then执行中错误捕获
// 8、异步任务、reject完善4567步骤
// 9、then的默认函数

let PENDING = 'pending'
let FULFILLED = 'fulfilled'
let REJECTED = 'rejected'
class myPromise {
    constructor (executor) {
        try {
            executor(this.resolve, this.reject)
        } catch (e) {
            this.reject(e)
        }
    }

    state = PENDING
    value = null
    reason = null
    // 存储成功回调函数
    onFulfilledCallbacks = []
    // 存储失败回调函数
    onRejectedCallbacks = []

    resolve = (value) => {
        if (this.state === PENDING) {
            // 执行状态修改为成功
            this.state = FULFILLED
            // 执行成功后保存的值
            this.value = value
            // resolve里面将所有成功的回调拿出来执行
            while (this.onFulfilledCallbacks.length) {
                this.onFulfilledCallbacks.shift()(value)
            }
        }
    }

    reject = (reason) => {
        if (this.state === PENDING) {
            // 执行状态修改为失败
            this.state = REJECTED
            // 执行失败后保存的值
            this.reason = reason
             // reject里面将所有失败的回调拿出来执行
            while(this.onRejectedCallbacks.length) {
                this.onRejectedCallbacks.shift()(reason)
            }
        }
    }

    then = (onFulfilled, onRejected) => {
        // 默认函数
        const realOnFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        const realOnRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}


        // 为了链式调用这里直接创建一个 MyPromise，并在后面 return 出去
        let promise2 = new myPromise((resolve, reject) => {
            // 获取成功回调函数的执行结果
            const fulfilledMicrotask = () => {
                // 创建一个微任务等待 promise2 完成初始化
                queueMicrotask(() => {
                    try {
                        const res = realOnFulfilled(this.value)
                        // 传入 resolvePromise 集中处理
                        resolvePromise(promise2, res, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })
            }
            // 获取失败回调函数的执行结果
            const rejectedMicrotask = () => {
                // 创建一个微任务等待 promise2 完成初始化
                queueMicrotask(() => {
                    try {
                        const res = realOnRejected(this.reason)
                        // 传入 resolvePromise 集中处理
                        resolvePromise(promise2, res, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })
            }

            if (this.state === FULFILLED) {
                fulfilledMicrotask()
            } else if (this.state === REJECTED) {
                rejectedMicrotask()
                // onRejected(this.reason)
            } else if (this.state === PENDING) {
                this.onFulfilledCallbacks.push(fulfilledMicrotask)
                this.onRejectedCallbacks.push(rejectedMicrotask)
            }
        })
        return promise2
    }

    static resolve (param) {
        if (param instanceof myPromise) {
            return param
        }
        return new myPromise(resolve => resolve(param))
    }
    static reject (reason) {
        return new myPromise((resolve, reject) => reject(reason))
    }

    catch = (rejectFn) => {
        console.log('catch');
    }
}


function resolvePromise (promise, x, resolve, reject) {
    if (promise === x) {
        return reject(new TypeError('The promise and the return value are the same'));
    }

    if (typeof x === 'object' || typeof x === 'function') {
        // x 为 null 直接返回，走后面的逻辑会报错
        if (x === null) {
          return resolve(x);
        }

        let then;
        try {
          // 把 x.then 赋值给 then
          then = x.then;
        } catch (error) {
          // 如果取 x.then 的值时抛出错误 error ，则以 error 为据因拒绝 promise
          return reject(error);
        }

        // 如果 then 是函数
        if (typeof then === 'function') {
          let called = false;
          try {
            then.call(
              x, // this 指向 x
              // 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
              y => {
                // 如果 resolvePromise 和 rejectPromise 均被调用，
                // 或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
                // 实现这条需要前面加一个变量 called
                if (called) return;
                called = true;
                resolvePromise(promise, y, resolve, reject);
              },
              // 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
              r => {
                if (called) return;
                called = true;
                reject(r);
              });
          } catch (error) {
            // 如果调用 then 方法抛出了异常 error：
            // 如果 resolvePromise 或 rejectPromise 已经被调用，直接返回
            if (called) return;

            // 否则以 error 为据因拒绝 promise
            reject(error);
          }
        } else {
          // 如果 then 不是函数，以 x 为参数执行 promise
          resolve(x);
        }
    } else {
    // 如果 x 不为对象或者函数，以 x 为参数执行 promise
        resolve(x);
    }
}


module.exports = myPromise
```



https://juejin.cn/post/6945319439772434469