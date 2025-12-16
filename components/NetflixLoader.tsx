"use client";
import { useState, useEffect } from "react";
import styles from "./NetflixLoader.module.css";

interface NetflixLoaderProps {
  onComplete?: () => void;
}

export default function NetflixLoader({ onComplete }: NetflixLoaderProps) {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    // 1. Play Sound
    const audio = new Audio("/tadum.mp3");
    audio.volume = 0.5;
    audio.play().catch(() => {}); // Catch autoplay errors quietly

    // 2. Generate the "Spectrum" of lines
    // Real Netflix intro has a specific color palette that shifts from red to full spectrum
    const palette = [
      "#D81F26", "#E50914", "#B9090B", // Reds
      "#ff9900", // Yellow/Orange pop
      "#33cc33", // Green pop
      "#00ccff", // Cyan pop
      "#9933cc", // Purple pop
      "#ffffff", // White intense light
      "#000000", // Spacing (black)
    ];

    const generatedLines = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      color: palette[Math.floor(Math.random() * palette.length)],
      // Randomize flex-grow to create varying widths (thin vs thick lines)
      width: Math.random() * 3 + 1, 
      // Slight delay differences for "organic" feel
      delay: Math.random() * 0.1, 
    }));

    setLines(generatedLines);

    // 3. Cleanup timer
    const timer = setTimeout(() => {
      onComplete?.();
    }, 2300); // Sync with end of ribbon animation (N ends at 1.5s, Lines end at 1.5s + 0.8s = 2.3s)

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={styles.loaderWrapper}>
      {/* THE HTB LOGO */}
      <div className={styles.nContainer}>
        <div className={styles.htbText}>HTB</div>
      </div>

      {/* THE RIBBON EXPLOSION */}
      <div className={styles.ribbonContainer}>
        {lines.map((line) => (
          <div
            key={line.id}
            className={styles.ribbon}
            style={{
              backgroundColor: line.color,
              flexGrow: line.width,
              animationDelay: `${2.1 + line.delay}s`,
              boxShadow: `0 0 10px ${line.color}`, // Glow effect
            }}
          />
        ))}
      </div>
    </div>
  );
}