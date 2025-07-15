import React from "react";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProductDetails from "./components/ProductDetails";
import AddToCartDrawer from "./components/AddToCartDrawer";
import AppNavbar from "./components/AppNavbar";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppNavbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
        </Routes>
        <AddToCartDrawer />
      </BrowserRouter>
    </>
  );
}

export default App;
