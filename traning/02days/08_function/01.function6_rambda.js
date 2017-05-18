/**
 * 람다함수 (arrow function)
 *
 * - 익명 함수 또 다른 표현식
 *
 */
var x9 = function () {
    console.log("x9");
};
x9();
var x99 = function () {
    console.log("x99");
};
x99();
var x10 = function (x) {
    console.log(x);
};
// 람다함수로 ....
var x10r = function (x) {
    console.log(x);
};
var x20r = function (x, y) {
    console.log("x20r " + x + "\t" + y);
};
x20r(10, 20);
var x30r = function (x, y) {
    //console.log("x20r "+x+"\t"+y);
    return x + y;
};
;
console.log(x30r(10, 20));
