// Load environment variables
const dotenv = require("dotenv");
const path = require("path");
const envFilePath = path.join(__dirname, ".env");
dotenv.config({ path: envFilePath });


// Load app modules
const express = require("express");
const router = require("./router");
const middlewares = require("./middlewares");


// Create app
const app = express();

// Define public assets
const publicFolderPath = path.join(__dirname, "./public");
app.use(express.static(publicFolderPath));

// Set view engine
app.set("view engine", "ejs");
const viewsFolderPath = path.join(__dirname, "./views");
app.set("views", viewsFolderPath);

// Add Logger middleware
app.use(middlewares.loggerMiddleware);


// Add router
app.use(router);


// Define app port
const port = process.env.APP_PORT || 3000;

// Start app
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
