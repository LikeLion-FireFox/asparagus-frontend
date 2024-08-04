import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { MainLayout } from "@/components/layout/MainLayout";

import ContractVerificationPage from "@/pages/ContractVerificationPage";
import HomePage from "@/pages/HomePage";

import { GlobalStyle } from "./styles/global";
import { store } from "@/store/store";

function App() {
    return (
        <>
            <GlobalStyle />
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index path="/" element={<HomePage />} />
                        <Route path="verify-contract" element={<ContractVerificationPage />}></Route>
                    </Route>
                </Routes>
            </Provider>
        </>
    );
}

export default App;
