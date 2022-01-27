
// 导入error配置
const errorTypes = require('../constants/error-type');
// 导入user.service文件
const service = require("../service/user.service")

// 验证用户名和密码是否正确
const verifyUser = async(ctx, next) => {
    // console.log(ctx.request.body)
    // 1.获取用户名和密码
    const { name, password } = ctx.request.body;
    // console.log(name,password)
    // 2.判断用户名和密码不能为空
    if (!user || !password) {
        const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED);
        return ctx.app.emit('error', error, ctx)
    }
    // 3.判断用户名不重复
const result = await service.getUserByName(name)
    console.log(result[0])
    if(result.length){
        const error = new Error(errorTyples.USER_ALREADY_EXISTS);
        return ctx.app.emit('error', error, ctx)
    }


    await next();

}

module.exports = {
    verifyUser
}