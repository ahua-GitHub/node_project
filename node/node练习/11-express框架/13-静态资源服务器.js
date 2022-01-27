// const { json } = require('express')
const express = require('express')

const app = express()

// 使用http的方法的话需要去读取文件夹里面的文件然后再给客户端返回

// express里面使用中间件会自动找到文件夹把他作为静态服务器对应的文件夹
// 当请求静态资源的时候就会去这个文件夹里面找
app.use(express.static('../css-3d-imags/'))

app.listen('8089', () => {
    console.log("静态服务器开启成功")
})