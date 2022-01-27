// let p = new Promise(function(resolve, reject) {
//     //做一些异步操作
//     setTimeout(function() {
//         console.log('执行完成Promise');
//         resolve('要返回的数据可以任何数据例如接口返回数据');
//     }, 2000);
// });

// then方法中接受两个回调，一个成功的回调函数，一个失败的回调函数，并且能在回调函数中拿到成功的数据和失败的原因
// resolve是对promise成功时候的回调
// reject就是失败的时候的回调
promiseClick();

function promiseClick() {
    let p = new Promise(function(resolve, reject) {
        setTimeout(function() {
            var num = Math.ceil(Math.random() * 20); //生成1-10的随机数
            console.log('随机数生成的值：', num)
            if (num <= 10) {
                resolve(num);
            } else {
                reject('数字太于10了即将执行失败回调');
            }
        }, 2000);
    })
    return p
}

promiseClick().then(
    function(data) {
        console.log('resolved成功回调');
        console.log('成功回调接受的值：', data);
    },
    function(reason) {
        console.log('rejected失败回调');
        console.log('失败执行回调抛出失败原因：', reason);
    }
);



// then里面的函数就跟我们平时的回调函数一个意思，能够在promiseClick这个异步任务执行完成之后被执行
// Promise的优势在于，可以在then方法中继续写Promise对象并返回，然后继续调用then来进行回调操作。
// 能把原来的回调写法分离出来，在异步操作执行完后，用链式调用的方式执行回调函数
// promise中的代码会在script执行时执行，但是then后面的回调会被加入到微任务队列中，等script代码执行完毕在执行
// 所以promise不会阻塞后面代码执行，也就是不会堵塞进程，是异步执行的
// promiseClick()
// .then(function(data){
//     console.log(data);
//     return runAsync2();
// })
// .then(function(data){
//     console.log(data);
//     return runAsync3();
// })
// .then(function(data){
//     console.log(data);
// });


// catch是用来捕获异常的，也就是和then方法中接受的第二参数rejected的回调是一样的
// 但是在执行resolve的回调（也就是上面then中的第一个参数）时，如果抛出异常了（代码出错了）
// 控制台就会报错，将进程卡死在这里
// 但是catch那么并不会报错卡死， 而是会进到这个catch方法中
// function promiseClick(){
//     let p = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             var num = Math.ceil(Math.random()*20); //生成1-10的随机数
//             console.log('随机数生成的值：',num)
//             if(num<=10){
//                 resolve(num);
//             }
//             else{
//                 reject('数字太于10了即将执行失败回调');
//             }
//         }, 2000);
//        })
//        return p
//    }

// promiseClick().then(
//     function(data){
//         console.log('resolved成功回调');
//         console.log('成功回调接受的值：',data);
//     }
// )
// .catch(function(reason, data){
//     console.log('catch到rejected失败回调');
//     console.log('catch失败执行回调抛出失败原因：',reason);
// });


// all方法提供了并行执行异步操作的能力，1.在所有异步操作执行完后  2.执行结果都是成功的时候才执行回调。
// all接收一个数组参数，这组参数为需要执行异步操作的所有方法，里面的值最终都算返回Promise对象。
// 等到它们都执行完后才会进到then里面。
// all会把所有异步操作的结果放进一个数组中传给then
// 然后再执行then方法的成功回调将结果接收，
// // 结果如下：（分别执行得到结果，all统一执行完三个函数并将值存在一个数组里面返回给then进行回调输出）
// function promiseClick1(){
//     let p = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             var num = Math.ceil(Math.random()*20); //生成1-10的随机数
//             console.log('随机数生成的值：',num)
//             if(num<=10){
//                 resolve(num);
//             }
//             else{
//                 reject('数字太于10了即将执行失败回调');
//             }
//         }, 2000);
//        })
//        return p
//    }
//    function promiseClick2(){
//     let p = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             var num = Math.ceil(Math.random()*20); //生成1-10的随机数
//             console.log('随机数生成的值：',num)
//             if(num<=10){
//                 resolve(num);
//             }
//             else{
//                 reject('数字太于10了即将执行失败回调');
//             }
//         }, 2000);
//        })
//        return p
//    }
//    function promiseClick3(){
//     let p = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             var num = Math.ceil(Math.random()*20); //生成1-10的随机数
//             console.log('随机数生成的值：',num)
//             if(num<=10){
//                 resolve(num);
//             }
//             else{
//                 reject('数字太于10了即将执行失败回调');
//             }
//         }, 2000);
//        })
//        return p
//    }

// Promise
//     .all([promiseClick3(), promiseClick2(), promiseClick1()])
//     .then(function(results){
//         console.log(results);
//     });






// race方法相反，谁先执行完成就先执行回调
// 先执行完的不管是进行了race的成功回调还是失败回调，其余的将不会再进入race的任何回调
// function promiseClick1(){
//     let p = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             var num = Math.ceil(Math.random()*20); //生成1-10的随机数
//             console.log('2s随机数生成的值：',num)
//             if(num<=10){
//                 resolve(num);
//             }
//             else{
//                 reject('2s数字太于10了即将执行失败回调');
//             }
//         }, 2000);
//        })
//        return p
//    }
//    function promiseClick2(){
//     let p = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             var num = Math.ceil(Math.random()*20); //生成1-10的随机数
//             console.log('3s随机数生成的值：',num)
//             if(num<=10){
//                 resolve(num);
//             }
//             else{
//                 reject('3s数字太于10了即将执行失败回调');
//             }
//         }, 3000);
//        })
//        return p
//    }
//    function promiseClick3(){
//     let p = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             var num = Math.ceil(Math.random()*20); //生成1-10的随机数
//             console.log('4s随机数生成的值：',num)
//             if(num<=10){
//                 resolve(num);
//             }
//             else{
//                 reject('4s数字太于10了即将执行失败回调');
//             }
//         }, 4000);
//        })
//        return p
//    }

// Promise
//     .race([promiseClick3(), promiseClick2(), promiseClick1()])
//     .then(function(results){
//         console.log('成功',results);
//     },function(reason){
//         console.log('失败',reason);
//     });