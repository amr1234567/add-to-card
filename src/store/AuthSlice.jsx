import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        email: '',
        password: '',
        wrongInputs: false
    },
    reducers: {
        setEmail(state, action) {
            state.email = action.payload;
        },
        setPassword(state, action) {
            state.password = action.payload;
        },
        setWrongFields(state, action) {
            state.wrongInputs = action.payload || !state.wrongInputs
        }
    }
})

export default authSlice.reducer;
export const { setEmail, setPassword, setWrongFields } = authSlice.actions;