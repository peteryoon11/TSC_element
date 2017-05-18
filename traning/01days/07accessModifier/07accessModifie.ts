class Student
{
    private
private name:string;
public salary:number;
     protected address:String;

    constructor(name,salary)
    {
this.name=name;
this.salary=salary;

    }
} // 

class HighSchool extends Student
{
    constructor()
    {
super("aa",20);
this.salary=20;
    }
}

var s = new Student("이순신",3000);

console.log(s);