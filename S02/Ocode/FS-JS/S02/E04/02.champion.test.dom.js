// This is a test file. Do not modify !
const body = $("body"); 
body.insertAdjacentHTML("beforeend", "<br><br><br>");

// 1.
if ($("#zizou").style.color === "rgb(255, 0, 255)") { insertMessage("Exo 1: OK"); }

// 2.
if ($(".goalkeeper").style.backgroundColor === "rgb(52, 235, 158)") { insertMessage("Exo 2: OK"); }

// 3.
const { textContent, innerHTML, innerText } = $("a");
if ([textContent, innerHTML, innerText].includes("Thierry Henry")) { insertMessage("Exo 3: OK"); }

// 4.
if (Array.from($$(".defender")).every(def => def.style.textDecoration === "underline")) { insertMessage("Exo 4: OK"); }

// 5.
if($$("li").length === 7) { insertMessage("Exo 5: OK"); }

// 5. bonus
if($("li.forward")) { insertMessage("Exo 5 (bonus): OK"); }



function $(e) {
    return document.querySelector(e);
}

function $$(e) {
    return document.querySelectorAll(e);
}

function insertMessage(message) {
    body.insertAdjacentHTML("beforeend", `<h3 style="color: green;">${message}</h3>`);
}
