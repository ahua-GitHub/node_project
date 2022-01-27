const path = require('path')

// express本质是一个函数:createApplication
const express = require('express')

// 解析form-data格式数据的带三方库
// multer是个函数
const multer = require('multer')

// 调用这个函数返回一个app,app本质上也是一个函数
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const storage = multer.diskStorage({
    // 存储位置
    destination: (req, fill, callback) => {
        // 第一个参数表示有没有错误，第二个是路径
        callback(null, './uploads/')
    },
    // 文件名
    filename: (req, fill, callback) => {
        // 第一个参数表示有没有错误，第二个是文件名
        // fill.originalname原始文件名
        callback(null, Date.now() + path.extname(fill.originalname))
    }
})

const upload = multer({
    // 在multer中声明上传后文件存储的位置
    dest: './uploads'

    // 自定义存储信息,包括文件名,位置等
    // storage
})

// 将返回值作为中间件,any表示会上传多个文件,文件数组将保存在 req.files。
// 不能将app.use(upload.any())作为全局中间件，
// 因为用户会将数据传到一个预料不到的路由，所以应该只在需要处理文件的路由上使用
app.post('/login', upload.any(), (req, res, next) => {
    console.log(req.body)
    res.end('用户登录成功')
})

// '/upload'是接口用来判断是否需要做文件上传
// upload.single(file)文件上传的中间件,从客户端获取到文件然后存放在指定位置,file是上传文件的key值,多个文件用array
// (req, res, next)回调告诉用户文件上传成功
app.post('/upload', upload.single('file'), (req, res, next) => {
    console.log(req.file)
    res.end('上传成功')
})


app.listen(8089, () => {
    console.log('from-data文件上传')
})