const koa = require('koa')
const Router = require('koa-router');



const app = new koa();
const cookieRouter = new Router()

// 服务器端设置cookie
cookieRouter.get('/cookie',(ctx,next)=>{
    // 将cookie放入cookies中
    ctx.cookies.set('name','ahua',{
        // cookie保存时间
        maxAge:5*10000
    })
   ctx.body = `<a href = "/text">访问127.0.0.1:8880/text可以查看设置的cookie</a> `
})
// 获取cookie,cookie的默认设置是域名下的所有路径都可以访问的
// 所以在cookie中设置之后在text下也能访问到
cookieRouter.get('/text',(ctx,next) => {
    const value = ctx.cookies.get('name');
    ctx.body = `你的cookie是`+value
}) 
app.use(cookieRouter.routes())
app.use(cookieRouter.allowedMethods())

app.listen('8880',()=>{
    console.log('服务器启动成功')
})
