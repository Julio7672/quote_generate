const button = document.querySelector(".button")
const quote = document.querySelector(".quoteText")
const author = document.querySelector(".authorText")
const Url = 'https://dummyjson.com/quotes/random'



button.addEventListener('click', async () => {
    /*
fetch(Url).then((response) => response.json()).then((data) => {
 })
 */
try {
    const response = await fetch(Url)
    const data = await response.json()
    quote.textContent = data.quote
    author.textContent = `- ${data.author}`
}
catch {

}
})

//(fetch("https://dummyjson.com/quotes/random")).then((response) => response.json()).then((data) => console.log(data.quote))