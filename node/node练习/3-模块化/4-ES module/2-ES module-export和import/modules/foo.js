
//正常在文件中定义变量
const name = 'foo';
const age = 18;

let message = 'hollow world'

function sayHollow(name) {
    console.log('hollow' + name);
}




//方式二：将要导出的变量名放在export关键字后面的列表中
export {
     name,
     age,
     message,
    sayHollow
    }
//这里export后面的{}不是对象，关键字后面是可以跟{}的，只用来放置要导出变量的引用列表



//default默认导出
export default function () {
    console.log('这是默认default')
}
