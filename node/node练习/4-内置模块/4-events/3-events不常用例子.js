//这是一个类
const EventEmitter = require("events")

//创建发射器
const emitter = new EventEmitter();

//监听事件
const listener1 = (arg1,aeg2) => {
    console.log("监听事件1",arg1,aeg2)
}
const listener2 = (arg1,arg2) => {
    console.log("监听事件2",arg1,arg2)
}
const listener3 = (arg1,arg2) => {
    console.log("监听事件3",arg1,arg2)
}
//执行一次
emitter.once('click',listener1)
emitter.on('click',listener2)
//让事件提前执行
emitter.prependListener('click',listener3)

//每2s发出一个事件
setTimeout(() => {
    emitter.emit('click',"hollow","world")
    emitter.emit('click',"good","ahua")
},2000)


//取消事件监听
setTimeout(() => {
    emitter.off('click',listener2)
},3000)

 //移除所有事件
 emitter.removeAllListeners()
