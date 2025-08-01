const fruits = ["apple","banana","orange","mango"];
let [fruit1, fruit2] = fruits;
console.log(fruit1+""+fruit2)

//name 

let name = "Mihir";
let[a1,a2,a3,a4,a5] = name;
console.log(a1 + " " + a4)

//rest

const num = [1,2,3,4,5,6,7,8,9]
let [a,b,...rest] = num;
console.log("A is "+a+"B is "+b+"the rest is "+rest)

const fruits1 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Destructing
let text = "";
for (const [key, value] of fruits1) {
  text += key + " is " + value;
}
console.log(text)