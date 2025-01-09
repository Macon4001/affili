import React from 'react';
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
                                                               onClick,
                                                           }) => {
    return (
        <div
            className="feature-card"
            style={{ backgroundImage: `url(${image})` }} // Dynamically set the background image
            onClick={onClick}
        >
            {/* Content box */}
            <div className="feature-card-content">
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                <p>{description}</p>
            </div>

            {/* Learn More Button */}
            <button className="feature-card-button">Learn More</button>
        </div>
    );
};

export default HomeFeaturesCard;
