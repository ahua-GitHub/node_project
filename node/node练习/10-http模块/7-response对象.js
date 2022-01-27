const http = require('http')


// 创建http服务器
const server = http.createServer((req, res) => {

    // // 设置http状态码
    // // 方式一：直接给属性赋值
    // res.statusCode = 401
    //     // 方式二:和head一起设置
    // res.writeHead(503, {
    //     "Content-Type": "text/pain"
    // })

    // 设置响应header
    res.setHeader("Content-Type", "text/html")

    // 响应结果
    res.end("<h1>hollow server</h2> ")
})






server.listen('8089', 'localhost', () => {
    console.log("启动成功")
})