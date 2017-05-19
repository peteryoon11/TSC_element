// 1. duck typing 

class Sparrow{
    sound="참새 짹짹";
}

class Parrot 
{
    sound ="앵무새 ㅇㅇ ";
}
class Duck{
    sound ="오리소리";
    swim()
    {
        alert
  ("오리 헤엄 ");      
    }
}

class DonaldDuck
{
sound="dddd";
    cry="도날도";
}
var parrot :Parrot = new Sparrow();
var sparrow : Sparrow= new Parrot();

var parrotTwo:Parrot= new Duck();

var donalddd:DonaldDuck= new Duck();

var donalddd2:Parrot= new DonaldDuck();



console.log(parrot.sound);
console.log(sparrow.sound);
console.log(parrotTwo.sound);
