//因为koa比较轻量，所以路由的功能也是没有实现的
// 只能通过第三方库来实现 npm install koa-router  并不是官方提供的


const Koa = require('koa')

const userRouter = require('./router/user')

const app = new Koa()


// userRouter.routes()会返回一个函数，然后将返回的函数注册到app.use中
app.use(userRouter.routes())

// 路由中提供的用于判断当前请求方法是否是被允许的
// 也就是有没有在路由中注册
app.use(userRouter.allowedMethods())

// 监听实例
app.listen('8089', () => {
    console.log("koa初体验")
})