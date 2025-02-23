// Define Product type (ensure the id is a number)
interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    commission: number;
    category: string;
    image: string;
    conversionRate: number;
}

// Mock products data
const Product: Product[] = [
    {
        id: "1",
        name: "Wireless Earbuds",
        description: "High-quality sound",
        price: 50,
        commission: 10,
        category: "Electronics",
        image: "/Airbuds.jpg",
        conversionRate: 8,
    },
    {
        id: "2",
        name: "Smart Watch",
        description: "Track fitness",
        price: 100,
        commission: 15,
        category: "Wearables",
        image: "/smartwatch.jpg",
        conversionRate: 10,
    },
    {
        id: "3",
        name: "Gaming Mouse",
        description: "Precision gaming",
        price: 75,
        commission: 12,
        category: "Gaming",
        image: "/mouse.jpg",
        conversionRate: 9,
    },
];

export default Product;