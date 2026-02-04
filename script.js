// console.log("Hello, World!");
// 1-closures
// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     return count;
//   };
// }
// const counter = outer();   // outer() runs once
// console.log(counter());   // 1
// console.log(counter());   // 2
// console.log(counter());   // 3
// console.log(counter());   // 4

// ---------------------------------------------

// 2-this keyword
// const user = {
//   name: "Alex",
//   greet() {
//     console.log(this.name);
//           return this.name;

//   }
// };
// user.greet()
// const display = user.greet()
// console.log(display)

// const user = {
//   name: "ayush",
//   age: 20,
//   hii() {
//     console.log(this.name); //print
//     // return this.name
//   },
// };
// console.log("coming from function---", user.hii());

// ---------------------------------------------------
// 👉 Arrow function does not get this from user.

// ✅ 2️⃣ Arrow function has no arguments
// function normalFn() {
//   console.log(arguments); // works
// }

// const arrowFn = () => {
//   console.log(arguments); // ❌ ReferenceError
// };

// normalFn(1, 2, 3);
// // arrowFn(1, 2, 3); // error
// 👉 Arrow function does not have its own arguments.

// ✅ 3️⃣ Arrow function cannot be used with new
// const Person = () => {
//   this.name = "Ayush";
// };

// // new Person(); // ❌ TypeError: Person is not a constructor

// --------------------------------------------------------------------------
// callback function

// /function greet(callback) {
//   callback();
// }
// greet(() => console.log("Hello"));

// 👉 This is the function definition of test

// test is the main (parent) function

// cb is a parameter that will receive a function
// function test(cb) {
//   cb("JS");
// }//function defin- main fn

// //function call + call back function
// test((x) => {
//   console.log("Hello " + x);
// });

function callback(para) {
  para("hiii parameter");
}

callback((y) => {
  console.log("helllo" + " " + y);
});

console.log("end of js file");
