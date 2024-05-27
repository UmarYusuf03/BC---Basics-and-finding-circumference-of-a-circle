//console.log("Hello");
//console.log("Hi");

//window.alert("Test");

//document.getElementById("title").textContent = "Hello";
//document.getElementById("para").textContent = "testting javascript";

// let age = 33;
// let price = 456.34;
// let email = "hdkjak@gmail.com";

// console.log(`You are ${age} years old.`);
// console.log(`The price is $${price}.`);
// console.log(typeof price);
// console.log(typeof email);

// let fullName = " Jake smith";
// let age = 27;
// let student = false;


// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `Your age is ${age}`;
// document.getElementById("p3").textContent = `Enrolled: ${student}`;

// let students = 35;

// students += 1;

// console.log(students);

// let username;
// username = window.prompt("What is your name?");
// console.log(username);

// let username;
// document.getElementById("btn").onclick = function(){
//     username = document.getElementById("text").value;
//     console.log(username);
//     document.getElementById("myH1").textContent = `Hello ${username}`;
// }

// let username;
// let age;
// document.getElementById("btn").onclick = function(){
//     username = document.getElementById("text").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`;
//     age = document.getElementById("input").value;
//     age = Number(age);
//     document.getElementById("new").textContent = `You will be ${age + 10} years in 10 years.`;
//     console.log(`Username: ${username}`);
//     console.log(`Age: ${age}`);
// }

const PI = 3.14159;
let radius;
let circumference;

// radius = window.prompt("Enter radius");
// radius = Number(radius);
// circumference = 2 * PI * radius;

// console.log(circumference);

document.getElementById("btn").onclick = function(){
    radius = document.getElementById("radi").value;
    radius = Number(radius);
    circumference = 2 * PI *radius;
    document.getElementById("new").textContent = `The circumference of the circle is ${circumference}`;
    console.log(`Circumference: ${circumference}`);
}