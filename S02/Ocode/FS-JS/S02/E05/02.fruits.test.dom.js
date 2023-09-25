setInterval(verify, 200);

function verify() {
    verifyPart1();
    verifyPart2();
    verifyPart3();
}

function verifyPart1() {
    if (document.querySelector("[data-test='1']")) { return; }

    if (document.querySelector("#brocoli.filled")) {
        document.body.insertAdjacentHTML("beforeend", '<h3 data-test="1" style="color: green;">Partie 1: OK !</h3>')
    }
}

function verifyPart2() {
    if (document.querySelector("[data-test='2']")) { return; }
    
    if (document.querySelectorAll(".fruit.filled").length === 15) {
        document.body.insertAdjacentHTML("beforeend", '<h3 data-test="2" style="color: green;">Partie 2: OK !</h3>')
    }
}

function verifyPart3() {
    if (document.querySelector("[data-test='3']")) { return; }
    
    document.querySelectorAll(".fruit").forEach(fruit => {
        let flag;
        fruit.addEventListener("mouseover", () => {
            flag = !! fruit.classList.contains("filled");
        });
        fruit.addEventListener("mouseleave", () => {
            if (! flag) { return; }
            if (fruit.classList.contains("filled")) { return; }
            if (document.querySelector("[data-test='3']")) { return; }
            document.body.insertAdjacentHTML("beforeend", '<h3 data-test="3" style="color: green;">Partie 3: OK !</h3>')
        })
    })
}
