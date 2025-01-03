import React from "react";
import '../../styles/AffiliateMarketplace_styles/ProductCard.css';

// Define the types for the product object
interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    commission: string;
    image: string;
}

// Define the prop types for the component
interface ProductCardProps {
    product: Product;
    onGenerateLink: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onGenerateLink }) => {
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
