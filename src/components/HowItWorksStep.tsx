import React from 'react';
import '../styles/HowItWorks.css';

// Define types for the component props
interface HowItWorksStepProps {
    image: string;
    title: string;
    description: string;
}

const HowItWorksStep: React.FC<HowItWorksStepProps> = ({ image, title, description }) => {
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
