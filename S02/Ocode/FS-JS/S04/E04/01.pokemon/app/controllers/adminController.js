const db = require("../database/client");

async function renderLogsPage(req, res) {
  const result = await db.query("SELECT * FROM log ORDER BY time DESC LIMIT 10");
  const logs = result.rows;

  res.render("logs", { logs });
}


module.exports = {
  renderLogsPage
};
