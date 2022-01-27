const connection = require('../app/database')

class commentServer {
    // 发布评论 
    async createComment (content,momentId,userId){
        // console.log(1)
        const statement = `INSERT INTO comment (content,moment_id,user_id) VALUES (?,?,?) `
        const [result] = await connection.execute(statement,[content,momentId,userId])
        return result
    }

    // 回复评论
    async replyComment (content,momentId,userId,commentId){
        const statement = `INSERT INTO comment (content,moment_id,user_id,comment_id) VALUES (?,?,?,?) `
        const [result] = await connection.execute(statement,[content,momentId,userId,commentId])
        return result
    }
// 删除评论
    async deleteComment (commentId){
        const statement = `DELETE FROM comment WHERE id = ?`
        const [result] = await connection.execute(statement,[commentId])
        return result

    }
    // 获取评论
    async getCommentById (momentId){
        const statement = `SELECT c.id,c.content,c.moment_id momentId,c.createAT creatTime,
                            JSON_OBJECT('id',u.id,'name',u.name) commentUser
                            FROM comment c
                            LEFT JOIN users u ON u.id = c.user_id
                            WHERE moment_id = ?
                        `
        const [result] = await connection.execute(statement,[momentId])
        return result
    }

    
    

}

module.exports = new commentServer ()