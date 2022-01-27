//定义模块
define(function () {
    const name = 'bar';
    const age = 18;
    const sayHollow = function (name) {
        console.log('hollow'+name)
    }

    // 想要能被其他模块使用就要定义的东西导出
    return{
        name: name,
        age : age,
        sayHollow : sayHollow
    }
})


