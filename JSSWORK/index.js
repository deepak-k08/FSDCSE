// console.log("Welcome to JS");
// const a=12;
// console.log(a);
// if(a>10){
//     let b=23;
//     a=40;
//     console.log("a inside conidition: " + a);
// }

// console.log("b outside condition: " + b);

// let a=12;
// let b="12";

// console.log(typeof b);

// let today=Date();
// console.log(today);
// if(a===b){
//     console.log("Welcome");
// }
// else{
//     console.log("Hello");
// }


// let myname="Deepak";
// let college="ABES EC";
// let result=`Hi my name is ${myname} and I am doing enginerring from ${college}`
// console.log(result);


// //objects in JS

// // let key= "sname";

// const students=[
// {
//     sname:"Deepak",
//     course:"B.Tech",
//     college:"ABES EC"
// },
// {
//     sname:"Vivek",
//     course:"MCA",
//     college:"ABES EC"
// }

// ]
// // without desstructing
// // console.log("Name: "+students.sname + " \nCourse: " + students.course);


// // Destructing
// // const{sname, course}=students;

// // console.log(sname+" " + course);

// // console.log("Name: "+sname + "\nCourse: " + course);

// // students[key]="Kapil";
// console.log(students[1].sname + " " +students[1].college);


// // Functions
// // function greeting(msg="Welcome"){
// //     console.log("Good Morning " + msg);
// // }

// // greeting("Greetings");

// // function sum(a,b,c=23){
// //     return a+b+c;
// // }

// // let res = sum(10,12,43);
// // console.log(res);


// //High Order Function

console.log("Hello World");
let parent = document.getElementsByClassName("parent");
console.log(parent);
parent[0].innerText=" <h2 style=color:red> Data has changed</h2>"