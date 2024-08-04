import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step: 1,
    fileUrl: null,
    fileName: null,
    analysisResult: null,
};

const contractVerificationSlice = createSlice({
    name: "contractVerification",
    initialState,
    reducers: {
        nextStep: (state) => {
            state.step += 1;
        },
        prevStep: (state) => {
            state.step -= 1;
        },
        setFile: (state, action) => {
            state.fileUrl = action.payload.fileUrl;
            state.fileName = action.payload.fileName;
        },
        setAnalysisResult: (state, action) => {
            state.analysisResult = action.payload;
        },
    },
});

export const { nextStep, prevStep, setFile, setAnalysisResult } = contractVerificationSlice.actions;

export default contractVerificationSlice.reducer;
