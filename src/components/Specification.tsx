'use client';

import {useState} from "react";

export default function Specification() {
    const [showSpecAll, setShowSpecAll] = useState(false);
    return (
        <div className="">
            <h2 className="font-semibold text-lg mb-2">Specification</h2>

            <div className="relative">
                <ul
                    className={`list-disc pl-5 text-sm text-gray-700 transition-all duration-300 ${
                        showSpecAll ? '' : 'max-h-[6rem] overflow-hidden'
                    }`}
                >
                    <li>GMP Cosmetic Good Manufacturing Practice</li>
                    <li>Cruelty Free</li>
                    <li>No Animal Testing</li>
                    <li>Zenpia Global Standard</li>
                    <li>Comply with Global Standard</li>
                </ul>

                {/* Gradient Blur when collapsed */}
                {!showSpecAll && (
                    <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                )}
            </div>

            <button
                onClick={() => setShowSpecAll(!showSpecAll)}
                className="flex items-center justify-center mx-auto text-blue-600 text-sm mt-2 gap-1"
            >
                {showSpecAll ? 'See Less' : 'See More'}
                {showSpecAll ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                )}
            </button>
        </div>

    );
}
