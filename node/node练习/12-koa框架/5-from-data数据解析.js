const Koa = require('koa')
const multer = require('koa-multer')
const app = new Koa()




// koa中依然不支持解析from-data类型数据
// 需要依赖第三方库npm install koa-multer

const upload = multer()
    // 借助multer来解析任意的from-data类型的数据
app.use(upload.array())

app.use((cxt, next) => {
    // koa-multer将解析后的数据放到了req.body中了，相当于以前原生的http里面的那个request对象
    console.log(cxt.req.body)
        // request.body是koa里面自定义的一个对象
    console.log(cxt.request.body)
    cxt.response.body = "hollow koa"
})

// 监听实例
app.listen('8089', () => {
    console.log("服务器参数解析")
})