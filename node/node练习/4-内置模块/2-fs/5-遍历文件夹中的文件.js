const fs = require('fs')
const path = require('path')
const dirname = './newFile';
getFile(dirname)

//读取文件夹中的文件
// fs.readdir(dirname,(err,files) => {
//     console.log(files)
// })


// //递归调用遍历文件夹中的所有文件  方法一
// function getFiles(dir) {
//     //读取文件夹中的文件，withFileTypes:true表示读取时会读取到文件类型，输出一个对象格式
//     fs.readdir(dir,{withFileTypes:true},(err,files) => {
//         if (err){
//             console.log(err)
//         }else {
//             //遍历文件夹中的文件
//             for (let file of files){
//                 // 判断文件类型，是否为文件夹
//                 if (file.isDirectory()){
//                     //拼接上一个文件夹的路径，因为操作文件需要文件路径
//                     const filepath = path.resolve(dirname,file.name)
//                     getFiles(filepath)
//                 }else {
//                     console.log(file.name)
//                 }
//             }
//         }
//     })
// }



// //递归调用遍历文件夹中的所有文件  方法二
function getFile(dir){
    //获取当前文件夹中的文件
    fs.readdir(dir,(err,files) =>{
        if (err){
            console.log(err)
        }
        //遍历文件
        files.forEach(function (file) {
            //和上一个文件夹的路径进行拼接
            const filePath = path.resolve(dir,file)
            //读取文件信息
            fs.promises.stat(filePath).then(info => {
                //判断是否为文件夹
                if (info.isDirectory()){
                    //递归调用
                    getFile(filePath)
                }else
                    console.log(file)
            })
        })
    })
}
