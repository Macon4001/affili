import React from "react";
import ProductCard from "../AffiliateMarketplace/ProductCard";
import "../../styles/AffiliateDashboard_styles/MyProducts.css";
import AffiliateDashboard from "../../Pages/AffiliateDashboard";

// Define Product type
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

// Define props for ProductMarketplace
interface MyProductsProps {
    products: Product[];
    onGenerateLink: (productId: string) => void;  // Expect productId as string
}

const MyProducts: React.FC<MyProductsProps> = ({ products, onGenerateLink }) => {
    return (
        <div className="product-marketplace">
            <h2>My Products</h2>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id}>
                        <ProductCard product={product} onGenerateLink={onGenerateLink} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyProducts;
