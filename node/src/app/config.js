// 在环境变量.env中读取配置信息，然后在需要使用的地方导入即可


// 1、比较粗鲁的读取方法就是通过文件读取.env文件里面的信息，然后对字符串进行截取

// 2、npm install dotenv
// 帮助我们加载在根目录下面的.env文件，而且直接将数据加载到环境变量process.env里面

// 处理项目的配置文件
const dotenv = require('dotenv')

// 调用之后.env配置文件里面的内容就会被加载到process.env这个对像里面了
dotenv.config()
// console.log(process.env.APP_PORT) 

// module.exports导出的是process.env对象,也就是.env文件里面的内容
module.exports = {
    // 相当于在process.env里的取出APP_PORT这些东西，然后放进对象里面，最后将对象导出
    APP_PORT,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_USER,  
    MYSQL_PASSWORD,
} = process.env;

// 这种导出方法也行
// const { APP_PORT } = process.env;
// module.exports = APP_PORT