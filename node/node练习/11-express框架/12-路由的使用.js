const express = require('express')
const UserRouter = require('./12-router/users')

const app = express()

app.use('/user', UserRouter)

app.listen(8089, (req, res, next) => {
    console.log("路由服务器启动成功~")
})