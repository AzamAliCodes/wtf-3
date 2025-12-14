import Image from "next/image";

export default function NotFound() {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-404 overflow-hidden">

            {/* Top SVG */}
            <Image
                src="/404.svg"
                alt="404 Illustration"
                width={500}
                height={500}
                className="z-10 mt-2"
            />

            {/* <h1 className="text-5xl font-bold text-white mt-6 z-10">404</h1>
            <p className="text-lg text-gray-300 mt-2 z-10">Page not found</p> */}
        </div>
    );
}
