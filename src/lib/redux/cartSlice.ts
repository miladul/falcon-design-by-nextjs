// cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
    id: number;
    name: string;
};

type CartState = {
    items: CartItem[];
};

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
            state.items.push(action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, clearCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
