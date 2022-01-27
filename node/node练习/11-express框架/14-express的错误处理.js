const express = require('express')
const app = express()

const USER_ALREADY_EXISIS = "用户已经存在"
const USER_NOT_EXISIS = "用户不存在"

app.post('/login', (req, res, next) => {
    const flag = true
    if (!flag) {
        res.json(["登录成功"])
    } else {
        // next带参数就会执行错误的逻辑，也就是后面定义执行错误的中间件，而不会执行下一个中间件
        next(new Error(USER_NOT_EXISIS))
    }
})
app.post('/register', (req, res, next) => {
    const flag = true
    if (!flag) {
        res.json(["注册成功"])
    } else {
        next(new Error(USER_ALREADY_EXISIS))
    }
})

app.use((err, req, res, next) => {
    let status = 400
    let message = ""
    switch (err.message) {
        case USER_ALREADY_EXISIS:
            message = USER_ALREADY_EXISIS
            break
        case USER_NOT_EXISIS:
            message = USER_NOT_EXISIS
            break
        default:
            message = "not found"
    }
    res.status(status)
    res.json({
        status: status,
        message: message
    })
})





app.listen('8089', (req, res, next) => {
    console.log('服务器启动成功')
})