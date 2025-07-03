'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link"; // For client-side navigation
import DefaultLayout from "../components/layouts/DefaultLayout";
import Image from "next/image";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingSlug, setLoadingSlug] = useState(null);

    /*useEffect(() => {
        fetch("http://157.230.240.97:9999/api/v1/shop/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);*/

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);


    return (
        <DefaultLayout>
            <title>Home Page</title>

            {loading ? (
                <div className="text-center mt-4 text-gray-600">Loading...</div>
            ) : (
                <div className="px-2 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                    {products.map((product) => (
                        <div key={product.id} className="border p-4 rounded shadow">
                            <Image
                                src={product.thumbnail}
                                alt={product.name}
                                width={1000}
                                height={1000}
                                className="w-full h-48 object-cover rounded mb-4"
                            />
                            <h2 className="text-lg font-semibold">{product.name}</h2>

                            {product.regular_price !== product.discount_price ? (
                                <>
                                    <p className="text-sm text-gray-500 line-through">
                                        Regular: ৳{product.regular_price}
                                    </p>
                                    <p className="text-sm text-red-600 font-semibold mb-3">
                                        Now: ৳{product.discount_price}
                                    </p>
                                </>
                            ) : (
                                <p className="text-sm text-red-600 font-semibold mb-3">
                                    Prize: ৳{product.regular_price}
                                </p>
                            )}

                            <Link href={`/product/${product.slug}`} onClick={() => setLoadingSlug(product.slug)}>
                                <button
                                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded cursor-pointer flex items-center justify-center gap-2"
                                    disabled={loadingSlug === product.slug}
                                >
                                    {loadingSlug === product.slug ? (
                                        <>
                                            <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                    fill="none"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8v8z"
                                                ></path>
                                            </svg>
                                            Loading...
                                        </>
                                    ) : (
                                        "View Details"
                                    )}
                                </button>
                            </Link>

                        </div>

                    ))}
                </div>
            )}
        </DefaultLayout>
    );
}

