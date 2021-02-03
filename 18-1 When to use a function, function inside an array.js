//18-1 When to use a function, function inside an array
//-----------------------------------------------------
// let arr = [1, 5, 6, 4, 1, 26, 4, 85, 23, 46];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element % 2 !== 0) {
//         console.log(element*2, " :Odd Number");
//     } else {
//         console.log(element," : Even Number");
//     }
// }
//---------------------Common things Will make Functions-----------------------------
//----------------Using Function to use in for loop-------------------

function evenify(numbers) {
    if (numbers % 2 !== 0) {
        console.log(numbers * 2, " *2");
    } else {
        console.log(numbers, " : Even Number");
    }
}
//----Before Function Creating Stucture Was---------//
// //for (let i = 0; i < friendAge.length; i++) {
//     const element = friendAge[i];
//     // console.log(element);
//     evenify(element);
// }
//---------Creating evenify Structure function----------//
function evenifyAll(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        evenify(element);
    }
}
let friendAge = [14, 16, 14, 15, 21, 31, 23];
evenifyAll(friendAge);