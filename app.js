const QUOTE_API = "https://api.quotable.io/quotes/random";
const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");
const newQuote = document.querySelector(".new-quote");

async function generateQuote() {
  try {
    const response = await fetch(QUOTE_API);
    const quote = await response.json();
    const { content, author } = quote[0];

    quoteText.innerText = `" ${content} "`;
    quoteAuthor.innerText = author;
  } catch (error) {
    quote.innerText = "Error";
    quoteAuthor.innerText = "";
  }
}

generateQuote();

newQuote.addEventListener("click", generateQuote);
