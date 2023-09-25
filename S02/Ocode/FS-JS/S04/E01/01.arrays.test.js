const { expect, getAssociatedFilePath } = require("../../../test");

const FILE_PATH = getAssociatedFilePath(__filename);
const {
  removeOddNumbers,
  filterFlowers,
  findFlower,
  computeSquares,
  buildFlowerHTML,
  ouafOuaf,
  improvedOuafOuaf,
  hasFlower
} = require(FILE_PATH);

describe("S04E01 - 01.arrays", () => {
  describe("removeOddNumbers", () => {
    it("should remove odd numbers", async () => {
      expect(removeOddNumbers([12, 13, 1, 0, -1, 2])).to.deep.equal([12, 0, 2]);
    });
        
    it("should work with an empty array", async () => {
      expect(removeOddNumbers([])).to.deep.equal([]);
    });

    it("should keep all numbers if they are all even", async () => {
      expect(removeOddNumbers([0, 2, 4, 6])).to.deep.equal([0, 2, 4, 6]);
    });

    it("should remove all numbers if they are all odd", async () => {
      expect(removeOddNumbers([1, 3, 11, 15])).to.deep.equal([]);
    });
  });

  describe("filterFlowers", () => {
    it("should keep red flower", async () => {
      expect(
        filterFlowers("red")
      ).to.deep.equal([
        { "color": "red", "name": "rose" },
        { "color": "red", "name": "poppy"}
      ]);
    });

    it("should keep purple flower", async () => {
      expect(
        filterFlowers("purple")
      ).to.deep.equal([
        { "color": "purple", "name": "lilac" },
      ]);
    });

    it("should keep yellow flower", async () => {
      expect(filterFlowers("yellow")).to.deep.equal([]);
    });
  });

  describe("findFlower", () => {
    it("should return the flower matching the name", async () => {
      expect(
        findFlower("rose")
      ).to.deep.equal(
        { name: "rose", color: "red" }
      );
    });

    it("should return the flower matching the name while disregarding the case", async () => {
      expect(
        findFlower("Lilac")
      ).to.deep.equal(
        { name: "lilac", color: "purple" }
      );
    });

    it("should return undefined for a flower that is not present", async () => {
      expect(findFlower("pizza")).to.be.undefined;
    });
  });

  describe("computeSquares", () => {
    it("should compute the square of each number", async () => {
      expect(computeSquares([0, 3, 4, 5])).to.deep.equal([0, 9, 16, 25]);
    });

    it("should compute the square of negative numbers too", async () => {
      expect(computeSquares([0, -5, -6, -10])).to.deep.equal([0, 25, 36, 100]);
    });

    it("should return an empty array if provided array is empty", async () => {
      expect(computeSquares([])).to.deep.equal([]);
    });
  });

  describe("buildFlowerHTML", () => {
    it("should return the complete HTML array", async () => {
      expect(buildFlowerHTML()).to.deep.equal([
        "<li style=\"color: red;\">ROSE</li>",
        "<li style=\"color: white;\">ORCHIDEE</li>",
        "<li style=\"color: white;\">PEONY</li>",
        "<li style=\"color: purple;\">LILAC</li>",
        "<li style=\"color: red;\">POPPY</li>",
        "<li style=\"color: white;\">DAISY</li>",
      ]);
    });
  });

  describe("ouafOuaf", () => {
    it("should return true if the dog breed is included in the list", async () => {
      expect(
        ouafOuaf(["Akita", "Border Collie", "Chihuahua", "Shiba"], "Akita")
      ).to.be.true;
    });

    it("should return false if the dog breed is not included in the list", async () => {
      expect(
        ouafOuaf(["Akita", "Border Collie", "Chihuahua", "Shiba"], "Yorkshire")
      ).to.be.false;
    });

    it("should return true if the dog breed is included in the list as the last element", async () => {
      expect(
        ouafOuaf(["Husky", "Chihuahua", "Bulldog"], "Bulldog")
      ).to.be.true;
    });

    it("should return false if the list is empty", async () => {
      expect(ouafOuaf([], "shiba")).to.be.false;
    });

    it("should return false if the search term is an empty string", async () => {
      expect(
        ouafOuaf(["Akita", "Border Collie", "Chihuahua", "Shiba"], "")
      ).to.be.false;
    });

    it("should be case sensitive", async () => {
      expect(
        ouafOuaf(["Akita", "Border Collie", "Chihuahua", "Shiba"], "shiba")
      ).to.be.false;
    });
  });

  describe("improvedOuafOuaf", () => {
    it("should return true if the searchTerm is included in one element of the list", async () => {
      expect(
        improvedOuafOuaf(["Akita", "Border Collie", "Chihuahua", "Shiba"], "huahua")
      ).to.be.true;
    });
        
    it("should return true if the searchTerm is included in one element of the list with case insensitivity", async () => {
      expect(
        improvedOuafOuaf(["Akita", "Border Collie", "Chihuahua", "Shiba"], "aKitA")
      ).to.be.true;
    });

    it("should return true if the searchTerm is included in one element of the list with case insensitivity when the breed has two words", async () => {
      expect(
        improvedOuafOuaf(["Akita", "Border Collie", "Chihuahua", "Shiba"], "border")
      ).to.be.true;
    });

    it("should return false if the searchTerm is not included in one element", async () => {
      expect(
        improvedOuafOuaf(["Akita", "Border Collie", "Shiba"], "Bichon")
      ).to.be.false;
    });
  });

  describe("hasFlower", () => {
    it("should return true if there exist a flower with the requested color", async () => {
      expect(
        hasFlower("purple")
      ).to.be.true;
    });

    it("should return true if there several flower with the requested color", async () => {
      expect(
        hasFlower("red")
      ).to.be.true;
    });

    it("should return false if there is no flower with the requested color", async () => {
      expect(
        hasFlower("yellow")
      ).to.be.false;
    });
  });
});
