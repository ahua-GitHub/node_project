// const { json } = require('express')
const express = require('express')

const app = express()

app.get('/login', (req, res, next) => {
    // 解析客户端数据
    console.log(req.query)

    // // 原生方法
    //     // 定义返回给客户端数据的类型
    // res.type("application/json")
    //     // 以json数据格式返回
    // res.end(JSON.stringify({ name: "阿花", passname: "ahua" }))

    // express中的方法
    res.json({ name: "阿花", passname: "ahua" })
})


app.listen('8089', (req, res, next) => {
    console.log("服务器开启成功")
})