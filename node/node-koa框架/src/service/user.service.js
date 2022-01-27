 // 处理用户的详细数据操作(数据库)

// 导入database.js文件(用于连接数据库)
const connection = require('../app/database')
class UserServer {
    // 创建用户具体实现，获取用户传来的用户名和密码，然后将其写入数据库
    async create(user) {
        // 解构赋值
        const { name, password } = user;
        console.log(name,password) 
        // 插入数据的sql语句
        const statement = `INSERT INTO users (name,password) VALUES (?,?)`;
        const result = await connection.execute(statement,[name, password])
        console.log("将用户数据保存到数据库里：", user) 
        return result[0]
    }
// 从数据库中拿到用户名匹配的信息
    async getUserByName (name){
        const statement = `SELECT * FROM users WHERE name = ?;`
        const result = await connection.execute(statement,[name])
        // result中有两个内容，一个是用户信息，一个是一些用不上的字段
        // console.log(result[0])
        return result[0];
    }
}


module.exports = new UserServer() 