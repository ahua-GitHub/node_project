//标签路由
const Router = require('koa-router')
const {
    authVerify
} = require('../middleware/auth.middleware')
const {
    createLabel,
    getLabels
} = require('../controller/lable.contorller')

const labelRouter = new Router({prefix:'/label'})

// 创建标签
labelRouter.post('/',authVerify,createLabel)
// 获取标签
labelRouter.get('/',getLabels)


module.exports = labelRouter

