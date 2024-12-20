import React from 'react';
import ItemCount from './ItemCount'; 

const ItemDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <ItemCount product={product} />
    </div>
  );
};

export default ItemDetail;


