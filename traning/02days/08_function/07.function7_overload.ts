// 1. 함수 선언
function disp(n:number):void;
function disp(n:number,s:string):void;

function disp(n:number,s:string,n2:number):void;

function disp(n:number,s?:string,n2?:number)
{
console.log(n,s,n2);
}

disp(1);

disp(1,'2');
disp(1,'2',3);

// 1. 함수선언 
function disp2(n:number):void;
function disp2(n:string,s:string):void;
function disp2(n:string,s:boolean):void;
function disp2(n:string,s:number):void;

function disp2(n:string,s:number,n2:string):void;

function disp2(n:any,s?:any,n2?:string)
{
console.log(n,s,n2);
}


// 1. 함수선언 
function disp3(n:string):void;
function disp3(n:string,s:string):void;
function disp3(n:string,s:boolean):void;
function disp3(n:string,s:number):void;

function disp3(n:string,s:number,n2:string):void;
function disp3(n:string,s?:any,n2?:string)
{
console.log(n,s,n2);
}


