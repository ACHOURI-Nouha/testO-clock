function multiply(nb1 = 1, nb2 = 2){
    return (nb1 * nb2);
}
/*let i = multiply(2, 3);
console.log(i);*/

function presentation(lastName = "Jonh", firstName = "Doe", age = 50){
    return (`Bonjour je m'appelle ${lastName} ${firstName}, et j'ai ${age} ans`);
}
/*let i = presentation("Pitchou", "Neuuh", 12);
console.log(i);*/

function sentence(text, nb = 1){
    return text.repeat(nb);
}
/*let i = sentence("fa");
console.log(i);*/

/* Tentative de compréhension du code de Lesly
code de base = function phrase (message, info = "à o'clock"){
    return `Actuellement j'étudie ${info};`
}
console.log(phrase("moi"))
ma correction = 
function phrase (message, info = "o'clock"){
    return `${message}, Actuellement j'étudie ${info}`;
}
let i = phrase("moi");
console.log(i); */