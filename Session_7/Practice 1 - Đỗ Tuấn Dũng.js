//Define


//Bài 1
let B1 = ""
for(dot = '*'; dot.length <= 20; dot += '*') {
    B1 += dot + '\n';
}

console.log(B1)

//Bài 2

    let B2 = "";
    for (x = 1; x <= 15; x++) {
        for (y = 1; y <= 15 - x; y++) {
            B2 += "   ";
        }
        for (m = 15 - x + 1; m < 15 + 1; m++) {
            B2 += "*  ";
        }
        for (n = 15 + 1; n <= 2 * 15 - 1; n++) {
            B2 += "   ";
        }
        B2 += '\n';
    }

console.log(B2)

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

