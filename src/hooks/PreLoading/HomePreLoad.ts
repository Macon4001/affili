import { useEffect } from 'react';
import { preloadManager } from '../../components/Functions/preloadManager';

export const useHomePreload = () => {
    const preloadHomePage = () => {
        if (sessionStorage.getItem('homeVideoPreloaded')) {
            return;
        }

        preloadManager.preloadPage('home', {
            component: () => import('../../Pages/Home'),
            videos: ['/Homepage Hero.mp4'],
            images: ['/Affiliate.jpg', '/Business.jpg', '/Analytics.jpg'],
            styles: ['/styles/Home.css']
        });

        sessionStorage.setItem('homeVideoPreloaded', 'true');
    };

    useEffect(() => {
        const homeLink = document.querySelector('a[href="/"]');
        if (homeLink) {
            homeLink.addEventListener('mouseenter', preloadHomePage);
            return () => {
                homeLink.removeEventListener('mouseenter', preloadHomePage);
            };
        }
    }, []);
}; 