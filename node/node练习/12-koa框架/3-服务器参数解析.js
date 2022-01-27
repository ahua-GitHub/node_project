const Koa = require('koa')

const app = new Koa()
const Router = require('koa-router')


const userRouter = new Router({ prefix: "/users" })

// 解析params一般会先通过路由去拿到对应的路径
userRouter.get('/:id', (cxt, next) => {
    console.log(cxt.request.params)
    console.log(cxt.request.query)
})


// app.use((ctx, next) => {
//     console.log(ctx.request.url)
//     console.log(ctx.request.query)
// })

app.use(userRouter.routes())

// 监听实例
app.listen('8089', () => {
    console.log("服务器参数解析")
})