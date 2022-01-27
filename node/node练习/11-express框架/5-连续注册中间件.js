// express的核心就是中间件,相当于promise

const express = require('express')
    // express本质是一个函数:createApplication

// 调用这个函数返回一个app,app本质上也是一个函数
const app = express()

app.get('/login', (req, res, next) => {
    console.log('连续中间件一')
    next()
}, (req, res, next) => {
    console.log('连续中间件二')
    next()
}, (req, res, next) => {
    console.log('连续中间件三')
    res.end('hollow 连续中间件')
})



app.listen(8089, () => {
    console.log('express体验成功')
})