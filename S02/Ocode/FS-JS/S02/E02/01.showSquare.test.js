const { expect, findInCode, getAssociatedFilePath, runCode, sandbox, logFlakyTestWarningForStudent } = require("../../../test");

const FILE_PATH = getAssociatedFilePath(__filename);

describe("S02E02 - 01.showSquare", () => {
    
  let logSpy;
  beforeEach(() => {
    logSpy = sandbox.stub(console, "log");
  });

  describe("Etape 1 - Declare the function", () => {
    it("should have declared a 'showSquare' identifier in the file", async () => {
      const promise = findInCode("showSquare", FILE_PATH);
        
      const errorMessage = "Aucune fonction 'showSquare' n'est déclarée";
      await expect(promise, errorMessage).to.be.fulfilled;
    });
    
    it("should have declared a function 'showSquare'", async () => {
      const { keyword } = await findInCode("showSquare", FILE_PATH);
    
      expect(keyword).to.equal("function");
    });
    
    it("should log the square of the given number in the appropriate message", async () => {
      const { value: showSquare } = await findInCode("showSquare", FILE_PATH);
      const GIVEN_NUMBER = 42;
    
      showSquare(GIVEN_NUMBER);
    
      const errorMessage = `\nLorsqu'appelée avec le nombre '${GIVEN_NUMBER}', le resultat est inexact. Voir message `;
      expect(logSpy, errorMessage).to.have.been.calledWith(`Le carré de ${GIVEN_NUMBER} est : ${GIVEN_NUMBER * GIVEN_NUMBER}`);
    });
  });

  describe("Etape 2 - Call the function", () => {
    it("should log the square of the given number in the appropriate message", async () => {
      await runCode(FILE_PATH);
    
      expect(logSpy).to.have.been.calledOnce;
      expect(logSpy.getCall(0).firstArg).to.equal("Le carré de 4 est : 16");
    });
  });

  logFlakyTestWarningForStudent();
});
