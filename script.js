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

const user = {
  name: "ayush",
  age: 20,
  hii() {
    console.log(this.name); //print
    // return this.name
  },
};
console.log("coming from function---", user.hii());
