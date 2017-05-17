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
var Employee = (function () {
    function Employee(name, age) {
        this.age = age;
        this.name = name;
    }
    Employee.prototype.getInfo = function () {
        return this.name + "\t" + this.age;
    };
    return Employee;
}());
var Manager = (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, depart) {
        var _this = _super.call(this, name, age) || this;
        _this.depart = depart;
        return _this;
    }
    // overriding
    Manager.prototype.getInfo = function () {
        return this.name + "\t" + this.age + "\t" + this.depart;
    };
    return Manager;
}(Employee));
