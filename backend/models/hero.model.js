const mongoose = require("mongoose");

const heroSchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const heroModel = mongoose.model("hero", heroSchema);

module.exports = { heroModel };
