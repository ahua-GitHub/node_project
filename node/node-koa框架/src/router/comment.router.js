// 评论路由

const Router = require('koa-router')

const {
    createComment,
    replyComment,
    deleteComment,
    commentList
} = require('../controller/comment.contorller')

const {
    authVerify,
    permissionVerify
} = require('../middleware/auth.middleware')

const commentRouter = new Router({prefix:'/comment'})
// 评论动态
commentRouter.post('/',authVerify,createComment)
// 回复评论   commentId(回复的是哪一条评论)
commentRouter.post('/:commentId/reply',authVerify,replyComment)
// 删除评论
commentRouter.delete('/:commentId/delete',authVerify,permissionVerify,deleteComment)
// 获取评论列表
commentRouter.get('/',commentList)






module.exports = commentRouter