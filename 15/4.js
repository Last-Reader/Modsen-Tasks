class Animal {
    constructor(name) {
      this.name = name;
    }
    speake() {
      return `Nichego ne return`;
    }
}
class Cat extends Animal {
    constructor(name){
        super(name);
    }
    speak() {
        return this.name + " speak meow";
    }
}
let willy = new Cat("Willy");
console.log(willy.speak());