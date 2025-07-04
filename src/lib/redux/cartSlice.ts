'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: number;
    name: string;
    image?: string;
    price: string;
    oldPrice?: string;
    quantity: number;
    color?: string;
    size?: string;
    selected?: boolean; // add this property
    merchant_id?: number
    shop_name?: string
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action: PayloadAction<CartItem[]>) => {
            state.items = action.payload;
        },
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity || 1;
            } else {
                state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 });
            }
        },
        clearCart: state => {
            state.items = [];
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        incrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) item.quantity += 1;
        },
        decrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 1) item.quantity -= 1;
        },

        toggleSelectItem(state, action: PayloadAction<number>) {
            const item = state.items.find(i => i.id === action.payload);
            if (item) {
                item.selected = !item.selected;
            }
        },

        selectAllItems(state) {
            state.items.forEach(i => (i.selected = true));
        },

        deselectAllItems(state) {
            state.items.forEach(i => (i.selected = false));
        },
    },
});

export const {
    setCart,
    addToCart,
    clearCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
} = cartSlice.actions;

export const { toggleSelectItem, selectAllItems, deselectAllItems } = cartSlice.actions;
export default cartSlice.reducer;
