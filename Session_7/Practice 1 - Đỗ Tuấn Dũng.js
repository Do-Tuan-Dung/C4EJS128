//Define


//Bài 1
let B1 = ""
for(dot1 = '*'; dot1.length <= 10; dot1 += '*') {
    B1 += dot1 + '\n';
}

console.log(B1);

//Bài 2
let B2 = ""
let n2 = 10
for(x2 = 1; x2 <= n2; x2++) {
    for(Space = 1; Space <= n2 - x2; Space++) {
        B2 += " ";
    }
    for(Star = 0; Star < 2 * x2 - 1; Star++) {
        B2 += "*";
    }
    B2 += '\n';
}

console.log(B2);

//Bài 3
let B3 = ''
const r3 = 11;
const c3 = 6;
for(e = 1; e <= 11; e++) {
    for(let f = 1; f <= 6; f++) {
        if(f >= c3 + 1 - e && e <= c3 || e >= c3 && f >= e + 1 - c3) {
            B3+= '*'
        } else {
            B3+= ''
        }
    }
    B3 +='\n';
}
console.log(B3);

//Bài 4
let B4 = '';
let n4 = 5;                                                   // Column

for (let i = 0; i < n4; i++) {                                // Reversed pyramid pattern
    for (let j = 0; j < i; j++) {                             // Printing spaces
        B4 += " ";
    }
    for (let k = 0; k < (n4 - i) * 2 - 1; k++) {              // Printing star
        B4 += "*";
    }
    B4 += "\n";
}

for (let i = 2; i <= n4; i++) {                               // Pyramid pattern
    for (let j = n4; j > i; j--) {                            // Printing spaces
        B4 += " ";
    }
    for (let k = 0; k < i * 2 - 1; k++) {                     // printing star
        B4 += "*";
    }
    B4 += "\n";
}
console.log(B4);

//Bài 5
let B5 = '';
let col = 10
for (m = 1; m <= 5; m++) {
    for (n = 1; n <= col; n++) {
        if (m <= 5) {
            if (n === col / 2 + 1 - m || n === col / 2 + m) {
                B5 += '*';
            } else {
                B5 += ' ';
            }
        } 
    }
    B5 += '\n'
}
for (o = 4; o >= 1; o--) {
    for (let p = 1; p <= col; p++) {
        if (p === col / 2 + 1 - o || p === col / 2 + o) {
          B5 += '*';
        } else {
          B5 += ' ';
        }
    }
    B5 += '\n';
}
console.log(B5);