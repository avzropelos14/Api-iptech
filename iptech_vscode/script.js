const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en";

async function getquote(url) {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f7b615e737msh3112b1f2779bcb1p14f9dfjsn67f71d1adf37',
            'x-rapidapi-host': 'quotes15.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        quote.innerHTML = data.content;
        author.innerHTML = data.originator.name;
    } catch (error) {
        quote.innerHTML = "Failed to fetch quote.";
        author.innerHTML = "";
        console.error(error);
    }
}

function x() {
    window.open(
        "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote.innerHTML + " — " + author.innerHTML),
        "Tweet Window",
        "width=600, height=300"
    );
}

getquote(api_url);
