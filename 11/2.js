function numbers(){
    for(let i = 0; i < arguments.length; i++){
        if (typeof(arguments[i]) != 'number'){
            return console.log(false);
        }
    }
    return console.log(true);
}
numbers(1, 2, 'Tri', 4);