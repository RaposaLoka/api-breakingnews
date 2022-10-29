const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
});

/**
 * @param  {} "User" - Nome da collection no banco de dados
 * @param  {} UserSchema - Esquema instanciado por {new mongoose.Schema}
 */
const User = mongoose.model("User", UserSchema);

module.exports = User;
