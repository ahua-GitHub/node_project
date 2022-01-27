const fs = require('fs')

//fd为文件描述符
fs.open("./filename",(err,fd) =>{
  if (err){
      console.log(err)
      return
  }
  console.log(fd)
  // 通过文件描述符拿到文件信息
  //   fs.fstat(fd,(err,info) =>{
  //       if(err){
  //           console.log(err)
  //           return;
  //       }
  //       console.log(info)
  //   })
})
