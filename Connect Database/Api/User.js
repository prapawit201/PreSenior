const express = require("express");
const mongoose = require("mongoose");

const User = require("../Database/User");
const route = express.Router();

route.post("/", async (req, res) => {
  const { firstName, lastName } = req.body;
  let user = {};
  user.firstName = firstName;
  user.lastName = lastName;

  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});

route.get("/:id", async (req, res) => {
  const idParam = req.params.id;
  try {
    if (!idParam) {
      res.status(422).json({ message: "please input user id" });
    } else {
      const id = mongoose.Types.ObjectId(idParam);
      let user = await User.find({ _id: id });
      if (!user) {
        res.status(404).json({ message: "user not found" });
      } else {
        res.json({ user });
      }
    }
  } catch (err) {
    console.error("Error: " + err);
    res.status(400).json({ message: "get error" });
  }
});

module.exports = route;
