function wait(ms){
    return new Promise(function (resolve, reject){
        setTimeout(()=> resolve(`Задача выполнена спустя ${ms / 1000} секунд(ы)`), ms);
    })
}
wait(3000).then(result => {console.log(result)});