import React, { useState, useEffect } from "react";
import ProductCard from "../AffiliateMarketplace/ProductCard";
import "../../styles/AffiliateDashboard_styles/MyProducts.css";
import mockProducts from "../../data/fakeproductdata";

// Define Product type
interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    commission: string;
    image: string;
    imageUrl: string;
}

// Define props for ProductMarketplace
interface MyProductsProps {
    onGenerateLink: (productId: string) => void;  // Expect productId as number
}

const MyProducts: React.FC<MyProductsProps> = ({ onGenerateLink }) => {
    const [products, setProducts] = useState<Product[]>([]);

    // Simulate API call to fetch products
    useEffect(() => {
        setProducts(mockProducts);
    }, []);

    return (
        <div className="product-marketplace">
            <h2>My Products</h2>
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

export default MyProducts;
