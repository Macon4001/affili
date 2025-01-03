// src/components/ProductMarketplace.js

import React, { useState, useEffect } from "react";
import ProductCard from "../components/AffiliateMarketplace/ProductCard";
import "../styles/ProductMarketplace.css";

const ProductMarketplace = ({ onGenerateLink }) => {
  const [products, setProducts] = useState([]);

  // Simulated API call to fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      // Mock data for products
      const mockProducts = [
        {
          id: 1,
          name: "Wireless Earbuds",
          description: "High-quality sound with a sleek design.",
          price: "$50",
          commission: "10%",
          image: "/images/earbuds.jpg",
        },
        {
          id: 2,
          name: "Smart Watch",
          description: "Track your fitness and stay connected on the go.",
          price: "$100",
          commission: "15%",
          image: "/images/smartwatch.jpg",
        },
        {
          id: 3,
          name: "Gaming Mouse",
          description: "Precision and comfort for all your gaming needs.",
          price: "$75",
          commission: "12%",
          image: "/images/mouse.jpg",
        },
      ];

      setProducts(mockProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-marketplace">
      <h2>Available Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onGenerateLink={onGenerateLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductMarketplace;
