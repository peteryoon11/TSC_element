// 외부에 있는 namespace 접근 


/// <reference path="20namespace.ts"/>
namespace outer
{
    export class myXXX implements xxx{

    }
}


var kk111:outer.myXXX= new outer.myXXX();

