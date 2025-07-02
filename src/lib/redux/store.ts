import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import cartSelectionReducer from './cartSelectionSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        cartSelection: cartSelectionReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
