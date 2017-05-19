// 1. duck typing 
var Sparrow = (function () {
    function Sparrow() {
        this.sound = "참새 짹짹";
    }
    return Sparrow;
}());
var Parrot = (function () {
    function Parrot() {
        this.sound = "앵무새 ㅇㅇ ";
    }
    return Parrot;
}());
var Duck = (function () {
    function Duck() {
        this.sound = "오리소리";
    }
    Duck.prototype.swim = function () {
        alert("오리 헤엄 ");
    };
    return Duck;
}());
var parrot = new Sparrow();
var sparrow = new Parrot();
var parrotTwo = new Duck();
console.log(parrot.sound);
console.log(sparrow.sound);
console.log(parrotTwo.sound);
