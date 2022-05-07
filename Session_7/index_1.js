let myBool = 3 > 4;
let myBool2 = 1 == "1";  //Compare value of different data types
let myBool3 = 2 === "2"; //Compare types of data
let myBool4 = !false;    //Negative

console.log(myBool);
console.log(myBool2);
console.log(myBool3);

let A = false;
let B = true;
let C = true;

let And = A && B;
let Or = A || B;
let OMG = ((A || B) && C) || (B && (A || C));

console.log(OMG);

console.log(typeof NaN);

let myString = "123";
let myNaN = "123f";
let myNum1 = 10;
let myNum2 = 20;
let result = myString + myNum1 + myNum2

console.log(Number(myString));
console.log(+myNaN);
console.log(typeof (Number(myNaN)));
console.log("Kiểu: ", typeof result, "\nGiá trị:", result);


//Falsy:
//false, "", 0, mull, undefined, NaN

if ("") console.log('lmao')
if (1 > 0) console.log('lmao')

let Apple = 10;
let Butter = 20;
if (A > B) {
    console.log("A > B");
} else if (A === B) {
    console.log("A = B common type");
} else if (A == B) {
    console.log("A = B different types")
} else {
    console.log("A < B");
}

let Charlie = Apple > Butter ? "More" : Apple == Butter ? "Equal" : Apple < Butter  ? "Less" :
console.log(Charlie);

let GoHotel = 0;
let Month = 5;

switch (Month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    default:
        console.log("No month");
        break;
}

//for (begin; end condition; jump) {
//    .log(do something)}
for (let i = 0; i < 11; i++) {
    console.log(i + 1);
}

for (let i = 0; i < 30; i += 2) {
    console.log(i);
}

let inputNumber = 13;
let isPrime = true;

for (let i = 2; i < inputNumber; i++) {
    if (inputNumber % i === 0) {
        isPrime = false;
        console.log("first data is: ", i);
        break;
    }
}
if (isPrime) {
    console.log("Input number is prime");
} else {
    console.log("Input number is not prime");
}