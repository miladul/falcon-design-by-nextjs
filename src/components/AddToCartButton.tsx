'use client';

import { useDispatch } from 'react-redux';
import { addToCart } from '../lib/redux/cartSlice';
import { Product } from '@/types';
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const MySwal = withReactContent(Swal);

export default function AddToCartButton({ product }: { product: Product }) {
    const dispatch = useDispatch();

    const handleAdd = () => {
        //dispatch(addToCart({ id: product.id, name: product.name }));
        //alert('Added to cart!');

        //const dispatch = useDispatch();

        // @ts-ignore
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
            title: 'Add to Cart',
            text: `${product.name} has been added to your cart.`,
            confirmButtonText: 'Close',
            customClass: {
                popup: 'rounded-lg',
            },
        });
    };

    return (
        <button onClick={handleAdd} className="bg-green-600 text-white px-6 py-2 rounded w-[100%]">
            Add to Cart
        </button>
    );
}

