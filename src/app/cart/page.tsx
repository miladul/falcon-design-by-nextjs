'use client';

import DefaultLayout from '../../components/layouts/DefaultLayout';
import CartSync from "../../components/CartSync";
import CartSummary from '../../components/CartSummary';
import Link from "next/link";

export default function CartPage() {

    return (
        <DefaultLayout>
            <div className="container mx-auto px-20 mt-2">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-2">
                    <div className="md:col-span-12">
                        <div className="text-sm text-gray-600">
                            <Link href="/" className="hover:underline text-black-600">Home</Link>
                            <span className="mx-2">{'>'}</span>
                            <span className="text-gray-800 font-medium">My Cart</span>
                        </div>
                    </div>

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
