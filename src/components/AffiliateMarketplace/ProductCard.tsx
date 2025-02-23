import React from "react";
import '../../styles/AffiliateMarketplace_styles/ProductCard.css';

// Define the types for the product object
interface Product {
  id: string;
  name: string;
  description: string;
  commission: number;
  price: number;
  category: string;
  image: string;
  conversionRate: number;
  isBoosted?: boolean;
}

// Define the prop types for the component
interface ProductCardProps {
    product: Product;
    onGenerateLink: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onGenerateLink }) => {
  // Function to truncate the description
  const truncateDescription = (description: string, maxLength: number) => {
    return description.length > maxLength
      ? description.substring(0, maxLength) + "..."
      : description;
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>{truncateDescription(product.description, 47)}</p>
        <p>Price: {product.price}</p>
        <p>Commission: {product.commission}%</p>
        <p>Conversion Rate: {product.conversionRate}%</p>  
        <p>Category: {product.category}</p>
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
