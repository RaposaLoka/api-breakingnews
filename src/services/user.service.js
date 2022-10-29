const User = require("../models/User");

// User é o meu Schema
// .create é um método do mongoose que cria um novo item dentro desse Schema nesse padrão
const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

module.exports = {
  createService,
  findAllService,
  findByIdService,
};
