import React from "react";
import { Link } from "react-router-dom";

const CartWidget = ({ cartItems }) => {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-widget">
      <Link to="/cart" aria-label="Ir al carrito de compras">
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/shopping-cart.png"
          alt="Cart"
        />
        <span>{totalItems}</span>
      </Link>
    </div>
  );
};

export default CartWidget;

