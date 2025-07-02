'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart, clearCart, removeFromCart, incrementQuantity, decrementQuantity } from '../lib/redux/cartSlice';
import { RootState } from '../lib/redux/store';
import Image from 'next/image';
import { Trash2 } from 'lucide-react';

export default function CartSync() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    // Load cart from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem('cart');
        if (stored) {
            dispatch(setCart(JSON.parse(stored)));
        }
    }, [dispatch]);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">My Cart ({cartItems.length})</h2>
                <div className="flex gap-4 text-sm text-gray-500">
                    <label className="flex items-center gap-1 cursor-pointer">
                        <input type="checkbox" /> Select All
                    </label>
                    <button onClick={() => dispatch(clearCart())} className="hover:text-red-500">Clear All</button>
                </div>
            </div>
            <hr className="border-t border-gray-300 mb-4" />

            {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                cartItems.map((item, index) => (
                    <div key={index} className="bg-[#f8fafd] p-4 mb-4 rounded-lg">
                        <div className="flex items-center mb-2 text-sm font-semibold text-gray-700">
                            <input type="checkbox" className="mr-2" />
                            <span className="mr-2">🏬</span> BD FASHION HOUSE
                        </div>

                        <div className="grid grid-cols-12 gap-4 border-t pt-3 items-center">
                            <div className="col-span-1 flex justify-center">
                                <input type="checkbox" />
                            </div>

                            <div className="col-span-2">
                                <Image
                                    src={item.image || "/shirt.png"}
                                    alt={item.name}
                                    width={80}
                                    height={80}
                                    className="rounded-md object-cover"
                                />
                            </div>

                            <div className="col-span-6">
                                <h3 className="font-medium text-gray-800">{item.name}</h3>
                                <p className="text-sm text-gray-500">Color: {item.color || 'N/A'}, Size: {item.size || 'N/A'}</p>

                                <div className="mt-2 flex items-center gap-2">
                                    <button
                                        onClick={() => dispatch(decrementQuantity(item.id))}
                                        className="w-8 h-8 rounded-full bg-gray-200 text-lg font-bold"
                                    >
                                        −
                                    </button>
                                    <span className="text-lg font-semibold">{item.quantity}</span>
                                    <button
                                        onClick={() => dispatch(incrementQuantity(item.id))}
                                        className="w-8 h-8 rounded-full bg-gray-200 text-lg font-bold"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                        className="ml-4 text-gray-500 hover:text-red-600"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>

                            <div className="col-span-3 text-right">
                                <div className="flex justify-end items-center gap-2 text-lg font-bold text-gray-800">
                                    <span>৳{item.price}</span>
                                    {item.oldPrice && (
                                        <span className="text-sm font-normal line-through text-gray-400">৳{item.oldPrice}</span>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
