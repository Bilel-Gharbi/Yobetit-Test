const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  //Server config params
  PORT: process.env.PORT || 5000,
};
