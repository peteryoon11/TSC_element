interface IPerson3
{
readonly    firstName:string|number;
    lastName:string|number|(()=>string);
    sayInfo?:()=>string;
}


// 초기화 하는 부분
var abc:IPerson3={

    firstName:'aa',
    lastName:'bb'
};

abc.firstName="ddf";

const abc2:IPerson3={

    firstName:'aa',
    lastName:'bb'
};

abc2.lastName="222";
abc2.firstName="222"; // readonly 이기 때문에 안됨 

abc2={

    firstName:number,// abc2  자체가 const 로 지정이 되서 abc2 는 함수를 담고 있는 객체
    // 다른 부분을 못넣음 
    lastName:'bb'
};
