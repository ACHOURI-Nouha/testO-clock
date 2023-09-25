const { expect, buildVirtualDOM, logFlakyTestWarningForStudent } = require("../../../test");


describe("S02E05 - 01.buttonClickListener", () => {

  it("should change the text of the button after a click", async () => {
    const { document } = await buildVirtualDOM(__filename);
    const buttonElement = document.querySelector("#my-button");

    buttonElement.click();

    const { textContent, innerHTML, innerText } = buttonElement;
    expect([textContent, innerHTML, innerText]).to.include("Bingo !");
  });

  it("should not change the textContent if there is no click on the button", async () => {
    const { document } = await buildVirtualDOM(__filename);
    const buttonElement = document.querySelector("#my-button");
    const { textContent, innerHTML, innerText } = buttonElement;

    expect([textContent, innerHTML, innerText]).to.include("Click me, I'm famous!");
  });

  logFlakyTestWarningForStudent();
});
