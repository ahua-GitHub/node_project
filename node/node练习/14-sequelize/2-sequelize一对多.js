// npm install sequelize   DataTypes定义字段类型  Model类  Op查询条件
const { create } = require('domain');
const { Sequelize, DataTypes, Model, Op, where } = require('sequelize')

const sequelize = new Sequelize('ahua', 'root', '12345678', {
    host: "localhost",
    dialect: "mysql"
});


class Brand extends Model {}
// 调用类的init方法
Brand.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    website: DataTypes.STRING,
    phoneRank: DataTypes.INTEGER,
}, {
    tableName: 'brand',
    // 开发规范里表中的记录的创建时间和更新时间都是默认有的，所以会加到查询的sql语句里
    createdAt: false,
    updatedAt: false,

    // 将上面定义的内容和Products联系起来
    sequelize
})

class Products extends Model {}
// 将Products类和products表建立映射
// 调用类的init方法
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
    score: DataTypes.DOUBLE,
    // 将brandId名称和brand_id名称映射在一起 
    brandId: {
        field: 'brand_id',
        type: DataTypes.INTEGER,
        // 定义外键
        references: {
            // 选择表
            model: Brand,
            // 选择字段
            id: 'id'
        }
    }
}, {
    tableName: 'products',
    // 开发规范里表中的记录的创建时间和更新时间都是默认有的，所以会加到查询的sql语句里
    // products表中没有所以这里设置为false
    createdAt: false,
    updatedAt: false,

    // 将上面定义的内容和Products联系起来
    sequelize
})

// 将两个表映射在一起
Products.belongsTo(Brand, {
    // Products通过外键从属于Brand
    foreignKey: 'brandId'
})

// 将对数据库的操作放在这个函数里
async function queryProducts() {
    const result = await Products.findAll({
        // 包含另一张表的联合查询
        include: {
            model: Brand
        }

    })
    console.log(result)
}
queryProducts()