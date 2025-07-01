'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems((prev) => [...prev, item]);
    };

    const updateQuantity = (slug, qty) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.slug === slug ? { ...item, quantity: qty } : item
            )
        );
    };

    const removeItem = (slug) => {
        setCartItems((prev) => prev.filter((item) => item.slug !== slug));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
