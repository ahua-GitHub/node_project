// 授权、权限验证中间件

const jwt = require('jsonwebtoken')
const {PUBLIC_KEY} = require('../app/config')
const authServer = require('../service/auth.server')
const errorTypes = require('../constants/error-type');




// token验证中间件
const authVerify = async(ctx,next)=>{
    console.log("token授权验证中间件~")
    // 1.获取token
    const authorization = ctx.headers.authorization;
    // 如果没有登录直接验证token，返回错误,这里对未登录进行处理
    if(!authorization){
        const error = new Error(errorTyples.UNAUTHORIZATION);
        ctx.app.emit('error',error,ctx)
    }
    const token = authorization.replace("Bearer ","")
    //2.验证token，这里验证成功的结果是之前颁发token（loginin.contorller.js）中的内容 
    try{
        const result = jwt.verify(token,PUBLIC_KEY,{
            algorithms:["RS256"]
        })
        // 这里将用户信息存放在user对象中，后面动态发布模块的时候可以直接获取到用户信息
        ctx.user = result
        await next()
    }catch(err){
        const error = new Error(errorTypes.UNAUTHORIZATION)
        ctx.app.emit('error',error,ctx)
    }
}

// 权限验证中间件
const permissionVerify = async(ctx,next)=>{
    console.log('权限验证中间件~')
    // 1.获取参数    
    
    // 实现权限验证中间件复用,通过url获取表名（要求前面对url接口的定义规范）
    // Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组
    const [resourceKey] = Object.keys(ctx.params) 
    const tableName = resourceKey.replace('Id','')
    const resourceId = ctx.params[resourceKey];
        // 当前登录的用户id
    const loginUserId = ctx.user.id

    // 2.查询是否具备操作该动态的权限
    try {
        const isPermission = await authServer.checkResource(tableName,resourceId,loginUserId)
        // console.log(isPermission)
        if(!isPermission) {
            throw new Error()
        }else{
            await next()
        }        
    }catch(error){
        const err = new Error(errorTypes.UNPERMISSION)
        ctx.app.emit('error',err,ctx)
    }

   
    
}

module.exports = {
    authVerify,
    permissionVerify
};