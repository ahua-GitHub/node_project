const http = require('http')
const url = require('url')
const qs = require('querystring')

const server = new http.Server((req, res) => {

    console.log(req.headers)

    // {D   
    // 'content-type': 'application/json', //请求携带的数据类型
    //     'user-agent': 'PostmanRuntime/7.28.2', //客户端相应信息，用户代理或者是浏览器的相关信息
    //     accept: '*/*',//告知服务器，客户端可以接受的文件类型
    //     'postman-token': 'ce8a1a6c-1db8-40a1-b590-cc82eb689cd3',
    //     host: 'localhost:8089',
    //     'accept-encoding': 'gzip, deflate, br',//告知服务器客户端支持的文件压缩格式
    //     connection: 'keep-alive',
    //     'content-length': '52'//文件的长度，当文件太大时，客户端会分次传输
    //   }
    res.end('请求结果')
})

server.listen('8089', 'localhost', () => {
    console.log("serve启动成功")
})