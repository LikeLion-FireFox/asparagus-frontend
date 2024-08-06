import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        authId: 0,
        nickname: "test"
    },
    reducers: {
        login(state) {
            console.log("로그인 정보 저장")
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
        setAuthName(state, action) {
            state.nickname = action.payload;
        },
    },
});

export const { login, logout, setAuthState, setAuthId, setAuthName } = authSlice.actions;
export default authSlice.reducer;
