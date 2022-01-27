
// 导入error配置
const errorTypes = require('../constants/error-type');
// 导入user.service文件
const service = require("../service/user.service")
// 导入encryPassword文件（密码加密）
const md5Password = require("../utils/encryPassword")

// 验证用户名和密码是否正确
const verifyUser = async(ctx, next) => {
    // console.log(ctx.request.body)\
    // 1.获取用户名和密码
    const { name,password } = ctx.request.body;
    // console.log(name,password)
    // 2.判断用户名和密码不能为空
    if( !name){
        const error = new Error(errorTypes.NAME_IS_NULL);
        console.log(error.message)
        return ctx.app.emit('error', error, ctx)
    }
    if(!password ){
        const error = new Error(errorTypes.PASSWORD_IS_NULL);
        console.log(error.message)
        return ctx.app.emit('error', error, ctx)
    }
    // 3.判断用户名不重复
    const result = await service.getUserByName(name)
    // 拿到的不是空数组说明有这个用户，判断为重复，报错
    if(result.length){
        const error = new Error(errorTypes.USER_ALREADY_EXISTS);
        console.log(error.message)
        // 'error'是发出的事件，error，ctx是传入的参数
        return ctx.app.emit('error', error, ctx)
    }
   await next();

}

// 加密密码
const encryPassword = async (ctx,next)=>{
    // console.log('1')
    // 解构赋值拿到password
    const {password} = ctx.request.body;
    // 通过md5对密码加密后在重新赋值给body，后面通过body拿到的密码即为已经加密过的密码
    ctx.request.body.password = md5Password(password);
    // console.log('1')
    await next();
}


module.exports = {
    verifyUser,
    encryPassword
}