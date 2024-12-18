class Animal {
    constructor(name, age, legs, species, status) {
      this.name = name;
      this.age = age;
      this.legs = legs;
      this.species = species;
      this.status = status;
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, status);
        this.legs = 0;
        this.species = "shark";
    }
}
class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, status);
        this.legs = 4;
        this.species = "cat";
    }
    introduce(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old. Meow - meow`;
    }
}
class Dog extends Animal {
    constructor(name, age, status, master){
        super(name, age, status);
        this.legs = 4;
        this.species = "dog";
        this.master = master;
    }
    introduce(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old. Gaw - gaw`;
    }
    greetMster(){
        return `Hello, ${this.master}!`;
    }
}
sharki = new Shark("Sharki", 7, "eating");
bobik = new Dog("Bobik", 5, "Happy", "Nikita");
console.log(bobik.greetMster());