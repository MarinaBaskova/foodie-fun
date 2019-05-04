const express = require("express");
const route = express.Router();
const Db = require("../data/helpers/univeralModel")("restaurants");

function errorHandler(err, res) {
  res.status(500).json({ msg: `error retrieving the data`, err });
}

route.get("/", async (req, res) => {
  try {
    const restaurants = await Db.get();
    return res.status(200).json(restaurants);
  } catch (err) {
    return errorHandler(err, res);
  }
});

route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const restaurants = await Db.getById(id);
    return res.status(200).json(restaurants);
  } catch (err) {
    return errorHandler(err, res);
  }
});

route.post("/", async (req, res) => {
  try {
    const restaurants = req.body;
    const newRestaurant = await Db.add(restaurants);
    return res.status(201).json(newRestaurant);
  } catch (err) {
    errorHandler(err, res);
  }
});

route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const restaurant = await Db.edit(id, changes);
    return res.status(200).json({ msg: "update success", restaurant });
  } catch (err) {
    errorHandler(err, res);
  }
});
route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Db.remove(id);
    return res.status(200).json({ msg: "delete success", restaurant });
  } catch (err) {
    errorHandler(err, res);
  }
});
module.exports = route;
