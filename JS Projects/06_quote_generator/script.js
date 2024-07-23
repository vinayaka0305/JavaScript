const quoteData = document.querySelector("blockquote");
const author = document.querySelector("span");
const newQuote = document.querySelector(".new");

const url = "https://api.quotable.io/random";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    quoteData.innerHTML = data.content;
    author.innerHTML = data.author;
  } catch (err) {
    console.log(err);
  }
}

newQuote.addEventListener("click", () => {
  fetchData();
});

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quoteData.innerHTML +
      "---by" +
      author.innerHTML,
    "tweet window",
    "width:600",
    "height=300"
  );
}
