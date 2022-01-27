// 导入配置
const config = require('./config')
// 导入mysql2
const mysql = require('mysql2')


// 创建连接池
const connections = mysql.createPool({
    port: config.MYSQL_PORT,
    host: config.MYSQL_HOST,
    database: config.MYSQL_DATABASE,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD
})

// 测试数据库是否连接成功
connections.getConnection((err, conn) => {
    conn.connect((err) => {
      if (err) {
        console.log("连接失败:", err);
      } else {
        console.log("数据库连接成功~");
      }
    })
  });

module.exports = connections.promise();