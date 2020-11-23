var express = require("express");
const app = require("../app");
var siteRouter = express.Router();

// ROUTES
app.get("/animalsinneed", (req, res, next) => {
    res.render("Animalsinneed");
  });

app.get("/animalsadopted", (req, res, next) => {
    res.render("Animalsadopted");
});

app.get("/search-animals-to-adopt", (req, res, next) => {
    res.render("Animalsinneed", req.query);
})

module.exports = siteRouter;
