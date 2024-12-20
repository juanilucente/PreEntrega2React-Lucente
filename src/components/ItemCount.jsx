import React, { useState } from "react";

const ItemCount = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="item-count">
      <button onClick={handleDecrease} aria-label="Disminuir cantidad">-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrease} aria-label="Aumentar cantidad">+</button>
      <button onClick={handleAddToCart} aria-label={`Agregar ${product.name} al carrito`}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;

