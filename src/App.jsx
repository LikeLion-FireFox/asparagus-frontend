import { useEffect } from "react";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { MainLayout } from "@/components/layout/MainLayout";

import HomePage from "@/pages/HomePage";

import { api } from "./config/apis.jsx";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage.jsx";
import Signup from "./pages/Signup";
import { setAuthState } from "./store/authSlice.js";
import store from "./store/store.js";
import { GlobalStyle } from "./styles/global";

function App() {
    // * 접속 시 로그인 여부 확인
    useEffect(() => {
        const response = api.get(`/loginPage`);
        console.log(response);

        if (response.status >= 200 && response.status < 300) {
            dispatch(setAuthState(data.isAuthenticated));
        }
    });

    return (
        <Provider store={store}>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index path="/" element={<HomePage />} />
                    <Route index path="/loginPage" element={<Login />} />
                    <Route index path="/signup" element={<Signup />} />
                    <Route index path="/mainPage" element={<MainPage />} />
                </Route>
            </Routes>
        </Provider>
    );
}

export default App;
