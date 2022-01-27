// 安装jsonwebtoken库 npm install jsonwebtoken
const koa = require('koa')
const Router = require('koa-router')
const jwt = require('jsonwebtoken')

const app = new koa()
const tokenRouter = new Router()
const SERCET_KEY = 'abc123'
// 颁发token接口
tokenRouter.post('/token',(ctx,next)=>{
    const user = {id:1,uaerName:'ahua'}
    const token =   jwt.sign(user,SERCET_KEY,{
        expiresIn:60
    })
    ctx.body = token
})

// 验证token接口
tokenRouter.post('/text',(ctx,next)=>{
    const authorization = ctx.header.authorization
    // console.log(authorization)
    const token = authorization.replace("Bearer ","")
    // console.log(token)
    // 验证token
    try{
        // 如果token过期了，会直接报出异常，用catch捕获，当过期异常时显示token过期
        const result = jwt.verify(token,SERCET_KEY)
        ctx.body = result
    }catch(error){
        // console.log(error.message)
        ctx.body = "token已过期，请重新登录"
    }
})


app.use(tokenRouter.routes())
app.use(tokenRouter.allowedMethods())

app.listen(8099,()=>{
    console.log("服务器启动成功")
})


   