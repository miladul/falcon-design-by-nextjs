'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart, clearCart } from '../lib/redux/cartSlice';
import { RootState } from '../lib/redux/store';

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

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="border mt-4 p-4 rounded-md shadow">
            <h2 className="text-lg font-bold mb-2">🛒 Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-gray-500">Cart is empty.</p>
            ) : (
                <ul className="list-disc ml-6 space-y-1">
                    {cartItems.map((item, index) => (
                        <li key={index} className="text-gray-800">
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
            {cartItems.length > 0 && (
                <button
                    onClick={handleClearCart}
                    className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
                >
                    Clear Cart
                </button>
            )}
        </div>
    );
}
