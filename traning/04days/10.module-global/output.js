//import Test from 'test';
var mesg = "hello";
var TutorialPoint;
(function (TutorialPoint) {
    function add(x, y) {
        console.log(x + y);
    }
    TutorialPoint.add = add;
})(TutorialPoint || (TutorialPoint = {}));
// <reference path="../../03days/09_interface/09_interface.ts"/>
/*
a.ts 와 b.ts 가 같은 global module 에 속하기 때문에
접근 가능하다.
tsc a.ts b.ts -out output.js
*/
var mesg2 = mesg;
console.log("test a,b");
