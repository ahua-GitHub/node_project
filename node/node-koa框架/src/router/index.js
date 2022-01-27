// 动态加载路由
// const fs = require('fs')
// 1.动态加载所有路由
// const useRouter = (app) => {
//     //获取当前目录下的所有文件名 
//     fs.readFileSync(__dirname).forEach(file=>{
//         // 如果是index.js则跳过
//         if(file === 'index.js') return;

//         // 导入路由文件
//         const router = require(`${file}`) 
//         // 注册路由
//         app.use(router.routes());
//         app.use(router.allowedMethods())
//     })

// }

// module.exports = useRouter




// 另一种动态加载路由的写法

// const useRouter = function() {
//     //获取当前目录下的所有文件名 
//     fs.readFileSync(__dirname).forEach(file=>{
//         // 如果是index.js则跳过
//         if(file === 'index.js') return;

//         // 导入路由文件
//         const router = require(`${file}`) 
//         // 注册路由，这里的this相当于app，app->index.js中调用useRouter方法相当于已经做了一个隐式绑定
//         在app->index.js中写 const useRouter = useRouter; app.useRouter();
//         this.use(router.routes());
//         this.use(router.allowedMethods())
//     })

// }
// module.exports = useRouter