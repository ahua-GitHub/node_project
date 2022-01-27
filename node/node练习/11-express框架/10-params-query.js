const express = require('express')

const app = express()

// 相当于动态路由，后面的:id是根据客户端动态传过来的
// localhost:8089/products/123/ahua
app.get("/products/:id/:neme", (req, res, next) => {
    // 获取接口/products/后面的id,然后可以通过这个id去数据库里面查询商品数据，再通过res返回给客户端
    console.log(req.params)
    res.end("商品详情数据")
})
app.get("/login", (req, res, next) => {
    console.log(req.query)
    res.end("用户登录成功")
})
app.listen('8089', (req, res, next) => {
    console.log("服务器开启成功")
})