const fs = require('fs')
const path = require('path')

const pathName = process.argv[2]

// const pathName = './text'

deleteFile(pathName)
function deleteFile(pathName){
    // 读取文件内容
    fs.readdir(pathName,{withFileTypes:true},(err,files) => {
        // 判断是否为空文件夹
        if(files.length==0){
            fs.rmdir(pathName,err => {
                if(err){
                    console.log(err)
                }
            })
        }else{
            // 遍历文件夹
            files.forEach(function (file) {
                // 将上级目录的路径和文件名拼接=当前文件的路径
                const dirName = path.resolve(pathName,file.name)
                // 如果是文件夹递归调用函数
                if (file.isDirectory()){
                    deleteFile(dirName)
                }else{
                    // 删除文件
                    fs.unlink(dirName,err => {
                        if (err){
                            console.log(err)
                        }
                    })
                }
            })
        }
    })
}
console.log('删除成功')