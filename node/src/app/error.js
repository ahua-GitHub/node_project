const errorTypes = require("../constants/error-type");

// 错误处理
const errorHeader = (error, ctx) => {

    let status,message;
    switch(error.message){
        case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
        status = 404; //bad request
        message = "用户名或者密码不能为空";
        break;
        case errorTypes.USER_ALREADY_EXISTS:
        status = 409; //conflict
        message = "用户名已经存在";
        break;
        default :
        status = 404;
        message = 'NOT FOUND';
    }
    // console.log(ctx.body);
    ctx.status = status;
    // console.log('123')
    ctx.body = message;
};

module.exports = errorHeader;