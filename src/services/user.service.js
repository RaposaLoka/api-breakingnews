import User from "../models/User.js";

// User é o meu Schema
// .create é um método do mongoose que cria um novo item dentro desse Schema nesse padrão
const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const updateService = (
  id,
  name,
  username,
  email,
  password,
  avatar,
  background
) =>
  User.findOneAndUpdate(
    { _id: id },
    { name, username, email, password, avatar, background }
  );

export default {
  createService,
  findAllService,
  findByIdService,
  updateService,
};
