const { expect, findInCode, getAssociatedFilePath, runCode, sandbox, logFlakyTestWarningForStudent } = require("../../../test");

const FILE_PATH = getAssociatedFilePath(__filename);

describe("S02E02 - 02.greetings", () => {
    
  let logSpy;
  beforeEach(() => {
    logSpy = sandbox.stub(console, "log");
  });

  describe("Etape 1 - Declare the function", () => {
    it("should have declared a 'greetings' identifier in the file", async () => {
      const promise = findInCode("greetings", FILE_PATH);
        
      const errorMessage = "Aucune fonction 'greetings' n'est déclarée";
      await expect(promise, errorMessage).to.be.fulfilled;
    });
    
    it("should have declared a function 'greetings'", async () => {
      const { keyword } = await findInCode("greetings", FILE_PATH);
    
      expect(keyword).to.equal("function");
    });
    
    it("should appropriate presentation for a random user", async () => {
      const { value: greetings } = await findInCode("greetings", FILE_PATH);
      const [firstName, lastName, age] = ["George", "Abitbol", 42];
    
      greetings(firstName, lastName, age);

      const errorMessage = `\nLorsqu'appelée avec les arguments suivant :\n- firstName: '${firstName}'\n- lastName: '${lastName}'\n- age: '${age}'\n alors le résultat est inexact. Voir message `;
      expect(logSpy, errorMessage).to.have.been.calledWith(`Je m'appelle ${firstName} ${lastName} et j'ai ${age} ans.`);
    });
  });

  describe("Etape 2 - Call the function", () => {
    it("should have called the function with 3 arguments", async () => {
      await runCode(FILE_PATH);
    
      expect(logSpy.getCall(0).firstArg).to.match(/Je m'appelle \w+ \w+ et j'ai \d+ ans\./);
    });
  });

  logFlakyTestWarningForStudent();
});
