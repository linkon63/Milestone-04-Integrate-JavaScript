// //21-1-5 Global vs local variable IIFE function expression vs declaration

// //global

// let name = "Lin";

// function addName() {
//     const addStr = "WebDeveloper"; //local variable
//     console.log(name + "Kon" + addStr);
// }
// addName();

// // IIFE (Immediately Invoked Function Expression)
// (function () {
//     const addStr = "WebDeveloper"; //local variable
//     console.log(name + "Kon" + addStr);
// })();

// //21_5-2 when and how to use arguments in a function:

// // Argument is array like object but not array
//  function addName(name){
//     let fulName = '';
//     for (let i = 0; i < arguments.length; i++) {
//         const namePart = arguments[i];
//         fulName = fulName + ' ' + namePart;
//     }
//     return fulName;
//  }
// //same
//   function addName(name){
//         let fulName = ' ';
//         const result = [...arguments].join(' ');
//         return result;
//      }
// const nameIs = addName('my','name','is','linkon');
// console.log(nameIs);

// const nameIs = addName('my','name','is','linkon');
// console.log(nameIs);

//21_5-3 pin matcher, dom manipulation project challenge
