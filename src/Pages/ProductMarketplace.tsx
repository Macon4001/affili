import React, { useState } from 'react';
import '../styles/ProductMarketplace_styles/ProductMarketplace.css';

interface Product {
    id: string;
    name: string;
    description: string;
    commission: number;
    price: number;
    category: string;
    image: string;
    conversionRate: string;
}

interface ProductMarketplaceProps {
    addToMyProducts: (product: Product) => void;
}

const ProductMarketplace: React.FC<ProductMarketplaceProps> = ({ addToMyProducts }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Example products (replace with real data)
    const products: Product[] = [
        {
            id: '1',
            name: 'Digital Marketing Course',
            description: 'Comprehensive course covering all aspects of digital marketing',
            commission: 40,
            price: 199,
            category: 'Education',
            image: '/course-image.jpg',
            conversionRate: '12%'
        },
        {
            id: '2',
            name: 'Web Development Bootcamp',
            description: 'Learn full-stack web development with hands-on projects',
            commission: 50,
            price: 299,
            category: 'Education',
            image: '/webdev-bootcamp.jpg',
            conversionRate: '10%'
        },
        {
            id: '3',
            name: 'AI Trading Bot Subscription',
            description: 'Automated AI-driven trading bot with market insights',
            commission: 30,
            price: 49.99,
            category: 'Finance',
            image: '/ai-trading-bot.jpg',
            conversionRate: '15%'
        },
        {
            id: '4',
            name: 'Premium Fitness Plan',
            description: 'Customized workout and nutrition plan for optimal results',
            commission: 35,
            price: 79.99,
            category: 'Health & Fitness',
            image: '/fitness-plan.jpg',
            conversionRate: '18%'
        },
        {
            id: '5',
            name: 'Social Media Growth Package',
            description: 'Increase your followers and engagement organically',
            commission: 45,
            price: 129,
            category: 'Marketing',
            image: '/social-growth.jpg',
            conversionRate: '14%'
        },
        {
            id: '6',
            name: 'Smart Home Security System',
            description: 'Advanced security system with mobile alerts and AI monitoring',
            commission: 20,
            price: 249.99,
            category: 'Technology',
            image: '/smart-security.jpg',
            conversionRate: '8%'
        },
        {
            id: '7',
            name: 'Luxury Skincare Set',
            description: 'Premium skincare set for glowing and youthful skin',
            commission: 25,
            price: 89.99,
            category: 'Beauty',
            image: '/skincare-set.jpg',
            conversionRate: '20%'
        },
        {
            id: '8',
            name: 'Freelancer Toolkit',
            description: 'All-in-one resource pack for freelancers to grow their business',
            commission: 50,
            price: 149,
            category: 'Business',
            image: '/freelancer-kit.jpg',
            conversionRate: '16%'
        },
        {
            id: '9',
            name: 'Gaming Headset Pro',
            description: 'High-quality gaming headset with noise-canceling microphone',
            commission: 30,
            price: 99.99,
            category: 'Gaming',
            image: '/gaming-headset.jpg',
            conversionRate: '12%'
        },
        {
            id: '10',
            name: 'Vegan Meal Plan Subscription',
            description: 'Weekly meal plan with delicious and healthy vegan recipes',
            commission: 40,
            price: 39.99,
            category: 'Food & Nutrition',
            image: '/vegan-meal.jpg',
            conversionRate: '22%'
        }
    ];

    return (
        <div className="marketplace-container">
            <div className="marketplace-header">
                <h1 className='marketplace-title'>Affiliate Marketplace</h1>
                <div className="search-filter-container">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="category-filter"
                    >
                        <option value="All">All Categories</option>
                        <option value="Education">Education</option>
                        <option value="Software">Software</option>
                        <option value="Services">Services</option>
                    </select>
                </div>
            </div>

            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <div className="product-stats">
                                <span className="commission">{product.commission}% Commission</span>
                                <span className="price">${product.price}</span>
                                <span className="conversion">{product.conversionRate} Conv. Rate</span>
                            </div>
                            <button 
                                className="add-button"
                                onClick={() => addToMyProducts(product)}
                            >
                                Add to My Products
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductMarketplace;
