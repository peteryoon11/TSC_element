var person={
FirstName : "Tom",
LastName : "Hanks",
sayHi: ()=>{
    return "Hi"
}

};

/**
 * 1. function typings
 * 
 * 2. function type 
 * 
 * 
 */

// 1. function typings
// 인자와 리턴 타입을 합쳐서 typrings 라고 함 
function a(n:string):number
{


    return 1;
}

//2. function type => 함수 데이터의 타입 

var a2:(n:string)=>number=a;
console.log(a2);
var kkk:string = "ddd";
