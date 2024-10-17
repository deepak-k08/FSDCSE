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

// 17-10-2024

// console.log("Hello World");
// const div = document.getElementsByClassName("parent");
// console.log(div);
// div[0].innerHTML="<h2 style=color:red>Data has changed</h2>";
// const h1 = document.createElement("h1");
// console.log(h1);
// h1.innerText="ABES Engineering College";
// console.log(h1);
// h1.style.backgroundColor="cyan";
// h1.style.color="black";
// h1.style.padding="20px";
// h1.style.marginLeft="300px";
// div[0].appendChild(h1);

// const img = document.createElement("img");
// img.src="./dog1.png";
// console.log(img);
// img.setAttribute("height","300");
// img.setAttribute("width","300");
// div[0].appendChild(img);
// div[0].removeChild(img);

// function getData(){
//     console.log("Hi, inside getData Funciton");
//     div[0].innerHTML="<h2 style=color:blue>Hi Event Handled</h2>"
// }

// const button = document.getElementsByClassName("btn");
// console.log(button);
// button[0].addEventListener("click",getData);


// Promises 

// const promise = new Promise((resolve,reject)=>{
//     let a=5;
//     if(a>10){
//         resolve("Accepted");
//     }
//     else{
//         reject("Not Accepted");
//     }
// })

// promise.then((msg)=>{console.log(msg)})
// .catch((error)=>{console.log(error)})
// .finally(()=>console.log("All resources have closed"));

// const promise2 = new Promise((resolve, reject)=>{
//     resolve ({name:"Deepak" , Stack:"Mern Stack"});
// })

// promise2.then((data)=>{console.log("Hi " + data.name)})
// .catch(x=>{console.log(x)})

const response = fetch("https://dummyjson.com/products");
response.then((data) => {
    console.log(data);
    data.json().then((res) => {
        console.log(res);
    });
});
