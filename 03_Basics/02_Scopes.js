// Scopes in functions
// let and const are block scope and var are global scope

// var c =300;
let a =300
if(true){
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log(`innervalue ${a}`)
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = 'Tarun';
    function  two(){
        const website ="youtube";
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()
if(true){
    const username = "Tarun";
    if(username ==='Tarun'){
        const website= "youtube"
        console.log(username + website);
    }
    // console.log(website)
}
// console.log(username)

// +++++++++++++intersting++++++++++++++
console.log(addOne(5));
function addOne(num){
return num+1
}


// console.log(addTwo(8));

const addTwo = function(num){
    return num + 2
}
console.log(addthree())
const addthree = (num)=>{
    return num+3
}
