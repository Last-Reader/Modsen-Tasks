Array.prototype.square = function() {
    return this.map(a => a * a);
}
Array.prototype.cube = function() {
    return this.map(a => a * a * a);
}
Array.prototype.average = function() {
    let sum = this.reduce((sum, el) => sum + el, 0);
    return sum / this.length;
}
Array.prototype.sum = function() {
    let sum = this.reduce((sum, el) => sum + el, 0);
    return sum;
}
Array.prototype.even = function() {
    return this.filter(a => a % 2 == 0);
}
Array.prototype.odd = function() {
    return this.filter(a => a % 2 != 0);
}
let massiv = [1, 2, 3, 4, 5];
console.log(massiv.odd());