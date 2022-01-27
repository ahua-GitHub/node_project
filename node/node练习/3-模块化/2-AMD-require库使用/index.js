(function () {
//require全局对象在require.js中定义过，可以直接使用
//require在函数里面可以直接访问到函数外层作用域的东西的
//config，在使用前需要配置一下路径，在paths里写上所有模块一一对应的关系
require.config({
    paths:{
        "bar":"./modules/bar",
        "foo":"./modules/foo",
    }
});

//强制执行foo模块
require(["module"],function (foo) {

})

})()
