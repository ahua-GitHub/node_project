// const Router = require('koa-router')

// const Multer = require('koa-multer')

// const avatarUpload = Multer({
//     dest:'./uploads'
// })

// const avatarHandler = avatarUpload.single('avatar')

// const {
//     verifyLogin,
// } = require('../middleware/login.middleware')


// const fileRouter = new Router({prefix:'/upload'})

// // 中间件:  登录验证  保存图像 
// fileRouter.post('/avatar',verifyLogin,avatarHandler)

// module.exports = fileRouter