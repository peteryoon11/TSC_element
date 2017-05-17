var global_num=10;

class Numbers{
num_val=20;
static s_val=30;
xxx():void{
var local_num=40;
console.log(global_num);
console.log( 
    
    this.num_val, Numbers.s_val);


}

}

console.log(global_num);
console.log(Numbers.s_val);
var n= new Numbers();

console.log(n.num_val);
n.xxx();

