// OUPSY ! Mon horloge est cassée...
// Dans le navigateur, on remarque que l'heure ne se rafraichie pas toutes les secondes.
//    (sauf si on refresh la page bien-sûr, mais ça c'est de la triche !)

// ==> Faire en sorte que l'heure se rafraichisse automatiquement toutes les secondes.

// Pour cela, vous aurez besoin d'une fonction bien utile :
// https://developer.mozilla.org/en-US/docs/Web/API/setInterval


document.getElementById("clock").innerText = getTime();

function getTime() {
  const now = new Date();
  const date = now.toLocaleDateString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  const time = now.toTimeString().substring(0, 8);
  return `
        Nous somme le ${date}.\n
        Il est ${time}.
    `;
}
