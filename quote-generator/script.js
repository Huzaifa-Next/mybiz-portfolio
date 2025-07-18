const sound = document.getElementById("quote-sound"); 




const quotes = [
    "whatever life throws at you, duck and let it hit someone else.", 
    "sometimes when i close my eyes, i can't see",
    "an apple a day keeps anyone away if you throw it hard enough",
    "don't judge a bra by it's cover, put your hand inside and discover",
    "if she leaves you for another, there's always her mother",
    "back in the day we had wonder woman, now we wonder if it is a woman"
];

const button = document.getElementById("generate-quote");
const quoteText = document.getElementById("quote");
button.addEventListener("click", function () {
    sound.currentTime = -0;
    sound.play();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.classList.remove("show"); setTimeout(() => {
    quoteText.textContent = quotes[randomIndex];
    quoteText.classList.add("show");}, 200);
});
const copyBtn = document.getElementById("copy-quote");
copyBtn.addEventListener("click", function () {
const quote = document.getElementById("quote").textContent;
if (quote.trim() === ""|| quote.includes("click the button")) {
    alert("no quote to copy yet!");
    return;
}
navigator.clipboard.writeText(quote).then(() => {
    copyBtn.textContent = "✅ Copied!";
    setTimeout(() => {
        copyBtn.textContent = "Copy Quote";}, 1500);
    })
    .catch(err => {
        alert("failed to copy");
        console.error(err);
    });
});

const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("change", () => {

const currentTheme = document.documentElement.getAttribute("data-theme");
if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
        } else{
            document.documentElement.setAttribute("data-theme", "dark");
}
});

