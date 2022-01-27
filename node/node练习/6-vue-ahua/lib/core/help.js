// 定义帮助和可选信息

const program = require('commander')
const helpOptions = () => {
    // 增加可选参数options
    program.option('-a --hua', 'ahua vue')
    program.option('-d --dest <dest>', 'a destnation folder')
    program.option('-f --framework <framework>', 'your frameword')
        // 监听指令
    program.on('--help', function() {
        console.log(" ")
        console.log("other")
        console.log("  other options~~~")
    })
}

// 将helpOptions内容导出
module.exports = helpOptions