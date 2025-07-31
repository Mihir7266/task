const letters = new Set(["a","b","c"]);
console.log(letters)

const letter = new Set();
const a = "a";
const b = "b";
const c = "c";

// Add value
letters.add(a);
letters.add(b);
letters.add(c);
console.log(letter.size)

//The size Property
console.log("The size Property")
const letters1 = new Set(["a","b","c"]);
console.log(letters1.size)

// listing elements
console.log("listin elements")
const letters2 = new Set(["a","b","c"]);
for(const x of letters2){
    console.log(x)
}

//has methhod
console.log("Has Method")
const letters3 = new Set(["a","b","c"]);
console.log("The Answer is " + letters3.has("d"))

//for each method
console.log("For Each Method")
const letters4 = new Set(["a","b","c"]);
console.log(letters4.forEach(function(value){
    console.log(value);
}))

//get all values
console.log("Get All Values");
const letters5 = new Set(["a","b","c"]);
console.log(letters5.values())

//Keys method
console.log("Keys Method");
const letters6 = new Set(["a","b","c"]);
console.log(letters6.keys())

//Entries Method
console.log("Entries Method");
const letters7 = new Set(["a","b","c"]);
const iterator = letters.entries();
for (const entry of iterator){
    console.log(entry)
}
