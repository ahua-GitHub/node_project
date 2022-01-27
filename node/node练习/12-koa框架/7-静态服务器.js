// koa依然不支持静态服务器，需要安装第三方库 npm install koa-static
const koa = require('koa')
const koaStatic = require('koa-static')

const app = new koa()

app.use(koaStatic('../static/'))

app.listen(8089, () => {
    console.log('静态服务器启动成功~')
})