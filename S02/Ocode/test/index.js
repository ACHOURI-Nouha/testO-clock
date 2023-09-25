const { buildVirtualDOM } = require("./utils/virtualDomLoader");
const codeReader = require("./utils/codeReader");
const pathsGetter = require("./utils/pathsGetter");
const wrapper = require("./utils/wrapper");
const logger = require("./utils/logger");

module.exports = {
  buildVirtualDOM,
  ...codeReader,
  ...logger,
  ...pathsGetter,
  ...wrapper
};
