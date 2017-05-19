// 1. 자바스크립트 나중에 추가로 속성 및 함수 추가 가능 

var p ={
    name:"홍길동"
,
    setName:(n)=>{this.name=n;}

};

p.age=10;
p.setAge=(a)=>{this.age=a};