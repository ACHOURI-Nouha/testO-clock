const { expect, logFlakyTestWarningForStudent, getAssociatedFilePath } = require("../../../test");
const FILE_PATH = getAssociatedFilePath(__filename);
const describeCountry = require(FILE_PATH);

describe("S02E03 - 05.atlas", () => {
  it("should describe france", async () => {
    const result = describeCountry("france");

    expect(result).to.equal("Le pays France possède 68014000 habitants. On y parle principalement français et on paie en euro.");
  });

  it("should not describe a non defined country", async () => {
    const result = describeCountry("wakanda");

    expect(result).to.equal("Ce pays n'existe pas.");
  });

  it("should work with peru", async () => {
    const result = describeCountry("peru");

    expect(result).to.equal("Le pays Peru possède 31914989 habitants. On y parle principalement espagnol et on paie en sol.");
  });

  logFlakyTestWarningForStudent();
});
