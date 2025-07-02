// src/store/cartSelectionSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

interface CartSelectionState {
    selectedIds: string[];
    selectedItems: CartItem[];
}

const initialState: CartSelectionState = {
    selectedIds: [],
    selectedItems: [],
};

const cartSelectionSlice = createSlice({
    name: 'cartSelection',
    initialState,
    reducers: {
        selectAll: (state, action: PayloadAction<string[]>) => {
            state.selectedIds = action.payload;
        },
        deselectAll: (state) => {
            state.selectedIds = [];
            state.selectedItems = [];
        },
        toggleItem: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            const index = state.selectedIds.indexOf(id);
            if (index >= 0) {
                state.selectedIds.splice(index, 1);
                state.selectedItems = state.selectedItems.filter((item) => item.id !== id);
            } else {
                state.selectedIds.push(id);
                // selectedItems must be updated externally using the cart
            }
        },
        setSelectedItems: (state, action: PayloadAction<CartItem[]>) => {
            state.selectedItems = action.payload;
        },
        setSelectedItemsByCartItems: (state, action: PayloadAction<CartItem[]>) => {
            state.selectedItems = action.payload;
            state.selectedIds = action.payload.map((item) => item.id);
        },
    },
});

export const {
    selectAll,
    deselectAll,
    toggleItem,
    setSelectedItems,
    setSelectedItemsByCartItems,
} = cartSelectionSlice.actions;

export default cartSelectionSlice.reducer;

