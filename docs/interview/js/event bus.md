实现一个观察者类Observer，具有on、emit、remove方法。WeakMap用于生成键值对的集合，与Map不同的是，WeakMap只接受对象作为键名。

```
const events = (() => {
    let _message = new WeakMap()
    class event {
        constructor () {
            console.log(_message, '_message')
            _message.set(this, {})
        }
        on (type, fn) {
            let message = _message.get(this)
            if (!message[type]) {
                message[type] = [fn]
            } else {
                message[type].push(fn)
            }
        }

        emit (type, arg) {
            let message = _message.get(this)
            if (!message[type]) return
            message[type].forEach(item => item.call(this, {arg: arg}))
        }

        remove (type, fn) {
            let Message = _message.get(this)[type]
            if (Message instanceof Array) {
              for(let i = Message.length - 1; i >= 0; i--) {
                 Message[i] === fn && Message.splice(i, 1)
              }
            }
        }
    }
    return event
})()

function fn(name){
	console.log(name)
}

let event = new events()
event.on('test',fn)
event.emit('test', 'xuyanjie')
event.remove('test', fn)
event.emit('test', 'xuyanjie')
```

