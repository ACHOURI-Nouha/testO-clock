const sinon = require("sinon");

exports.mochaHooks = {
  afterEach
};

function afterEach() {
  sinon.restore();
}
