import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: []
    },
    reducers: {
        setProducts: (state, action) => {
            state.items = action.payload;
        },
        // Add a new reducer to append products for lazy loading
        appendProducts: (state, action) => {
            state.items = [...state.items, ...action.payload];
        }
    }
});

export const { setProducts, appendProducts } = productSlice.actions;

export default productSlice.reducer;
