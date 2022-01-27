// 动态发布接口
const Router = require('koa-router')


// 验证登录
const {
    authVerify,
    permissionVerify
 } = require('../middleware/auth.middleware');

// 动态
const { 
    create,
    momentDetail,
    accurateMomentDetail,
    momentAll,
    momentAlter,
    momentDelete,
    addLabels
 } = require('../controller/moment.contorller');

 const {
     verifyLabel
 } = require('../middleware/lable.middleware')




const momentRouter = new Router({prefix:'/moment'});
momentRouter.post('/',authVerify,create)

// 获取某一条动态接口
// 需要获取该动态的id，不登录也是可以查看动态的，所以这里不需要登录验证
// 这个接口格式应该为localhost:moment/momentId
momentRouter.get('/:momentId',momentDetail)

// 获取某一条动态接口(包含标签和评论内容)
momentRouter.get('/accurate/:momentId',accurateMomentDetail)


// 获取多条动态接口
momentRouter.get('/',momentAll)

// 修改动态接口
momentRouter.patch('/:momentId',authVerify,permissionVerify,momentAlter)

// 删除动态接口
momentRouter.delete('/:momentId',authVerify,permissionVerify,momentDelete)
// 如果这条动态不存在，报错信息显示的是上一个中间件的error.message,如果需要考虑这个情况下面的代码可以对是否存在该动态进行验证
    //  try{
    //     const result = await momentServer.queryMomentById(momentId)
    //     if(!result){
    //         throw new Error()
    //     }
    // }catch(error){
    //     const err = new Error(errorTypes.MOMENTUNEXCITE)
    //     ctx.app.emit('error',err,ctx)
    // }

// 给动态添加标签
momentRouter.post('/:momentId/labels',authVerify,permissionVerify,verifyLabel,addLabels)

module.exports = momentRouter


