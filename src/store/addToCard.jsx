import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'card',
    initialState: {
        isEmpty: true,
        cardsId: []
    },
    reducers: {
        addProduct(state, action) {
            if (state.cardsId.filter(i => i.id === action.payload.id)[0]) {
                state.cardsId.filter(i => i.id === action.payload.id)[0].count += action.payload.count
            } else {
                state.cardsId.push({ id: action.payload.id, count: action.payload.count })
            }
            state.isEmpty = false;
        },
        removeProduct(state, action) {
            state.cardsId = state.cardsId.slice().filter(id => id === action.payload)
            if (state.cardsId.length === 0) state.isEmpty = true
        }
    }
})

export default cardSlice.reducer;
export const { addProduct, removeProduct } = cardSlice.actions;