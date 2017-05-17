var global_num = 10;
var Numbers = (function () {
    function Numbers() {
        this.num_val = 20;
    }
    Numbers.prototype.xxx = function () {
        var local_num = 40;
        console.log(global_num);
        console.log(this.num_val, Numbers.s_val);
    };
    return Numbers;
}());
var test_=(function (){
    console.log("ttt");
})();
//자기 호출 함수로 바뀜?? 
// class 로 선언하면 
Numbers.s_val = 30;
// class 내부 static 변수 라서 외부에서 선언되는듯 함  
console.log(global_num);
console.log(Numbers.s_val);
var n = new Numbers();
console.log(n.num_val);
n.xxx();
