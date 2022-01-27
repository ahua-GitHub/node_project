// mysql语句执行过程   解析、优化、转化、执行  sql语句执行一次这四个过程就会经历一次
// 1.对mysql语句进行解析 
// 2.mysql引擎对语句进行简单的优化 
// 3.转换成mysql能够执行的命令
// 4.sql语句的执行

// 预处理好处一 提高性能
// 会把前面三个步骤先做好，最后一步执行的时候将数据传进去执行即可
// 当这个语句多次使用时只会执行最后一步，提高性能
//  select * from products where price > 8000 score > 7;
//  select * from products where price > ? score > ?;
//  prepare()  query(8000,7)

// 预处理好处二 防止sql注入
//正常语句
//   select * from user where username = abc and passward = 123; 
// sql注入语句 在sql语句后面多加一个条件而且这个条件永远成立，所以输入任意的账号密码都能登录成功
//   select * from user where username = abc and passward = 123 or 1=1;
// 为啥预处理能防止sql注入？
// 因为select * from products where price > ? score > ?；中除了数据以外其他的都是定好的
// 就算后面插入1=1，也是无效的因为预处理中没有这些语句


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
    select * from products where price > ? and score > ?;
`

// 3.执行mysql语句
//execuit相当于先执行prepare在执行query
connection.execute(statement, [8000, 7], (err, result, fields) => {
        console.log(result)
            // 查询结束，如果终止的时候发生错误是可以通过connection.on监听到的
        connection.end();

        // connection.destroy()强制关闭
    })
    // connection.on(err, () => {
    //     console.log(err)
    // })