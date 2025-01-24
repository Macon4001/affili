import React from 'react';
import '../styles/HowItWorks.css';

// Define types for the steps array
interface Step {
  image: string;
  title: string;
  description: string;
}

// Define types for the HowItWorks component
const steps: Step[] = [
  {
    image: '/signup.jpg',
    title: 'Sign Up',
    description: 'Create your profile quickly and join our community.',
  },
  {
    image: '/partnership.jpg',
    title: 'Find Partnerships',
    description: 'Connect with top affiliates or businesses for tailored partnerships.',
  },
  {
    image: '/growth.jpg',
    title: 'Grow Together',
    description: 'Leverage partnerships to scale your business or affiliate earnings.',
  },
];

const benefits: string[] = [
  'Increased reach and visibility through diverse affiliates.',
  'Cost-effective marketing strategy with performance-based payouts.',
  'Access to niche audiences tailored to your business.',
  'Real-time analytics for better campaign optimization.',
  'Strengthened brand reputation through trusted affiliates.',
];

const HowItWorks: React.FC = () => {
  return (
      <section className="how-it-works">
        <h2 className="how-it-works-title">How It Works</h2>
        <div className="steps-grid">
          {steps.map((step, index) => (
              <div
                  key={index}
                  className="step-tile"
                  style={{ backgroundImage: `url(${step.image})` }}
                  data-index={index + 1}
              >
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
          ))}

          {/* Long Tile for Benefits */}
          <div className="benefits-tile">
            <div className="benefits-content">
              <div className="benefits-text">
                <h3>Why Affiliate Marketing Works for Businesses</h3>
                <ul>
                  {benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="HIW-benefits-image">
                <img src="/packages.png" alt="Affiliate Marketing Benefits" />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HowItWorks;
