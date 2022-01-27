// express的核心就是中间件,相当于promise

const express = require('express')
    // express本质是一个函数:createApplication

// 调用这个函数返回一个app,app本质上也是一个函数
const app = express()


// 多个路径中间件只会执行第一个，除非有next会按next顺序执行
app.use('/login', (req, res, next) => {
    console.log('我是1')
    res.end('hollow 中间件')
})
app.use('/login', (req, res, next) => {
    console.log('我是2')
    res.end('hollow 中间件')
})
app.use('/login', (req, res, next) => {
    console.log('我是3')
    res.end('hollow 中间件')
})

// app本身又有很多方法
// 开启监听
app.listen(8089, () => {
    console.log('express体验成功')
})