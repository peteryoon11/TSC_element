var str='tts';
var str2:number=<number><any>str;
console.log(str2, typeof str2);
console.log(str2);


var n2:number=((str as any)as number); 
// as 로 표현 하시오.
var k:string="hello";

var x:any="hello";

var x2:number=(<string>x).length;
// x.length 가 가능 

var x3:number=(x as string).length;

console.log(x2);

console.log(x3);
console.log(n2);