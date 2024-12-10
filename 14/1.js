function Person(personName, age) {
    this.name = personName,
    this.age = age,
    this.getInfo = function() {
        return this.name + " age is " + this.age;
    }
}
let Alice = new Person("Alice", 28);
console.log (Alice.getInfo());