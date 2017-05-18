var Student2 = (function () {
    function Student2(name, salary) {
        this.salary = salary;
        this.name = name;
        //this.salary=salary;
    }
    Student2.prototype.getInfo = function () {
        return this.name + "\t" + this.salary;
    };
    return Student2;
}()); // 
var s2 = new Student2("이순신", 3000);
console.log(s2);
