//new map method
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits.get("apples"));
console.log("there are "+ fruits.get("apples") + " apples")

//set map method
const fruits1 = new Map();

fruits1.set("apples",500);
fruits1.set("Bananas",300);
fruits1.set("Oranges",200);
console.log(fruits1.get("Bananas"));
console.log("There Are "+ fruits1.get("Bananas")+" Bananas")

// types of

const fruits2 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(typeof fruits2);

//instantof
const fruits3 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits3 instanceof Map);

//size
const fruits4 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits4.size);

//delete
const fruits5 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits5.delete("apples"));
console.log(fruits5)

//clear

const fruits6 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits6.clear());
console.log(fruits6)

//has

const fruits7 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits7.delete("apples"));
console.log(fruits7.has("apples"));

//for each
const fruits8 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

fruits8.forEach(function(value, key) {
  console.log(key + " = " + value);
});

//entries

const fruits9 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits9.entries())

//keys

const fruits10 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits10.keys())

//values
const fruits11 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits11.values())

//mapgroupby

const fruits12 = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 }
];
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}
const result = Map.groupBy(fruits12, myCallback);
console.log("These fruits are OK:");
for (let x of result.get("ok")) {
  console.log(`${x.name} - ${x.quantity}`);
}

console.log("\nThese fruits are LOW:");
for (let x of result.get("low")) {
  console.log(`${x.name} - ${x.quantity}`);
}
