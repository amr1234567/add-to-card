import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import authReducer from "./AuthSlice";
import accountsReducer from "./accountsSlice";
import cardReducer from './addToCard'


const store = configureStore({
    reducer: {
        products: productReducer,
        auth: authReducer,
        accounts: accountsReducer,
        cards: cardReducer
    }
})

export default store