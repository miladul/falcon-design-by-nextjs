'use client';

import { Product } from '@/types';

export default function AddToCartButton({ product }: { product: Product }) {
    const handleAdd = () => {
        const existing = JSON.parse(localStorage.getItem('cart') || '[]');
        const updated = [...existing, { id: product.id, name: product.name }];
        localStorage.setItem('cart', JSON.stringify(updated));
        alert('Added to cart!');
    };

    return (
        <button onClick={handleAdd} className="bg-green-600 text-white px-6 py-2 rounded w-[100%]">
            Add to Cart
        </button>
    );
}

