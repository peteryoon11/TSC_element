// 1. 자바스크립트 나중에 추가로 속성 및 함수 추가 가능 

var px ={
    name:"홍길동"
,
    setName:(n)=>{this.name=n;}
    ,
    // type template
    age:0,
    setAge:(a)=>{this.age=a;}
    ,email:""

};
// TSC 에서는  추가 불가 그래서 template(기존 틀)  가 필요함 

px.age=10;
px.setAge=(a)=>{this.age=a};
px.email="ddd";
