const client = require("../database/client");

async function loggerMiddleware(req, res, next) {
  const ip = req.ip;
  const url = req.url;
  const time = new Date().toISOString();

  await client.query(`
    INSERT INTO log
      (ip, url, time)
    VALUES
      ('${ip}', '${url}', '${time}')
  `);

  next();
}

module.exports = loggerMiddleware;
