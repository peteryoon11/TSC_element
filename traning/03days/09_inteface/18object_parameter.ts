var stu={
username:"홍길동"
,
 age:20
};

function x22(s:{username:string,readonly age?:number})
{
    console.log(s.username,s.age);

}
x22(stu);
var stu2={


};


x22({
    username:"dddd",age:333
});




