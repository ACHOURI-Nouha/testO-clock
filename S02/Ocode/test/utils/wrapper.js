const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

chai.use(chaiAsPromised);
chai.use(sinonChai);


module.exports = {
  expect: chai.expect,
  sandbox: {
    spy: sinon.spy,
    stub: sinon.stub,
    restore: sinon.restore,
  }
};
