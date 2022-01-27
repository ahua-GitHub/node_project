// Koa在这里导出的实际上是一个Applation的类
const Koa = require('koa')

// 通过创建实例来创建服务器
const app = new Koa()

// koa中把所有的中间件都执行完成之后还是没有返回结果的话，就会给客户端返回一个not found

// ??  app是koa new的实例，那为什么app.use可以  Koa.use却不可以呢



//ctx == context上下文，一般每次客户端给服务器发送一次请求
// 我们就认为服务器这边就会有一个context对象
// app.use((ctx, next) => {
//     // koa将response对象重新做了一个封装，封装后是没有end的，end是原生node里面的
//     // 没有end可以通过body的方式将值附在body上，这个值就会作为结果被返回
//     // 赋值可以为对象数组字符串buffer
//     ctx.response.body = "hollow koa"
//     next()
// })

// koa创建中间件只能通过use创建，而且也不支持连续注册中间件
// 所以只能类似node原生的那样去对url和请求方式进行判断
app.use((ctx, next) => {
    if (ctx.request.url == '/login') {
        if (ctx.request.method == 'GET') {
            ctx.response.body = "登录成功"
        }
    } else {
        ctx.response.body = "other~"
    }
})


// 监听实例
app.listen('8089', () => {
    console.log("koa初体验")
})