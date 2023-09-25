const { expect, getAssociatedFilePath } = require("../../../test");

const FILE_PATH = getAssociatedFilePath(__filename);
const {
  helloLike007,
  calculateSalesTotals,
} = require(FILE_PATH);

describe("S04E02 - 02.destructuring", () => {

  describe("helloLike007", () => {
    it("should respond like James Bond", async () => {
      expect(
        helloLike007({ firstName: "James", lastName: "Bond" })
      )
        .to.be.a("string")
        .that.equals("Je suis Bond, James Bond !");
    });
  });

  describe("calculateSalesTotals", () => {
    const inputProducts = [
      { product: "PS4", price: 399.99, nbSales: 3 },
      { product: "Nintendo Switch", price: 299.99, nbSales: 4 },
      { product: "PS3 Console", price: 299.99, nbSales: 1, discount: 0.8 },
      { product: "Nintendo 64", price: 199.99, nbSales: 2, discount: 0.65 },
    ];

    it("should have salePrice property", async () => {
      const outputProducts = calculateSalesTotals(inputProducts);

      outputProducts.forEach(product => {
        expect(product)
          .to.have.a.property("salePrice")
          .which.is.a("number");
      });
    });

    it("should have total property", async () => {
      const outputProducts = calculateSalesTotals(inputProducts);

      outputProducts.forEach(product => {
        expect(product)
          .to.have.a.property("total")
          .which.is.a("number");
      });
    });

    it("should return an array of objects", async () => {
      expect(calculateSalesTotals(inputProducts))
        .to.deep.equal([
          { product: "PS4", price: 399.99, nbSales: 3, salePrice: 399.99, total: 1199.97 },
          { product: "Nintendo Switch", price: 299.99, nbSales: 4, salePrice: 299.99, total: 1199.96 },
          { product: "PS3 Console", price: 299.99, nbSales: 1, discount: 0.8, salePrice: 59.99799999999999, total: 59.99799999999999 },
          { product: "Nintendo 64", price: 199.99, nbSales: 2, discount: 0.65, salePrice: 69.9965, total: 139.993 },
        ]);
    });
  });

});
