// console.log('hollow es modules')

// 导入方式
//方式一：import {} from '路径'
// import {name,age,message,sayHollow} from "./modules/modules.js";

//方式二：导出后可以定义别名
// import {name as iname,age as iage,sayHollow as isayHollow} from "./modules/modules.js";

//方式三：* as 自定义名 from ‘路径’，把要导入变量放到foo对象中作为他的属性
import * as foo from './modules/foo.js'


/*console.log(name)
console.log(age)
console.log(message)
sayHollow('阿花')*/

console.log(foo.name)
console.log(foo.age)
console.log(foo.message)
foo.sayHollow('阿花')




