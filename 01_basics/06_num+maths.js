const score = 400;
console.log(score);
const balance = new Number(100)
console.log(balance);

// We can Change in above number to string 
// Number {100}
// [[Prototype]]
// : 
// Number
// constructor
// : 
// ƒ Number()
// toExponential
// : 
// ƒ toExponential()
// toFixed
// : 
// ƒ toFixed()
// toLocaleString
// : 
// ƒ toLocaleString()
// toPrecision
// : 
// ƒ toPrecision()
// toString
// : 
// ƒ toString()
// length
// : 
// 1
// name
// : 
// "toString"
// arguments
// : 
// (...)
// caller
// : 
// (...)
// [[Prototype]]
// : 
// ƒ ()
// [[Scopes]]
// : 
// Scopes[0]
// valueOf
// : 
// ƒ valueOf()
// [[Prototype]]
// : 
// Object
// [[PrimitiveValue]]
// : 
// 0
// [[PrimitiveValue]]
// : 
// 100

// example 
console.log(balance.toString().length); // this the method to convert we can write lenth ,
console.log(balance.toFixed(5));// use during ecommerce website precision value
const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));




// ++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));//abs means - value +ve ho jati hai 
// console.log(Math.round(4.6));//abs means - value +ve ho jati hai 
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

console.log(Math.random());// 0 or 1 ke andr value deta hai
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)



