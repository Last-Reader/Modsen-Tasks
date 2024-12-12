class Block{
    width; length; higth;
    constructor([width, length, higth]){
        this.width = width;
        this.length = length;
        this.higth = higth;
    }
    get width(){
        return this.width;
    }
    get length(){
        return this.length;
    }
    get higth(){
        return this.higth;
    }
    get volume(){
        return this.higth * this.length * this.width;
    }
    get surface_area(){
        return 2 * (this.higth * this.length + this.higth * this.width + this.width * this.length);
    }
}
let b = new Block([2, 4, 6]);
console.log(b.volume);
console.log(b.higth);
console.log(b.surface_area);