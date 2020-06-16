const express = require("express");
const path = require("path");
const loader = require("./config/loader");
const { PORT } = require("./config");

//init express server
const app = express();

// for deployment
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("./client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//we load all app middleware exp : "cors , morgan , json ...."
loader(app);

//run the server
app.listen(PORT, () => console.log(`App listening on port ${PORT} !`));
