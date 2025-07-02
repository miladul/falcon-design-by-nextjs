'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

interface QuantitySelectorProps {
    max?: number;
}

export default function QuantitySelector({ max }: QuantitySelectorProps) {
    const [qty, setQty] = useState(1);

    const increaseQty = () => {
        if (max !== undefined && qty >= max) {
            //alert('Stock not available');

            MySwal.fire({
                icon: 'warning',
                title: 'Stock not available',
                text: `You cannot add more than ${max} items.`,
                confirmButtonText: 'Close',
                customClass: {
                    popup: 'rounded-lg',
                },
            });
            return;
        }
        setQty(q => q + 1);
    };

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
                onClick={increaseQty}
                className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-xl select-none absolute right-3"
            >
                +
            </button>
        </div>
    );
}
