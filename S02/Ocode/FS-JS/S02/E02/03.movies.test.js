const { expect, getAssociatedFilePath, sandbox, runCode, readCode, logFlakyTestWarningForStudent } = require("../../../test");

const FILE_PATH = getAssociatedFilePath(__filename);

describe("S02E02 - 03.movies", () => {
  let code;
  let moviesVarName;

  beforeEach(async () => {
    code = await readCode(FILE_PATH);
    ([, moviesVarName] = code.match(/var\s+(\w+)\s*=\s*\[/));

    global.alert = sandbox.stub();
  });

  it("should declare an array", async () => {
    expect(moviesVarName).to.be.a("string").that.is.not.empty;
  });

  it("should push stuff into the array", async () => {
    expect(code).to.match(new RegExp(`${moviesVarName}.push`));
  });

  it("should ask for the array length", async () => {
    expect(code).to.match(new RegExp(`${moviesVarName}.length`));
  });

  it("should read an element of the array", async () => {
    expect(code).to.match(new RegExp(`${moviesVarName}\\[`));
  });

  it("should call console log with the appropriate message", async () => {
    await runCode(FILE_PATH);

    expect(global.alert.getCall(0).firstArg).to.match(/Mon tableau contient \d+ élements, et son dernier élement vaut : .+/);
  });

  logFlakyTestWarningForStudent();
});
