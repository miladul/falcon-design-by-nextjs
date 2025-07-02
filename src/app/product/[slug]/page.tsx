// app/product/[slug]/page.tsx
import {fetchProductDetails, fetchCategories} from '../../../lib/api';

import DefaultLayout from "../../../components/layouts/DefaultLayout";
import ProductGallery from "../../../components/ProductGallery";
import ProductInfo from "../../../components/ProductInfo";
import Description from "../../../components/Description";
import Specification from "../../../components/Specification";
import DeliveryOptionsCard from "../../../components/DeliveryOptionsCard";
import SoldByCard from "../../../components/SoldByCard";
import Link from "next/link";


// ✅ Define proper interface for props
interface PageProps {
    params: {
        slug: string;
    };
}

export default async function ProductPage({ params }: PageProps) {

    console.log('params.slug', params.slug)
    const product = await fetchProductDetails(params.slug);
    const categories = await fetchCategories();

    return (
        <DefaultLayout>
            <div className="px-2 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-10 my-2">
                <div className="md:col-span-12">
                    <div className="text-sm text-gray-600">
                        <Link href="/" className="hover:underline text-black-600">Home</Link>
                        <span className="mx-2">{'>'}</span>
                        <span className="text-gray-800 font-medium">{product.merchant.shop_name}</span>
                        <span className="mx-2">{'>'}</span>
                        <span className="text-gray-800 font-medium">{product.name}</span>
                    </div>
                </div>
            </div>

            <div className="px-20 py-10 bg-white ">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    <div className="md:col-span-4">
                        <ProductGallery images={product.image} />
                    </div>
                    <div className="md:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                            <div className="md:col-span-7">
                                <ProductInfo product={product} categories={categories} />
                            </div>
                            <div className="md:col-span-5 flex flex-col gap-3">
                                <DeliveryOptionsCard/>
                                <SoldByCard/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="mt-2 mx-20 ">
                <div className="bg-white w-[80%] p-5">
                    <Description content={product.description}/>
                </div>
            </div>

            <div className="mt-2 mx-20 ">
                <div className="bg-white w-[80%] p-5">
                    <Specification/>
                </div>
            </div>
        </DefaultLayout>
    );
}