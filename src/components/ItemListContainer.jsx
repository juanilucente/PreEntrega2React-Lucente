import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import product1 from "../assets/images/product1.jpg";  // Perfume 1
import product2 from "../assets/images/product2.jpg";  // Perfume 2
import product3 from "../assets/images/product3.jpg";  // Perfume 3
import shoe1 from "../assets/images/airmax1.jpg";  // Zapatilla 1
import shoe2 from "../assets/images/airmax2.jpg";  // Zapatilla 2
import shoe3 from "../assets/images/airmax3.jpg";  // Zapatilla 3
import shirt1 from "../assets/images/remera1.jpg";  // Remera 1
import shirt2 from "../assets/images/remera2.jpg";  // Remera 2
import shirt3 from "../assets/images/remera3.jpg";  // Remera 3
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ addToCart }) => {
  const { categoryId } = useParams(); 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = [
        // Perfumes
        { id: 1, name: "Le Sel d'issey", description: "Issey Miyake", price: 220, category: "perfume", image: product1 },
        { id: 2, name: "Fucking Fabulous", description: "Tom Ford", price: 350, category: "perfume", image: product2 },
        { id: 3, name: "212 VIP Black", description: "Carolina Herrera", price: 180, category: "perfume", image: product3 },

        // Zapatillas
        { id: 4, name: "Nike Air Max White", description: "Nike", price: 120, category: "zapatillas", image: shoe1 },
        { id: 5, name: "Nike AirBoost Cream", description: "Nike", price: 150, category: "zapatillas", image: shoe2 },
        { id: 6, name: "Nike Camouflage", description: "Nike", price: 100, category: "zapatillas", image: shoe3 },

        // Remeras
        { id: 7, name: "Camiseta Rose", description: "Adidas", price: 25, category: "remeras", image: shirt1 },
        { id: 8, name: "Camiseta Blue", description: "Adidas", price: 30, category: "remeras", image: shirt2 },
        { id: 9, name: "Camiseta Negra Swoosh", description: "Nike", price: 22, category: "remeras", image: shirt3 },
      ];

      const filteredProducts = categoryId
        ? allProducts.filter(product => product.category === categoryId)
        : allProducts;

      setProducts(filteredProducts);
      setLoading(false);
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) return <ClipLoader size={50} color="#212529" />;

  return (
    <div className="item-list-container">
      <h2>{categoryId ? `${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} Products` : "Catálogo"}</h2>
      <ItemList products={products} addToCart={addToCart} />
    </div>
  );
};

export default ItemListContainer;


