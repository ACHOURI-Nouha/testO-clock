const { DataTypes } = require("sequelize");
const { expect, getAssociatedFilePath } = require("../../../test");
const sequelize = require("./02.lutins.models/in-memory-sequelize");
const { Elf, Order, Present, Label } = require("./03.lutins.associations");

const FILE_PATH = getAssociatedFilePath(__filename);
const tests = require(FILE_PATH);

describe("04.lutins.queries", () => {
  let PresentHasLabel;

  beforeEach(async () => {
    // On créé la table pour se faciliter la vie
    PresentHasLabel = sequelize.define("present_has_label", {
      present_id: DataTypes.INTEGER,
      label_id: DataTypes.INTEGER
    }, { tableName: "present_has_label" });

    // Refresh !
    await Order.sync({ force: true });
    await Elf.sync({ force: true });
    await Present.sync({ force: true });
    await Label.sync({ force: true });
    await PresentHasLabel.sync({ force: true });
  });

  describe("test0", () => {
    it("should return all elves", async () => {
      const elf = await generateElf();
    
      const result = await tests.test0();
    
      expect(result[0]).to.deep.include(elf.get());
    });
  });

  describe("test1", () => {
    it("should return all labels", async () => {
      const label = await generateLabel();
    
      const result = await tests.test1();
    
      expect(result[0]).to.deep.include(label.get());
    });
  });

  describe("test2", () => {
    it("should return all orders, including their elf", async () => {
      const elf = await generateElf();
      const label = await generateOrder({ elf_id: elf.id });
    
      const result = await tests.test2();
    
      expect(result).to.be.an("array");
      expect(result[0].get()).deep.include(label.get());
      expect(result[0].elf.get()).to.deep.include(elf.get());
    });
  });

  describe("test3", () => {
    it("should return the surname of the elf with the id 3", async () => {
      const elf = await generateElf({ id: 3, surname: "Legolas" });

      const result = await tests.test3();

      expect(result).to.equal(elf.surname);
    });
  });
    
  describe("test4", () => {
    it("should return the surname of the elfs with green hats", async () => {
      await generateElf({ surname: "Legolas", hat_color: "green" });
      await generateElf({ surname: "Caranthir", hat_color: "red" });
      await generateElf({ surname: "Haleth", hat_color: "green" });

      const result = await tests.test4();

      expect(result).to.deep.equal(["Legolas", "Haleth"]);
    });
  });

  describe("test5", () => {
    it("should return presents that takes more than 5 days to craft", async () => {
      await generatePresent({ name: "Une allumette", craft_time_in_days: 1 });
      await generatePresent({ name: "Le Pull Request de Noel", craft_time_in_days: 4 });
      await generatePresent({ name: "Le clavier mécanique Oclock", craft_time_in_days: 6 });
      await generatePresent({ name: "GitStation5", craft_time_in_days: 10 });

      const result = await tests.test5();

      const formattedResult = result.map(({ name, craft_time_in_days }) => ({ name, craft_time_in_days }));
      expect(formattedResult).to.deep.equal([
        { name: "Le clavier mécanique Oclock", craft_time_in_days: 6 },
        { name: "GitStation5", craft_time_in_days: 10 }
      ]);
    });
  });

  describe("test6", () => {
    it("should return all presents with only their name and description", async () => {
      await generatePresent({ name: "Une allumette", craft_time_in_days: 1, description: "Pas très chouette comme cadeau" });
      await generatePresent({ name: "Le Pull Request de Noel", craft_time_in_days: 4, description: "Il réchauffe le corps et le coeur" });
      await generatePresent({ name: "Le clavier mécanique Oclock", craft_time_in_days: 6, description: "Comment faire chier son voisin tout en restant corporate" });
      await generatePresent({ name: "GitStation5", craft_time_in_days: 10, description: "Toujours en rupture de stock" });

      const presents = await tests.test6();

      expect(presents).to.be.an("array").with.a.lengthOf(4);
      for (const present of presents) {
        expect(present.name).to.be.a("string");
        expect(present.description).to.be.a("string");
        expect(present.craft_time_in_days, "craft_time_in_days should not be returned").to.be.undefined;
      }
    });
  });
    
  describe("test7", () => {
    it("should return the present n°3 with its labels and its related order", async () => {
      const order = await generateOrder();
      const label = await generateLabel();
      const present = await generatePresent({ id: 3, order_id: order.id });
      await PresentHasLabel.create({ label_id: label.id, present_id: present.id });

      const result = await tests.test7();

      expect(result).to.be.an("object");
      expect(result.get()).to.deep.include(present.get());
      expect(result.labels[0].get()).to.deep.include(label.get());
      expect(result.order.get()).to.deep.include(order.get());
    });
  });

  describe("test8", () => {
    it("should return the number of presents for Enzo", async () => {
      const orderEnzo = await generateOrder({ recipient_name: "Enzo" });
      const orderNico = await generateOrder({ recipient_name: "Nico" });
      await generatePresent({ order_id: orderEnzo.id });
      await generatePresent({ order_id: orderEnzo.id });
      await generatePresent({ order_id: orderEnzo.id });
      await generatePresent({ order_id: orderNico.id });
      await generatePresent({ order_id: orderNico.id });
      await generatePresent({ order_id: orderNico.id });
      await generatePresent({ order_id: orderNico.id });

      const nbOfPresents = await tests.test8();

      expect(nbOfPresents).to.equal(3);
    });
  });

  describe("test9", () => {
    it("should return all labels by alphabetic order", async () => {
      const orderedLabels = ["addictif", "explosive", "fragile", "lavage à froid"];
      await generateLabel({ name: orderedLabels[2] });
      await generateLabel({ name: orderedLabels[3] });
      await generateLabel({ name: orderedLabels[0] });
      await generateLabel({ name: orderedLabels[1] });

      const labels = await tests.test9();

      expect(labels).to.be.an("array").with.a.lengthOf(4);
      expect(labels.map(({ name }) => name)).to.deep.equal(orderedLabels);


    });
  });

  describe("test10", () => {
    it("should return the order n°1", async () => {
      await generateOrder({ id: 1, recipient_name: "Enzo" });
      await generateOrder({ id: 2 });

      const result = await tests.test10();

      expect(result.recipient_name).to.equal("Enzo");
    });

    it("should return the order with the associated elf (only its surname)", async () => {
      const elf = await generateElf({ surname: "Legolas" });
      await generateOrder({ id: 1, elf_id: elf.id, experience_in_years: 100 });

      const result = await tests.test10();

      expect(result.elf.surname).to.equal("Legolas");
      expect(result.elf.experience_in_years, "il faut retourner uniquement le surname de l'elf").to.be.undefined;
    });

    it("should return order with the presents (only the name) ", async () => {
      const order = await generateOrder({ id: 1 });
      await generatePresent({ order_id: order.id, name: "Le Pull Request de Noel", craft_time_in_days: 4 });

      const result = await tests.test10();

      expect(result.presents[0].name).to.equal("Le Pull Request de Noel");
      expect(result.presents[0].craft_time_in_days, "il faut retourner uniquement le name du present").to.be.undefined;
    });

    it("should return the order with the presents and their labels (only name)", async () => {
      const order = await generateOrder({ id: 1 });
      const present = await generatePresent({ order_id: order.id });
      const label = await generateLabel({ name: "pas cher", id: 42 });
      await PresentHasLabel.create({ label_id: label.id, present_id: present.id });

      const result = await tests.test10();

      expect(result.presents[0].labels[0].name).to.equal("pas cher");
      expect(result.presents[0].labels[0].id, "il faut retourner uniquement le name du label").to.be.undefined;

    });
  });
});

async function generateElf(props = {}) {
  return Elf.create({ surname: "Caranthir", experience_in_years: null, hat_color: null, ...props });
}

async function generateOrder(props = {}) {
  return Order.create({ recipient_name: "Billy", delivery_address: "Okinawa", ...props });
}

async function generateLabel(props = {}) {
  return Label.create({ name: "fragile", ...props });
}

async function generatePresent(props = {}) {
  return Present.create({ name: "GitStation5", description: null, craft_time_in_days: null, ...props });
}
