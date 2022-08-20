const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
copyBtn = document.querySelector(".copy");

// random quote function
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading..."
    // fetching random quote/data dari API
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
    console.log(result);
    quoteText.innerText = result.content;
    authorName.innerText = result.author;
    quoteBtn.innerText = "New Quote";
    quoteBtn.classList.remove("loading");
    });
}

// copy text quote
copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});

quoteBtn.addEventListener("click", randomQuote);