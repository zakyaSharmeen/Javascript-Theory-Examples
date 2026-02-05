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

// function callback(para) {
//   para("hiii parameter");
// }

// callback((y) => {
//   console.log("helllo" + " " + y);
// });

// console.log("end of js file");

// confirm("Do you want to continue?");'

// ----------------------------------------------------------------------------
// promises

// const p = new Promise((resolve, reject) => {
//   console.log("waiting...................");

//   setTimeout(() => {
//     resolve("balle balle");
//     reject("oops try again");
//   }, 2000);
// });
// p.then((response) => console.log("fullfiled", response)).catch((err) =>
//   console.log("fullfiled", err),
// );

// /------------------------------------------------------------------------------
//

// async function getUser() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/users/1",
//     );
//     const data = await response.json(); // parsing happens here
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// getUser();

//////////////////////////////////////////////////----------------------------------

// spreadoperator

// const d = [1, 3, 4, 56, 7];
// const e = [4, 5, 678, 9, 0];
// const spreading = [...d, ...e];
// console.log(spreading);

// --------------------------------------------------------------------

// rest operator--------
// 1.const arr = [1,2,34,5,6,8,0,9]
// const [a, ...rest] = arr
// console.log(a)
// console.log(rest)
//

// 2.const userObject = {name: "ansh", classes: 3, city: "solalpur"}
// const {name,classes,...rest} =userObject
// console.log(name)
// console.log(classes)
// console.log(rest)

// --------------------------------------------------------------------
// destructuring
// 1.const arrays = [13, 24, 68]
// const [a, b, c]= arrays
// console.log(a)
// console.log(b)
// console.log(c)

// 2.
// const arr = [10, 20, 30];
// // const [ , second] = arr;
// const [, ,c] = arr
// console.log(c); // 20

3;
// const user = { name: "Ayush", age: 70 };

// const { name:myname, age } = user;

// console.log(myname); // Ayush
// console.log(age);
