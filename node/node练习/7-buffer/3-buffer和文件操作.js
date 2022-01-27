// sharp库，通过改变buffer值对图片、音视频文件进行操作npm install sharp

const fs = require('fs')
const sharp = require('sharp')
    // 读取图片文件
    // fs.readFile('./4.jpg', (err, data) => {
    //     console.log(data)
    // //将原图读到程序里面，是以buffer的形式在程序里面的，然后再将buffer的一个一个字节写入到jpg图片里面就实现了复制
    //     // 复制图片
    //     fs.writeFile('./foo.jpg', data, err => {
    //         console.log(err)
    //     })
    // })

// sharp('./4.jpg')
//     .resize(200, 200)
//     .toFile('./free.jpg')


sharp('./4.jpg')
    .resize(500, 500)
    .toBuffer()
    .then(data => {
        fs.writeFile('./ahua.jpg', data, err => {
            console.log(err)
        })
    })