// components/CartSyncProvider.tsx
'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../lib/redux/cartSlice';
import { RootState } from '../lib/redux/store';

export default function CartSyncProvider() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    useEffect(() => {
        const stored = localStorage.getItem('cart');
        if (stored) {
            dispatch(setCart(JSON.parse(stored)));
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return null;  // No UI here, just syncing logic
}
