const { expect, logFlakyTestWarningForStudent, getAssociatedFilePath } = require("../../../test");
const FILE_PATH = getAssociatedFilePath(__filename);
const capitalize = require(FILE_PATH);

describe("S02E03 - 03.capitalize", () => {
  it("should capitalize the sentence", async () => {
    const result = capitalize("ocLOcK");

    expect(result).to.equal("Oclock");
  });

  it("should work with a sentence with spaces", async () => {
    const result = capitalize("le JS c'est FUN !");

    expect(result).to.equal("Le js c'est fun !");
  });

  logFlakyTestWarningForStudent();
});
