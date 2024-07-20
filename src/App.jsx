import { Routes, Route } from "react-router-dom";

import { MainLayout } from "@/components/layout/MainLayout";

import HomePage from "@/pages/HomePage";

import { GlobalStyle } from "./styles/global";

function App() {
    return (
        <>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index path="/" element={<HomePage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
