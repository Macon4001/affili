import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/LazyImage.css';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    cacheControl?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
    src, 
    alt, 
    className,
    cacheControl = 'public, max-age=31536000, immutable' 
}) => {
    const { ref, isVisible } = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: '1000px'
    });

    return (
        <div ref={ref} className={`lazy-image-container ${className}`}>
            {isVisible && (
                <img
                    src={src}
                    alt={alt}
                    className="lazy-image"
                    loading="lazy"
                    onLoad={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.style.opacity = '1';
                        // Set cache headers
                        fetch(src, {
                            headers: {
                                'Cache-Control': cacheControl
                            }
                        });
                    }}
                    style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
                />
            )}
        </div>
    );
};

export default LazyImage; 