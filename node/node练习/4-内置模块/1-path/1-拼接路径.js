//加载path模块
const path = require("path");

const firstName = '../user/name';
const beginPath = 'my.tex';

//路径前面没有分割符(/或者./或者../)时resolve会返回根路径加上当前路径
//有/时以/为开始生成路径
//有./时返回根路径加上当前路径
//有../时返回上一个目录的路径加当前路径
const filePath1 = path.resolve(firstName,beginPath);

//join原样拼接
//有./时返回的值会去掉./
const filePath2 = path.join(firstName,beginPath);
console.log(filePath1);
console.log(filePath2);
