// 安装koa-session库 npm install koa-session
const session = require('koa-session')
const koa = require('koa')
const Router = require('koa-router');

// session 是基于cookie的

const app = new koa();
const sessionRouter = new Router()

// 创建session的配置
// session本质是一个函数，使用的时候先调用这个session函数，传过去的参数是一个对象
const Session = session({
    // 相当于cookie的key
    key:'sessionid',
    maxAge:100 * 1000,
    // false表示不使用签名，默认是true
    signed:true
},app)

// 加严,可以理解为和id和name一起加密，那样就算被解码也不知道真实的id和name
app.keys=['aaaa']

app.use(Session)

sessionRouter.get('/session',(ctx,next)=>{
    // 模拟从数据库中查到的姓名和id
    const name = 'ahua';
    const id = 111;

    // 将id和name放到session的user中
    ctx.session.user = {id,name}
    ctx.body=`session设置成功` 
    next();
}) 
sessionRouter.get('/sessions',(ctx,next)=>{
    console.log(ctx.session.user)
    const value = ctx.cookies.get('sessionid');
    ctx.body=`你的session是${value}` 
})

app.use(sessionRouter.routes())
app.use(sessionRouter.allowedMethods())

app.listen('8881',()=>{
    console.log('服务器启动成功')
}) 


