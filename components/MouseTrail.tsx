"use client";

import { useState, useEffect } from 'react';

const MouseTrail = () => {
    interface Particle {
    id: number;
    x: number;
    y: number;
    character: string;
}

const [particles, setParticles] = useState<Particle[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) {
            return;
        }

        const handleMouseMove = (e: MouseEvent) => {
            const newParticle = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
                character: Math.random() > 0.5 ? '0' : '1',
            };

            setParticles(prevParticles => {
                const updatedParticles = [...prevParticles, newParticle];
                if (updatedParticles.length > 30) { // Increased particle count for a longer trail
                    return updatedParticles.slice(updatedParticles.length - 30);
                }
                return updatedParticles;
            });
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
        <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-50">
            {particles.map((particle) => (
                <span
                    key={particle.id}
                    className="absolute animate-mouse-trail"
                    style={{
                        left: particle.x,
                        top: particle.y,
                        color: 'var(--color-neon-green)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '14px',
                        textShadow: '0 0 8px var(--color-neon-green)',
                    }}
                >
                    {particle.character}
                </span>
            ))}
        </div>
    );
};

export default MouseTrail;
