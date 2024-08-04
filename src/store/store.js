import contractVerificationReducer from "./contractVerification.slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        contractVerification: contractVerificationReducer,
    },
});
