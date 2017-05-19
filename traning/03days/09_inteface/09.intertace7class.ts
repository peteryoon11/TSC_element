interface IEmployee{
    name:string;
    age:number;
getInfo:()=>void;

}

class Manager implements IEmployee
{

    name:string;
    age:number;
    salary:number;
    constructor(name,age,salary)
    {
this.age=age;
this.name=name;
this.salary=salary;
    }
    getInfo:
    ()=>"dd";

}

var ddd=new Manager("nnn",20,9999);

ddd.getInfo();