"use strict"

// 1 Task

const currentMaxValue = 4589;

let reverseMaxValue = Number(currentMaxValue.toString().split("").reverse().join("")); // 3 Вариант


console.log(reverseMaxValue); 
console.log(typeof reverseMaxValue); 

// 2 Task

const resultsArray = [1, 2, [3, [4]]];
let productOfArray = 1;

for (let number of resultsArray.flat(Infinity)){
    productOfArray *= number;   
}

console.log(productOfArray);