
// 导入user.service.js文件(数据查询操作)
const service = require('../service/user.service')


class UserContorller {
    async create(ctx, next) {
        // console.log('3')
        // 获取用户请求传递过来的参数（koa-bodyparser处理了用户传递过来的json文件）
        const user = ctx.request.body
            // 创建用户
        const result = await service.create(user)
            // 返回创建结果
        ctx.body = result
    }
}

module.exports = new UserContorller()