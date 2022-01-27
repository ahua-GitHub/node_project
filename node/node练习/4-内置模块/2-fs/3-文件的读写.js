const fs = require('fs');

const content = "你好，阿花";
//写数据
fs.writeFile('./filename',content,{flag:"a"},err => {
    console.log(err)
})

//读数据不指定编码格式会输出一个buffer对象
fs.readFile('./filename','utf-8',(err,info) => {
    if(err){
        console.log(err)
    }
        console.log(info);
    }
)

