    // 注册组件

// 导入koa框架
const Koa = require('koa')
// 导入koa-bodyparser库(处理post请求body中的json文件)   
const bodyParser = require('koa-bodyparser')

// 导入error.js文件  处理错误
const errorHeader = require('../app/error')


// 1. 这部分可以使用router下的index.js文件动态生成
// const useRouter = require('../router/index')

// 用户注册路由)
const userRouter = require('../router/register.router.js')
// 用户登录路由）
const loginRouter = require('../router/loginin.router')
// 动态相关路由
const momentRouter = require('../router/moment.router')
// 评论相关路由
const commentRouter = require('../router/comment.router')
//标签相关路由
const labelRouter = require('../router/label.router')

// const FileRouter = require('../router/file.router')




const app = new Koa()
app.use(bodyParser())

// 1. 这部分可以用router下的index.js文件动态生成
// useRouter(app)

    // userRouter.routes()会返回一个函数，然后将返回的函数注册到app.use中
app.use(userRouter.routes())
    // 判断userRouter的请求方式是否允许==》有没有在路由中注册
app.use(userRouter.allowedMethods())

app.use(loginRouter.routes())
app.use(loginRouter.allowedMethods())

app.use(momentRouter.routes())
app.use(momentRouter.allowedMethods())

app.use(commentRouter.routes())
app.use(commentRouter.allowedMethods())

app.use(labelRouter.routes())
app.use(labelRouter.allowedMethods())

// app.use(FileRouter.routes())
// app.use(FileRouter.allowedMethods())


// 错误处理
app.on('error', errorHeader)

// 将注册的中间件导出 
module.exports = app