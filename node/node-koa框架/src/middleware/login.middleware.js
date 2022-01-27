// 验证用户是否存在

const Server = require('../service/user.service')
const md5Password = require('../utils/encryPassword')
const errorTypes = require('../constants/error-type');


const verifyLogin = async(ctx,next) => {

    // 1.获取用户名和密码
    const { name,password } = ctx.request.body;

    // 2.判断登录用户名或者密码是否为空
    if( !name ){
        const error = new Error(errorTypes.NAME_IS_NULL);
        console.log(error.message)
        return ctx.app.emit('error', error, ctx)
    }
    if( !password ){
        const error = new Error(errorTypes.PASSWORD_IS_NULL);
        console.log(error.message)
        return ctx.app.emit('error', error, ctx)
    }


    // console.log(name,password) 
    // 3.判断数据库中该用户是否存在

    // 获取数据库中该用户信息
    const userinfo = await Server.getUserByName(name);
    // 如果不存在该用户信息
    if( !userinfo.length ){
        // console.log(1)
        const error = new Error(errorTypes.USER_NOT_EXISTS);
        console.log(error.message)
        return ctx.app.emit('error',error,ctx)
    }
    
    // 4.判断密码是否匹配

    // 拿到3中查询到的用户信息中的密码
    // console.log(userinfo[0])
    const userPassword  = userinfo[0].password
    if(md5Password(password) !== userPassword){
        const error = new Error(errorTypes.USER_PASSWORD_INCORRECT)
        console.log(error.message)
        return ctx.app.emit('error',error,ctx)
    }
 
    // 给ctx对象设置一个user对象，然后将查询验证过的用户信息放入user对象中
    // 在之后的登录操作中可以拿到这个user信息去颁发token令牌
    ctx.user = userinfo[0]

    await next()

}



module.exports = {
    verifyLogin,
};