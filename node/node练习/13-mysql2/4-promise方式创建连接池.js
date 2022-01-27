const mysql = require('mysql2')

const connections = mysql.createPool({
        host: "localhost",
        port: 3306,
        database: 'ahua',
        user: 'root',
        password: '12345678',
        connectionLimit: 10
    })
    //刚开始没有连接的时候会创建连接，等连接数达到10之后就不会在创建连接了


// 使用连接池connnections
// connections.getConnection() 获取某个连接然后再去使用这个连接
const statement = `
    select * from products where price > ? and score > ?;
`
connections.promise().execute(statement, [8000, 7]).then((result, fields) => {
    console.log(result)
}).catch(err => {
    console.log(err)
})

// sequelize  node中的orm