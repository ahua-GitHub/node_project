const path = require('path')
const koa = require('koa')
const Router = require('koa-router')
const multer = require("koa-multer")


const app = new koa()
const uploadRouter = new Router({ prefix: "/upload" })


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
    // dest: './uploads'
    storage
})

uploadRouter.post('/avatar', upload.single('avatar'), (cxt, next) => {
    // cxt.req.file中记录着当前上传图片的信息
    console.log(cxt.req.file)
    cxt.response.body = "上传头像成功"
})

app.use(uploadRouter.routes())


app.listen(8089, () => {
    console.log('koa文件上传')
})