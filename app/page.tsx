import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className="relative flex min-h-screen items-center justify-center font-sans">
      {/* Header with Logo and About Button */}
      <header className="absolute top-0 left-0 right-0 flex items-center justify-between p-6">
        {/* Logo - Top Left */}
        <div className="flex items-center">
          <Image
            src="/htb.png" // Replace with your actual logo path
            alt="Logo"
            width={60}
            height={20}
            className="object-contain"
            priority
          />
        </div>

        {/* About Button - Top Right */}
        <Link
          href="https://htbchennai.in"
          target="_blank"
          rel="noopener noreferrer"
          className="
    group relative 
    px-6 py-2 
    text-sm font-semibold 
    text-red-600
    border border-red-600 
    rounded-md
    transition-all duration-300
    overflow-hidden
  "
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            About
          </span>

          {/* Red hover box */}
          <div
            className="
      absolute inset-0 
      bg-red-600 
      opacity-0 group-hover:opacity-100
      scale-75 group-hover:scale-100
      transition-all duration-300
      rounded-md
    "
          />
        </Link>


      </header>

      {/* Your main content goes here */}
      <div className="text-center">
        {/* Add your page content */}
      </div>
    </div>
  );
}