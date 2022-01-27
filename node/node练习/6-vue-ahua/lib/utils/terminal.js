// 开启子进程
// es6可变数组...

/**
 * 执行终端命令相关的代码
 */
const { spawn } = require('child_process');

// npm install 
const commandSpawn = (...args) => {
    return new Promise((resolve, reject) => {
        const childProcess = spawn(...args);
        childProcess.stdout.pipe(process.stdout);
        childProcess.stderr.pipe(process.stderr);
        childProcess.on("close", () => {
            resolve();
        })
    })
}



module.exports = {
    commandSpawn
}