import { useEffect } from 'react';
import { preloadManager } from '../../components/Functions/preloadManager';

export const useBusinessPrefetch = () => {
    useEffect(() => {
        const prefetchBusinessPage = () => {
            if (sessionStorage.getItem('businessPrefetched')) {
                return;
            }

            preloadManager.preloadPage('business', {
                component: () => import('../../Pages/Businesshome'),
                videos: ['/business-video.mp4'],
                images: ['/hero-image.jpg'],
                styles: ['/styles/BusinessHome.css']
            });

            sessionStorage.setItem('businessPrefetched', 'true');
        };

        prefetchBusinessPage();
    }, []);
};


export default useBusinessPrefetch;
