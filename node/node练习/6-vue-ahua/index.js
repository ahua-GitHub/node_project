#!/usr/bin/env node
 // 导入commander库
const program = require('commander');
// 导入help文件
const helpOptions = require('./lib/core/help')
    // 导入create文件
const createCommands = require('./lib/core/create')


// 绑定package.json的属性version，实现动态查看版本号
// 后面可以自定义去修改简写，但是会覆盖默认的-V，不过可以再定义一个
program.version(require('./package.json').version, '-v,--version');
program.version(require('./package.json').version);

// 帮助和可选信息
helpOptions()

// 创建指令
createCommands()

// 接收控制台输入的指令
program.parse(process.argv)