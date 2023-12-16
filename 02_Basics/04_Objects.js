// const tinder_User  = new Object();
const tinder_User = {};
tinder_User.id  = '12',
tinder_User.name = "Tarun",
tinder_User.isLoggedIn = false

// console.log(tinder_User);

const regular_User  = {
    email : 'some@gmail.com',
    fullname : {
        userfullname:{
            firstname:"Tarun",
            lastname:"garg"
        }
    }
}
// console.log(regular_User.fullname.userfullname.firstname);

const obj1 = {
    1:"a",
    2 : "b"
}
const obj2 = {
    3:"a",
    4: "b"
}
const obj3 = {
    5:"a",
    6: "b"
}

// const obj3 =  {...obj1,...obj2}
// console.log(obj3);
const obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4);

const target = {a:1,b:2};
const source  = {b:3,c:5};

const returned_Target  = Object.assign({},target,source);

// console.log(target);



// console.log(returned_Target);

const obj5 = {...obj1,...obj2,...obj3}
// console.log(obj5);

const Users  = [
    {
        id:1,
        name:"tarun"
    },
    {
        id:2,
        name:"tarun"
    },
    {
        id:3,
        name:"tarun"
    }]

    // console.log(Users[1].id);

    // console.log(Object.keys(tinder_User));

// console.log(Object.values(tinder_User));
// console.log(Object.entries(tinder_User));
// console.log(regular_User.hasOwnProperty('fullname'));

// Destructuring og objects

const course  = {
    coursename : "js in hindi",
    price : 1999,
    courseInstructor :"Tarun"
}

// couse.courseInstructor

const {courseInstructor:instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// json --> javascript object notation
// {
//     "name":"Tarun";
//     "coursename":"js in hindi";
//     "price"
// }


[
    {},
    {},
    {}
]
