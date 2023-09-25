const chalk = require("chalk");

function logFlakyTestWarningForStudent() {
  it("should have done a manual test in the browser", async () => {
    console.info(`
            ${chalk.whiteBright.bgHex("#F0F").bold("HEY TOI")}
            Attention : pour cet exercice, les tests automatisés ne sont pas toujours fiables.
            Un test manuel dans le navigateur est recommandé.\n`
    );
  });
}

module.exports = {
  logFlakyTestWarningForStudent
};
