'use client';

import { useState } from 'react';

export default function QuantitySelector() {
    const [qty, setQty] = useState(1);

    return (
        <div className="relative w-[195px] border border-gray-300 rounded-l-full rounded-r-full px-2 py-3 flex items-center">
            <button
                onClick={() => setQty(q => Math.max(1, q - 1))}
                className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-xl select-none absolute left-3"
            >
                −
            </button>

            <span className="mx-auto text-center w-6">{qty}</span>

            <button
                onClick={() => setQty(q => q + 1)}
                className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-xl select-none absolute right-3"
            >
                +
            </button>
        </div>



    );
}
