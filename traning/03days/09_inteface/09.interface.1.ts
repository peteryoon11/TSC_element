interface IPerson
{
    firstName?:string;
    lastName:string;
    sayInfo:()=>string;
}


// 1. 인터페이스 사용 방법 ==> 변수의 타입으로 지정
var man:IPerson={

        firstName:"h",
    lastName:"w",
    sayInfo:()=>"ddd"
};

var wman:IPerson={

      
    lastName:"w",
    sayInfo:()=>"ddd"
};