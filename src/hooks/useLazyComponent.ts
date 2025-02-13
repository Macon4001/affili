import { useEffect, useState } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

export const useLazyComponent = () => {
    const [shouldRender, setShouldRender] = useState(false);
    const { ref, isVisible } = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: '200px' // Load component before it enters viewport
    });

    useEffect(() => {
        if (isVisible) {
            setShouldRender(true);
        }
    }, [isVisible]);

    return { ref, shouldRender };
}; 