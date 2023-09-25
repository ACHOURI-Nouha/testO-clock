const { expect, findInCode, getAssociatedFilePath, runCode, sandbox, logFlakyTestWarningForStudent } = require("../../../test");

const FILE_PATH = getAssociatedFilePath(__filename);

describe("S02E01 - 01.conditions", () => {
  let logSpy;
  beforeEach(() => {
    logSpy = sandbox.stub(console, "log");
  });

  describe("Etape 1 - randomNumber", () => {
    it("should declare a variable called randomNumber", async () => {
      const promise = findInCode("randomNumber", FILE_PATH);
    
      const errorMessage = "Aucune variable 'randomNumber' n'est déclarée";
      await expect(promise, errorMessage).to.be.fulfilled;
    });
    
    it("should call Math.random", async () => {
      const spy = sandbox.spy(Math, "random");

      await runCode(FILE_PATH);

      expect(spy).to.have.been.calledOnce;
    });
        
    it("should generate a random number between [0, 1[", async () => {
      const generatedNumbers = (await Promise.all([
        findInCode("randomNumber", FILE_PATH),
        findInCode("randomNumber", FILE_PATH),
        findInCode("randomNumber", FILE_PATH)
      ])).map(({ value }) => value);

      generatedNumbers.forEach(number => {
        expect(number).to.be.greaterThan(0);
        expect(number).to.be.lessThan(1);
      });
    });
  });

  describe("Etape 2 - Log message", () => {
    it("should log an appropriate message", async () => {
      await runCode(FILE_PATH);

      expect(logSpy.getCall(0).firstArg).to.match(/Mon nombre aléatoire est : 0.[0-9]*/);
    });
  });

  describe("Etape 3 - Condition", () => {
    it("should log the appropriate message when the random number is bigger than 0.5", async () => {
      sandbox.stub(Math, "random").returns(0.7);

      await runCode(FILE_PATH);

      expect(logSpy.getCall(1).firstArg).to.match(/C'est grand ça !/);
    });

    it("should log the appropriate message when the random number is smaller than 0.5", async () => {
      sandbox.stub(Math, "random").returns(0.3);

      await runCode(FILE_PATH);

      expect(logSpy.getCall(1).firstArg).to.match(/C'est petit ça !/);
    });

    it("should log the appropriate message when the random number is equal to 0.5", async () => {
      sandbox.stub(Math, "random").returns(0.5);

      await runCode(FILE_PATH);

      expect(logSpy.getCall(1).firstArg).to.match(/C'est petit ça !/);
    });
  });

  logFlakyTestWarningForStudent();
});
