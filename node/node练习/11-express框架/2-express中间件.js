// express的核心就是中间件,相当于promise

const express = require('express')
    // express本质是一个函数:createApplication

// 调用这个函数返回一个app,app本质上也是一个函数
const app = express()


// 注册中间件（回调函数），可以发现并没有定义地址和端口，表明可以被任意的请求执行
app.use((req, res, next) => {
        console.log('中间件1')
            // res.end只是表示结束请求-响应的周期，并不影响next执行下一个中间件
        res.end('welcome back')
            // 执行完本中间件后继续查找执行能匹配的中间件
        next()
    })
    // 客户端发送网络请求之后，每个中间件都能匹配到请求·，但是只有第一个会响应
app.use((req, res, next) => {
    console.log('中间件2')

})
app.use((req, res, next) => {
    console.log('中间件3')
})

// app本身又有很多方法
// 开启监听
app.listen(8989, () => {
    console.log('express体验成功')
})