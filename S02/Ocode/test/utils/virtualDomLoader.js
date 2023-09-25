const { JSDOM, VirtualConsole } = require("jsdom");
const { readFile } = require("fs/promises");
const { getAssociatedFilePath, getChallengeName } = require("./pathsGetter");


async function buildVirtualDOM(filepath) {
  const html = await buildLoadableHTML();
  const { window } = new JSDOM(html, {
    runScripts: "dangerously",
    resources: "usable",
    virtualConsole: buildVirtualConsole()
  });
  return {
    document: window.document,
    window
  };
    
    
  async function buildLoadableHTML() {
    const HTML_FILE_PATH = getAssociatedFilePath(filepath, "html");
    const JS_FILE_PATH = getAssociatedFilePath(filepath, "js");
    const FILE_NAME = getChallengeName(filepath);
        
    const jsFileContent = (await readFile(JS_FILE_PATH)).toString();
    const htmlFileContent = (await readFile(HTML_FILE_PATH)).toString();
    return htmlFileContent.replace(
      ` src="./${FILE_NAME}.js">`,
      `>${buildWindowStubs()}${jsFileContent}`
    ); // FIXME: find a way to execute JS from the external .js file without that ugly replacement of the script body within the HTML tag
  }
  function buildVirtualConsole() {
    const virtualConsole = new VirtualConsole();
    virtualConsole.sendTo(console);
    return virtualConsole;
  }
  function buildWindowStubs() {
    // alert, prompt and confirm aren't implemented by JSDOM yet. Let's stub them before any potential calls by students.
    return `
            window.alert = () => {};
            window.prompt = () => {};
            window.confirm = () => {};
        `;
  }
}

module.exports = { buildVirtualDOM };
