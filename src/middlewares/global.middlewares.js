import Mongoose from "mongoose";
import userService from "../services/user.service.js";

const validId = (req, res, next) => {
  try {
    const id = req.params.id;

    if (!Mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid ID" });
    }

    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const validUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await userService.findByIdService(id);

    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    req.id = id;
    req.userResp = user;

    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export { validId, validUser };
