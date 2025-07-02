'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BoxIcon, StoreIcon } from "lucide-react";
import { MicrophoneIcon } from "@heroicons/react/16/solid";
import TopBar from "./TopBar";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50">
            <TopBar />
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-2 md:px-20 py-3 flex flex-wrap items-center justify-between">

                    {/* Left: Burger menu + Categories */}
                    <div className="flex items-center gap-4">
                        {/* Mobile: Burger Icon */}
                        <button
                            className="md:hidden text-gray-800"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        {/* Desktop: Categories + Nav */}
                        <div className="hidden md:flex items-center gap-6">
                            <div className="flex items-center gap-2 text-gray-800 font-semibold">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 5L20 5" stroke="#00A788" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round" />
                                    <path d="M4 12L20 12" stroke="#00A788" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round" />
                                    <path d="M4 19L20 19" stroke="#00A788" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round" />
                                </svg>
                                <span>Categories</span>
                            </div>
                            <nav className="flex items-center gap-4 text-sm text-gray-600">
                                <Link href="/cat1" className="hover:text-black">Electronics</Link>
                                <Link href="/cat2" className="hover:text-black">Home Appliances</Link>
                                <Link href="/cat3" className="hover:text-black">Mother & Baby</Link>
                                <Link href="/cat4" className="hover:text-black">Automotive</Link>
                                <Link href="/cat5" className="hover:text-black">Sports Gear</Link>
                            </nav>
                        </div>
                    </div>

                    {/* Right: Menu icons */}
                    <div className="flex items-center gap-6 text-gray-600">
                        <Link href="/menu1" className="hover:text-black flex items-center gap-1">
                            <BoxIcon className="w-5 h-5" />
                            <span className="hidden sm:inline">TRACK ORDER</span>
                        </Link>
                        <Link href="/help" className="hover:text-black flex items-center gap-1">
                            <MicrophoneIcon className="w-5 h-5" />
                            <span className="hidden sm:inline">HELP CENTER</span>
                        </Link>
                        <Link href="/account" className="hover:text-black flex items-center gap-1">
                            <StoreIcon className="w-5 h-5" />
                            <span className="hidden sm:inline">SELL WITH US</span>
                        </Link>
                    </div>

                    {/* Mobile Dropdown Menu */}
                    {menuOpen && (
                        <div className="w-full mt-3 md:hidden border-t border-gray-200 pt-3">
                            <nav className="flex flex-col gap-2 text-sm text-gray-700">
                                <Link href="/cat1" className="hover:text-black">Electronics</Link>
                                <Link href="/cat2" className="hover:text-black">Home Appliances</Link>
                                <Link href="/cat3" className="hover:text-black">Mother & Baby</Link>
                                <Link href="/cat4" className="hover:text-black">Automotive</Link>
                                <Link href="/cat5" className="hover:text-black">Sports Gear</Link>
                            </nav>
                        </div>
                    )}
                </div>
            </header>
        </div>


    );
}
