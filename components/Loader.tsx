"use client";

import Image from "next/image";

export default function Loader() {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <Image
                src="/main-loader.png"
                alt="Loading..."
                width={220}
                height={220}
                className="animate-flip"
                priority
            />
        </div>
    );
}