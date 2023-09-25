// This is a test file. Do not modify !

const { innerHTML, innerText, textContent } = document.querySelector("button");

if ([innerHTML, innerText, textContent].includes("I am a GOOD button!")) {
    document.querySelector("body").insertAdjacentHTML("beforeend", buildSuccessMessage());
}

function buildSuccessMessage() {
    return `
        <br><br><br>
        <h1 style="color: green;">Bien joué ! Bonne réponse !</h1>
    `;
}
