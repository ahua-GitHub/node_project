//定义
define(function (require,exports,module) {

//    导入
    const foo=require('./module/foo')
    console.log(foo.name);
    console.log(foo.age);
    foo.sayHollow("ahua")
})
