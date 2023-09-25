const { DataTypes } = require("sequelize");
const { expect } = require("../../../test");
const sequelize = require("./02.lutins.models/in-memory-sequelize");
const { Elf, Order, Present, Label } = require("./03.lutins.associations");

describe("Elf - Order", () => {
  beforeEach(async () => {
    await Order.sync({ force: true });
    await Elf.sync({ force: true });
  });
      
  it("should create an order linked to an elf", async () => {
    const elf = await Elf.create({ surname: "Legolas" });
    const ORDER = { recipient_name: "Bilbon", delivery_address: "La comté", elf_id: elf.id };
    const order = await Order.create(ORDER);

    const retrievedOrder = await Order.findByPk(order.id);
    expect(retrievedOrder.get()).to.deep.include(ORDER);
  });

  it("should return the elf linked to the order", async () => {
    const elf = await Elf.create({ surname: "Legolas" });
    const order = await Order.create({ recipient_name: "Bilbon", delivery_address: "La comté", elf_id: elf.id });

    const { elf: retrievedElf } = await Order.findByPk(order.id, { include: "elf" });
    expect(retrievedElf.get()).to.deep.include(elf.get());
  });

  it("should return the order linked to the elf", async () => {
    const elf = await Elf.create({ surname: "Legolas" });
    const order = await Order.create({ recipient_name: "Bilbon", delivery_address: "La comté", elf_id: elf.id });

    const { order: retrievedOrder } = await Elf.findByPk(elf.id, { include: "order" });
    expect(retrievedOrder).to.deep.include(order.get());
  });
});


describe("Order - Present", () => {
  beforeEach(async () => {
    await Order.sync({ force: true });
    await Present.sync({ force: true });
  });
    
  it("should create an order linked to a present", async () => {
    const order = await Order.create({ recipient_name: "Bilbon", delivery_address: "La comté", elf_id: 1 });
    const present = await Present.create({ name: "GitStation 5", order_id: order.id });

    const retrievedPresent = await Present.findByPk(present.id);
    expect(retrievedPresent.order_id).to.deep.equal(order.id);
  });

  it("should return the order linked to the present", async () => {
    const order = await Order.create({ recipient_name: "Bilbon", delivery_address: "La comté", elf_id: 1 });
    const present = await Present.create({ name: "GitStation 5", order_id: order.id });

    const { order: retrievedOrder } = await Present.findByPk(present.id, { include: "order" });
    expect(retrievedOrder.get()).to.deep.include(order.get());
  });

  it("should return the presents linked to the order", async () => {
    const order = await Order.create({ recipient_name: "Bilbon", delivery_address: "La comté", elf_id: 1 });
    const presentA = await Present.create({ name: "GitStation 5", order_id: order.id });
    const presentB = await Present.create({ name: "Mug", order_id: order.id });

    const { presents } = await Order.findByPk(order.id, { include: "presents" });
    expect(presents[0]).to.deep.include(presentA.get());
    expect(presents[1]).to.deep.include(presentB.get());
  });
});


describe("Present - Label", () => {
  let PresentHasLabel;

  beforeEach(async () => {
    await Present.sync({ force: true });
    await Label.sync({ force: true });


    // On créé la table pour se faciliter la vie
    PresentHasLabel = sequelize.define("present_has_label", {
      present_id: DataTypes.INTEGER,
      label_id: DataTypes.INTEGER
    }, { tableName: "present_has_label" });

    await PresentHasLabel.sync({ force: true });
  });
    
  it("should return a present with its labels", async () => {
    const present = await Present.create({ name: "GitStation 5", order_id: 1 });
    const label = await Label.create({ name: "fragile" });
    await PresentHasLabel.create({ present_id: present.id, label_id: label.id });

    const { labels } = await Present.findByPk(present.id, { include: "labels" });
    expect(labels[0].get()).to.deep.include(label.get());
  });

  it("should return a the label with its associated presents", async () => {
    const present = await Present.create({ name: "GitStation 5", order_id: 1 });
    const label = await Label.create({ name: "fragile" });
    await PresentHasLabel.create({ present_id: present.id, label_id: label.id });

    const { presents } = await Label.findByPk(label.id, { include: "presents" });
    expect(presents[0].get()).to.deep.include(present.get());
  });
});
