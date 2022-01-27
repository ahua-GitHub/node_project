// 先拿到koa-router的类，先导入
const Router = require('koa-router')
    // 然后new 一个router,前缀prefix用于抽取url中的地址
    // 这样后面注册其他接口的时候路径就不用再去写这个users了
const router = new Router({ prefix: "/users" })

// 路由提供的方法来注册中间件
router.get('/', (ctx, next) => {
    ctx.response.body = "User lists~"
})
router.put('/', (ctx, next) => {
    ctx.response.body = "Put request~"
})

// 将路由导出
module.exports = router