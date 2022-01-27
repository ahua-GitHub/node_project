//要想能使用bar.js中的内容就要导入bar的模块
define(['bar'],function (bar) {
    console.log(bar.name);
    console.log(bar.age);
    bar.sayHollow("ahua")
})
