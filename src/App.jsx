import React from "react";
import Counter from "./Counter";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Product />}></Route>

        <Route path="/cart" element={<Cart />}></Route>
      </Routes>

      {/* <Counter /> */}
    </Router>
  );
};

export default App;
