const connection = require('../app/database')

class labelServer{
    // 将创建的标签写入数据库中
    async createLabel(name){
        const statement = `INSERT INTO label(name) VALUES (?)`
        const [result] = await connection.execute(statement,[name])
        return result
    }
// 在数据库中查找指定标签
    async selectLabel(name){
        const statement = `SELECT * FROM label WHERE name = ?`
        const [result] = await connection.execute(statement,[name])
        return result[0]
    }
// 在数据库中查找标签列表
    async getLabels(limit,offset){
        const statement = `SELECT * FROM label LIMIT ?,?`
        const [result] = await connection.execute(statement,[offset,limit])
        return result
    }

}

module.exports =new labelServer ()