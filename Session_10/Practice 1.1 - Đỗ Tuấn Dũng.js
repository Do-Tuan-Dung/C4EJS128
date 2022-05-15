//Setup
let birdSighting = [2,2,2,5,6,7,9,8,6,8,9,4,3,2,5,7,9,2,5,9,7,5,3,1,1,3,4,6,7,5,4,9]

//Function
function migratoryBirds(arr) {
    // let sighted = arr[0];
    // let mostSighted = 0;
    // for (i = 1; i < sighted.length; i++) {
    //     if (arr[i] > sighted) {
    //         mostSighted = i;
    //         sighted = arr[i]
    //     }
    // }
    // return mostSighted;
    
    let sorted = arr.sort();
    let ans = sorted[0];
    let maxOccur = 1,
        counter = 0;
    
    for (let i = 0; i < sorted.length; i++) {
        counter = (sorted[i] === sorted[i-1]) ? counter + 1 : 0;
        if (counter > maxOccur) {
            ans = sorted[i];
            maxOccur = counter;
        }
    }
    return ans;
}

console.log(migratoryBirds(birdSighting))