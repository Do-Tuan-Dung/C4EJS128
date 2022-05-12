let eSports = ['G2', 'Empire', 'Liquid', 'TeamSecret', 'NiP', 'Natus'];

for (index in eSports) {
    console.log(index, eSports[index]);
}

for (value of eSports) {
    console.log(value)
}

let amongus = {
    1: "alpha",
    2: "beta",
    3: "charlie",
    4: "delta",
}
console.table(amongus);

//CRUD

amongus[6] = "foxtrot";
console.log(amongus[6]);