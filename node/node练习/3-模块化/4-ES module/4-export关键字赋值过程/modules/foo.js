
let name = 'foo';

setTimeout(()=>{
    name='阿花'
},1000)


//export是关键字，在parsing阶段就已经解析了，js引擎解析的时候会创建一个
// 模块环境记录，会将上面的name与export中的name绑定，所以
// export中的变量引用了上面定义的变量而不是获取了上面变量的值，所以name改变导出的name也会改变
//index.js中也是引用的变量而不是获取的值
export {
    name
}
