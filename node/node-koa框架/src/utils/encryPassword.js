// node中自带的库，用于加密数据
const crypto = require('crypto')

const md5Password = (password) => {
    // console.log('2')
    // 定义加密方式为md5，并返回一个对象
    const  md5 = crypto.createHash('md5');
    // 对密码进行加密，digest返回结果默认是buffer,hex表示将返回的结果以16进制的形式返回
    const result = md5.update(password).digest('hex');
    // console.log(result)
    return result;
}

module.exports = md5Password
