import React from 'react';
import TestimonialCard from './TestimonialCard';
import testimonials from '../data/testimonials'; // Import the testimonial data
import '../styles/Testimonials.css'; // Styles for the testimonials section

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="section-heading">What Our Users Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
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
