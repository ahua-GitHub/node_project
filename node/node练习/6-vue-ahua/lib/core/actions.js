// 存放执行指令的代码


// 内置模块
// 将异步的回调函数转换为promisify形式
const { promisify } = require('util');
// const path = require('path');

// 导入的模块
// download将获得promisify的属性
const download = promisify(require('download-git-repo'));
// 帮助打开浏览器的库
const open = require('open');

// 自己的模块
const { vueRepo } = require('../config/repo-config');
const { commandSpawn } = require('../utils/terminal');

// callback -> promisify(函数) -> Promis -> async await(同步执行)
const createProjectAction = async(project) => {
    console.log("why helps you create your project~")

    // 1.clone项目
    await download(vueRepo, project, { clone: true });

    // 2.执行npm install
    // windows上执行的其实并不是npm,而是npm.cmd，需要判断是否为win
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    await commandSpawn(command, ['install'], { cwd: `./${project}` })

    // 3.运行npm run serve,不用await同步，因为npm run serve会堵塞后面的进程，ctrl+c后run才会结束
    commandSpawn(command, ['run', 'serve'], { cwd: `./${project}` })

    //4.打开浏览器
    open("http://localhost:8081/")
}

// 添加组件的action
// const addCpnAction = (component, dest) => {


// }


module.exports = {
    createProjectAction
}