"use client";

import { useState, useEffect } from 'react';

const HackerCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) {
            return;
        }

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isClient]);

    if (!isClient) {
        return null;
    }

    return (
        <div
            className="hacker-cursor"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    );
};

export default HackerCursor;
