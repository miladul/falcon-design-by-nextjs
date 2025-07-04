'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../lib/redux/store'; // Adjust path as needed

export default function CartSummary() {
    const [agreed, setAgreed] = useState(false);

    // ✅ Get selectedItems from cartSelection slice
    const selectedItems = useSelector(
        (state: RootState) => state.cartSelection.selectedItems || []
    );

    console.log('selectedItems', selectedItems)

    const totalQuantity = selectedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const subtotal = selectedItems.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
    );

    return (
        <div className="bg-white p-6 rounded-xl shadow text-sm">
            <h2 className="text-lg font-semibold mb-4">Order summary</h2>

            <div className="flex justify-between mb-2">
                <span>Price ({totalQuantity} items)</span>
                <span>৳{subtotal}</span>
            </div>

            <div className="flex justify-between mb-4 text-gray-500">
                <span>Shipping fee</span>
                <span className="text-blue-500 cursor-pointer">To be added</span>
            </div>

            <div className="flex mb-4 border border-dashed rounded overflow-hidden">
                <input
                    type="text"
                    placeholder="Store / Falcon coupon"
                    className="w-full px-3 py-2 outline-none"
                />
                <button className="bg-green-500 text-white px-4 font-semibold">
                    Apply
                </button>
            </div>

            <div className="flex justify-between font-semibold text-base mb-6">
                <span>Sub Total</span>
                <span>৳{subtotal}</span>
            </div>

            <button
                disabled={!agreed || totalQuantity === 0}
                className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition disabled:opacity-50"
            >
                Proceed to Checkout
            </button>

            <div className="flex items-start mt-4 text-xs">
                <input
                    type="checkbox"
                    id="agree"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    className="mt-1 accent-green-500"
                />
                <label htmlFor="agree" className="ml-2 text-gray-700 leading-snug">
                    I have read and agree to the{" "}
                    <span className="text-black font-medium">
                        Terms and Conditions, Privacy Policy and Refund and Return Policy
                    </span>
                </label>
            </div>
        </div>
    );
}
