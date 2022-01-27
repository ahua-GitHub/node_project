const koa = require('koa')
const Router = require('koa-router')
const jwt = require('jsonwebtoken')
const fs = require('fs')

const app = new koa()
const tokenRouter = new Router()

// 项目中的任何一个地方的相对路径，相对的都是process.cwd()
// 这里直接读取到的是buffer格式数据
const PRIVATE_KEY = fs.readFileSync('./key/private.key')
const PUBLIC_KEY = fs.readFileSync('./key/public.key')



// 登录接口
tokenRouter.post('/token', (ctx, next) => {
    const user = {id: 110, name: 'why'};
    const token = jwt.sign(user, PRIVATE_KEY, {
      expiresIn: 60,
      algorithm: "RS256"
    });
  
    ctx.body = token;
  });

// 验证token
tokenRouter.post('/text',(ctx,next)=>{
    const authorization = ctx.header.authorization
    // console.log(authorization)
    const token = authorization.replace("Bearer ","")
    // console.log(token)
    // 验证token
    try{ 
        // 如果token过期了，会直接报出异常，用catch捕获，当过期异常时显示token过期
        const result = jwt.verify(token,PUBLIC_KEY,{
        // 这里使用公钥验证也要指定加密算法,这里是一个数组，可以存入多个算法，一个不行可以换另一个
            algorithms:["RS256"]
        })
        ctx.body = result
    }catch(error){
        // console.log(error.message)
        ctx.body = "token已过期，请重新登录"
    }
})

app.use(tokenRouter.routes())
app.use(tokenRouter.allowedMethods())


app.listen(8081,()=>{
    console.log("服务器启动成功")
})

