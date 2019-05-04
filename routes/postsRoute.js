const express = require("express");
const route = express.Router();
const Db = require("../data/helpers/univeralModel")("posts");

function errorHandler(err, res) {
  res.status(500).json({ msg: `error retrieving the data`, err });
}
route.get("/", async (req, res) => {
  try {
    const posts = await Db.get();
    return res.status(200).json(posts);
  } catch (err) {
    return errorHandler(err, res);
  }
});
route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Db.getById(id);
    return res.status(200).json(post);
  } catch (err) {
    return errorHandler(err, res);
  }
});

route.post("/", async (req, res) => {
  try {
    const post = req.body;
    const createdPost = await Db.add(post);
    return res.status(201).json(createdPost);
  } catch (err) {
    errorHandler(err, res);
  }
});
route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const post = await Db.edit(id, changes);
    return res.status(200).json({ msg: "update success", post });
  } catch (err) {
    errorHandler(err, res);
  }
});
route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Db.remove(id);
    return res.status(200).json({ msg: "delete success", post });
  } catch (err) {
    errorHandler(err, res);
  }
});
module.exports = route;
