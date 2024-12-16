let task1 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('Задача 1 выполнена'), 1000);
});
let task2 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('Задача 2 выполнена'), 2000);
});
let task3 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('Задача 3 выполнена'), 3000);
});
Promise.all([task1, task2, task3]).then(result => {
    for (let i = 0; i < result.length; i++) {
        setTimeout(() => {
            console.log(result[i]);
        }, 1000 * (i + 1));
    }
});