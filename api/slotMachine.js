const countriesRoute = require("express").Router();
const { gameController: controller } = require("../controller");

countriesRoute.route("/game").post(controller.game);

module.exports = countriesRoute;
