//18-2 When to return from a function and from where
//-------------Using Function_______return Value__________
function evenIfy(numbers) {
    if (numbers% 2 ==0) {
        return numbers;
    }else{
        return numbers * 2;
    } // you can use return here also it's depend on you :) 
}

let inputNumbers = evenIfy(3);
let squre = inputNumbers * inputNumbers;
console.log("Result is: ", squre);

//--------using array to retur a array-------//

function arrayReturn(array) {
    let returnArry = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element%2 !== 0) {
            let getOddDouble = element*2;
            returnArry.push(getOddDouble);
        }
    }return returnArry;
}

let arrInput = [1,3,4,5,2,6,3];
let result = arrayReturn(arrInput);
console.log(result);