const connection = require('../app/database')

// 因为下面两个sql语句重复太多，可以将重复部分抽取出来
// const SQLfragment = `SELECT m.id id,m.conment conment,m.createAT createTime,m.updateAt updateTime,
//                     JSON_OBJECT('id',u.id,'name',u.name) author
//                     FROM moment m 
//                     LEFT JOIN users u ON m.user_id = u.id`


class momentServer {
    // 将动态插入数据库
    async createMoment (user_id,moment){
        // 插入数据库的sql语句
        const momentSQL = `INSERT INTO moment(conment,user_id) VALUES (?,?)`
        const result = await connection.execute(momentSQL,[moment,user_id]);
        return result 
    }
    // 根据commentId查询相应的动态(不含标签内容和评论内容)
    async queryMomentById (momentId){
        const querySQL = `SELECT m.id id,m.conment conment,m.createAT createTime,m.updateAt updateTime,
                            JSON_OBJECT('id',u.id,'name',u.name) author,
                            (SELECT COUNT(*) FROM comment c where c.moment_id = m.id ) commentNum,
                            (SELECT COUNT(*) FROM moment_label ml WHERE ml.moment_id = m.id ) labelsNum
                            FROM moment m 
                            LEFT JOIN users u ON m.user_id = u.id
                            WHERE m.id = ?
                        `
        const [result] = await connection.execute(querySQL,[momentId])
        return result[0]
    }
    // 根据commentId查询相应的动态(含标签内容和评论内容)
    // IF(expr1,expr2,expr3),sql里面相当于一个三元运算符，第一个是判断条件，第二个是成立的情况下执行，第三个是不成立的情况下执行
    async accurateQueryMomentById (momentId){
        const querySQL = `SELECT m.id id,m.conment conment,m.createAT createTime,m.updateAt updateTime,
                            JSON_OBJECT('id',u.id,'name',u.name) user,
                            IF(COUNT(c.id),JSON_ARRAYAGG(
                                JSON_OBJECT('id',c.id,'content',c.content,'momentId',c.moment_id,'createTime',c.createAT,
                                    'user',JSON_OBJECT('id',cu.id,'name',cu.name)
                                )
                            ),NULL) comments,
                            IF(COUNT(l.id),JSON_ARRAYAGG(
                                JSON_OBJECT('id',l.id,'name',l.name)
                            ),NULL) labels
                            FROM moment m 
                            LEFT JOIN users u ON m.user_id = u.id
                            LEFT JOIN comment c ON m.id = c.moment_id
                            LEFT JOIN users cu ON c.user_id = cu.id
                            LEFT JOIN moment_label ml ON m.id = ml.moment_id
                            LEFT JOIN label l ON l.id = ml.label_id 
                            WHERE m.id = ?
                        `
        const [result] = await connection.execute(querySQL,[momentId])
        return result[0]
    }
    // 根据偏移量和尺寸查询相应数量的动态
    async queryMomentAll (offset,size) {
        const querySQL = `SELECT m.id id,m.conment conment,m.createAT createTime,m.updateAt updateTime,
                            JSON_OBJECT('id',u.id,'name',u.name) author,
                            (SELECT COUNT(*) FROM comment c where c.moment_id = m.id ) commentNum,
                            (SELECT COUNT(*) FROM moment_label ml WHERE ml.moment_id = m.id ) labelsNum
                            FROM moment m 
                            LEFT JOIN users u ON m.user_id = u.id
                            LIMIT ?,?
                        `
        const [result] = await connection.execute(querySQL,[offset,size])
        return result
    }
    
    // 修改commentId这条动态
    async alertMoment (content,momentId) {
            const statement = `UPDATE moment SET conment = ? WHERE id = ?;`
            const [result]  = await connection.execute(statement,[content,momentId])
            return result        
    }

    // 删除commentId这条动态
    async deleteMoment (momentId) {
        const statement = `DELETE FROM moment WHERE id = ?`
        const [result] = await connection.execute(statement,[momentId])
        return result
    }

    // 在moment_label表中查询是否已经存在当前记录
    async hasLabel (momentId,labelId){
        const statement =  `SELECT * FROM moment_label WHERE moment_id = ? AND label_id = ?`
        const [result] = await connection.execute(statement,[momentId,labelId])
        return result[0] ? true : false
    }

    // 在moment_label表中查询是否已经存在当前记录
    async addLabel (momentId,labelId){
        const statement = `INSERT INTO moment_label (moment_id,label_id) VALUES (?,?)`
        const [result] = await connection.execute(statement,[momentId,labelId])
        return result
    }
    

} 

module.exports = new momentServer()