// 安装mysql2
// npm install mysql2

const mysql = require('mysql2')

// 1.创建数据库连接
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'ahua',
    user: 'root',
    password: '12345678'
});
// 2.编写mysql语句
const statement = `
    
    select * from products where price>8000;

`

// 3.查询
connection.query(statement, (err, result, fields) => {
    console.log(result)
        // 查询结束，如果终止的时候发生错误是可以通过connection.on监听到的
    connection.end(err);

    // connection.destroy()强制关闭
})

// 没有错误的时候会报错
// connection.on(err, () => {
//     console.log(err)
// })