let arrChisla = [5, 10, 14, 8, 2, 30, 29];
function findMax(arr){
    let max = arr[0];
    for(let i = 0; i < arr.length; ++i){
        if (arr[i] > max) max = arr[i];    
    }
    return max;
}
console.log(findMax(arrChisla));