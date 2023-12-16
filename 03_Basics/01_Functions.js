// console.log("T");
// console.log("a");
// console.log("r");
// console.log("u");
// console.log("n");

function say_myname(){
    console.log("T");
    console.log("a");
    console.log("r");
    console.log("u");
    console.log("n");
}

// say_myname()
// function save_mynumber(number1 , number2){
// console.log(number1 + number2)
// }

// save_mynumber(3,5)

function new_number(number1,number2){
//  let my_number = number1 + number2
//  return my_number
    return number1 + number2
}
// console.log(new_number(3,4));
const new_numbers = new_number(6,7)
// console.log(new_numbers);
function loginUserMessage(Username ="garg"){
    // if(Username===undefined){
    if(!Username){
        console.log("Please enter username");
        return
    }
    return `${Username} just loggedin`
}
// const UserDetails = loginUserMessage("Tarun")
const UserDetails = loginUserMessage()
// console.log(UserDetails);


// function calculateCartPrice(num1){
// return num1
// }
// console.log(calculateCartPrice(2))

function calculateCartPrice(value1 , value2,...num1){
    return ([value1,value2,num1])
}
  const CartPrice = (calculateCartPrice(2,56,78,6,8,5))
// console.log(CartPrice)

    const User ={
        username : "Tarun",
        price :199

    }
    // function handleObject(anyObject){
    // console.log(`Username is ${anyObject.Username} and price is ${anyObject.price}`);
    // }

    // handleObject(User);

    // handleObject({
    //     username:'Tarun',
    //     price :199
    // })

    const myNewArray  = [1920,1293,444,44];

    function array_function(my_number){
        return my_number[1]
    }
    // const myValue = array_function(myNewArray)
    // console.log(myValue);

    console.log(array_function([1920,1293,444,44]));