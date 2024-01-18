import React, { useEffect, useState } from "react";
import "./productdetails.css";
import { useParams } from "react-router";
const ProductDetails = () => {
  const { category, id } = useParams();
  // console.log(id, category, "from details");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [productData, setProductData] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImg] = useState("");

  useEffect(() => {
    const baseServerURL = "http://localhost:5000";

    async function fetchData() {
      try {
        const response = await fetch(
          `${baseServerURL}/products/${category}/${id}`
        );
        const responseData = await response.json();
        setProductData(responseData.data);
        setName(responseData.data.name);
        setImg(responseData.data.img);
        setPrice(responseData.data.price);
        console.log(responseData.data);
      } catch (err) {
        console.log("Error :", err);
      }
    }
    fetchData();
  }, []);

  const addToCart = () => {
    if (isNaN(quantity) || quantity <= 0) {
      // Invalid quantity, do not add to cart
      return;
    }

    const cartItem = {
      prod_id: productData._id,
      name,
      price,
      quantity,
      image,
    };
    const cart = JSON.parse(localStorage.getItem("CART")) || [];
    cart.push(cartItem);
    console.log(cart, "cart");
    localStorage.setItem("CART", JSON.stringify(cart));

    alert("Item added to cart!");
  };

  return (
    <>
      <div id="prod-container">
        {productData && (
          <>
            <div>
              <img src={productData.image} alt={productData.name} />
            </div>

            <div>
              <p id="prod-name">{productData.name}</p>
              <p id="prod-price">
                <b>${productData.price}</b>
              </p>
              <br />
              <br />
              <hr />
              {/* <p id="prod-details">{productData.details}</p> */}
              <br />
              <br />
              <br />
              <label htmlFor="prod-qty">
                <b>SELECT QUANTITY</b>
              </label>
              <select
                name="prod-qty"
                id="prod-qty"
                onChange={(e) => setQuantity(e.target.value)}
              >
                <option value="1">
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <br />
              <button id="add_to_cart" onClick={addToCart}>
                ADD TO BAG
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
