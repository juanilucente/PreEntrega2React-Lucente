import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import ItemDetailContainer from "./components/ItemDetailContainer"; // Asegúrate de usar el contenedor aquí
import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingProductIndex = prevItems.findIndex((item) => item.id === product.id);
      if (existingProductIndex >= 0) {
        const updatedCartItems = [...prevItems];
        updatedCartItems[existingProductIndex].quantity += quantity;
        return updatedCartItems;
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  return (
    <Router>
      <NavBar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<ItemListContainer addToCart={addToCart} />} />
        <Route path="/category/:categoryId" element={<ItemListContainer addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
};

export default App;


