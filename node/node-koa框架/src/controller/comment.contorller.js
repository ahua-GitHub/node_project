// 评论相关接口
const commentServer = require('../service/comment.server')

class commentController {
// 发表评论
    async createComment(ctx,next) {
        const {momentId,content} = ctx.request.body
        // 在用户用户登录时已经设置存在了user属性中
        const {id} = ctx.user
        const result = await commentServer.createComment(content,momentId,id)
        ctx.body = `用户${id}评论动态${momentId}：${content}`
        
    } 
// 回复评论
    async replyComment(ctx,next){
        const {momentId,content} = ctx.request.body
        const {id} = ctx.user
        // 从url中拿到commendId
        const {commentId} = ctx.params
        const result = await commentServer.replyComment(content,momentId,id,commentId)
        ctx.body = `用户${id}回复评论${commentId}：${content}`
    }
// 删除评论
async deleteComment(ctx,next){
    const {commentId} = ctx.params
    const result = await commentServer.deleteComment(commentId)
    ctx.body = `评论${commentId}已删除`
}
// 获取评论列表
async commentList(ctx,next){
    const {momentId} = ctx.query;
    console.log(momentId)
    const result = await commentServer.getCommentById(momentId)
    ctx.body = result
}

}




module.exports = new commentController()