import React from 'react';
import TestimonialCard from './TestimonialCard';
import testimonials from '../data/testimonials'; // Import the testimonial data
import '../styles/Testimonials.css'; // Styles for the testimonials section

// Define the types for a single testimonial
interface Testimonial {
    text: string;
    author: string;
}

const Testimonials: React.FC = () => {
    return (
        <section className="testimonials">
            <h2 className="section-heading">What Our Users Say</h2>
            <div className="testimonials-grid">
                {testimonials.map((testimonial: Testimonial, index: number) => (
                    <TestimonialCard
                        key={index}
                        text={testimonial.text}
                        author={testimonial.author}
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
