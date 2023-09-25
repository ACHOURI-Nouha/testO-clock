const { expect, getAssociatedFilePath } = require("../../../test");
const FILE_PATH = getAssociatedFilePath(__filename);
const cardinalities = require(FILE_PATH);

// On leak pas les réponses dans les tests non plus, faut pas que ça soit obvious quoi...

describe("S05E05 - 01.lutins.mcd", () => {
  describe("Lutin <-> Bon de commande", () => {
    it("Cardinalité A", async () => {
      const isMatching = cardinalities.A === decrypt({ iv: "42ec097b3c7b4c6474e2b910a1c04e04", content: "18" });
      expect(isMatching).to.be.true;
    });

    it("Cardinalité B", async () => {
      const isMatching = cardinalities.B === decrypt({ iv: "eb44f2ebaaaa6f9fc57a10e1b2572ba9", content: "5e" });
      expect(isMatching).to.be.true;
    });

    it("Cardinalité C", async () => {
      const isMatching = cardinalities.C === decrypt({ iv: "874732ee473bf210729aa878654c7c8a", content: "f2" });
      expect(isMatching).to.be.true;
    });

    it("Cardinalité D", async () => {
      const isMatching = cardinalities.D === decrypt({ iv: "33de9bed3980a1e300dd427ab69a7891", content: "a3" });
      expect(isMatching).to.be.true;
    });
  });

  describe("Bon de commande <-> Cadeau", () => {
    it("Cardinalité E", async () => {
      const isMatching = cardinalities.E === decrypt({ iv: "f553f5b8acdf03a2fc8ae96d5fe32c10", content: "91" });
      expect(isMatching).to.be.true;
    });

    it("Cardinalité F", async () => {
      const isMatching = cardinalities.F === decrypt({ iv: "82392c97d43b21e6c46dd6f46e8a515c", content: "58" });
      expect(isMatching).to.be.true;
    });

    it("Cardinalité G", async () => {
      const isMatching = cardinalities.G === decrypt({ iv: "05f86b36221481e181ffac4bbe81b0af", content: "6d" });
      expect(isMatching).to.be.true;
    });

    it("Cardinalité H", async () => {
      const isMatching = cardinalities.H === decrypt({ iv: "a45e09c06c00a1b7cbf1623f8705889b", content: "0b" });
      expect(isMatching).to.be.true;
    });
  });

  describe("Cadeau <-> Label", () => {
    it("Cardinalité I", async () => {
      const isMatching = cardinalities.I === decrypt({ iv: "2e946075f05097973af9b46e23d116db", content: "71" });
      expect(isMatching).to.be.true;
    });

    it("Cardinalité J", async () => {
      const isMatching = cardinalities.J === decrypt({ iv: "f7fc42054915c39048050ac6f4ea46b5", content: "b4" });
      expect(isMatching).to.be.true;
    });

    it("Cardinalité K", async () => {
      const isMatching = cardinalities.K === decrypt({ iv: "7d59b6b3eae8dba4e32b67c49dcc78b2", content: "16" });
      expect(isMatching).to.be.true;
    });

    it("Cardinalité L", async () => {
      const isMatching = cardinalities.L === decrypt({ iv: "839f0792275a29087d1926a864c4850f", content: "b8" });
      expect(isMatching).to.be.true;
    });
  });
});

// Crypto
// Source: https://attacomsian.com/blog/nodejs-encrypt-decrypt-data

const crypto = require("crypto");

const algorithm = "aes-256-ctr";
const secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3";

// eslint-disable-next-line no-unused-vars
function encrypt(text) {
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return {
    iv: iv.toString("hex"),
    content: encrypted.toString("hex")
  };
}

function decrypt(hash) {
  const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, "hex"));

  const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, "hex")), decipher.final()]);

  return decrpyted.toString();
}
