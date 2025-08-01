//Creating a JavaScript Object
console.log("Creating a JavaScript Object")
// Create an empty Object
const person = {};
// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue"; 
// Display Data from Object
console.log(person.firstName + " is " + person.age + " years old.")

//Create an empty JavaScript object using new Object()
console.log("Create an empty JavaScript object using new Object()")
// Create an Object
const person1 = new Object();
person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 50;
person1.eyeColor = "blue"; 

// Diplay Object Content
console.log(person1.firstName + " is " + person1.age + " years old.")



//Using the prototype Property
console.log("Using the prototype Property")
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.prototype.nationality = "Gujrati";

const myFather = new Person("John", "Doe", 50, "blue");
console.log("The nationality of my father is " + myFather.nationality)


//JavaScript Object.assign()
console.log("JavaScript Object.assign()")
// Create Target Object
const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Create Source Object
const person3 = {firstName: "Anne",lastName: "Smith"};

// Assign Source to Target
Object.assign(person2, person3);

// Display Target
let text = Object.entries(person2);
console.log(text)



//JavaScript Object.entries()
console.log("JavaScript Object.entries()")
const person4 = {
  firstName : "John",
  lastName  : "Doe",
  age     : 50,
  eyeColor  : "blue"
};

let text1 = Object.entries(person4);
console.log(text1)


//JavaScript Object.fromEntries()
console.log("JavaScript Object.fromEntries()")
const fruits = [
    ["apple",400],
    ["orange",500],
    ["kiwi",800],
    ["mango",1000]
];
const myObj = Object.fromEntries(fruits)
console.log("Total " + myObj.mango + " Mango ")


//JavaScript Object.values()
console.log("JavaScript Object.values()")
const person5 = {
    firstname : "Mihir",
    lastname : "vora",
    age : 20,
    eyeColor : "blue"
};
let text2 = Object.values(person5)
console.log(text2)


//JavaScript Object.groupBy()
console.log("JavaScript Object.groupBy()")
const fruits1 = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to select low volumes 
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by ok and low
const result = Object.groupBy(fruits1, myCallback);

// Display Results
let text3 ="These fruits are Ok: <br>";
for (let [x,y] of result.ok.entries()) {
  text3 += y.name + " " + y.quantity + "<br>";
}

text3 += "<br>These fruits are low: <br>";
for (let [x,y] of result.low.entries()) {
  text3 += y.name + " " + y.quantity + "<br>";
}
console.log(text3)


//JavaScript Object.keys()
console.log("JavaScript Object.keys()")
// Create an Object
const person6 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Get the Keys
const keys = Object.keys(person6);
console.log(keys)