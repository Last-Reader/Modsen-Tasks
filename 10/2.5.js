function vowelCounter(str){
    str = str.toLowerCase();
    let arrStr = new Array();
    arrStr = str.split('');
    let vowels = ['a', 'e', 'u', 'i', 'o'];
    let counter = 0;
    for(let i = 0; i < arrStr.length; ++i){
        for(let j = 0; j < vowels.length; j++){
            if (arrStr[i] == vowels[j]) {
                counter += 1;
            }
        }
    }
    return counter;
}
let str_1 = ('I love Modsen');
console.log(vowelCounter(str_1));