/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumber(num1, num2) {
//     //Code block
//     return num1 + num2
// }
// let sum = (5,3)
// console.log(sum)
// Arrow Function With Parameters
// const addTwoNumber = (num1,num2) => {
//     return num1 + num2
// } 
// let sum = addTwoNumber(5,3);
// console.log(sum)

// Single Line Arrow Function With Parameters
const addTwoNumber2 = (num1,num2) => num1+num2;
let sum = addTwoNumber2(5,3);
console.log(sum)

// Implicit Returns

const saySomething = message => console.log(message);
saySomething('hello')

// if function without no parantheses 
const saySomething2 =  () => console.log('hello2');
saySomething2()
// Returning Multiple Lines
const multiLine = () => (
    `
    Hello
    Hello
    Hello
    `
)
console.log(multiLine())
