const errorTypes = require("../constants/error-type");

// 错误处理
const errorHeader = (error, ctx) => {
    // console.log(error.message)
    let status,message;
    switch(error.message){

        case errorTypes.NAME_IS_NULL:
        status = 404; //bad request
        message = "用户名为空";
        break;
        
        case errorTypes.PASSWORD_IS_NULL:
        status = 404; //bad request
        message = "密码为空";
        break;

        case errorTypes.USER_ALREADY_EXISTS:
        status = 409; //conflict
        message = "用户名已经存在";
        break;

        case errorTypes.USER_NOT_EXISTS:
        status = 409; //conflict
        message = "该用户不存在";
        break;

        case errorTypes.USER_PASSWORD_INCORRECT:
        status = 404; //conflict
        message = "密码错误";
        break;

        case errorTypes.UNAUTHORIZATION:
        status = 401; //conflict
        message = "无效的token~";
        break;

        case errorTypes.UNPERMISSION:
        status = 407; //conflict
        message = "没有权限~";
        break;

        case errorTypes.MOMENTUNEXCITE:
        status = 404; //conflict
        message = "该动态不存在~";
        break;

        default : 
        status = 404;
        message = 'NOT FOUND~';
    }
    // console.log(ctx.body);
    ctx.status = status;
    // console.log('123')
    ctx.body = message;
};

module.exports = errorHeader;