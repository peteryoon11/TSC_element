
class Stu{
    name:string;
    age:number;
    constructor(name,age)
    {
this.name=name;
this.age=age;
    }
    getInfo():string
    {
        return this.name+"\t"+this.age;
    }
}
function changeName(ss:Stu)
{
    ss.name="이순신";
}
var s = new Stu("홍길동",20);
console.log(s.getInfo());

changeName(s);
console.log(s);

var tt:string[]= ['A','B','C'];
function changeArr(t:string[])
{
t[0]='AAAAA';
}
console.log(tt);
changeArr(tt);
console.log(tt);

