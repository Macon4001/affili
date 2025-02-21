import React from 'react';
import LazyImage from './LazyImage';
import '../styles/HomeFeaturesCard.css'; // Ensure the CSS file contains your updated styles

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
    onClick
}) => {
    return (
        <div className="feature-card" onClick={onClick}>
            <LazyImage
                src={image}
                alt={title}
                className="feature-image"
                cacheControl="public, max-age=31536000, immutable"
            />
            <div className="feature-card-content">
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default HomeFeaturesCard;
