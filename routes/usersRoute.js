const express = require("express");
const route = express.Router();
const Db = require("../data/helpers/univeralModel")("users");

function errorHandler(err, res) {
  res.status(500).json({ msg: `error retrieving the data`, err });
}
route.get("/", async (req, res) => {
  try {
    const users = await Db.get();
    return res.status(200).json(users);
  } catch (err) {
    return errorHandler(err, res);
  }
});
route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Db.getById(id);
    return res.status(200).json(user);
  } catch (err) {
    return errorHandler(err, res);
  }
});
route.get("/:id/posts", async (req, res) => {
  try {
    const { id } = req.params;
    const posts = await Db.getUserPosts(id);
    return res.status(200).json(posts);
  } catch (err) {
    return errorHandler(err, res);
  }
});
route.post("/", async (req, res) => {
  try {
    const user = req.body;
    const id = await Db.add(user);
    return res.status(201).json(id);
  } catch (err) {
    errorHandler(err, res);
  }
});
route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const user = await Db.edit(id, changes);
    return res.status(200).json({ msg: "update success", user });
  } catch (err) {
    errorHandler(err, res);
  }
});
route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Db.remove(id);
    return res.status(200).json({ msg: "delete success", user });
  } catch (err) {
    errorHandler(err, res);
  }
});
module.exports = route;
