import { createSlice } from "@reduxjs/toolkit";

const accountsSlice = createSlice({
    name: 'accounts',
    initialState: {
        accounts: [],
        error: '',
        activeAccountId: 0
    },
    reducers: {
        setAccounts(state, action) {
            state.accounts = action.payload;
        },
        setError(state, action) {
            state.error = action.payload
        },
        setActiveAccount(state, action) {
            state.activeAccountId = action.payload
        },
        logOut(state) {
            let confirm = window.confirm('u sure u wanna log out ?')
            if (confirm) {
                state.activeAccountId = 0
            }
        }
    }
})

export default accountsSlice.reducer;
export const { setAccounts, setError, setActiveAccount, logOut } = accountsSlice.actions;