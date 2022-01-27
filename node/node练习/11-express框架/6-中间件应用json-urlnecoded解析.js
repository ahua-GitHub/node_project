// express的核心就是中间件,相当于promise
const express = require('express')
    // express本质是一个函数:createApplication

// 调用这个函数返回一个app,app本质上也是一个函数
const app = express()

// 自己编写的json解析
// app.use((req, res, next) => {
//     if (req.headers["content-type"] === 'application/json') {
//         // 提前对数据进行解析，然后传递给后面的中间件，免得每次调用中间件都要解析一次数据
//         req.on('data', data => {
//             // console.log(data.toString())
//             const info = JSON.parse(data.toString())
//                 // console.log(info)
//                 // 相当于给req对象身上加了一个属性叫body
//             req.body = info
//         })
//         req.on('end', () => {
//             next()
//         })
//     } else {
//         // next中不能传递参数，有错误的时候才会在next中传递参数
//         next()
//     }

// })


// 其实也不用自己手动的去解析这个数据，express中有对应的函数有类似功能
// 和上面实现的功能一样
// json格式解析
app.use(express.json())

// x-www-from-urlencoded格式
// false表明用node的内置模块querystring来解析
// true表示使用第三方库qs来解析
// urlencoded格式解析
app.use(express.urlencoded({ extended: true }))

app.post('/login', (req, res, next) => {

    // use中间件中将解析的数据放入到了req的bady属性里面
    console.log(req.body)
    res.end('welcome to home~')
})
app.post('/produces', (req, res, next) => {
    console.log(req.body)
    res.end('upload product info success~')
})



app.listen(8089, () => {
    console.log('express体验成功')
})