// src/components/ProductCard.js

import React from "react";
import '../../styles/AffiliateMarketplace_styles/ProductCard.css';

const ProductCard = ({ product, onGenerateLink }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <p>Commission: {product.commission}</p>
      </div>
      <button
        className="generate-link-button"
        onClick={() => onGenerateLink(product.id)}
      >
        Generate Link
      </button>
    </div>
  );
};

export default ProductCard;
