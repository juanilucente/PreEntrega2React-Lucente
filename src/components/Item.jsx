import React from "react";

const Item = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product, 1); 
  };

  return (
    <div className="item">
      <img src={product.image} alt={product.name} className="item-img" />
      <h3 className="item-title">{product.name}</h3>
      <p className="item-description">{product.description}</p>
      <p className="item-price">Precio: ${product.price}</p>
      <button
        className="item-btn"
        onClick={handleAddToCart}
        aria-label={`Agregar ${product.name} al carrito`}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Item;

