
const sinBtn = document.querySelector(".sinBtn");

console.log(sinBtn)
sinBtn.addEventListener("click", () => {
    setTimeout(() => {
        window.location.href = "form.html";
    }, 1000);
})

const regt = document.querySelector(".form")

console.log(regt)

regt.addEventListener("submit", (e) => {
    e.preventDefault()
    setTimeout(() => {
        window.location.href = "register.html";
    }, 1000)
})


