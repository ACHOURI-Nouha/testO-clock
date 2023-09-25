// Objectif : dire bonjour, c'est bien. Mais dans la bonne langue, c'est mieux ! 

// Dans l'exercice '01.randomHelloServer', on renvoie un texte aléatoire. 
// Cette fois-ci, nous allons adapter la réponse à la demande de notre utilisateur :
// Si l'utilisateur demande la route `/fr`, répondre "Bonjour".
// Si l'utilisateur demande la route `/es`, répondre "Hola".
// Si l'utilisateur demande la route `/uk`, répondre "привіт".
// Si l'utilisateur demande la route `/en`, répondre "Hi".
// Si l'utilisateur demande la route `/`, répondre "Hi" par défaut.

const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  const helloMap = {
    fr: "Bonjour",
    es: "Hola",
    uk: "привіт",
    en: "Hi"
  };
  res.end(helloMap.fr);
});

server.listen(3000);




// Bonus : 
// Si l'utilisateur demande la route `/`, plutôt que de répondre "Hi" par défaut, 
// on va chercher dans l'objet `req` si on trouve pas des informations sur la langue de l'utilisateur appelant.
// Pour cela, on peut regarder dans headers de la requêtes si on ne trouve pas un code-langue.
// Si c'esdt le cas, c'est gagné : on l'extrait et on répond en conséquence !
