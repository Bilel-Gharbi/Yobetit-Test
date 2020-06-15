const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const { apiRoutesV1 } = require("../api");

//console.log(apiRoutesV1);

//app middleware
module.exports = async (app) => {
  //App middleware
  app.use(express.json());
  app.use(cors("*"));
  app.use(logger("dev"));

  //api route
  app.use("/api/v1/", [...apiRoutesV1]);
};
