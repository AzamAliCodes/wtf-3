"use client";
import Image from "next/image";
import Link from "next/link";
import RotatingBackground from "@/components/RotatingBackground";

// Define shared styles for buttons and tags for consistency
const buttonBase = "h-[48px] px-8 rounded-full text-base font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black flex items-center justify-center [text-shadow:none]";
const buttonPrimary = `${buttonBase} bg-lime-400 text-black active:bg-lime-600 hover:scale-105 hover:shadow-2xl hover:shadow-lime-500/70 hover:brightness-110`;
const buttonSecondary = `${buttonBase} border-2 border-white text-white bg-transparent active:bg-white/20 hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-white/70`;
const tagPill = "h-[48px] px-8 border-2 border-white text-white bg-white/10 text-base font-semibold rounded-full flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 [text-shadow:none] hover:shadow-2xl hover:shadow-red-500/70";

export default function Home() {
    return (
        <div>
            <div className="relative h-full flex flex-col font-mono animate-fade-in">
                <RotatingBackground />
                {/* NEW Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black to-transparent z-0"></div>
                {/* Header with Logo and About Button */}
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

                {/* MAIN OVERLAY CONTAINER */}
                <main className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 lg:py-8 [text-shadow:0_2px_4px_rgba(0,0,0,0.8)] overflow-y-auto flex-grow">
                    <div className="flex flex-col gap-16 lg:gap-24">
                        {/* Main Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                            {/* Left Side (takes 3 cols) */}
                            <div className="lg:col-span-3 flex flex-col">
                                <div>
                                    <h1 className="text-4xl lg:text-5xl font-sans font-bold text-white leading-loose">
                                    <span className="glitch" data-text="WHERE">WHERE</span> <span className="glitch" data-text="THE">THE</span> <span className="glitch" data-text="FLAG">FLAG</span>
                                    </h1>
                                    <h2 className="mt-2 text-2xl lg:text-3xl font-sans font-bold text-red-500 leading-relaxed">Hack The Box Chennai</h2>
                                </div>
                                <p className="mt-6 text-lg text-gray-300 max-w-xl">One Heist. One Flag. Total Control.</p>
                                <div className="mt-8 flex items-center gap-4 flex-wrap">
                                    <Link
                                        href="https://htbchennai.in/events"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={buttonPrimary}
                                    >
                                        Register
                                    </Link>
                                    <button className={buttonSecondary}>
                                        Join Event Group
                                    </button>
                                    <div className={tagPill}>
                                        Season 3
                                    </div>
                                </div>
                            </div>

                            {/* Right Side (takes 2 cols) */}
                            <div className="lg:col-span-2 flex flex-col gap-4 self-start">
                                <div className="info-box bg-black/10 backdrop-blur-lg p-1 rounded-lg border border-white/10">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-2xl font-sans font-bold text-white">Synopsis</h3>
                                        <p className="text-base leading-relaxed text-gray-300">
                                            An elite cybersecurity heist awaits in our CTF event. Participants will solve real-world security challenges across multiple domains, breaking into systems,oconfiguring vulnerabilities, and extracting hidden flags.
                                        </p>
                                    </div>
                                </div>
                                <div className="h-[4px] w-full bg-white/50"></div>
                                <div className="info-box bg-black/10 backdrop-blur-lg p-1 rounded-lg border border-white/10">
                                    <div className="space-y-3 text-sm text-gray-300">
                                        <p><span className="font-semibold text-gray-100">Cast:</span> Only the sharpest minds will complete the mission.</p>
                                        <p><span className="font-semibold text-gray-100">Genre:</span> Cybersecurity, CTF, Ethical Hacking, Jeopardy</p>
                                        <p><span className="font-semibold text-gray-100">Venue:</span> Mini Hall 2, SRM IST</p>
                                        <p><span className="font-semibold text-gray-100">Date:</span> January 27th, 2026</p>
                                        <p><span className="font-semibold text-gray-100">Time:</span> 10:00 AM IST</p>
                                        <p><span className="font-semibold text-gray-100">Pre-Requisites:</span> Laptop fully charged with VMware or VirtualBox preinstalled & a security-focused Operating System (recommended: Kali Linux).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* FOOTER with animated dots */}
                <footer className="relative z-10 w-full py-8 flex justify-center flex-none">
                    <div className="flex space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse-dot" style={{ animationDelay: '0s' }}></div>
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse-dot" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse-dot" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </footer>
            </div>
        </div>
    );
}