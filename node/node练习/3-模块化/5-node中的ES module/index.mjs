//在node中支持ES module需要在package.json中设置module属性
//或者将文件后缀名改为.mjs
import {name,age} from "./modules/foo.mjs";
console.log(name)
console.log(age)
