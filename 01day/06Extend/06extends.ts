class Employee
{
name:string;
age:number;
constructor(name,age)
{
    this.age=age;
    this.name=name;
}
getInfo():string
{
    return this.name+"\t"+this.age;
}

}

class Manager extends Employee
{
    depart:string;
    constructor(name,age,depart)
    {
        super(name,age);
        this.depart=depart;
    }
    // overriding
    getInfo():string
    {
        return this.name+"\t"+this.age+"\t"+this.depart;
    }


}