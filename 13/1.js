const objA = { a: 10, b: 20, c: 30};
const objB = { a: 3, c: 6, d: 3};
function combine(obj1, obj2) {
    obj3 = new Object;
    let flag = false;
    let arr1 = new Array;
    let arr2 = new Array;
    let result = new Array;
    arr1 = Object.entries(obj1);
    arr2 = Object.entries(obj2);
    result = arr1;
    for(let i = 0; i < arr2.length; ++i){
        for(let j = 0; j < arr1.length; ++j){
            if(arr1[j][0] == arr2[i][0]){
                result[j][1] = arr1[j][1] + arr2[i][1];
                flag = true;
            }
        }
        if(flag == false){
            result.push(arr2[i]);
        }
        flag = false;
    }
    obj3 = Object.fromEntries(result);
    return obj3;
}
console.log(combine(objA, objB));