function checkNumber(number){
    let promise = new Promise(function(resolve, reject){
        if(number > 10){
            resolve(`Число ${number} больше десяти`);
        }
        else{
            reject(`Число ${number} меньше либо равно десяти`);
        }
    });
    if(number > 10){
        promise.then(result=> console.log(result));
    }
    else{
        promise.catch(error=> console.log(error));
    }
}
checkNumber(Math.random() * 10 + 5);