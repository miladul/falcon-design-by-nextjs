'use client';

import React from 'react';
import Image from 'next/image';
import { Trash2 } from 'lucide-react';

export default function Cart() {
    // Dummy cart data
    const cartItems = [
        {
            id: 1,
            name: "Wireless Headphones",
            price: 1200,
            qty: 1,
            image: "https://demo.sirv.com/chair.jpg"
        },
        {
            id: 2,
            name: "Bluetooth Speaker",
            price: 950,
            qty: 2,
            image: "https://demo.sirv.com/chair.jpg"
        }
    ];

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">My Cart (3)</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items Section */}
                <div className="lg:col-span-2">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center gap-4 border rounded-lg p-4 shadow-sm">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={80}
                                        height={80}
                                        className="rounded"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-semibold">{item.name}</h3>
                                        <p className="text-sm text-gray-600">৳{item.price}</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <label htmlFor={`qty-${item.id}`}>Qty:</label>
                                            <input
                                                type="number"
                                                id={`qty-${item.id}`}
                                                value={item.qty}
                                                min={1}
                                                className="w-16 border rounded px-2 py-1 text-center"
                                            />
                                        </div>
                                    </div>
                                    <button className="text-red-500 hover:text-red-700">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Summary Section */}
                <div className="border rounded-lg p-6 shadow-md bg-gray-50">
                    <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>৳{totalAmount}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>৳60</span>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>৳{totalAmount + 60}</span>
                    </div>
                    <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}
