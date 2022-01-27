//这是一个类
const EventEmitter = require("events")

//创建发射器
const emitter = new EventEmitter();

//监听事件
const listener1 = (arg) => {
    console.log("监听事件1",arg)
}
const listener2 = (arg) => {
    console.log("监听事件2",arg)
}
emitter.on('click',listener1)
emitter.on('click',listener2)

emitter.on('tap',(arg) => {
    console.log('args')
})

//获取注册的事件
console.log(emitter.eventNames())
//获取注册了多少个事件
console.log(emitter.listenerCount('click'))
//获取注册事件的信息
console.log(emitter.listeners('click'))



