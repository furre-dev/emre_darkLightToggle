const icon = document.querySelector(".mode-icon");
const body = document.body;
const text = document.querySelector(".text")
const text2 = document.querySelector(".text2")
const span = document.querySelector(".mode-span")
const iconSpan = document.querySelector(".icon-span")


icon.addEventListener("click", () => {
    // IMPORTANT!!!!!!!!!!!!!!!!
    //Make sure you have the same hostname and port for this to work.
    //if not copy your hostlink and replace it with ("http://127.0.0.1:5500") below.
    if (icon.src === "http://127.0.0.1:5500/sources/sun.png") {
        icon.src = "/sources/moon.png"
        span.innerHTML = "LIGHTMODE"
        iconSpan.innerHTML = "moon"
    } else {
        icon.src = "/sources/sun.png"
        span.innerHTML = "DARKMODE"
        iconSpan.innerHTML = "sun"
    }
    console.log(icon.src)
    body.classList.toggle("dark-body")
    text.classList.toggle("dark-text")
    text2.classList.toggle("dark-text")
})