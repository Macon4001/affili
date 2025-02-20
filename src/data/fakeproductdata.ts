// Define Product type (ensure the id is a number)
interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    commission: string;
    image: string;
    imageUrl: string;
}

// Mock products data
const mockProducts: Product[] = [
    { id: "1", name: "Wireless Earbuds", description: "High-quality sound", price: "$50", commission: "10%", image: "/Airbuds.jpg", imageUrl: "https://example.com/image1.jpg" },
    { id: "2", name: "Smart Watch", description: "Track fitness", price: "$100", commission: "15%", image: "/smartwatch.jpg", imageUrl: "https://example.com/image2.jpg" },
    { id: "3", name: "Gaming Mouse", description: "Precision gaming", price: "$75", commission: "12%", image: "/mouse.jpg", imageUrl: "https://example.com/image3.jpg" },
];

export default mockProducts;