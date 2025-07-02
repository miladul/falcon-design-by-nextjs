'use client';

import { useState } from 'react';

export default function Description({ content }: { content: string }) {
    const [showAll, setShowAll] = useState(false);

    console.log('content', content)
    return (
        <div className="">
            <h2 className="font-semibold text-lg mb-2">Description</h2>

            <div className="relative">
                <p
                    className={`text-gray-700 text-sm transition-all duration-300 ${
                        showAll ? '' : 'max-h-[4.5rem] overflow-hidden'
                    }`}
                >
                    {/*<div dangerouslySetInnerHTML={{ __html: content }} />*/}
                    {content}
                </p>

                {/* Gradient Blur Overlay */}
                {!showAll && (
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                )}
            </div>

            <button
                onClick={() => setShowAll(!showAll)}
                className="flex items-center justify-center mx-auto text-blue-600 text-sm mt-2 gap-1"
            >
                {showAll ? 'See Less' : 'See More'}
                {showAll ? (
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
