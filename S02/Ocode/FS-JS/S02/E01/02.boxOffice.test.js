const { expect, logFlakyTestWarningForStudent, getAssociatedFilePath, sandbox, runCode } = require("../../../test");

const FILE_PATH = getAssociatedFilePath(__filename);

describe("S02E01 - 02.boxOffice", () => {
  beforeEach(() => {
    // FIXME: I didn't find an cleaner alternative, neither with JSDOM loading.
    global.alert = sandbox.stub();
    global.confirm = sandbox.stub();
    global.prompt = sandbox.stub();
  });

  it("should call confirm with a question", async () => {
    await runCode(FILE_PATH);

    expect(global.confirm).to.have.been.calledOnce;
  });

  it("should alert 'Tu as bon gout !' lorsque l'utilisateur clique 'OK'", async () => {
    global.confirm.returns(true);

    await runCode(FILE_PATH);

    expect(global.alert).to.have.been.called;
  });

  it("should prompt a text lorsque l'utilisateur clique 'ANNULER'", async () => {
    global.confirm.returns(false);

    await runCode(FILE_PATH);

    expect(global.prompt).to.have.been.calledOnce;
  });

  it("should alert a mean message when the user provides a film claqué au sol", async () => {
    const FILM_CLAQUE_AU_SOL = "Camping 2";
    global.confirm.returns(false);
    global.prompt.returns(FILM_CLAQUE_AU_SOL);

    await runCode(FILE_PATH);

    expect(global.alert).to.have.been.calledWith(`Ah donc tu aimes ${FILM_CLAQUE_AU_SOL}, mais quel gout à la con !`);
  });

  logFlakyTestWarningForStudent();
});
