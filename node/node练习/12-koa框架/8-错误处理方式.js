const koa = require('koa')

const app = new koa()

app.use((cxt, next) => {
    const flag = true
        // 如果未登录则抛出一个错误
    if (flag) {
        // cxt中存在app这个对象 erro用于定义错误信息 new error将错误信息抛出  
        cxt.app.emit('error', new Error("您还没有登录"), cxt)
    }
})

// 拿到抛出的错误，用on监听error后可以拿到错误信息和cxt
app.on('error', (err, cxt) => {
    cxt.status = 401;
    cxt.body = err.message;
})



app.listen(8089, () => {
    console.log("错误处理服务器")
})