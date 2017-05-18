/**
 * 람다함수 (arrow function)
 * 
 * - 익명 함수 또 다른 표현식 
 * 
 */
var x9=function()
{
console.log("x9");

};

x9();

var x99 = ()=>{
    console.log("x99");
};

x99();

var x10=function(x:number)
{
console.log(x);
};
// 람다함수로 ....

var x10r=(x:number)=>{
    console.log(x);
};
var x20r=(x:number,y:number)=>{
    console.log("x20r "+x+"\t"+y);
    
};
x20r(10,20);
var x30r=(x:number,y:number)=>
    //console.log("x20r "+x+"\t"+y);
    x+y;
;
console.log(x30r(10,20));

var x40r= x => x+10;

