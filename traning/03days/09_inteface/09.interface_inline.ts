/*
// 명시적 스타일!!
interface IPerson
{
    firstName?:string,
    lastName:string,
    sayInfo:()=>string
}*/

// inline 스타일 
var IPerson2:{

        firstName?:string,
    lastName:string,
    sayInfo:()=>string
};
// 타입 임!! 




// 1. 인터페이스 사용 방법 ==> 변수의 타입으로 지정
var man:IPerson2={

        firstName:"h",
    lastName:"w",
    sayInfo:()=>"ddd"
};

var wman:IPerson2={

      
    lastName:"w",
    sayInfo:()=>"ddd"
};