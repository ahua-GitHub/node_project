// main.js为主入口文件

// 导入中间件(写在index.js中)
const app = require('./app')

// 加载database.js文件(数据库操作) 这里并没有使用，只是加载一下判断是否连接成功
// require('./app/database') 

// 导入config.APP_PORT
const config = require('./app/config')



// 启动服务器
app.listen(config.APP_PORT, () => {

    console.log(`服务器${config.APP_PORT}启动成功~`)

})

// 启动文件  npm start     package.json中有定义主文件入口
// "start": "nodemon ./src/main.js"