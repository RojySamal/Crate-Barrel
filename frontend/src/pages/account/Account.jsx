import React, { useEffect, useState } from "react";
import "./account.css";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaNoteSticky,
  FaAddressBook,
  FaTape,
  FaUserGear,
  FaUserSlash,
} from "react-icons/fa6";

const Account = () => {
  const url = "http://localhost:5000";
  let token = localStorage.getItem("token");
  console.log(token);

  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const [productsData, setProductsData] = useState([]);
  const [orderID, setOrderID] = useState("");
  // const [date, setDate] = useEffect("");

  const handleUserDetails = async () => {
    try {
      const res = await fetch(`${url}/users/details`, {
        headers: {
          authorization: token,
        },
      });
      const user = await res.json();
      console.log(user);
      if (user) {
        setUserName(user.firstName);
      }
    } catch (error) {
      console.log(error);
    }
  };
  handleUserDetails();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  useEffect(() => {
    handleOrderHistory();
  }, []);
  const handleOrderHistory = async () => {
    try {
      const res = await fetch(`${url}/orders`, {
        headers: {
          authorization: token,
        },
      });
      const data = await res.json();
      console.log("fetching data");
      console.log(data.products);
      setProductsData(data);
      // console.log(data, "data from order history");
      setOrderID(data[0]._id);
      // setDate(data[0].date_of_purchase);
    } catch (error) {
      console.log(error);
    }
    // console.log("History");
  };

  return (
    <div id="account-body">
      <div id="account-card">
        <div className="user-detail">
          <FaUser size={25} />
          <h2>MY ACCOUNT</h2>
          <hr />
          <p>Welcome, {userName}</p>
        </div>
        <div className="card-links">
          <button onClick={handleOrderHistory}>
            <FaNoteSticky />
            <p>Order History</p>
          </button>
          <button>
            <FaAddressBook />
            <p>Address Book</p>
          </button>
          <button>
            <FaUserGear />
            <p>Personal Details</p>
          </button>
        </div>
        <div>
          <button onClick={handleLogout} className="logout-btn">
            <FaUserSlash />
            <p>Log out</p>
          </button>
        </div>
      </div>
      <div id="order-list">
        <h2>Order History</h2>
        <hr />
        {productsData.map((order) => (
          <div key={order._id} className="order-card">
            <ul className="product-list">
              {order.products.map((product) => (
                <li key={product.prod_id} className="product-item">
                  <img src={product.image} alt="" className="product-img" />
                  <div>
                    <p className="product-name">{product.name}</p>
                    <p className="order-id">Order ID: {orderID}</p>
                    <p className="product-qty">Quantity: {product.quantity}</p>
                    <p className="product-price">
                      Price: ₹{product.price * product.quantity}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            {/* <p className="order-date">
              Date of Purchase : {date.toLocaleString()}
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Account;