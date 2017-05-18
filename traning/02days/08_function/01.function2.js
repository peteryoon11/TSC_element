var Stu = (function () {
    function Stu(name, age) {
        this.name = name;
        this.age = age;
    }
    Stu.prototype.getInfo = function () {
        return this.name + "\t" + this.age;
    };
    return Stu;
}());
function changeName(ss) {
    ss.name = "이순신";
}
var s = new Stu("홍길동", 20);
console.log(s.getInfo());
changeName(s);
console.log(s);
var tt = ['A', 'B', 'C'];
function changeArr(t) {
    t[0] = 'AAAAA';
}
console.log(tt);
changeArr(tt);
console.log(tt);
