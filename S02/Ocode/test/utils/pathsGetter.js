const path = require("path");

function getAssociatedFilePath(filePath, extension = "js") {
  // FIXME: ugly trick to avoid html duplication. Could do better.
  if (process.env.TEST_ENV === "prof" && extension === "js") {
    return filePath.replace(".test.js", `.prof.${extension}`);
  } else {
    return filePath.replace(".test.js", `.${extension}`);
  }
}

function getChallengeName(filename) {
  const fileName = path.basename(filename);
  return fileName.replace(".test.js", "");
}

module.exports = {
  getAssociatedFilePath,
  getChallengeName
};
