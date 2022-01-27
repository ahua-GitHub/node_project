// 处理用户的数据操作(数据库)

// 导入database.js文件(用于连接数据库)
const connections = require('../app/database')
class UserServer {
    // 处理用户传递过来的一些参数
    async create(user) {
        // 解构
        const { name, password } = user;

        // 插入数据的sql语句
        const statement = `INSERT INTO users (name, password) VALUES(?,?);`;
        const result = await connections.execute(statement, [name, password]);
        console.log("将用户数据保存到数据库里：", user)
            // 将user存储到数据库中
        return result[0]
    }

    async getUserByName (name){
        const statement = `SELECT * FROM users WHERE name = ?`
        const result = await connections.execute(statement,[name])
        return result[0];
    }
}

module.exports = new UserServer() 