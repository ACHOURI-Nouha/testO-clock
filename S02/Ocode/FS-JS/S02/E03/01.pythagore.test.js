const { expect, logFlakyTestWarningForStudent, getAssociatedFilePath, readCode } = require("../../../test");

const FILE_PATH = getAssociatedFilePath(__filename);

describe("S02E03 - 01.pythagore", () => {
  it("should contain the keyword return", async () => {
    const code = await readCode(FILE_PATH);

    expect(code).to.include("return");
  });

  it("should contain the keyword +", async () => {
    const code = await readCode(FILE_PATH);

    expect(code).to.include("+");
  });

  it("should contain a console.log", async () => {
    const code = await readCode(FILE_PATH);

    expect(code).to.include("console.log");
  });

  logFlakyTestWarningForStudent();
});
