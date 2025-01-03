import React from 'react';
import '../styles/HomeFeaturesCard.css';

// Define prop types for HomeFeaturesCard component
interface HomeFeaturesCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  onClick: () => void; // Define onClick prop type
}

const HomeFeaturesCard: React.FC<HomeFeaturesCardProps> = ({
                                                             title,
                                                             subtitle,
                                                             description,
                                                             image,
                                                             onClick,
                                                           }) => {
  return (
      <div className="home-feature-card" onClick={onClick}>
        <img src={image} alt={title} className="feature-image" />
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <p>{description}</p>
      </div>
  );
};

export default HomeFeaturesCard;
