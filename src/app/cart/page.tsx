'use client';

import { useCart } from '../../context/CartContext';
import Cart from '../../components/Cart';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import CartSync from "../../components/CartSync";

export default function CartPage() {

    return (
        <DefaultLayout>
            <CartSync />
        </DefaultLayout>
    );
}
