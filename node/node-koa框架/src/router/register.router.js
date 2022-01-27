// 只负责注册接口 

// 导入koa-router库，对路径进行划分
const Router = require('koa-router')
// 导入user.contorller.js文件(接口的具体处理逻辑)
// user.contorller.js文件中写入用户数据的是一个类，所以通过
const { create } = require('../controller/user.contorller')
// 导入user.middleware.js文件 处理用户名和密码
const {
    verifyUser,
    encryPassword
} = require('../middleware/user.middleware')


// 定义前缀，相当于每一个userRouter的实例都会有一个'/user'的前缀
const userRouter = Router({ prefix: '/user' })

    // 请求路径和中间件处理映射  create处理创建用户相关请求 具体处理在controller/user.contorller.js文件里面
    // verifyuser 验证用户注传入的信息是否完整
userRouter.post('/',verifyUser,encryPassword,create)

module.exports = userRouter;