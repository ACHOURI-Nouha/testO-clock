const { expect, logFlakyTestWarningForStudent, getAssociatedFilePath } = require("../../../test");

const FILE_PATH = getAssociatedFilePath(__filename);
const repeat = require(FILE_PATH);

describe("S02E03 - 02.repeat", () => {
  it("should not return undefined", async () => {
    const result = repeat("bonjour", 3);

    expect(result, "ATTENTION, LA FONCITON NE RETOURNE RIEN !").to.be.a("string");
  });

  it("should repeat the text several time", async () => {
    const result = repeat("bonjour", 3);
        
    expect(result).to.equal("bonjourbonjourbonjour");
  });

  it("should repeat the text once", async () => {
    const result = repeat("hola", 1);
        
    expect(result).to.equal("hola");
  });

  logFlakyTestWarningForStudent();
});
