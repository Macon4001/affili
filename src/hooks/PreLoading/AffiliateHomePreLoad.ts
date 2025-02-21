import { useEffect } from 'react';
import { preloadManager } from '../../components/Functions/preloadManager';

export const useAffiliatePreload = () => {
    const preloadAffiliatePage = () => {
        if (sessionStorage.getItem('affiliateVideoPreloaded')) {
            return;
        }

        preloadManager.preloadPage('affiliate', {
            component: () => import('../../Pages/AffiliateHome'),
            videos: ['/aboutusvideo.mp4', '/workspace.mp4'],
            images: ['/affiliate-hero.jpg'],
            styles: ['/styles/AffiliateHome.css']
        });

        sessionStorage.setItem('affiliateVideoPreloaded', 'true');
    };

    useEffect(() => {
        const affiliatesLink = document.querySelector('a[href="/affiliates"]');
        if (affiliatesLink) {
            affiliatesLink.addEventListener('mouseenter', preloadAffiliatePage);
            return () => {
                affiliatesLink.removeEventListener('mouseenter', preloadAffiliatePage);
            };
        }
    }, []);
}; 