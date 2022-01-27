// 注册组件

// 导入koa框架
const Koa = require('koa')
// 导入koa-bodyparser库(处理post请求body中的json文件)   
const bodyParser = require('koa-bodyparser')

// 导入user.router.js文件(复制对接口的处理)
const userRouter = require('../router/user.router.js')

// 导入error.js文件  处理错误
const errorHeader = require('../app/error')


const app = new Koa()



app.use(bodyParser())

    // userRouter.routes()会返回一个函数，然后将返回的函数注册到app.use中
app.use(userRouter.routes())
    // 判断当前请求方式是否允许==》有没有在路由中注册
app.use(userRouter.allowedMethods())

// 错误处理
app.on('error', errorHeader)

// 将注册的中间件导出
module.exports = app