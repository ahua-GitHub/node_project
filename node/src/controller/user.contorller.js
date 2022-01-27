// 接口的具体处理逻辑 

// 导入user.service.js文件(数据查询操作)
const service = require('../service/user.service')

class UserContorller {
    async create(ctx, next) {
        // 获取用户请求传递过来的参数
        const user = ctx.request.body
            // 查询数据
        const result = await service.create(user)
            // 返回数据 
        ctx.body = result
    }
}

module.exports = new UserContorller()