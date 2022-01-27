

// 导入中间件(写在index.js中)
const app = require('./app')

// 加载database.js文件(数据库操作) 这里并没有使用，只是加载一下判断是否连接成功
require('./app/database') 

// 导入config.APP_PORT
const config = require('./app/config')



// 启动服务器
app.listen(config.APP_PORT, () => {
    console.log(`服务器${config.APP_PORT}启动成功~`)
})

// main.js为主入口文件
// app->index.js主要用于注册组件，对app的一些操作
// .env环境变量的配置信息（dotenv库，可以用于加载根目录下的.env配置文件）
// router->路由相关文件
// contorller->路由的具体处理逻辑
// server->数据库处理
// middleware->中间件处理 

// npm install -y 生成package.json文件
// 启动文件  npm start     package.json中有定义主文件入口
// "start": "nodemon ./src/main.js"