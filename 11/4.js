function spread(func, arguments) {
    return func(...arguments);
}
function someFunction(...arr) {
    return arr;
}
let result = spread(someFunction, [2, 3, 'Bob']);
console.log(result);