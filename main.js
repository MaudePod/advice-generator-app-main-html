document.querySelector(".dice_container").addEventListener('click', function () {
    this.requestSubmit();
});
document.querySelector(".dice_container").addEventListener('submit', function (e) {
    e.preventDefault();
    fetch('quotes.json').then((response) => {
        response.text().then((response) => {
            const quotes = JSON.parse(response);
            Math.floor(Math.random() * 10);
            const quoteIndex = Math.floor(Math.random() * quotes.length);
            document.querySelector(".card_body_text").innerHTML = quotes[quoteIndex].quote.trim();
            document.querySelector(".card_title").innerHTML = quotes[quoteIndex].id;
        })
    }
    )
});