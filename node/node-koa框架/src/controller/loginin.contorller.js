  // 用户登录操作

// 使用jsonwebtoken的库，实现非对称加密
const jwt = require('jsonwebtoken')
const {
    PRIVATE_KEY
} = require('../app/config')


class loginFeedback {
    // 用户登录中间件
    async login(ctx,next){
        // console.log(ctx.user)
        // 将登录的用户id和name放到ctx的user属性里面，后续使用都可以通过user拿到
        const {id,name} = ctx.user;
        // 颁发token令牌
        const token = jwt.sign({id,name},PRIVATE_KEY,{
            // 过期时间s
            expiresIn:360,
            // 加密算法，rs算法用于非对称加密
            algorithm:"RS256"
        })
        ctx.body = { id,name,token }
        // ctx.body= `你好${name},欢迎回来`
    }    

    // 验证token成功后的实现
    async success(ctx,next){
        ctx.body = "验证成功" 
    }

}

module.exports = new loginFeedback()