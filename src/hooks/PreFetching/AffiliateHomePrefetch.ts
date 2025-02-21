import { useEffect } from 'react';

export const useAffiliateHomePrefetch = () => {
    useEffect(() => {
        const prefetchAffiliateContent = async () => {
            try {
                // Prefetch the Affiliate page component
                await import('../../Pages/AffiliateHome');
                
                // Prefetch the video
                const video = new Audio();
                video.preload = 'auto';
                video.src = '/affiliate-video.mp4'; // Update with your actual video path
            } catch (error) {
                console.error('Error prefetching affiliate content:', error);
            }
        };

        // Target all affiliate-related links
        const affiliateLinks = document.querySelectorAll('a[href*="affiliate"]');
        
        affiliateLinks.forEach(link => {
            link.addEventListener('mouseenter', prefetchAffiliateContent);
        });

        // Cleanup
        return () => {
            affiliateLinks.forEach(link => {
                link.removeEventListener('mouseenter', prefetchAffiliateContent);
            });
        };
    }, []);
}; 