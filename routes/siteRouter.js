var express = require("express");
const app = require("../app");
var siteRouter = express.Router();

// ROUTES
siteRouter.get("/animalsinneed", (req, res, next) => {
  res.render("Animalsinneed");
});

siteRouter.get("/animalsadopted", (req, res, next) => {
  res.render("Animalsadopted");
});

siteRouter.get("/search-animals-to-adopt", (req, res, next) => {
  res.render("Animalsinneed", req.query);
});

module.exports = siteRouter;
