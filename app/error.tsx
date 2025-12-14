"use client";

import Image from "next/image";

interface ErrorPageProps {
    error: Error;          // Explicitly typed as Error
    reset: () => void;     // Function to reset the error boundary
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-500 overflow-hidden">
            {/* Top SVG */}
            <Image
                src="/500.svg"
                alt="500 Illustration"
                width={280}
                height={280}
                className="z-10 mt-6"
            />

            <h1 className="text-5xl font-bold text-white mt-6 z-10">500</h1>
            <p className="text-lg text-gray-300 mt-2 z-10">
                Something went wrong on our end
            </p>

            <button
                onClick={() => reset()}
                className="mt-4 px-6 py-2 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition"
            >
                Try Again
            </button>
        </div>
    );
}