const countriesRoute = require("express").Router();
const { countriesController: controller } = require("../controller");

countriesRoute.route("/countries").get(controller.getAll);
countriesRoute.route("/search").get(controller.search);

module.exports = countriesRoute;
