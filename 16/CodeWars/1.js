function newFunction() {
    return new Promise(function(resolve, reject) {
        let resultat = Math.random() * 10;
        setTimeout(() => resolve(resultat), 11000);
    });
}
newFunction().then(result => {
    console.log(result);
});