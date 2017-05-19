interface nameList
{
    [index:number]:string;
}

var myArr:nameList=["a","b","c"];

console.log(myArr);


interface nameList2
{
    [index:number]:number;
}

var myArr2:nameList2=[2,3,4];

console.log(myArr2);
interface nameList3
{
    [index:string]:string;
}

var myArr3:nameList3={};
myArr3["one"]="100";

myArr3["two"]="200";
myArr3["three"]="300";

console.log(myArr3);