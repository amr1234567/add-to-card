import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        error: ''
    },
    reducers: {
        setInitialProducts(state, action) {
            state.products = action.payload;
        },
        setError(state, action) {
            state.error = action.payload
        }
    }
})

export default productsSlice.reducer;
export const { setInitialProducts, setError } = productsSlice.actions;