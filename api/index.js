//import all router here
const countriesRouter = require("./countries");
const gameRouter = require("./slotMachine");

// api v1 route
const apiRoutesV1 = [
  countriesRouter,
  gameRouter,
  // another router here
];
module.exports = { apiRoutesV1 };
