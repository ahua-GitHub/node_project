const http = require('http')
    // 处理url的模块
const url = require('url')
    // 处理query的模块
const qs = require('querystring')
const server = new http.Server((req, res) => {
    // 获取客户端传过来的url中的pathname
    const { pathname } = url.parse(req.url)
        // 判断是否为login
    if (pathname === '/login') {
        // 判断客户端发送的是否为post请求
        if (req.method === 'POST') {
            // 定义客户端床传过来数据的默认编码格式
            req.setEncoding('utf-8')
                // req.setEncoding('binary') binary定义二进制编码
                // 拿到body中的数据
                // body中的数据是通过流来写入的
                // 当监听到data事件，获取到输入流，也就是body中相关的内容，可以返回这个data的结果
            req.on('data', (data) => {
                // JSON.parse()把对象中的字符串转成js对象 
                //  {"username":"阿花","passward":"123"}  ---> {username: 'ahua',password: 123}
                const { username, passward } = JSON.parse(data)
                console.log(username, passward)
            })
        }
    }

    res.end('请求结果')

})
server.listen('8089', 'localhost', () => {
    console.log("serve启动成功")
})