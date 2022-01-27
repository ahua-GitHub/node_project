const http = require('http')
const server = new http.Server((req, res) => {
    // request对象中封装了客户端给我们服务器传递过来的所有信息 
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)
    res.end("hollow server")

})
server.listen('8089', 'localhost', () => {
    console.log("serve启动成功")
})