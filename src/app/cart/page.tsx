'use client';

import { useCart } from '../../context/CartContext';
import Cart from '../../components/Cart';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import CartSync from "../../components/CartSync";
import CartSummary from '../../components/CartSummary';

export default function CartPage() {

    return (
        <DefaultLayout>
            {/*<CartSync />*/}
            <div className="container mx-auto px-20 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Cart Section - col-8 */}
                    <div className="md:col-span-8 bg-white p-3 rounded-lg shadow">
                        <CartSync />
                    </div>

                    {/* Summary or Additional Section - col-4 */}
                    <div className="md:col-span-4">
                        <CartSummary /> {/* Replace with your actual component */}
                    </div>

                </div>
            </div>
        </DefaultLayout>
    );
}
