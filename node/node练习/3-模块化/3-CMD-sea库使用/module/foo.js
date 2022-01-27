//定义
define(function (require,exports,module) {
    const name = 'foo';
    const age = 18;
    const sayHollow = function (name) {
        console.log('hollow'+name)
    }
//    导出

    module.exports = {
        name:name,
        age:age,
        sayHollow:sayHollow
    }
})
