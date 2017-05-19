abstract class Animal{
abstract makeSound():void;
move():void
{
    console.log("move");

}
username:string;

}

class Cat extends Animal
{

    makeSound():void
    {
    console.log("야옹!!");
    }
}

var cat = new Cat();

cat.move();
cat.makeSound();