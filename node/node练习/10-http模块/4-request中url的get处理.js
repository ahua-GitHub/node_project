const http = require('http')
    // 处理url的模块
const url = require('url')
    // 处理query的模块
const qs = require('querystring')
const server = new http.Server((req, res) => {
    // request对象中封装了客户端给我们服务器传递过来的所有信息 
    // if (res.url === '/login') {
    //     res.end('登录成功')
    // } else if (res.url === '/user') {
    //     res.end('用户列表')
    // } else {
    //     res.end('请求错误，请重试')
    // }



    // url.parse对url进行解析

    // console.log(url.parse(req.url))
    // res.end('请求结果')

    // 对url进行解析
    const { pathname, query } = url.parse(req.url)
    if (pathname === '/login') {
        // console.log(query)
        // qs的parse方法可以对query进行处理
        // 将字符串类型转换为js对象  username=ahua&password=123  -->  {username: 'ahua',password: 123}
        // console.log(qs.parse(query))
        const { username, password } = qs.parse(query)
        console.log(username, password)
        res.end('请求结果')

    }
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)
})
server.listen('8089', 'localhost', () => {
    console.log("serve启动成功")
})