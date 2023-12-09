// Primitive Datatypes

// 7 types (Call be Value)
// string, Number, Boolean, Null , undefined , Symbol , Biginit

const score = 100;
const scoreValue  = 100.3

const isLoggedIn = false ;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const another_id  = Symbol('123');

// BigInit
const bigNumber = 54678839584958948359453n

// console.log(id == another_id)
// console.log(id === another_id)

// Datatypes types of primitive datatypes
// string --> string
// Number --> Number
// Boolean --> Boolean;
// BigInt --> Bigint
// Symbol --> Symbol
// Null --> Object
// Undefined --> Undefined


// Reference Datatypes (Non-Primitive Datatypes)
// Array  , Objects , Functions
// Array
const hero =  ["shaktiman","Spiderman","doga"];
// console.log(typeof hero)
// Objects
const Details = {
    name: "Tarun",
    age:22
}

const myFunction = function(){
    console.log("HelloWorld")
}

console.log(typeof bigNumber)

// Datatypes of reference datatypes
// Array --> Object
// Object --> Object
// Function --> objectFunctions