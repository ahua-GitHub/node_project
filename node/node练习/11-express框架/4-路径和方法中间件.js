// express的核心就是中间件,相当于promise

const express = require('express')
    // express本质是一个函数:createApplication

// 调用这个函数返回一个app,app本质上也是一个函数
const app = express()


// 就算请求的路径和方法都与下面的app.get匹配，也会只执行第一个中间件，除非有next指向下一个
app.use((req, res, next) => {
        console.log('普通中间件')
        next()
    })
    // 只有路径为/login,请求方法为get才能匹配成功
app.get('/login', (req, res, next) => {
    console.log('get方法')
    res.end('hollow get')
})
app.post('/login', (req, res, next) => {
    console.log('post方法')
    res.end('hollow post')
})



// 开启监听
app.listen(8089, () => {
    console.log('express体验成功')
})