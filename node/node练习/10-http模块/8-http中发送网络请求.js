const { prototype } = require('events')
const http = require('http')

//发送网络请求
// 这里的res是拿到对服务器请求的结果
http.get('http://localhost:8088', res => {
    res.on('data', data => {
        console.log(data.toString())
    })

    res.on('end', () => {
        console.log('数据结束')
    })
})


// http发送post请求
const req = http.request({
            // 请求类型
            method: 'POST',
            hostname: 'localhost',
            port: 8088
        },
        res => {
            res.on('data', data => {
                console.log(data.toString())
            })

            res.on('end', () => {
                console.log('数据结束')
            })
        })
    // 表示请求结束,请求结束才会发送请求
req.end()