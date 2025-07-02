'use client';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../lib/redux/cartSlice';
import { Product } from '@/types';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { RootState } from '../lib/redux/store'; // Adjust this path if needed

const MySwal = withReactContent(Swal);

export default function AddToCartButton({ product }: { product: Product }) {
    const dispatch = useDispatch();

    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleAdd = () => {
        const alreadyInCart = cartItems.some((item) => item.id === product.id);

        if (alreadyInCart) {
            MySwal.fire({
                icon: 'error',
                title: 'Already in Cart',
                text: `${product.name} is already in your cart.`,
                confirmButtonText: 'Close',
                customClass: {
                    popup: 'rounded-lg',
                },
            });
            return;
        }

        dispatch(addToCart({
            id: product.id,
            name: product.name,
            image: product.thumbnail,
            price: product.product_detail?.discount_price,
            oldPrice: product.product_detail?.regular_price,
            quantity: 1,
        }));

        MySwal.fire({
            icon: 'success',
            title: 'Added to Cart',
            text: `${product.name} has been added to your cart.`,
            confirmButtonText: 'Close',
            customClass: {
                popup: 'rounded-lg',
            },
        });
    };

    return (
        <button
            onClick={handleAdd}
            className="bg-green-600 text-white px-6 py-2 rounded w-full"
        >
            Add to Cart
        </button>
    );
}
