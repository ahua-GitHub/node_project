const fs = require('fs')

//文件方式读取
// fs.readFile('./foo.txt', { encoding: 'utf-8' }, (err, date) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(date)
// })

// 流的方式读取
const reader = fs.createReadStream('./foo.txt', {
        start: 3,
        end: 6,
        highWaterMark: 2
    })
    // 监听数据读取过程
reader.on("data", data => {
    console.log(data)
        // 暂停
    reader.pause();
    setTimeout(() => {
        reader.resume()
    }, 1000)
})

// 监听文件打开
reader.on('open', data => {
        console.log('文件被打开了')
    })
    // 监听文件关闭
reader.on('close', data => {
    console.log('文件被关闭了')
})