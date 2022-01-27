

import {name,age,message,sayHollow} from "./modules/bar.js";




console.log(name)
console.log(age)
console.log(message)
sayHollow('阿花')

//default export如何导入
/*
import impute from './modules/modules.js'
impute();
*/


//import()函数
import('./modules/foo.js').then(res => {
    console.log('运行成功')
    console.log(res.name)
}).catch(err =>{
    console.log('运行错误')
})
