var SomeNumber = '69';

const MY_DOB = `2001`;
console.log(MY_DOB);

let myName = "Glazkov";
const FullName = "   Timur-${myName}   ";
console.log(FullName.length);            //Output length of input
console.log(FullName.trim());            //Remove space
console.log(FullName.substring(3, 8));   //Only output designated section
console.log(typeof FullName);            //Output the data type of input

console.log(SomeNumber * 10)
// + - * / %
// ** for square
// += -= *= /= adding/substracting (able with strings too)
// ++ -- for calculation before/after the current command (position relative to data dependent)
// == >= <= ? != comparison operators

let Person = {
    Name: "sus",
    BOD: "06.09.2000",
}

const h1 = document.querySelector('h1')
h1.innerText = "bruh"

//test
let X = 20;
let Y = 10;

let result = X++ + ++X + Y-- - --Y

console.log(X)
console.log(Y)
console.log(result)