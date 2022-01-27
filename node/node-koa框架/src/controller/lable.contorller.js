const labelServer = require('../service/label.server')

class labelContorller {
    // 创建标签
    async createLabel(ctx,next){
        const {name} = ctx.request.body
        const result = await labelServer.createLabel(name) 
        // console.log(result)
        ctx.body = `添加标签${name}成功`
    }
    // 查找标签
    async getLabels(ctx,next){
        const {limit,offset} = ctx.query
        const result = await labelServer.getLabels(limit,offset)
        ctx.body = result
    }

}


module.exports = new labelContorller()