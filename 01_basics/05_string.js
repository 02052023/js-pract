const name = "anita"
const repoCount = 50;

//console.log(name + repoCount + " Value"); //Concatenated outdated  syntx

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`anita -.com`)
// String {'anita'}
// 0 these are key
// : 
// "a"
// 1
// : 
// "n"
// 2
// : 
// "i"
// 3
// : 
// "t"
// 4
// : 
// "a"
// length
// : 
// 5
// [[Prototype]]
// : 
// String
// anchor
// : 
// ƒ anchor() in all they have written f that means they are function/methods
// at
// : 
// ƒ at()
// big
// : 
// ƒ big()
// blink
// : 
// ƒ blink()
// bold
// : 
// ƒ bold()
// charAt
// : 
// ƒ charAt()
// charCodeAt
// : 
// ƒ charCodeAt()
// codePointAt
// : 
// ƒ codePointAt()
// concat
// : 
// ƒ concat()
// constructor
// : 
// ƒ String()
// endsWith
// : 
// ƒ endsWith()
// fixed
// : 
// ƒ fixed()
// fontcolor
// : 
// ƒ fontcolor()
// fontsize
// : 
// ƒ fontsize()
// includes
// : 
// ƒ includes()
// indexOf
// : 
// ƒ indexOf()
// isWellFormed
// : 
// ƒ isWellFormed()
// italics
// : 
// ƒ italics()
// lastIndexOf
// : 
// ƒ lastIndexOf()
// length
// : 
// 0
// link
// : 
// ƒ link()
// localeCompare
// : 
// ƒ localeCompare()
// match
// : 
// ƒ match()
// matchAll
// : 
// ƒ matchAll()
// normalize
// : 
// ƒ normalize()
// padEnd
// : 
// ƒ padEnd()
// padStart
// : 
// ƒ padStart()
// repeat
// : 
// ƒ repeat()
// replace
// : 
// ƒ replace()
// replaceAll
// : 
// ƒ replaceAll()
// search
// : 
// ƒ search()
// slice
// : 
// ƒ slice()
// small
// : 
// ƒ small()
// split
// : 
// ƒ split()
// startsWith
// : 
// ƒ startsWith()
// strike
// : 
// ƒ strike()
// sub
// : 
// ƒ sub()
// substr
// : 
// ƒ substr()
// substring
// : 
// ƒ substring()
// sup
// : 
// ƒ sup()
// toLocaleLowerCase
// : 
// ƒ toLocaleLowerCase()
// toLocaleUpperCase
// : 
// ƒ toLocaleUpperCase()
// toLowerCase
// : 
// ƒ toLowerCase()
// toString
// : 
// ƒ toString()
// toUpperCase
// : 
// ƒ toUpperCase()
// toWellFormed
// : 
// ƒ toWellFormed()
// trim
// : 
// ƒ trim()
// trimEnd
// : 
// ƒ trimEnd()
// trimLeft
// : 
// ƒ trimStart()
// length
// : 
// 0
// name
// : 
// "trimStart"
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
// trimRight
// : 
// ƒ trimEnd()
// trimStart
// : 
// ƒ trimStart()
// valueOf
// : 
// ƒ valueOf()
// Symbol(Symbol.iterator)
// : 
// ƒ [Symbol.iterator]()
// [[Prototype]]
// : 
// Object
// [[PrimitiveValue]]
// : 
// ""
// [[PrimitiveValue]]
// : 
// "anita"

// example learn every method of String for interview by mdn

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-4,3)// in slice we can use -ve value
console.log(anotherString);

const newStringOne = "  Anita "
console.log(newStringOne);
console.log(newStringOne.trim()); //This trim remove spaces 

const url = "https://anita.com/anita%20khadka" // browser dont undrstand spaces it automatically convert in %
console.log(url.replace('20', '-')) 

console.log(url.includes('rawal')); // present h ki ny 

// +++++++++++++++++++++ STRING TO AARAY +++++++++++++++++++++++++++++++++++++

console.log(gameName.split('-')); // learn more about split wid refrence of mdn

