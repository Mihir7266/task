//error handling
try{
    adddlert("welcome");
}
catch(err){
    console.log(err.name)
}

//range error
let num = 1;
try {
  num.toPrecision(500);
}
catch(err) {
  console.log(err.name)
}

//reference error 
let x = 5;
try {
  x = y + 1;   
}
catch(err) {
  console.log(err.name)
}

//syntax error

try {
  eval("alert('Hello)");
}
catch(err) {
  console.log(err.name)
}

//type error

let number = 1;
try{
    number.toUpperCase();
}
catch(err){
    console.log(err.name)
}