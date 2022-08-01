const count = document.querySelector(".count-txt");
const generate = document.querySelector(".generate");

generate.addEventListener("click", generateNumber);

function generateNumber() {
    const generator = Math.floor(Math.random() * 50 + 1);

    count.innerHTML = generator;
}