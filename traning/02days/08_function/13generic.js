// generic 
var Box = (function () {
    function Box() {
    }
    Box.prototype.setValue = function (obj) {
        this.obj = obj;
    };
    Box.prototype.getValue = function () {
        return this.obj;
    };
    return Box;
}());
var b = new Box();
b.setValue("홍길동");
//b.setValue(11);
// 
console.log();
// generic 
var Box2 = (function () {
    function Box2() {
    }
    Box2.prototype.setValue = function (obj) {
        this.obj = obj;
    };
    Box2.prototype.getValue = function () {
        return this.obj;
    };
    return Box2;
}());
var b2 = new Box2();
b2.setValue(11);
//b.setValue(11);
// 
console.log();
// generic 
var Box3 = (function () {
    function Box3() {
    }
    Box3.prototype.setValue = function (obj) {
        this.obj = obj;
    };
    Box3.prototype.getValue = function () {
        return this.obj;
    };
    return Box3;
}());
var b3 = new Box3();
b3.setValue("ddd");
b3.setValue(11);
b3.setValue("ddd");
// 
console.log(b3.getValue());
// 문자열만 저장하고 싶음 
var b4 = new Box3();
//b4.setValue(123);//
b4.setValue("12");
var b5 = new Box3();
b5.setValue(123);
var Box4 = (function () {
    function Box4() {
    }
    Box4.prototype.setValue = function (obj) {
        this.obj = obj;
    };
    Box4.prototype.getValue = function () {
        return this.obj;
    };
    return Box4;
}());
var bbb = new Box4();
bbb.setValue("ddd");
var bbb2 = new Box4();
bbb2.setValue(12);
function aaaa(aa) {
    console.log(aa.getValue());
    console.log(aa.getValue());
    // type assertion : 형변환 , type 이 컴파일러 가 유추하는 것보다 더 정확하다는 것을 주장 
}
aaaa(bbb);
aaaa(bbb2);
