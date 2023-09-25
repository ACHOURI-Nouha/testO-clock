const { expect } = require("../../../test");
const Elf = require("./02.lutins.models/Elf");
const Order = require("./02.lutins.models/Order");
const Label = require("./02.lutins.models/Label");
const Present = require("./02.lutins.models/Present");

describe("02.lutins.models", () => {
  describe("Elf", () => {
    beforeEach(async () => {
      await Elf.sync({ force: true });
    });

    it("should create an elf with only the required attributes", async () => {
      const ELF = { id: 1, surname: "Caranthir", experience_in_years: null, hat_color: null };
      await Elf.create(ELF);

      const retrivedElf = await Elf.findByPk(1);
      expect(retrivedElf.get()).to.deep.equal(ELF);
    });

    it("should not allow to create an elf without a surname", async () => {
      const promise = Elf.create({ id: 1 });

      await expect(promise).to.be.rejectedWith(/Elf.surname cannot be null/);
    });

    it("should create an elf with all possible attributes", async () => {
      const ELF = { id: 1, surname: "Galadriel", experience_in_years: 102, hat_color: "green" };
      await Elf.create(ELF);

      const retrivedElf = await Elf.findByPk(1);
      expect(retrivedElf.toJSON()).to.deep.equal(ELF);
    });
  });

  describe("Order", () => {
    beforeEach(async () => {
      await Order.sync({ force: true });
    });

    it("should create an order with only the required attributes", async () => {
      const ORDER = { id: 1, recipient_name: "Enzo", delivery_address: "Vincennes" };
      await Order.create(ORDER);

      const retrivedOrder = await Order.findByPk(1);
      expect(retrivedOrder.get()).to.deep.equal(ORDER);
    });

    it("should not allow to create an order without a delivery_address", async () => {
      const promise = Order.create({ id: 1, recipient_name: "Enzo", delivery_address: null });

      await expect(promise).to.be.rejectedWith(/Order.delivery_address cannot be null/);
    });

    it("should not allow to create an order without a recipient_name", async () => {
      const promise = Order.create({ id: 1, recipient_name: null, delivery_address: "Paris" });

      await expect(promise).to.be.rejectedWith(/Order.recipient_name cannot be null/);
    });
  });

  describe("Present", () => {
    beforeEach(async () => {
      await Present.sync({ force: true });
    });

    it("should create a present with only the required attributes", async () => {
      const PRESENT = { id: 1, name: "Gitstation 3000", craft_time_in_days: null, description: null };
      await Present.create(PRESENT);

      const retrivedPresent = await Present.findByPk(1);
      expect(retrivedPresent.get()).to.deep.equal(PRESENT);
    });

    it("should not allow to create a present without a name", async () => {
      const promise = Present.create({ id: 1, name: null, craft_time_in_days: null, description: null });

      await expect(promise).to.be.rejectedWith(/Present.name cannot be null/);
    });

    it("should create a present with all possible attributes", async () => {
      const PRESENT = { id: 1, name: "Gitstation 3000", craft_time_in_days: 1, description: "Une console qu'elle est bien !" };
      await Present.create(PRESENT);

      const retrivedPresent = await Present.findByPk(1);
      expect(retrivedPresent.get()).to.deep.equal(PRESENT);
    });

    it("should create a present with all possible attributes", async () => {
      const PRESENT = { id: 1, name: "Mug", craft_time_in_days: 0.5, description: null };
      await Present.create(PRESENT);

      const retrivedPresent = await Present.findByPk(1);
      expect(retrivedPresent.get()).to.deep.equal(PRESENT);
    });
  });

  describe("Label", () => {
    beforeEach(async () => {
      await Label.sync({ force: true });
    });

    it("should create a label with just an id and surname", async () => {
      const LABEL = { id: 1, name: "fragile" };
      await Label.create(LABEL);

      const retrivedLabel = await Label.findByPk(1);
      expect(retrivedLabel.get()).to.deep.equal(LABEL);
    });

    it("should not allow to create a label without a name", async () => {
      const promise = Label.create({ id: 1, name: null });

      await expect(promise).to.be.rejectedWith(/Label.name cannot be null/);
    });
  });
});
