const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");
const { productRouter } = require("./routes/product.route");
// const { cartRouter } = require("./routes/cart.route");
const { orderRouter } = require("./routes/order.route");
const { heroRouter } = require("./routes/hero.route");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);
app.use("/hero", heroRouter);

app.listen(5000, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log("Cannot connect to DB", error);
  }
  console.log(`Server is running at port 5000`);
});
