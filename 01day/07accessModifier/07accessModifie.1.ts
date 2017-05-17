class Student2
{
    private
private name:string;
///public salary:number;
     protected address:String;

    constructor(name,public salary:number)
    {
this.name=name;
//this.salary=salary;

    }
    getInfo():string
    {
        return this.name+"\t"+this.salary;
    }
} // 



var s2 = new Student2("이순신",3000);

console.log(s2);



