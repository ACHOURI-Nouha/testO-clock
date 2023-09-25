const { Elf } = require("./03.lutins.associations");

async function test0() {
  // Retourne tous les lutins.
  const elves = await Elf.findAll();
  return elves;
}

async function test1() {
  // Retourne tous les labels.
}

async function test2() {
  // Retourne tous bons de commande, en incluant le lutin associé.
}

async function test3() {
  // Retourne le nom du lutin dont l'ID est 3 (on retourne une string donc).
  // On retourne une string donc.
}

async function test4() {
  // Retourne les noms des lutins dont les bonnets sont verts (on retourne un array de string donc).
}

async function test5() {
  // Retourne tous les cadeaux qui prennent plus de 5 jours à construire.
}

async function test6() {
  // Retourne tous les cadeaux, mais en ne gardant que les champs 'name' et 'description".
}

async function test7() {
  // Retourne le cadeau n°3, en incluant ses labels et le bon de commande dans lequel il apparait.
}

async function test8() {
  // Retourne le nombre de cadeaux présents dans le bon de commande prévu pour l'enfant "Enzo".
}

async function test9() {
  // Retourne tous les labels, trié par ordre alphabétique de leur nom.
}

async function test10() {
  // Retourne le bon de commande n°1 avec : 
  // - son lutin responsable (seulement son surnom) !
  // - la liste des cadeaux associés (seulement leur nom)
  //   - pour chaque cadeau la liste des labels associés (seulement leurs noms)
}


module.exports = {
  test0,
  test1,
  test2,
  test3,
  test4,
  test5,
  test6,
  test7,
  test8,
  test9,
  test10
};
