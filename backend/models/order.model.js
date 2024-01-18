const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    userID: String,
    products: Array, //[{prod_id: , quantity: }]
    date_of_purchase: String,
  },
  {
    versionKey: false,
  }
);

const orderModel = mongoose.model("order", orderSchema);

module.exports = { orderModel };
