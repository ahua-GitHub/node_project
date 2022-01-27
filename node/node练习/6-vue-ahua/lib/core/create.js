// 处理指令


// 导入commander库
const program = require('commander')
const { createProjectAction } = require('./actions')

const createCommands = () => {
    // command用于创建自定义指令的名称  hua create <自定义项目名> 参数1 参数2 ...表示可变长参数
    // description为指令定义一个描述
    // action回调函数用于执行指令，action的回调函数有多个参数
    program
        .command('create <project> [others...]')
        .description('clone repository into folder')
        .action(createProjectAction)

    // program
    //     .command('addcpn <component>')
    //     .description('add vue component,eg:hua addcpn holloword -d src/components')
    //     .action(createProjectAction)

}

module.exports = createCommands;