import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Product/Products";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Account from "./Pages/Account/Account";
import Cart from "./Pages/Cart/Cart";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/products/:category" element={<Products />}></Route>
        <Route
          path="/products/:category/:id"
          element={<ProductDetails />}
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
