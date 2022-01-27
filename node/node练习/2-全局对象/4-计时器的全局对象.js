setTimeout(()=>{
    console.log('setTimeout')
},1000)

setInterval(()=>{
    console.log('setInterval')
},1000)

setImmediate(()=>{
    console.log('setImmediate')
})

//下一秒，下一帧
process.nextTick(()=>{
    console.log('nextTick')
})
