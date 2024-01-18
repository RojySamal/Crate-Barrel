const express = require("express");
const { heroModel } = require("../models/hero.model");

const heroRouter = express.Router();

// get
heroRouter.get("/:category", async (req, res) => {
  const category = req.params.category;
  try {
    const data = await heroModel.find({ category: category });
    if (data.length === 0) {
      return res.send({ msg: "No details found" });
    }
    res.send({ data: data });
  } catch (error) {
    res.send({
      msg: "Something went wrong, can't get all the details",
      error: error.message,
    });
  }
});

module.exports = { heroRouter };
