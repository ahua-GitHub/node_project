// express本质是一个函数:createApplication
const express = require('express')

// 解析form-data格式数据的是第三方库
// multer是个函数
const multer = require('multer')


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
    // 调用multer函数本质上是创建了一个对象
const upload = multer()
    // 将upload.any()返回值作为中间件
    // from-data中非文件格式解析用any
app.use(upload.any())

app.post('/login', (req, res, next) => {
    console.log(req.body)
    res.end('用户登录成功')
})

app.listen(8089, () => {

    console.log('from-data解析服务器')
})