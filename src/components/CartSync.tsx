import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    clearCart,
    decrementQuantity,
    incrementQuantity,
    removeFromCart,
    setCart,
} from "../lib/redux/cartSlice";
import {
    deselectAll,
    toggleItem,
    setSelectedItemsByCartItems,
    setSelectedItems,
} from "../lib/redux/cartSelectionSlice";
import { RootState } from "../lib/redux/store";
import Image from "next/image";

export default function CartSync() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const selectedIds = useSelector((state: RootState) => state.cartSelection.selectedIds);

    useEffect(() => {
        const stored = localStorage.getItem("cart");
        if (stored) {
            dispatch(setCart(JSON.parse(stored)));
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const allSelected = cartItems.length > 0 && selectedIds.length === cartItems.length;

    const toggleSelectAll = (checked: boolean) => {
        if (checked) {
            dispatch(setSelectedItemsByCartItems(cartItems));
        } else {
            dispatch(deselectAll());
        }
    };

    const toggleSelectItem = (id: string) => {
        dispatch(toggleItem(id));

        const updatedSelectedIds = selectedIds.includes(id)
            ? selectedIds.filter((itemId) => itemId !== id)
            : [...selectedIds, id];

        const updatedSelectedItems = cartItems.filter((item) =>
            updatedSelectedIds.includes(item.id)
        );

        dispatch(setSelectedItems(updatedSelectedItems));
    };

    const groupedItems = useMemo(() => {
        const groups: Record<number, typeof cartItems> = {};
        cartItems.forEach((item) => {
            const key = item.merchant_id;
            if (!groups[key]) {
                groups[key] = [];
            }
            groups[key].push(item);
        });
        return groups;
    }, [cartItems]);

    const isMerchantGroupSelected = (merchantItems: typeof cartItems) => {
        return merchantItems.every((item) => selectedIds.includes(item.id));
    };

    const toggleMerchantSelectAll = (merchantItems: typeof cartItems, checked: boolean) => {
        if (checked) {
            const newSelections = merchantItems.filter(item => !selectedIds.includes(item.id));
            const updatedSelections = [...selectedIds, ...newSelections.map(item => item.id)];
            const updatedSelectedItems = cartItems.filter(item => updatedSelections.includes(item.id));

            dispatch(setSelectedItemsByCartItems(updatedSelectedItems));
        } else {
            const updatedSelections = selectedIds.filter(id => !merchantItems.some(item => item.id === id));
            const updatedSelectedItems = cartItems.filter(item => updatedSelections.includes(item.id));

            dispatch(setSelectedItemsByCartItems(updatedSelectedItems));
        }
    };

    return (
        <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">My Cart ({cartItems.length})</h2>
                <div className="flex gap-4 text-sm text-gray-500">
                    <label className="flex items-center gap-1 cursor-pointer">
                        <input
                            className="cursor-pointer"
                            type="checkbox"
                            checked={allSelected}
                            onChange={(e) => toggleSelectAll(e.target.checked)}
                        />
                        Select All
                    </label>
                    <button
                        onClick={() => dispatch(clearCart())}
                        className="hover:text-red-500 cursor-pointer"
                    >
                        Clear All
                    </button>
                </div>
            </div>

            <hr className="border-t border-gray-300 mb-4" />

            {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                Object.entries(groupedItems).map(([merchantId, items]) => (
                    <div key={merchantId} className="mb-8">
                        <div className="text-lg font-semibold text-gray-700 mb-2 flex items-center gap-2">
                            <label className="flex items-center gap-1 cursor-pointer">
                                <input
                                    className="cursor-pointer"
                                    type="checkbox"
                                    checked={isMerchantGroupSelected(items)}
                                    onChange={(e) => toggleMerchantSelectAll(items, e.target.checked)}
                                />
                                🏬 {items[0].shop_name}
                            </label>

                        </div>

                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="bg-[#f8fafd] p-4 mb-4 rounded-lg"
                            >
                                <div className="grid grid-cols-12 gap-4 border-t pt-3 items-center">
                                    <div className="col-span-1 flex justify-center">
                                        <input
                                            className="cursor-pointer"
                                            type="checkbox"
                                            checked={selectedIds.includes(item.id)}
                                            onChange={() => toggleSelectItem(item.id)}
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <Image
                                            src={item.image || "/shirt.png"}
                                            alt={item.name}
                                            width={1000}
                                            height={1000}
                                            className="rounded-md object-cover"
                                        />


                                    </div>

                                    <div className="col-span-6">
                                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                                        <p className="text-sm text-gray-500">
                                            Color: {item.color || "N/A"}, Size: {item.size || "N/A"}
                                        </p>

                                        <div className="flex items-center gap-4">
                                            <div className="relative w-[150px] border border-gray-300 rounded-full px-2 py-3 flex items-center">
                                                <button
                                                    onClick={() => dispatch(decrementQuantity(item.id))}
                                                    className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-xl select-none absolute left-3"
                                                >
                                                    −
                                                </button>
                                                <span className="mx-auto text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => dispatch(incrementQuantity(item.id))}
                                                    className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-xl select-none absolute right-3"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                onClick={() => dispatch(removeFromCart(item.id))}
                                                className="text-gray-500 hover:text-red-600"
                                            >

                                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.38536 2.36988V0.962341H11.3973V2.36988H14.9033V3.77742H13.5009V14.3339C13.5009 14.7226 13.187 15.0377 12.7997 15.0377H2.98298C2.59572 15.0377 2.28178 14.7226 2.28178 14.3339V3.77742H0.879395V2.36988H4.38536ZM3.68417 3.77742V13.6302H12.0985V3.77742H3.68417ZM5.78775 5.88872H7.19014V11.5189H5.78775V5.88872ZM8.59253 5.88872H9.99492V11.5189H8.59253V5.88872Z" fill="#94A3B8"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col-span-3 text-right">
                                        <div className="flex justify-end items-center gap-2 text-lg font-bold text-gray-800">
                                            <span>৳{item.price}</span>
                                            {item.oldPrice && item.price != item.oldPrice && (
                                                <span className="text-sm font-normal line-through text-gray-400">
                                                    ৳{item.oldPrice}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))
            )}
        </div>
    );
}
