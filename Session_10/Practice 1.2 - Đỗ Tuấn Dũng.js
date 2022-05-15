function pageCount(n, p) {
    const total = Math.floor(n / 2);
    const turns = Math.floor(p / 2);
    return Math.min(turns, total - turns);
}

console.log(pageCount(30, 7))