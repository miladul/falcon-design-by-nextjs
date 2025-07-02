'use client';

import DefaultLayout from '../../components/layouts/DefaultLayout';
import CartSync from "../../components/CartSync";
import CartSummary from '../../components/CartSummary';

export default function CartPage() {

    return (
        <DefaultLayout>
            <div className="container mx-auto px-20 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    <div className="md:col-span-8 bg-white p-3 rounded-lg shadow">
                        <CartSync />
                    </div>

                    <div className="md:col-span-4">
                        <CartSummary /> {/* Replace with your actual component */}
                    </div>

                </div>
            </div>
        </DefaultLayout>
    );
}
