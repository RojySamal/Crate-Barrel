const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  shippingAddresses: [
    {
      address: String,
      city: String,
      pincode: Number,
    },
  ],
});

const userModel = mongoose.model("user", userSchema);

module.exports = { userModel };
