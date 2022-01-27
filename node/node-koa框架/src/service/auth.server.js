// 权限查询

const connection = require('../app/database')


class authService {
    //验证用户是否有修改动态的权限
    async checkResource(tableName,momentId,userId){
// 这样不同的认证权限，传入的都会是对应的表名，实现复用
        const statement = `SELECT * FROM ${tableName} WHERE id = ? AND user_id = ?`
        // 查询失败，也就是登录用户和修改的动态不匹配时返回一个空数组（没有权限）
        const [result] = await connection.execute(statement,[momentId,userId]);
        if(result.length === 0){
            return false
        }else{
            return true
        }
    }

}

module.exports = new authService()