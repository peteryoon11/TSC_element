// generic 
class Box{
obj;
setValue(obj:string)
{
    this.obj=obj;
}
getValue():string
{
    return this.obj;
}

}
var b= new Box();
b.setValue("홍길동");
//b.setValue(11);
// 
console.log();



// generic 
class Box2{
obj;
setValue(obj:number)
{
    this.obj=obj;
}
getValue():number
{
    return this.obj;
}

}
var b2= new Box2();
b2.setValue(11);
//b.setValue(11);
// 
console.log();



// generic 
class Box3<T>{
obj:T;
setValue(obj:T)
{
    this.obj=obj;
}
getValue():T
{
    return this.obj;
}

}

var b3= new Box3();
b3.setValue("ddd");
b3.setValue(11);
b3.setValue("ddd");
// 
console.log(b3.getValue());

// 문자열만 저장하고 싶음 

var b4 = new Box3<string>();

//b4.setValue(123);//
b4.setValue("12");


var b5 = new Box3<number>();

b5.setValue(123);



class Box4<T>{
obj:T;
setValue(obj:T)
{
    this.obj=obj;
}
getValue():T
{
    return this.obj;
}

}

var bbb=new Box4<string>();
bbb.setValue("ddd");
var bbb2=new Box4<number>();
bbb2.setValue(12);




function aaaa<T>(aa:Box4<T>)
{
console.log(aa.getValue());

console.log((<Box4<number>><any>aa).getValue());
// type assertion : 형변환 , type 이 컴파일러 가 유추하는 것보다 더 정확하다는 것을 주장 


}
function aaaa2<T>(aa:T)
{
console.log(aa.getValue());

console.log((<Box4<number>><any>aa).getValue());
// type assertion : 형변환 , type 이 컴파일러 가 유추하는 것보다 더 정확하다는 것을 주장 


}


aaaa(bbb);

aaaa(bbb2);