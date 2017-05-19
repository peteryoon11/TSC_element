
// 명시적 스타일!!
interface IPerson2
{
    firstName?:string|number,
    lastName:string|number|(()=>string),
    sayInfo:()=>string
}

// inline 스타일 
/*var IPerson:{

        firstName:string,
    lastName:string,
    sayInfo:()=>string
};*/
// 타입 임!! 




// 1. 인터페이스 사용 방법 ==> 변수의 타입으로 지정
var man2:IPerson2={

        firstName:"h",
    lastName:343,
    sayInfo:()=>"ddd"
};

var wman2:IPerson2={

      
    lastName:"w",
    sayInfo:()=>"ddd"
};
var wman3:IPerson2={

      
    lastName:()=>"dd",
    
    sayInfo:()=>"ddd"
};