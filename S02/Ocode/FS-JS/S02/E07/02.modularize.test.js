const { expect, logFlakyTestWarningForStudent } = require("../../../test");

const computer = require("./02.modularize.utils");

describe("S02E07 - 02.modularize.utils", () => {
  it("should add numbers", async () => {
    const result = computer.add(4, 5);

    expect(result).to.equal(9);
  });

  it("should subtract numbers", async () => {
    const result = computer.subtract(6, 1);

    expect(result).to.equal(5);
  });

  it("should multiply numbers", async () => {
    const result = computer.multiply(4, 5);

    expect(result).to.equal(20);
  });

  it("should divide numbers", async () => {
    const result = computer.divide(10, 5);

    expect(result).to.equal(2);
  });

  it("should not divide by zero", async () => {
    const result = computer.divide(4, 0);

    expect(result).to.be.null;
  });

  it("should round numbers", async () => {
    const result = computer.round(4.9);

    expect(result).to.equal(5);
  });

  it("should truncate numbers", async () => {
    const result = computer.truncate(4.9);

    expect(result).to.equal(4);
  });

  logFlakyTestWarningForStudent();
});
