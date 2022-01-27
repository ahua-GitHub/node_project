// 登录接口

const Router = require('koa-router');
// 验证用户
const {
    verifyLogin,
} = require('../middleware/login.middleware')

const {
    authVerify
} = require('../middleware/auth.middleware')
// 用户登录
const {
    login,
    success
} = require('../controller/loginin.contorller')





// const logininRouter = Router({ prefix: '/login' })
// logininRouter.post('/',verifyLogin,login)


const loginRouter = new Router;
loginRouter.post('/login',verifyLogin,login)
// verifyLogin对用户的验证通过后就可以在login中开始颁发token令牌了
loginRouter.get('/auth',authVerify,success)



module.exports = loginRouter