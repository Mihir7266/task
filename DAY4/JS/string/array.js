//The toString() Method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let myList = fruits.toString();
console.log(myList);

//The length Property
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits1.length;
console.log(size);

//Accessing the First Array Element
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2[0]);

//Accessing the Last Array Element
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3[fruits3.length-1]);

//add a array element push method
const fruits4 = ["Banana","Orange","Apple","Mango"];
fruits4.push("Kiwi");
console.log(fruits4);

//The At Method
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);

console.log(fruit);

//Join Method
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" * "));

//POP Method
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
fruits7.pop();
console.log(fruits7)

//SHIFT Method
const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
const shiftedfruits = fruits8.shift();
console.log(fruits8);
console.log(shiftedfruits);

//UNSHIFT Method
const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits9.unshift("Kiwi"));
console.log(fruits9);

//concat method
const boys = ["Mihir","Prins","Vatsal"];
const girls = ["Disha","krisha"]
const children = boys.concat(girls);
console.log(children);

//copywithin method
const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits10.copyWithin(2,0));

//flat method
const num = [[1,2],[3,4],[4,5]];
console.log(num.flat());

//flatmap method
const num1 = [1,2,3,4,5,6]
console.log(num1.flatMap(x => [x,x*10]))

//splice method
const fruits11 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits11.splice(2,0,"Kiwi","Dragon"))
console.log(fruits11)

//spliced method
const fruits12 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits12.toSpliced(0,1));
console.log(fruits12)

//slice method
const fruits13 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits13.slice(2))
console.log(fruits13)

//indexof serch method
const fruits14 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits14.indexOf("Apple")+1);

//lastindexof serch method
const fruits15 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits15.lastIndexOf("orange")+1);

//includes serch method
const fruits16 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits16.includes("Apple"))

//find() method
const num3 = [1,5,6,25,45];
console.log(num3.find(myFunction));
function myFunction(value, index, array){
    return value > 18;
}

//findindex() method
const num4 = [1,5,6,25,45];
console.log(num3.findIndex(myFunction));
function myFunction(value, index, array){
    return value > 18;
}

//findlast() method
const temp = [27, 28, 30, 40, 42, 35, 30];
console.log(temp.findLast(x => x > 40));

//The sort() Method
console.log("The sort() Method")
const fruits17 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits16.sort())

//The reverse() method
console.log("The reverse() method")
const fruits18 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits18.reverse())

//toshorted method
const months = ["Jan", "Feb", "Mar", "Apr"];
console.log(months.toSorted())

//toreverse() method
const months1 = ["Jan", "Feb", "Mar", "Apr"];
console.log(months1.toReversed())

//number sort
const num5 = [5,3,6,8,1,2,4];
console.log(num5.sort())

const num6 = [5,3,6,8,1,2,4];
console.log(num6.sort(function(){return 0.5 - Math.random}))

//lowest and highest
const num7 = [5,3,6,8,1,2,4];
const min = num7.sort(function(a,b){return a - b})
console.log("The Lowest Number is" +min[0])

//sum
const num8 = [5,3,6,8,1,2,4];
console.log(num8.reduce(function(total, value, index, array){return total + value}))

//all over 18
const num9 = [5,3,6,8,1,2,4];
console.log(num9.every(function(total, value, index, array){return value > 18}))

//number * 2
const num10 = [5,3,6,8,1,2,4];
console.log(Array.from(num10, (x) => x * 2))

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
