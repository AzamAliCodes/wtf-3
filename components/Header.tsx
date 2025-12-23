import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="relative z-30 flex-none flex items-center justify-between p-4 lg:p-8 [text-shadow:0_2px_4px_rgba(0,0,0,0.8)]">
            {/* Logo - Top Left */}
            <div className="flex items-center">
                <Link href="/" className="transition-opacity hover:opacity-80">
                    <Image
                        src="/htb.png"
                        alt="Logo"
                        width={60}
                        height={20}
                        className="object-contain"
                        priority
                    />
                </Link>
            </div>

            {/* Right Aligned Nav Items */}
            <div className="flex items-center gap-4 md:gap-8 header-interactive-group">
                {/* Hide on smaller screens for a cleaner look */}
                <div className="hidden lg:flex items-center gap-4">
                    <span className="text-sm font-medium text-white/70 htb-text">HTB</span>
                    <span className="text-sm font-medium text-white/70 chennai-text"> Chennai</span>
                    <span className="text-sm font-medium text-white/50">|</span>
                    <span className="text-sm font-medium text-white/70 flagship-text">FLAGSHIP EVENT</span>
                </div>
                <div className="hidden lg:block h-4 w-[2px] bg-white/50" />
                <Link href="/" className="text-lg md:text-xl font-bold">
                    <span className="text-red-500 wtf-text">WTF</span>
                    <span className="text-white season-text"> Season 3</span>
                </Link>
                <div className="hidden sm:block h-4 w-[2px] bg-white/50" />
                <Link
                    href="https://htbchennai.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-6 py-2 text-sm font-semibold border border-red-500 rounded-md transition-all duration-300 overflow-hidden hover:border-red-600 hover:shadow-2xl hover:shadow-red-500/70 [text-shadow:none]"
                >
                    <span className="relative z-10 transition-colors duration-300 text-white group-hover:text-white">
                        About Us
                    </span>
                    <div className="absolute inset-0 bg-red-600 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 rounded-md" />
                </Link>
            </div>
        </header>
    );
};

export default Header;
