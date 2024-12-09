import React from 'react';
import '../styles/HomeFeaturesCard.css';

const HomeFeaturesCard = ({ title, subtitle, description, image }) => {
  return (
    <div
      className="feature-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="feature-card-content">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{description}</p>
        <button className="feature-card-button">Learn More</button> {/* Add this button */}
      </div>
    </div>
  );
};

export default HomeFeaturesCard;
