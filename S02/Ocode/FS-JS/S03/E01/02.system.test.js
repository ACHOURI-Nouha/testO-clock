const os = require("os");
const { expect, sandbox } = require("../../../test");

const { displayMemoryStatus, displaySystemUptime, displayLoadAverage } = require("./02.system");

let logSpy;

beforeEach(() => {
  logSpy = sandbox.spy(console, "log");
});

describe("S03E01 - 02.system", () => {

  describe("displayMemoryStatus", () => {
    it("should display the appropriate message", async () => {
      sandbox.stub(os, "freemem").returns(20);
      sandbox.stub(os, "totalmem").returns(100);
    
      displayMemoryStatus();
    
      expect(logSpy).to.have.been.calledWith("Pourcentage de RAM libre : 20%.");
    });
    
    it("should round the percentage UP to the nearest integer above.", async () => {
      sandbox.stub(os, "freemem").returns(20.8);
      sandbox.stub(os, "totalmem").returns(100);
    
      displayMemoryStatus();
    
      expect(logSpy).to.have.been.calledWith("Pourcentage de RAM utilisé : 21%.");
    });
    
    it("should display an additional message when ram usage is above 98%", async () => {
      sandbox.stub(os, "freemem").returns(1);
      sandbox.stub(os, "totalmem").returns(100);
    
      displayMemoryStatus();
    
      expect(logSpy).to.have.been.calledWith("Attention, seuil critique atteint !");
    });
  });

  describe("displaySystemUptime", () => {
    it("should return the system uptime with the right format", async () => {
      sandbox.stub(os, "uptime").returns(25542);

      displaySystemUptime();

      expect(logSpy).to.have.been.calledWith("Machine allumée depuis 7 heures 5 minutes et 42 secondes.");
    });

    it("should return the system uptime with the right format when it's exactly 5 hours", async () => {
      sandbox.stub(os, "uptime").returns(5 * 60 * 60);

      displaySystemUptime();

      expect(logSpy).to.have.been.calledWith("Machine allumée depuis 5 heures 0 minutes et 0 secondes.");
    });
  });

  describe("displayLoadAverage", () => {
    it("should log the appropriate load average", async () => {
      sandbox.stub(os, "loadavg").returns([1, 30, 90]);
            
      displayLoadAverage();

      const log = logSpy.getCall(0).firstArg;
      expect(log).to.match(/Charge moyenne système/);
      expect(log).to.match(/- A 1 minute : 1%/);
      expect(log).to.match(/- A 5 minutes : 30%/);
      expect(log).to.match(/- A 15 minutes : 90%/);
    });

    it("should round values to the nearest decimal numbers", async () => {
      sandbox.stub(os, "loadavg").returns([1.33, 3.56, 5.01]);
            
      displayLoadAverage();

      const log = logSpy.getCall(0).firstArg;
      expect(log).to.match(/- A 1 minute : 1.3%/);
      expect(log).to.match(/- A 5 minutes : 3.6%/);
      expect(log).to.match(/- A 15 minutes : 5%/);
    });

    it("should display the appropriate colored indicators", async () => {
      sandbox.stub(os, "loadavg").returns([1, 30, 90]);
            
      displayLoadAverage();

      const log = logSpy.getCall(0).firstArg;
      expect(log).to.match(/- A 1 minute : 1% \(🟢\)/);
      expect(log).to.match(/- A 5 minutes : 30% \(🟠\)/);
      expect(log).to.match(/- A 15 minutes : 90% \(🔴\)/);
    });
  });
});
