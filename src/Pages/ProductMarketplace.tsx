import React, { useState, useEffect } from 'react';
import '../styles/ProductMarketplace_styles/ProductMarketplace.css';

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

interface ProductMarketplaceProps {
    addToMyProducts: (product: Product) => void;
}

const ProductMarketplace: React.FC<ProductMarketplaceProps> = ({ addToMyProducts }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 16; // ✅ Best balance of speed & UX
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);


    // Example products (replace with real data)
    const products: Product[] = [
        {
            id: '1',
            name: 'Digital Marketing Course',
            description: 'Comprehensive course covering all aspects of digital marketing',
            commission: 40,
            price: 199,
            category: 'Education',
            image: '/ProductImages/course-image.jpg',
            conversionRate: 12
        },
        {
            id: '2',
            name: 'Web Development Bootcamp',
            description: 'Learn full-stack web development with hands-on projects',
            commission: 50,
            price: 299,
            category: 'Education',
            image: '/ProductImages/webdev-bootcamp.jpg',
            conversionRate: 10
        },
        {
            id: '3',
            name: 'AI Trading Bot Subscription',
            description: 'Automated AI-driven trading bot with market insights',
            commission: 30,
            price: 49.99,
            category: 'Finance',
            image: '/ProductImages/ai-trading-bot.jpg',
            conversionRate: 15
        },
        {
            id: '4',
            name: 'Premium Fitness Plan',
            description: 'Customized workout and nutrition plan for optimal results',
            commission: 35,
            price: 79.99,
            category: 'Health & Fitness',
            image: '/ProductImages/fitness-plan.jpg',
            conversionRate: 18
        },
        {
            id: '5',
            name: 'Social Media Growth Package',
            description: 'Increase your followers and engagement organically',
            commission: 45,
            price: 129,
            category: 'Marketing',
            image: '/ProductImages/social-growth.jpg',
            conversionRate: 14
        },
        {
            id: '6',
            name: 'Smart Home Security System',
            description: 'Advanced security system with mobile alerts and AI monitoring',
            commission: 20,
            price: 249.99,
            category: 'Technology',
            image: '/ProductImages/smart-security.jpg',
            conversionRate: 8
        },
        {
            id: '7',
            name: 'Luxury Skincare Set',
            description: 'Premium skincare set for glowing and youthful skin',
            commission: 25,
            price: 89.99,
            category: 'Beauty',
            image: '/ProductImages/skincare-set.jpg',
            conversionRate: 20
        },
        {
            id: '8',
            name: 'Freelancer Toolkit',
            description: 'All-in-one resource pack for freelancers to grow their business',
            commission: 50,
            price: 149,
            category: 'Business',
            image: '/ProductImages/freelancer-kit.jpg',
            conversionRate: 16
        },
        {
            id: '9',
            name: 'Gaming Headset Pro',
            description: 'High-quality gaming headset with noise-canceling microphone',
            commission: 30,
            price: 99.99,
            category: 'Gaming',
            image: '/ProductImages/gaming-headset.jpg',
            conversionRate: 12,
            isBoosted: true
        },
        {
            id: '10',
            name: 'Vegan Meal Plan Subscription',
            description: 'Weekly meal plan with delicious and healthy vegan recipes',
            commission: 40,
            price: 39.99,
            category: 'Food & Nutrition',
            image: '/ProductImages/vegan-meal.jpg',
            conversionRate: 22
        },
        {
            id: "11",
            name: "Wireless Earbuds",
            description: "High-quality sound",
            price: 50, // Converted to number
            commission: 10, // Converted to number
            category: "Electronics", // Added category
            image: "/Airbuds.jpg",
            conversionRate: 8, // Added conversion rate
        },
        {
            id: "12",
            name: "Smart Watch",
            description: "Track fitness",
            price: 100, // Converted to number
            commission: 15, // Converted to number
            category: "Wearables", // Added category
            image: "/smartwatch.jpg",
            conversionRate: 10, // Added conversion rate
        },
        {
            id: "13",
            name: "Gaming Mouse",
            description: "Precision gaming",
            price: 75, // Converted to number
            commission: 12, // Converted to number
            category: "Gaming", // Added category
            image: "/mouse.jpg",
            conversionRate: 9, // Added conversion rate
        }
    ].sort((a, b) => b.conversionRate - a.conversionRate);

    const boostedProducts = products.filter(product => product.isBoosted);

    // Example HOT products
    const hotProducts: Product[] = [
        ...boostedProducts, // ✅ Ensure boosted products appear first
        {
            id: '1',
            name: 'Digital Marketing Course',
            description: 'Comprehensive course covering all aspects of digital marketing',
            commission: 40,
            price: 199,
            category: 'Education',
            image: '/ProductImages/course-image.jpg',
            conversionRate: 12
        },
        {
            id: '2',
            name: 'Web Development Bootcamp',
            description: 'Learn full-stack web development with hands-on projects',
            commission: 50,
            price: 299,
            category: 'Education',
            image: '/ProductImages/webdev-bootcamp.jpg',
            conversionRate: 10
        },
        {
            id: '3',
            name: 'AI Trading Bot Subscription',
            description: 'Automated AI-driven trading bot with market insights',
            commission: 30,
            price: 49.99,
            category: 'Finance',
            image: '/ProductImages/ai-trading-bot.jpg',
            conversionRate: 15
        },
        {
            id: '4',
            name: 'Premium Fitness Plan',
            description: 'Customized workout and nutrition plan for optimal results',
            commission: 35,
            price: 79.99,
            category: 'Health & Fitness',
            image: '/ProductImages/fitness-plan.jpg',
            conversionRate: 18
        },
        {
            id: '5',
            name: 'Social Media Growth Package',
            description: 'Increase your followers and engagement organically',
            commission: 45,
            price: 129,
            category: 'Marketing',
            image: '/ProductImages/social-growth.jpg',
            conversionRate: 14
        }
    ].sort((a, b) => b.conversionRate - a.conversionRate);

    // ✅ Filter & Paginate Products Dynamically
    useEffect(() => {
        setLoading(true);

        let filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory === 'All' || product.category === selectedCategory)
        );

        setFilteredProducts(filtered.slice(0, currentPage * productsPerPage));
        setLoading(false);
    }, [searchTerm, selectedCategory, currentPage]);

    // ✅ Load More Products (Lazy Load)
    const loadMoreProducts = () => {
        if (currentPage * productsPerPage < products.length) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    // Add copy affiliate link functionality
    const copyAffiliateLink = (link: string) => {
        navigator.clipboard.writeText(link);
        alert('Affiliate link copied to clipboard!');
    };

    return (
        <div className="marketplace-container">
            <div className="marketplace-header">
                <h1 className="marketplace-title">Affiliate Marketplace</h1>
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
                        <option value="Finance">Finance</option>
                        <option value="Marketing">Marketing</option>
                    </select>
                </div>
            </div>
    
            {/* ✅ HOT & BOOSTED SECTION - Moved Outside the Grid */}
            <div className="hot-and-boosted-section">
                {/* HOT PRODUCTS CAROUSEL */}
                <div className="hot-carousel">
                    <h2>Trending Now</h2>
                    <div className="carousel">
                        {hotProducts.map(product => (
                            <div 
                                key={product.id} 
                                className={`carousel-item ${product.isBoosted ? "boosted-product" : "hot-product"}`}
                            >
                                {/* Show "HOT" badge for regular hot products */}
                                {!product.isBoosted && <span className="hot-badge">🔥 HOT</span>}
                                
                                {/* Show "BOOSTED" badge for boosted products */}
                                {product.isBoosted && <span className="boosted-badge">⚡ BOOSTED</span>}
            
                                <img src={product.image} alt={product.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        
    
            {/* ✅ MAIN PRODUCT GRID */}
            <div className="products-grid">
                {filteredProducts.map(product => {
                    const affiliateLink = `https://affiliate.example.com/product/${product.id}`;
                    const payoutPerSale = ((product.commission * product.price) / 100).toFixed(2);
    
                    return (
                        <div key={product.id} className={`product-card ${product.conversionRate >= 15 ? 'top-product' : ''}`}>
                            <img src={product.image} alt={product.name} className="product-image" />
                            {product.conversionRate >= 15 && <span className="top-product-badge">⬆️ Top Product</span>}
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <div className="product-stats">
                                    <span className="commission">💰 {product.commission}% Commission</span>
                                    <span className="payout">💵 Avg. Payout: ${payoutPerSale}</span>
                                    <span className="conversion">📈 {product.conversionRate}% Conv. Rate</span>
                                </div>
                                <div className="affiliate-link-container">
                                    <input type="text" value={affiliateLink} readOnly className="affiliate-link" />
                                    <button className="copy-link-button" onClick={() => copyAffiliateLink(affiliateLink)}>
                                        <img src="/Copy.png" alt="Copy" className="copy-icon" />
                                    </button>
                                </div>
                                <button className="promote-button" onClick={() => addToMyProducts(product)}>
                                    🚀 Promote This
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
                        {/* ✅ Load More Button */}
                        {currentPage * productsPerPage < products.length && (
                <button className="load-more-button" onClick={loadMoreProducts}>
                    {loading ? "Loading..." : "Load More Products"}
                </button>
            )}
        </div>
    );
};


export default ProductMarketplace;
