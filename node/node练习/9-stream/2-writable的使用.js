const fs = require('fs')
    // 传统写入方式
    // fs.writeFile('./demo.txt', 'hollow ahua', { flag: "a" }, (err, data) => {
    //     console.log(err)
    // })

const Write = fs.createWriteStream('./demo23.txt', {
    flag: "a",
    start: 4
})

Write.write("你好，阿花", err => {
        if (err) {
            console.log(err)
        } else {
            console.log("写入成功")
        }

    })
    // end做了兩件事，write("文件被关闭")
    // 调用close()方法

Write.end("文件关闭")