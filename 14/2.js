class Human{
        //методы и свойства объектов абстрактного класса мужчины
    };
class Woman{
    //методы и свойства объектов абстрактного класса женщины
}
Woman.prototype = Object.create(Human.prototype);
Woman.prototype.constructor = Woman;
class Man{
        //методы и свойства объектов абстрактного класса мужчины
}
Man.prototype = Object.create(Human.prototype);
Man.prototype.constructor = Man;
function createHuman(){
    let Adam = new Man();
    let Eva = new Woman();
    return [Adam, Eva];
}
console.log(createHuman());