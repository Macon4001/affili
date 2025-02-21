import { useEffect } from 'react';
import { preloadManager } from '../../components/Functions/preloadManager';

export const useBusinessPreload = () => {
    const preloadBusinessPage = () => {
        if (sessionStorage.getItem('businessVideoPreloaded')) {
            return;
        }

        preloadManager.preloadPage('business', {
            component: () => import('../../Pages/Businesshome'),
            images: ['/hero-image.jpg'],
            styles: ['/styles/BusinessHome.css']
        });

        sessionStorage.setItem('businessVideoPreloaded', 'true');
    };

    useEffect(() => {
        const businessLink = document.querySelector('a[href="/businesses"]');
        if (businessLink) {
            businessLink.addEventListener('mouseenter', preloadBusinessPage);
            return () => {
                businessLink.removeEventListener('mouseenter', preloadBusinessPage);
            };
        }
    }, []);
}; 