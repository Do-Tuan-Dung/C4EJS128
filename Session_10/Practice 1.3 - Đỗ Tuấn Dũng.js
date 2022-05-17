function catAndMouse(x, y, z) {
    if (Math.abs(x - z) === Math.abs(y - z)) {
        console.log("Mouse C");
    } else if (Math.abs(x - z) < Math.abs(y - z)) {
        console.log("Cat B");
    } else {
        console.log("Cat A");
    }
}

console.log(catAndMouse(13, 25, 10));
