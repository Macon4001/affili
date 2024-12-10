import React from 'react';
import '../styles/HowItWorks.css';

const HowItWorksStep = ({ image, title, description }) => {
  return (
    <div className="how-it-works-tile">
      <img src={image} alt={title} className="tile-image" />
      <div className="tile-content">
        <h3 className="tile-title">{title}</h3>
        <p className="tile-description">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorksStep;
