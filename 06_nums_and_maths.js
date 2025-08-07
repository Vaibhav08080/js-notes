const score = 400 
const balance = new Number(100) // explicitly saying its number 
console.log(score.toFixed(2))
console.log(balance.toFixed(2))
console.log(typeof(score))
const hundreds = 10000000000000
console.log(hundreds.toLocaleString());
// abs convert negative to positive and there is round which do round off  MATH LIBRARY
// randome gives the vlaue from 0 to 1 

const min = 10 
const max = 20
console.log(Math.floor(Math.random()* (max - min +1 ) ) +min)