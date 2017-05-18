class Person
{
    name:string;
    age:number;
    constructor(name:string,age:number)
    {
this.name=name;
this.age=age;
    }
getName():string
{
    return this.name;
}

setName(name:string)
{
this.name=name;
}
getAge():number
{
    return this.age;
}
setAge(age:number)
{
    this.age=age;
}

}

var person11=new Person("홍길동",20);

console.log(person11.getName(), person11.getAge());
