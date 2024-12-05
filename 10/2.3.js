function getSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; ++i){
        sum += arr[i];
    }
    return sum;
}
arrChisla = [3, 3, 0, 1, 14, 28];
console.log(getSum(arrChisla));