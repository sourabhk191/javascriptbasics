// var getSeven = function () {
//     return 7;
// }

// function useFunction(fn) {
//     return fn();
// }

// // console.log(useFunction(getSeven));

// function returnFunction() {
//     return getSeven;
// }

// const exFunc = returnFunction();
// // console.log(exFunc());


// function sum(x, y) {
//     return x + y;
// }

// function subtract(x, y) {
//     return x - y
// }
// function multiple(x, y) {
//     return x * y
// }

// function calculatorFunction(fn, x, y) {
//     return fn(x, y)
// }

// console.log('sum > ',calculatorFunction(sum, 1, 2));
// console.log('subtrack > ', calculatorFunction(subtract, 1,2));

// callback

// function deliverproduct(name, callback) {
//     console.log('delivery Done of ' + name);
//     callback();
// }

// function successFunction() {
//     console.log('product has been successfull delivered');
// }

// deliverproduct('macbook', successFunction)

// callback hell

// getproduct(18, (product) => {
//     getuserinfo(prodcut.userid, (userinfo) => {
//         getaddress(userinfo.username, (address) => {
//             console.log(address);
//         })
//     })
// })

// function multiple(x) {
//     return x * 7;
// }

function multiple7() {
    return function (x) {
        return x * 7;
    }
}

const execFunc = multiple7()
// console.log(execFunc(5));

function sum(x) {
    return function (y) {
        return x + y;
    }
}

// console.log(typeof sum(1), sum(1)(2));

//set Interval

// var timerid = setInterval(function () {
//     console.log('Its time to drink water');
//     console.log(new Date());
//     clearInterval(timerid) 
// }, 5000);

// Set TimeOut

setTimeout(function () {
    console.log('First Task');
}, 1000);

setTimeout(function () {
    console.log('second Task');
}, 5000);

setTimeout(function () {
    console.log('third Task');
}, 3000);
