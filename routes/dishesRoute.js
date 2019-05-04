const express = require("express");
const route = express.Router();
const Db = require("../data/helpers/univeralModel")("dishes");

function errorHandler(err, res) {
  res.status(500).json({ msg: `error retrieving the data`, err });
}

route.get("/", async (req, res) => {
  try {
    const dishes = await Db.get();
    return res.status(200).json(dishes);
  } catch (err) {
    return errorHandler(err, res);
  }
});

route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dish = await Db.getById(id);
    return res.status(200).json(dish);
  } catch (err) {
    return errorHandler(err, res);
  }
});

route.post("/", async (req, res) => {
  try {
    const dish = req.body;
    const createdDish = await Db.add(dish);
    return res.status(201).json(createdDish);
  } catch (err) {
    errorHandler(err, res);
  }
});

route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const dish = await Db.edit(id, changes);
    return res.status(200).json({ msg: "update success", dish });
  } catch (err) {
    errorHandler(err, res);
  }
});
route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dish = await Db.remove(id);
    return res.status(200).json({ msg: "delete success", dish });
  } catch (err) {
    errorHandler(err, res);
  }
});
module.exports = route;
