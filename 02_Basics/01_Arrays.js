// Array
const my_array = [1,2,3,4,5];
const mixed_array = [4,5,678,true,"Tarun"];


const myArray = new Array(1,2,34,67);
// console.log(mixed_array[4]);

// Array methods

my_array.push(67);

// console.log(my_array);
let new_array = my_array.pop();
// console.log(new_array)

// shift unshift
my_array.unshift(67);
// console.log(my_array)

let array2 = my_array.shift();
// console.log(array2)

// console.log(my_array.includes(9));
// if value was not found then it print -1
// console.log(my_array.indexOf(4));

const my_array2  = my_array.join();
// console.log(my_array2); 

// Slice Splice
// console.log("A",my_array);

// const my_newarray =  my_array.slice(1,3);

// console.log(my_newarray);
// console.log("B",my_array);

// const my_newarray2 =my_array.splice(1,3);
// console.log(my_newarray2);
// console.log("C",my_array);

const myarray2 = my_array.splice(1,0,"value1",'value2')
console.log(my_array)

