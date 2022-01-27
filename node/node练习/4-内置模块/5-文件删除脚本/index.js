const fs = require('fs')
const path = require('path')

const pathName = process.argv[2]

// const pathName = './text'

// 清空文件夹中的文件
deleteFile(pathName)
    // 删除空文件夹
dirdelete(pathName)

function deleteFile(pathNamedir) {
    // 读取文件夹内容
    const files = fs.readdirSync(pathNamedir)
        // 遍历文件夹
    files.forEach(function(file) {
        // 将上级目录的路径和文件名拼接=当前文件的路径
        const dirName = path.resolve(pathNamedir, file)
            // console.log(dirName)
        const stats = fs.lstatSync(dirName)
            // console.log(stats.isDirectory())
            // 如果是文件夹递归调用函数
        if (stats.isDirectory()) {
            deleteFile(dirName)
        } else {
            // 删除文件
            fs.unlinkSync(dirName)

        }
    })
}

function dirdelete(filesName) {

    files = fs.readdirSync(filesName)
    let num = 0

    if (files.length == 0) {
        fs.rmdirSync(filesName)
            // console.log(files.length)
    }
    if (files.length > 0) {
        files.forEach(file => {
            // console.log(file)
            num++
            const fileName = path.resolve(filesName, file)
            dirdelete(fileName)
                // console.log(num)
        })
        console.log(files.length)
        if (files.length == 0) {
            // console.log(filesName)
            fs.rmdirSync(filesName)
        }
    }
}