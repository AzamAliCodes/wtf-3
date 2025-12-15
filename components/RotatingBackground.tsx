"use client";
import { useState, useEffect } from 'react';

const BACKGROUND_IMAGES = [
    '/bg.svg',
    '/bg-2.jpg',
    '/bg-3.jpg',
    '/bg-4.jpg',
    '/bg-5.jpg',
];

export default function RotatingBackground() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    BACKGROUND_IMAGES.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        setLoadedImages((prev) => new Set(prev).add(url));
        console.log(`Image loaded successfully: ${url}`);
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${url}. Check path and file existence.`);
      };
    });
  }, []);
  const [isFirstImageLoaded, setIsFirstImageLoaded] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div 
            className="absolute inset-0 -z-10 w-full h-full"
            style={{ background: loadedImages.size === 0 ? 'linear-gradient(to bottom, #141414, #222)' : 'transparent' }} // Subtle dark gradient as fallback
        >
            {BACKGROUND_IMAGES.map((src, index) => (
                <div
                    key={src}
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-2000 ease-in-out"
                    style={{
                        backgroundImage: `url(${src})`,
                        opacity: index === currentImageIndex && loadedImages.has(src) ? 1 : 0,
                        filter: 'blur(0px) brightness(0.9)',
                    }}
                />
            ))}
        </div>
    );
}
