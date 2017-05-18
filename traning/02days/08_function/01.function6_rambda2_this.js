function Man2(age) {
    this.age = age;
    this.info = function () {
        var s = 100;
        this.age++;
        console.log(s, this.age, this);
    };
}
var m = new Man2(10);
m.info();
//setTimeout(m.info,1000);
//setTimeout(Man2,1000);
// 람다함수는 사용시 this 는 어휘적으로 처리 
function Man3(age) {
    var _this = this;
    this.age = age;
    this.info = function () {
        var s = 100;
        _this.age++;
        console.log(s, _this.age, _this);
    };
}
var m2 = new Man3(10);
m2.info();
setTimeout(m2.info, 1000);
/*
100 11 Man2 { age: 11, info: [Function] }
100 NaN Timeout {
  _called: true,
  _idleTimeout: 1000,
  _idlePrev: null,
  _idleNext: null,
  _idleStart: 97,
  _onTimeout: [Function],
  _timerArgs: undefined,
  _repeat: null,
  age: NaN }
*/ 
