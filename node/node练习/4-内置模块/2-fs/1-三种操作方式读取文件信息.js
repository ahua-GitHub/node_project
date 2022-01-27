const fs = require('fs')

//案例：读取文件的信息（大小创建时间等，不是内容）
const fileContent = "./filename"

//一：同步操作
// const info = fs.statSync(fileContent)
// console.log(info)
// console.log("我是执行的操作")

//二：异步操作
//传入的两个参数一个是文件路径，一个是callback，callback里面有俩个参数，一个是err一个是获取的文件信息
// fs.stat(fileContent,(err,info) =>{
//     if (err){
//         console.log(err)
//         return
//     }
//     console.log(info)
// })
// console.log("我是执行的操作")

//三：Promise
fs.promises.stat(fileContent).then(info => {
    console.log(info)
}).catch(err =>{
    console.log(err)
})
console.log("我是执行的操作")

