/** CREATION D'UNE CALCULATRICE */

// Pssst, il y a un petit commentaire instructif dans le fichier HTML (plaisir d'apprendre 😍)
// Ensuite le reste du code est à implémenter dans `modularize.utils.js`

// Si tu es curieux, tu peux lire le code de ce fichier ! C'est toujours bon à prendre ! Il n'y a pas besoin de tout comprendre.

const operations = buildOperations();
operations.forEach(addOperationToDOM);


function buildOperations() {
  return [{
    id: "add",
    name: "addition",
    sign: "+",
    isSingleMemberOperation: false
  }, {
    id: "subtract",
    name: "soustraction",
    sign: "-",
    isSingleMemberOperation: false
  }, {
    id: "multiply",
    name: "multiplication",
    sign: "x",
    isSingleMemberOperation: false
  }, {
    id: "divide",
    name: "division",
    sign: "/",
    isSingleMemberOperation: false
  }, {
    id: "round",
    name: "arrondir",
    sign: null,
    isSingleMemberOperation: true
  }, {
    id: "truncate",
    name: "tronquer",
    sign: null,
    isSingleMemberOperation: true
  }];
}


function addOperationToDOM(operation) {
  const calculatorElement = document.getElementById("calculator");
  calculatorElement.insertAdjacentHTML("beforeend", buildOperationHTML());

  const computeButton = document.getElementById(operation.id);
  computeButton.addEventListener("click", executeOperation);


  function buildOperationHTML() {
    if (operation.isSingleMemberOperation) {
      return buildOneMemberOperationHTML();
    } else {
      return buildTwoMembersOperationHTML();
    }

    function buildTwoMembersOperationHTML() {
      return `
                <div>
                    <input type="text" class="${operation.id}">
                    <span>${operation.sign}</span>
                    <input type="text"  class="${operation.id}">
                    <span>=</span>
                    <input type="text" disabled id="result-${operation.id}">
                    <button id="${operation.id}">Calculer</button>
                </div>
            `;
    }

    function buildOneMemberOperationHTML() {
      return `
                <div>
                    <input type="text"  class="${operation.id}">
                    <span>(${operation.name})</span>
                    <span>=</span>
                    <input type="text" disabled id="result-${operation.id}">
                    <button id="${operation.id}">Calculer</button>
                </div>
            `;
    }
  }

  function executeOperation() {
    const memberElements = document.getElementsByClassName(operation.id);
    const values = Array.from(memberElements).map(element => parseFloat(element.value));

        const result = computer[operation.id](...values); // eslint-disable-line

    document.getElementById(`result-${operation.id}`).value = result;
  }
}
