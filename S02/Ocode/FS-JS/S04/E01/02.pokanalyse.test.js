const { expect, getAssociatedFilePath } = require("../../../test");

const FILE_PATH = getAssociatedFilePath(__filename);
const pokanalyse = require(FILE_PATH);

describe("S04E01 - 02.pokanalyse", () => {
  describe("computeSumOfHPOfTinyWaterPokemons", () => {
    it("should return the sum of the HPs of tiny water pokemons", async () => {
      expect(
        pokanalyse.computeSumOfHPOfTinyWaterPokemons()
      ).to.equal(1122);
    });
  });

  describe("computeNbOfTallPokemons", () => {
    it("should return the nb of pokemon of length above 200 cm", async () => {
      expect(
        pokanalyse.computeNbOfTallPokemons()
      ).to.equal(102);
    });
  });

  describe("searchPokemonByName", () => {
    it("should return the pokemon matching the name", async () => {
      expect(
        pokanalyse.searchPokemonByName("pikachu")
      ).to.deep.include({
        "id": 25,
        "name": "pikachu",
        "height": 40,
        "weight": 60,
        "xp": 112
      });
    });

    it("should return undefined when the pokemon does not exist", async () => {
      expect(
        pokanalyse.searchPokemonByName("toto")
      ).to.be.undefined;
    });

    it("should return the pokemon matching the name with case insensitivity", async () => {
      expect(
        pokanalyse.searchPokemonByName("Luxio")
      ).to.deep.include({
        "id": 404,
        "name": "luxio",
        "height": 90,
        "weight": 305,
        "xp": 127
      });
    });
  });
    
  describe("getElectricPokemonNames", () => {
    it("should return electric pokemon names", async () => {
      expect(
        pokanalyse.getElectricPokemonNames()
      ).to.include.members([
        "pikachu", "raichu", "magnemite", "magneton", "voltorb", "electrode", "electabuzz", "jolteon", "zapdos", "chinchou", "lanturn", "pichu", "mareep", "flaaffy", "ampharos", "elekid", "raikou", "electrike", "manectric", "plusle", "minun"
      ]);
    });

    it("should return all electric pokemons", async () => {
      expect(
        pokanalyse.getElectricPokemonNames()
      ).to.be.an("array").with.a.lengthOf(56);
    });
  });

  describe("computeMultitypePokemonXP", () => {
    it("should return the sum of the multitype pokemon XP", async () => {
      expect(
        pokanalyse.computeMultitypePokemonXP()
      ).to.equal(68713);
    });
  });

  describe("computeNbOfPokemonsWithHiddenAbilities", () => {
    it("should return the number of pokemons with at least one hidden ability", async () => {
      expect(
        pokanalyse.computeNbOfPokemonsWithHiddenAbilities()
      ).to.equal(762);
    });
  });

  describe("getPokemonsDisplayableStats", () => {
    it("should start with the stat of bulbasaur", async () => {
      const stats = pokanalyse.getPokemonsDisplayableStats();

      expect(stats[0]).to.equal("HP: 45 | ATTACK: 49 | DEFENSE: 49 | SPECIAL-ATTACK: 65 | SPECIAL-DEFENSE: 65 | SPEED: 45");
    });

    it("should have a the stats of all pokemon", async () => {
      const stats = pokanalyse.getPokemonsDisplayableStats();

      expect(stats).to.be.an("array").with.a.lengthOf(890);
    });

    it("should have all stats with the expected format", async () => {
      const stats = pokanalyse.getPokemonsDisplayableStats();

      stats.forEach(stat => {
        expect(stat).to.match(/HP: \d+ | ATTACK: \d+ | DEFENSE: \d+ | SPECIAL-ATTACK: \d+ | SPECIAL-DEFENSE: \d+ | SPEED: \d+/);
      });
    });
  });

  describe("searchPokemons", () => {
    it("should returns all pokemons whose name match the searchTerm", async () => {
      const pokemons = pokanalyse.searchPokemons("saur");

      expect(pokemons.map(getName)).to.deep.equal(["bulbasaur", "ivysaur", "venusaur"]);
    });

    it("should returns all pokemons whose name match the searchTerm with case insensitivity", async () => {
      const pokemons = pokanalyse.searchPokemons("SAUR");

      expect(pokemons.map(getName)).to.deep.equal(["bulbasaur", "ivysaur", "venusaur"]);
    });

    it("should return all pokemons who have a matching hability", async () => {
      const pokemons = pokanalyse.searchPokemons("grow");

      expect(pokemons.map(getName)).to.deep.equal(["bulbasaur", "ivysaur", "venusaur", "growlithe", "chikorita", "bayleef", "meganium", "treecko", "grovyle", "sceptile", "turtwig", "grotle", "torterra", "tangrowth", "snivy", "servine", "serperior", "pansage", "simisage", "chespin", "quilladin", "chesnaught", "rowlet", "dartrix", "decidueye", "grookey", "thwackey", "rillaboom"]);
    });

    it("should return all pokemons who have a matching hability with case insensitivity", async () => {
      const pokemons = pokanalyse.searchPokemons("GROW");

      expect(pokemons.map(getName)).to.deep.equal(["bulbasaur", "ivysaur", "venusaur", "growlithe", "chikorita", "bayleef", "meganium", "treecko", "grovyle", "sceptile", "turtwig", "grotle", "torterra", "tangrowth", "snivy", "servine", "serperior", "pansage", "simisage", "chespin", "quilladin", "chesnaught", "rowlet", "dartrix", "decidueye", "grookey", "thwackey", "rillaboom"]);
    });

    it("should return both pokemon that match names and pokemon that match abilities", async () => {
      const pokemons = pokanalyse.searchPokemons("leaf");

      expect(
        pokemons.map(getName)
      ).to.include.members([
        "nuzleaf", // has leaf in name
        "tangela" // has leaf-guard ability
      ]);
    });

    it("should return an empty array for non matching search", async () => {
      const pokemons = pokanalyse.searchPokemons("Pooka pooka retarded pokemon");

      expect(pokemons).to.deep.equal([]);
    });

    it("should return all pokemon for an empty string research", async () => {
      const pokemons = pokanalyse.searchPokemons("");

      expect(pokemons).to.have.a.lengthOf(890);
    });

    function getName(pokemon) {
      return pokemon.name;
    }
  });

  describe("formatPokemonHTML", () => {
    it("should return a string with enclosing ol tags", async () => {
      const result = pokanalyse.formatPokemonHTML();

      expect(result).to.be.a("string");
      expect(result).to.include("<ol>");
      expect(result).to.include("</ol>");
    });

    it("should return a string formating each pokemon", async () => {
      const result = pokanalyse.formatPokemonHTML();

      const nbOfLiTags = result.split("<li>").length - 1;
      expect(nbOfLiTags).to.equal(890);
    });

    it("should contain the capitalized name of all pokemons", async () => {
      const result = pokanalyse.formatPokemonHTML();

      expect(result).to.include("Arceus");
      expect(result).to.include("Dragapult");
      expect(result).to.include("Pichu");
      expect(result).to.include("Sinistea");
      // to only name a few...
    });

    it("should contain the power of all pokemons", async () => {
      const result = pokanalyse.formatPokemonHTML();
            
      expect(result).to.include("Arceus power: 720 points");
      expect(result).to.include("Empoleon power: 530 points");
      expect(result).to.include("Kabuto power: 355 points");
      expect(result).to.include("Wishiwashi-solo power: 175 points");
    });

    it("should sort the pokemon by decreasing power", async () => {
      const result = pokanalyse.formatPokemonHTML();
            
      const orders = [
        result.indexOf("Arceus"),
        result.indexOf("Cobalion"),
        result.indexOf("Mr-mime"),
        result.indexOf("Makuhita"),
        result.indexOf("Blipbug")
      ];
      expect(orders[0]).to.be.lessThan(orders[1]);
      expect(orders[1]).to.be.lessThan(orders[2]);
      expect(orders[2]).to.be.lessThan(orders[3]);
      expect(orders[3]).to.be.lessThan(orders[4]);
    });
  });
});
