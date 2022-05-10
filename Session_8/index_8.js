//let input = Number(prompt("Input:"));
let Input = 10
for (let i = 0; i < Input; i++) {
    console.log(`Position: ${i + 1}`);
}

let a = 0;
while (a < Input) {
    console.log(`Position: ${a + 1}`);
    a++;
}

let b = 0;
do {
    console.log(`Position: ${b + 1}`.toUpperCase());
    b++;
} while (b < Input);

let bitches = 6
let Sqr = ""
for (c = 1; c < bitches; c++) {
    Sqr += "*"
    for (c = 1; c < bitches; c++) {
        Sqr += "*" + '\n'
    }
}
console.log(Sqr);

let eSports = ['G2', 'Empire', 'Liquid', 'TeamSecret', 'NiP', 'Natus'];
console.table(eSports);

//eSports.splice(1, 2);
//console.log(eSports);

let newArr = eSports.join('+');
console.log(newArr);

function AAA(longboi) {
    let newArr = [1, 2, 3, 4];
    for (f = 0; f < longboi.length; f++) {
        if (f !== longboi.length - 1) {
            newArr[f] = longboi[f]
        }
    }
    return newArr
}
eSports.pop()
console.log(eSports)

//Mentor:
const Bootleg = [11, 22, 33, 44, 55];
for (g = 0; g < Bootleg.length; g++) {}

let sum = 0
for (let h = 0; h < Bootleg.length; h++) {
    sum += Bootleg[h];
}
console.log('sum', sum);

const Lead = [9, 8, 1, 2, 3, 4, 5, 6, 7];
// 1 9 8 2 3 4 5 6 7
// 1 2 9 8 3 4 5 6 7
// 1 2 3 9 8 4 5 6 7
// ...
// 1 2 3 4 5 6 7 8 9 <-- 7 steps
for (j = 0; j < Lead.length - 1; j++) {
    let Min = Lead[j];
    let index = j;
    for (k = j + 1; k < Lead.length; k++) {
        if (Min > Lead[k]) {
            Min = Lead[k];
            index = k;
        }
    }
    Lead[index] = Lead[j];
    Lead[j] = Min;
}

console.log(Lead);

//Chữa bài:
let Dia = '';
let col = 10
for (m = 1; m <= 5; m++) {
    for (n = 1; n <= col; n++) {
        if (m <= 5) {
            if (n === col / 2 + 1 - m || n === col / 2 + m) {
                Dia += '*';
            } else {
                Dia += ' ';
            }
        } 
    }
    Dia += '\n'
}
for (o = 4; o >= 1; o--) {
    for (let p = 1; p <= col; p++) {
        if (p === col / 2 + 1 - o || p === col / 2 + o) {
          Dia += '*';
        } else {
          Dia += ' ';
        }
    }
    Dia += '\n';
}
console.log(Dia);