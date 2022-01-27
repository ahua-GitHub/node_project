const http = require('http')

// 创建http服务器,调用函数方式
const server1 = http.createServer((req, res) => {
    res.end("hollow server1")
})
server1.listen('8099', 'localhost', () => {
    console.log("serve1启动成功")
})


// 实例化类来创建http服务器
const server2 = new http.Server((req, res) => {
        res.end("hollow server2")
    })
    // 服务器打开的端口号
server2.listen('8089', 'localhost', () => {
    console.log("serve2启动成功")
        // 获取服务器的端口号
    console.log(server2.address().port)
})