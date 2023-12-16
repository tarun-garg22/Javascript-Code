// objects will be define in two ways :
// 1. Singleton
// 2. Object literals

// Singleton 
// Object.create()

// Object literals
const new_symbol  = Symbol("key1")
const User = {
    name :"Tarun",
    'full name':"Tarun garg",
    age : 25,
    [new_symbol]:"newkey1",
    location:"Jaipur",
    email:"tarungarg@gmail.com",
    isLoggedin : false,
    loastLoginDays : ['Monday','tuesday']
}
// Dot notation
// console.log(User.email);
// Bracket Notation
// console.log(User["email"]);
// console.log(User["full name"]);

// console.log(User[new_symbol]);

// value change
User.email = "tarun.chatgpt@gmail.com";

// Object.freeze(User);
User.name  = "garg";
// console.log(User);

User.greeting = function(){
    console.log('Hello js user');
}
User.greetingtwo = function(){
    console.log(`hello js user ${this.name}`);
}

// function ka reference dega bass
console.log(User.greeting);
// function ko print karega
(User.greeting());
(User.greetingtwo());