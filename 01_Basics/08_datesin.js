// Dates 

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toJSON());
// String
// console.log(typeof Date());
// Object
// console.log(typeof myDate);

let myCreate_Date =  new Date(2023, 11 ,23);
// console.log(myCreate_Date.toLocaleDateString());
let myCreate_Dates = new Date('01-04-2023');
// console.log(myCreate_Date.toLocaleDateString());

let Date_TimeStamp = Date.now();
// millisecond time
// console.log(Date_TimeStamp.toLocaleString());
// console.log(Date_TimeStamp)
// console.log(typeof Date_TimeStamp);
// console.log(myCreate_Date.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate  = new Date();
// methods hai 
console.log(newDate.getHours());
console.log(newDate.getMonth()+1);

newDate.toLocaleString("default",{
    weekday:'long'
})

console.log(newDate)
