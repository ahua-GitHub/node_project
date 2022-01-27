const express = require('express')
const fs = require("fs")
const morgan = require("morgan")


const app = express()

//写入的位置，每次有新内容都会进行追加
// ./logs/access.log
const writeStream = fs.createWriteStream('../my-express/log/access.log', {
    flags: "a+"
})

// npm install morgan 安装第三方库，将每一次的请求都保存到本地的文件夹里面

// 打印所有的日志可以用app.use()的全局中间件
// 只关注某一个接口的日志的话直接把中间件放到想关注的接口的中间的位置即可

// combined用于决定打印的日志的保存格式
// stream: writeStream表示一旦有日志就会把日志写入到相应的某个位置
app.use(morgan("combined", { stream: writeStream }))

app.get('/log', (req, res, next) => {
    res.end("write log")
})


app.listen('8089', (req, res, next) => {
    console.log('服务器启动成功')
})