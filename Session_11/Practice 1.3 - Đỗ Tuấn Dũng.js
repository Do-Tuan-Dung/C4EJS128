function breakingRecords(scores) {
    let [high, low] = [scores[0], scores[0]];
    let [highScore, lowScore] = [0,0];
    for (let c = 1; c < scores.length; c++) {
        if (scores[i] > high) {
            high = scores[i];
            highScore++;
        }
        if (scores[i] < low) {
            low = scores[i];
            lowScore++;
        }
    }
    return [highScore, lowScore];
}
