import { useState, useEffect } from 'react';

export function useImagePreloader(images) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let resolved = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        resolved += 1;
        if (resolved === images.length) setLoaded(true);
      };
    });
  }, []);

  return loaded;
}
