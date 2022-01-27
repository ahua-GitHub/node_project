// express的核心就是中间件,相当于promise

const express = require('express')
    // express本质是一个函数:createApplication

// 调用这个函数返回一个app,app本质上也是一个函数
const app = express()

// 如果匹配的第一个中间件没有结束请求-响应周期（没有调用res.end）,
// 则必须调用next将控制权传递给下一个中间件，不然请求将一直处于挂起状态

// 监听默认路径
// app.get('/', (req, res, next) => {
//     res.end('hollow express')
// })


// app.post('/login', (req, res, next) => {
//     res.end('welcome back')
// })

// app本身又有很多方法
// 开启监听
app.listen(8989, () => {
    console.log('express体验成功')
})