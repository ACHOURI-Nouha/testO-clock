const { expect, logFlakyTestWarningForStudent, buildVirtualDOM } = require("../../../test");

describe("S02E04 - 01.button", () => {

  it("should see a GOOD button on the page", async () => {
    const { document } = await buildVirtualDOM(__filename);
    const buttonElement = document.querySelector("#btn");

    const { textContent, innerHTML, innerText } = buttonElement;
    expect([textContent, innerHTML, innerText]).to.include("I am a GOOD button!");
  });

  logFlakyTestWarningForStudent();
});
