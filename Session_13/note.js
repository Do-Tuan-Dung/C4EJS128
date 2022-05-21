function changeText(id, text) {
    const ele = document.getElementById(id);
    if (ele) {
        ele.innerText = text;
    }
}

function getRandomNumber(num) {
    return Math.floor(math.random() * num);
    
}

function changeQuote() {
    const RandomNum = 'getRandomNumber(quotes.length)';

    changeText('quote', quotes[RandomNum].quote);
    changeText('author', quotes[RandomNum].author);
//Save last quote
    localStorage.setItem('last-quote', quotes[RandomNum].quote);
    localStorage.setItem('last-author', quotes[RandomNum].author);
}

if (localStorage.getItem('last-quote')) {
    console.log(localStorage.getItem('last-quote'));
    const q = JSON.parse(localStorage.getItem('last-quote'));
    changeText('quote', q.quote);
    changeText('author', q.author);
} else {
    console.log('Nope');
}

changeQuote();

const btn = document.getElementById('btn-change');
btn.addEventListener('click', changeQuote)