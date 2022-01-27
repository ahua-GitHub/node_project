const http = require('http')

// 创建http服务器
const server = http.createServer((req, res) => {
        res.statusCode = 200
            // res本质上继承了stream.Writable的类
            // 向客户端发送完响应头和正文后告诉服务器本次消息传输结束
        res.end("hollow server")
            // 相当于res.writer("hollow")+res.close()
    })
    // 开启服务器   
server.listen('8088', 'localhost', () => {
    console.log("启动成功")
})