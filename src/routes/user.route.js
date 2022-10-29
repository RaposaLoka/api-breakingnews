const route = require("express").Router();
const userController = require("../controllers/user.controller");

route.post("/", userController.create);
route.get("/", (req, res) => { 
  res.send({ message: "teste"});}


module.exports = route;
