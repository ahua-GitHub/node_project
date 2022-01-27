const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()



// koa中是不能解析json和urlencoded格式的数据的
// 所以需要依赖第三方库才行
// npm install koa-bodyparser

// 先在前面调用这个函数，将其返回值作为中间件注册到app.use中去
app.use(bodyParser())

app.use((cxt, next) => {
    console.log(cxt.request.body)
    cxt.response.body = "hollow koa"
})

// 监听实例
app.listen('8089', () => {
    console.log("服务器参数解析")
})