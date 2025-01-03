import React from 'react';
import '../styles/TestimonialCard.css'; // Styles for individual testimonial card

// Define types for the component props
interface TestimonialCardProps {
    text: string;
    author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, author }) => {
    return (
        <blockquote className="testimonial-card">
            <p className="testimonial-text">"{text}"</p>
            <footer className="testimonial-author">- {author}</footer>
        </blockquote>
    );
};

export default TestimonialCard;
