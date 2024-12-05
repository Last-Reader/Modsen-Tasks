function objectDepth(obj) {
    if (obj === null || Array.isArray(obj)) {
        return 0;
    }
    if (typeof obj !== 'object' || obj === null) {
        return 0;
    }
    let depth = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            depth = Math.max(depth, objectDepth(obj[key]));
        }
    }
    return depth + 1;
}
let test = {a: 1, b: 2, c: {q: 10},f: {t: {y: 6}}};
console.log(objectDepth(test));