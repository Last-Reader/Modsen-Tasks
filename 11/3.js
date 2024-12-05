function deadFish(arr){
    arr = arr.split('');
    result = new Array();
    let element = 0;
    let j = 0;
    for(let i = 0; i < arr.length; ++i){
        if (arr[i] == 'i'){
            element += 1;
        }
        else if (arr[i] == 'd'){
            element -= 1;
        }
        else if (arr[i] == 's'){
            element *= element;
        }
        else if (arr[i] == 'o'){
            result[j] = element;
            ++j;
        }
        else{
            return console.log('Element nomer ' + (i+1) + ' neverniy.')
        }
    }
    return console.log(result);
}
deadFish("iiiiddiosofo");