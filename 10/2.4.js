function reversString(str){
    let arrStr = str.split('');
    let i = 0;
    let newStr = new Array();
    for(let j = arrStr.length - 1; i < arrStr.length && i >= 0; ++i && --j){
        newStr[i] = arrStr[j];
    }
    newStr = newStr.join('');
    return newStr;
}
let string_1 = ('Modsen');
console.log(reversString(string_1));