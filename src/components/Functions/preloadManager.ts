class PreloadManager {
  private preloadedPages: Set<string> = new Set();

  async preloadPage(pageName: string, resources: {
    component?: () => Promise<any>,
    images?: string[],
    videos?: string[],
    styles?: string[]
  }) {
    if (this.preloadedPages.has(pageName)) return;

    try {
      const promises: Promise<any>[] = [];

      // Preload component
      if (resources.component) {
        promises.push(resources.component());
      }

      // Preload videos
      if (resources.videos) {
        const videoPromises = resources.videos.map(src => {
          return new Promise((resolve, reject) => {
            const video = document.createElement('video');
            video.preload = 'auto';
            video.onloadeddata = resolve;
            video.onerror = reject;
            video.src = src;
          });
        });
        promises.push(...videoPromises);
      }

      // Preload images
      if (resources.images) {
        const imagePromises = resources.images.map(src => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = src;
          });
        });
        promises.push(...imagePromises);
      }

      // Preload styles
      if (resources.styles) {
        resources.styles.forEach(href => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'style';
          link.href = href;
          document.head.appendChild(link);
        });
      }

      await Promise.all(promises);
      this.preloadedPages.add(pageName);
    } catch (error) {
      console.error(`Failed to preload ${pageName}:`, error);
    }
  }
}

export const preloadManager = new PreloadManager();
