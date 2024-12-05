function isPrime(a){
    flag = true;
    for(let i = 2; i <= a/2; i++){
        if (a % i == 0){ 
            flag = false;
            break;
        }
    }
    return flag;
}
console.log(isPrime(19));