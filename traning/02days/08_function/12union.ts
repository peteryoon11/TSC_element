//
var uni:string|number;
uni=11;
uni='sss';
var e2:string|number|[number,number,number]|number[];
e2=100;
e2="xx";
e2=[1,2,3];
e2=[1,2];
function eee(ss?:string|number)
{

};
eee();

eee(12);
eee('122');
function eee2(n:number):number|string
{
if(n==1)
{
    return 100;
}
else
{
    return "aaa";
}
}

console.log(eee2(1));
console.log(eee2(2));
