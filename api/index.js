//import all router here
const countriesRouter = require("./countries");

// api v1 route
const apiRoutesV1 = [
  countriesRouter,
  // another router here
];
module.exports = { apiRoutesV1 };
