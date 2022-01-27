
//正常在文件中定义变量
const name = 'foo';
const age = 18;

let message = 'hollow world'

function sayHollow(name) {
    console.log('hollow' + name);
}

//变量的导出方式
//方式一：直接在前面加export
/*export const name = 'modules';
export const age = 18;

export let message = 'hollow world'

export function sayHollow(name) {
    console.log('hollow' + name);
}*/

//方式二：将要导出的变量名放在export关键字后面的列表中
export {
     name,
     age,
     message,
    sayHollow
    }
//这里export后面的{}不是对象，关键字后面是可以跟{}的，只用来放置要导出变量的引用列表

//方式三： 导出时可以给变量起别名
/*
export {
    name as nname,
    age as nage,

    message as nmessage,

    sayHollow as  nsay
}
*/



