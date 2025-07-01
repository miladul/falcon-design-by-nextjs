// app/product/[slug]/page.tsx
import {fetchProductDetails, fetchCategories} from '@/lib/api';

import DefaultLayout from "../../../components/layouts/DefaultLayout";
import ProductGallery from "../../../components/ProductGallery";
import ProductInfo from "../../../components/ProductInfo";
import Description from "../../../components/Description";
import Specification from "../../../components/Specification";
import DeliveryOptionsCard from "../../../components/DeliveryOptionsCard";
import SoldByCard from "../../../components/SoldByCard";

interface Props {
    params: { slug: string };
}

export default async function ProductPage({params}: Props) {
    const product = await fetchProductDetails(params.slug);
    const categories = await fetchCategories();

    console.log('product', product)

    return (
        <DefaultLayout>
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
