import React, { useState, useEffect } from "react";
import ProductCard from "../components/AffiliateMarketplace/ProductCard";
import "../styles/ProductMarketplace.css";

// Define Product type
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  commission: string;
  image: string;
}

// Define props for ProductMarketplace
interface ProductMarketplaceProps {
  onGenerateLink: (product: Product) => void;
}

// Mock products data
const mockProducts: Product[] = [
  { id: 1, name: "Wireless Earbuds", description: "High-quality sound", price: "$50", commission: "10%", image: "/images/earbuds.jpg" },
  { id: 2, name: "Smart Watch", description: "Track fitness", price: "$100", commission: "15%", image: "/images/smartwatch.jpg" },
  { id: 3, name: "Gaming Mouse", description: "Precision gaming", price: "$75", commission: "12%", image: "/images/mouse.jpg" },
];

const ProductMarketplace: React.FC<ProductMarketplaceProps> = ({ onGenerateLink }) => {
  const [products, setProducts] = useState<Product[]>([]);

  // Simulate API call to fetch products
  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  return (
      <div className="product-marketplace">
        <h2>Available Products</h2>
        <div className="product-grid">
          {products.map((product) => (
              // Assign key to the outer element only, not passed as a prop
              <div key={product.id}>
                <ProductCard product={product} onGenerateLink={onGenerateLink} />
              </div>
          ))}
        </div>
      </div>
  );
};

export default ProductMarketplace;
