function step1(){
    return new Promise(function(resolve, reject){
        setTimeout(()=> resolve(`Шаг 1 выполнен спустя 1 секунду`), 1000);
    })
}
function step2(){
    return new Promise(function(resolve, reject){
        setTimeout(()=> resolve(`Шаг 2 выполнен спустя 2 секунды`), 1000);
    })
}
step1().then(result => {console.log(result)
    return step2().then(result => {console.log(result)});
})