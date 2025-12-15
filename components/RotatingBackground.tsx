"use client";
import { useState, useEffect } from 'react';

const images = [
    '/bg.svg',
    '/bg-2.jpg',
    '/bg-3.jpg',
    '/bg-4.jpg',
    '/bg-5.jpg',
];

export default function RotatingBackground() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 4 seconds (3s for fade + 1s visible)

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 -z-10 w-full h-full">
            {images.map((src, index) => (
                <div
                    key={src}
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-3000 ease-in-out"
                    style={{
                        backgroundImage: `url(${src})`,
                        opacity: index === currentImageIndex ? 1 : 0,
                        filter: 'blur(0px) brightness(0.9)',
                    }}
                />
            ))}
        </div>
    );
}
