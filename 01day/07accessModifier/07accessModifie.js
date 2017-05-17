var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = (function () {
    function Student(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    return Student;
}()); // 
var HighSchool = (function (_super) {
    __extends(HighSchool, _super);
    function HighSchool() {
        var _this = _super.call(this, "aa", 20) || this;
        _this.salary = 20;
        return _this;
    }
    return HighSchool;
}(Student));
var s = new Student("이순신", 3000);
console.log(s);
