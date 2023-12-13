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

// +++++++++++++++++++++++++++++++++++++ Memory +++++++++++++++++

// Stack (Primitive) , Heap (Non- Primitive)
// if memory allocated in Stack then we can get a copy of value 
// if memory allocated in Heap then we can get a reference of value

let youtube_name = "Tarun@google.com"

let another_Name = youtube_name
another_Name= "garg@google.com";
console.log(another_Name);
console.log(youtube_name);

let User_one = {
    name:"Tarungarg",
    email:"tarungarg@89"
}
let user_two = User_one;
user_two.email = "garg567";

console.log(User_one);
console.log(user_two)

