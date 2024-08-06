import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        authId: 0,
    },
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
        setAuthState(state, action) {
            state.isAuthenticated = action.payload;
        },
        setAuthId(state, action) {
            state.authId = action.payload;
        },
    },
});

export const { login, logout, setAuthState, setAuthId } = authSlice.actions;
export default authSlice.reducer;
