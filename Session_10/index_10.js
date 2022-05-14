//Biometric scan
//Biometric check
//Save data (time)
//Notify success
//Open

// function getInput (question = "Enter your number: ") {
//     let inPutStr = prompt(question);
//     return inPutStr;
// }

// function convertStr (str) {
//     const num = Number(str);
//     if (isNaN(num)) {
//         return 0;
//     }
//     return num;
// }

// function checkEven () {
//     const input = getInput();
//     const myNum = convertStr(input);
//     if (myNum % 2 == 0) {
//         return true;
//     }
//     return false;
// }

// function checkPrime () {
//     const input = getInput();
//     const myNum = convertStr(input);
//     let isPrime = true;
//     for (i = 0; i <= myNum; i++) {
//         if (myNum % i === 0) {
//             return false;
//         }
//         return true;
//     }
// }

// function loopCheckPrime () {
//     while (true) {
//         const isPrime = checkPrime();
//         if (isPrime) {
//             alert("Prime");
//         } else {
//             alert("Not prime");
//         }
//         let answer = getInput("Do you want to continue? (Y or N)");
//         if (answer.trim().toLowerCase() === "y") {

//             break;
//         }
//     }
//     alert("Yeeet!")
// }

// loopCheckPrime()

//Declaration function and arrow function
let calculator = {
    x: 10,
    y: 20,
    sum: function () {
        console.log(this.x + this.y);
    },
    sub: () => {
        console.log("sub");
    },
};

calculator.sum();
calculator.sub();

//Anonymous function
setTimeout(function () {
    console.log("Delay 3s");
}, 3000);

//Bind call apply
const computer = {
    a: 20,
    b: 30,
    log: function (msg, character) {
        console.log("LOG: ", msg, character, this.a, this.b);
    },
    notif: () => {
        console.log("NOTI: ", typeof this);
        console.log("NOTI: ", this.a, this.b);
    },
};

const laptop = {
    a: 0.1,
    b: 0.2,
};

computer.log();
let laptopLog = computer.log.bind(laptop);
laptopLog();