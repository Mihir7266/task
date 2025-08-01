let x = myFunction(4, 3);
console.log(x);

function myFunction(a, b) {
  return a * b;
}

//The Function() Constructor
console.log("The Function() Constructor")
const myFunction1 = new Function("a","b","return a*b");
console.log(myFunction1(4,3))

//Function Hoisting

console.log("Function Hoisting")
myFunction2(5);

function myFunction2(y) {
  return y * y;
}
console.log(myFunction2(5))

//Functions are Objects
console.log("Functions are Objects")
function myFunction3(a, b) {
  return arguments.length;
}
console.log(myFunction3(4,3))

//JavaScript Arrow Function
console.log("JavaScript Arrow Function")
myFunction = (a, b) => a * b;
let result = myFunction(4, 5);
console.log(result)

//Default Parameters
console.log("Default Parameters")
function myFunction4(x, y) {
  if (y === undefined) {
    y = 2;
  }  
  return x * y;
}
console.log(myFunction4(4))

//Default Parameter Values
console.log("Default Parameter Values")
function myFunction5(x, y = 10) {
  return x + y;
}
console.log(myFunction5(5))

//Function Rest Parameter
console.log("Function Rest Parameter")
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
let x1 = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x1)

//The Arguments Object
console.log("The Arguments Object")
function findMax() {
  let max = -Infinity;
  for(let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
} 
console.log(findMax(1,2,3,4,5,10,50,49,2,21))

//The JavaScript call() Method
console.log("The JavaScript call() Method")
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
console.log(person.fullName.call(person1))