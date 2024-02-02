"use strict"

// 1 Task

const currentMaxValue = 4589;

// let reverseMaxValue = Number(new String(currentMaxValue).split("").reverse().join(""));

let valueString = currentMaxValue.toString();
let valueArray = valueString.split("");
let reversedArray = valueArray.reverse();
let newValue = reversedArray.join("");
let reverseMaxValue = Number(newValue);


console.log(reverseMaxValue); 
console.log(typeof reverseMaxValue); 

// 2 Task

// const resultsArray = [1, 2, [3, [4]]];
// let productOfArray = 1;

// for (let number of resultsArray.flat(Infinity)){
//     productOfArray *= number;   
// }

// console.log(productOfArray);