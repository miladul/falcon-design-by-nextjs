'use client';

import { useCart } from '@/context/CartContext';
import Cart from "../../components/Cart";
import DefaultLayout from "../../components/layouts/DefaultLayout";

export default function CartPage() {
    const { cartItems, updateQuantity, removeItem } = useCart();

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <DefaultLayout>
            <div className="p-6 px-20">
                <Cart/>
            </div>
        </DefaultLayout>

    );
}
