const express = require("express");
const path = require("path");
const loader = require("./config/loader");
const { PORT } = require("./config");

//init express server
const app = express();

//we load all app middleware exp : "cors , morgan , json ...."
loader(app);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

//run the server
app.listen(PORT, () => console.log(`App listening on port ${PORT} !`));
