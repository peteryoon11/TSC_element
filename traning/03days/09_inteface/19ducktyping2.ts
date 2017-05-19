class Bird{
mesg:string;
age?:number;
}

function myBird(b:Bird)
{
console.log(b.mesg);
}

myBird({mesg:"참새"});
myBird({mesg:"참새",age:20});

namespace TestNamespac
{

    export interface ISome{
         a():void;
    };
    export class TestNN{};

}


class TestNNN implements TestNamespac.ISome
{
    a():void
    {
            console.log("test");
    }

}

