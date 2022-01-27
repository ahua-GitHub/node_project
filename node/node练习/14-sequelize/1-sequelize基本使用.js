// npm install sequelize   DataTypes定义字段类型  Model类  Op查询条件
const { create } = require('domain');
const { Sequelize, DataTypes, Model, Op, where } = require('sequelize')

const sequelize = new Sequelize('ahua', 'root', '12345678', {
    host: "localhost",
    dialect: "mysql"
});

// 如果想用sequelize操作表，需要先将这个表映射到类中 通过两者之间的关系映射  就可以通过这个类去操作数据库表了
// 方法一：sequelize.define
// 方法二：继承Model类
class Products extends Model {}
// 将Products类和products表建立映射
// 调用类的init方法
//一条数据会创建一个实例
Products.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    price: DataTypes.DOUBLE,
    score: DataTypes.DOUBLE
}, {
    tableName: 'products',
    // 开发规范里表中的记录的创建时间和更新时间都是默认有的，所以会加到查询的sql语句里
    // products表中没有所以这里设置为false
    createdAt: false,
    updatedAt: false,

    // 将上面定义的内容和Products联系起来
    sequelize
})

// 将对数据库的操作放在这个函数里
async function queryProducts() {
    //Products.findAll 查询数据库中products中所有的内容 
    // 现在Prducts类就相当于products表，通过操作Productors类来操作products表
    // const result = await Products.findAll({
    //     // 定义查询条件
    //     where: {
    //         price: {
    //             // lt表示= gte表示 >= gt表示>  lt表示< lte表示<=
    //             [Op.gte]: 8000
    //         }
    //     }
    // });

    // 插入数据
    // const result = await Products.create({
    //     title: "三星",
    //     price: 9999,
    //     score: 9.5
    // })

    // 更新数据
    // const result = await Products.update({
    //     price: 19999
    // }, {
    //     where: {
    //         id: 1
    //     }
    // })

    // 删除数据
    const result = await Products.delete({
        where: {
            id: 1
        }
    })

    console.log(result)
}
queryProducts()

// 测试连接状态
// sequelize.authenticate().then(() => {
//     console.log("连接成功")
// }).catch(err => {
//     console.log("连接失败")
// })

//