let w:string|number;
w=100;
w='112';

// type alias 
type nametype=string|number;
let w2:nametype;
w2=100;
w2='dfdf';

type namealias=number|{text:string};

let v:namealias;
v=1;
v={text:"112"};
v={ttt:"222"};

type ppp2= string|[number,number];
let v2 : ppp2;
v2="22";
v2=[1,2,3];

type ppp3=(n:string)=>number;

let v3:ppp3;
v3=(d)=>22;

console.log(v3("d"));

