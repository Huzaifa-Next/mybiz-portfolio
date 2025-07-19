console.log("script loaded");
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.checked = true;
}
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});



const form = document.getElementById("contact-form")
form.addEventListener("submit", function(e) {

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();
if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return;
}
if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
}
alert("Thanks for contacting us we'll get back to you soon");
form.reset();
});
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});

