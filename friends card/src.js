const quotes = [
    {
        saying: "FRIENDS is an American sitcom created by David Crane and Marta Kauffman."},
        {
            saying: "Rachel: “Well, maybe I don’t need your money. Wait, wait, I said maybe!”"
        },
    {
        saying: "Ross:I'm gonna go out on a limb and say no divorces in '99! "
    },
    {
        saying: "Monica: Is it me? Is it like I have some sort of beacon that only dogs and men with severe emotional problems can hear"
    },
    {
        saying: " Chandler: I'm not great at the advice. Can I interest you in a sarcastic comment?"
    },
    {
        saying: "Joey:You can’t just give up. Is that what a dinosaur would do?"
    },
   
    {
        saying: "Phoebe:They don’t know that we know they know we know."
    },
   
   
];

const quoteContainer = document.getElementById('quote-container');
const quoteImg = document.getElementById('quote-img');
const quoteText = document.getElementById('quote');

function generateRandomQuote() {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[quoteIndex];

    quoteText.textContent = randomQuote.saying;
    quoteImg.src = `images/image${quoteIndex +1}.png`;
}

const newQuoteBtn = document.getElementById('new-quote-btn');
newQuoteBtn.addEventListener('click', generateRandomQuote);

generateRandomQuote();
