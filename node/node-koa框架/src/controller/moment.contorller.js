// 实现动态相关功能

//将发布的动态插入数据库
const momentServer = require('../service/moument.server')

const create = async (ctx,next)=>{

    // 1.获取数据，（user_id谁发布的,comment动态内容等）
    // 前面已经登录时已经将用户信息存在了ctx.user对象中 
    const user_id = ctx.user.id;
    const comment = ctx.request.body.content;

    // 2.将数据插入到数据库中
    // 调用momentServer的createMoment方法，在moument.server中
    const result = await momentServer.createMoment(user_id,comment)
    // console.log(user_id,comment)
    ctx.body = result

}

// 获取单条动态
const momentDetail = async (ctx,next) =>{
    // 1.获取动态数据（moment.id）
    // get请求通过ctx.query.momentId去获取url后面的id，这个momentId是moment.router中定义的
    const momentId = ctx.params.momentId

    // 2.根据id去查询数据库中相应的内容
    const result = await momentServer.queryMomentById(momentId)
    ctx.body = result
    // ctx.body = "获取某条动态详情~" + momentId
}
// 获取单条动态(包含评论和标签内容)
const accurateMomentDetail = async (ctx,next) =>{
    // 1.获取动态数据（moment.id）
    // get请求通过ctx.query.momentId去获取url后面的id，这个momentId是moment.router中定义的
    const momentId = ctx.params.momentId
    // 2.根据id去查询数据库中相应的内容
    const result = await momentServer.accurateQueryMomentById(momentId)
      
    ctx.body = result
    // ctx.body = "获取某条动态详情~" + momentId
}

// 获取所有动态
const momentAll = async (ctx,next) =>{
    // 1.获取数据（根据offset和size偏移量和分页查询），通过url获取
    const {offset,size} = ctx.query;

    // 2.查询动态列表
    const result = await momentServer.queryMomentAll(offset,size)
    ctx.body = result
    // ctx.body = "全部的动态"
}

// 修改动态
const momentAlter = async (ctx,next) =>{
    console.log('修改动态中间件~')
    // 1.获取参数
    const {momentId} = ctx.params
    const {content} = ctx.request.body
    // 2.查询是否具备权限
    await momentServer.alertMoment(content,momentId)
    // console.log(result)
    ctx.body = `修改动态${momentId}为：${content}`
}

// 删除动态
const momentDelete = async (ctx,next)=>{
    console.log('删除动态中间件~')
    // 1.获取参数
    const {momentId} = ctx.params
    await momentServer.deleteMoment(momentId)
    ctx.body = `动态：${momentId}删除成功`
}
const addLabels = async (ctx,next) =>{
    // 1.获取标签和动态id
    // 在label.middleware中已经将标签和id放在了ctx的labels属性上了
    const {labels} = ctx
    const {momentId} = ctx.params
    // console.log(labels)
    // 2.添加所有标签
    for(label of labels){
        // 判断动态是否已经和动态有关系
        const isExist = await momentServer.hasLabel(momentId,label.id)
        if(!isExist){
            await momentServer.addLabel(momentId,label.id)
        }
    }
    ctx.body = `给动态${momentId}添加标签成功`
}

module.exports = {
    create,
    momentDetail,
    accurateMomentDetail,
    momentAll,
    momentAlter,
    momentDelete,
    addLabels
}