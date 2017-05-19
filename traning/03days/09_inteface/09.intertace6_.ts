interface A
{
    age:number;
}
interface B extends A
{
    address:string;
}


interface C 
{
    address:string;
}

class D implements A,B
{
age:22;
address:"";

}

var aaa:B={ // 명시적으로 알려주는 형태 
age:10,
address:"dd"

};


var user2=<B>{};// 강제로 알려주는 형태 