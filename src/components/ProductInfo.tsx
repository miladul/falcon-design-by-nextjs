// components/ProductInfo.tsx
import {Product} from '@/types';
import QuantitySelector from './QuantitySelector';
import AddToCartButton from './AddToCartButton';
import {ChevronDownIcon, ShareIcon, HeartIcon} from '@heroicons/react/24/solid'; // or /outline

export default function ProductInfo({product, categories}: { product: Product, categories: any[] }) {
    const category = categories.find(c => c.id === product.category_id);

    return (
        <div>
            <h1 className="text-2xl font-semibold">{product.name}</h1>

            <div className="flex justify-between items-center mt-2">
                {/* Left side */}
                <p className="flex items-center text-black-600 text-xl">
                    4.7 ⭐⭐⭐⭐⭐ 2,254
                    <ChevronDownIcon className="w-5 h-5 text-gray-500 ml-1"/>
                </p>

                {/* Right side */}
                <div className="flex items-center gap-3">
                    <HeartIcon className="w-6 h-6 text-gray-500 ml-1"/>
                    <ShareIcon className="w-6 h-6 text-gray-500 ml-1"/>
                </div>
            </div>

            <div className="flex items-start gap-2 mt-2">
                <p className="text-green-600 text-xl">৳1,139.33</p>
                <p className="line-through text-gray-400 text-sm self-start">৳1,500</p>
            </div>

            <p className="flex items-center text-sm text-gray-500 mt-1">
                Promotion
                <span className="flex items-center bg-yellow-400 text-gray-800 px-2 py-0.5 rounded ml-1">
                    Min. spend ৳550
                    <ChevronDownIcon className="w-4 h-4 text-gray-700 ml-1"/>
                </span>
            </p>


            <div className="mt-4">
                <p className="text-sm text-gray-700 mb-2">Available Color: <span
                    tabIndex={0}
                    className="font-semibold focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 ml-1 cursor-pointer"
                >Navy Blue</span></p>

                <div className="flex space-x-3">
                    <img
                        src="https://picsum.photos/200/300"
                        alt="Navy Blue"
                        className="w-8 h-8 cursor-pointer border-2 border-green-600 hover:border-gray-600 rounded"
                    />
                    <img
                        src="https://picsum.photos/200/300"
                        alt="Blue"
                        className="w-8 h-8 cursor-pointer border-2 hover:border-gray-600 rounded"
                    />
                    <img
                        src="https://picsum.photos/200/300"
                        alt="Light Blue"
                        className="w-8 h-8 cursor-pointer border-2 hover:border-gray-600 rounded"
                    />
                    <img
                        src="https://picsum.photos/200/300"
                        alt="Disabled Gray"
                        className="w-8 h-8 opacity-40 cursor-not-allowed border-2 rounded"
                        aria-disabled="true"
                    />
                </div>
            </div>


            <div className="mt-4">
                <label className="block text-sm font-medium">Select Size:
                    <span
                        tabIndex={0}
                        className="font-semibold focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 ml-1 cursor-pointer"
                    >XS</span>
                </label>
                <div className="flex gap-2 mt-1">
                    {['XL', 'XS', 'S', 'M', 'L'].map(size => (
                        <button
                            key={size}
                            className={`w-12 h-10 border rounded flex items-center justify-center
                            ${size === 'XS' ? 'border-green-600' : 'border-gray-300'}`}
                        >
                            {size}
                        </button>
                    ))}
                </div>

            </div>

            <div className="mt-4">
                <QuantitySelector/>
            </div>

            <div className="mt-4 w-full md:w-[65%]">
                <AddToCartButton product={product} />
            </div>
        </div>
    );
}
