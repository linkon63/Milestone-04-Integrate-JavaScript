// What Can i Do Argument--------------

function add(numbers) {
//   console.log(arguments[2]);
let sum = 0;
for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i];
    sum = sum + element;
}
  return sum;
}
let arr = add(5,5,5,5,5);
console.log(arr);



