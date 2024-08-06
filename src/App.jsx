import { useEffect } from "react";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { MainLayout } from "@/components/layout/MainLayout";

import HomePage from "@/pages/HomePage";

import { api } from "./config/apis.jsx";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Signup from "./pages/Signup";
import { setAuthState } from "./store/authSlice.js";
import store from "./store/store.js";
import { GlobalStyle } from "./styles/global";

function App() {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index path="/" element={<HomePage />} />
                    <Route index path="/loginPage" element={<Login />} />
                    <Route index path="/signup" element={<Signup />} />
                    <Route index path="/mainPage" element={<MainPage />} />
                    <Route index path="/profile" element={<ProfilePage />} />
                </Route>
            </Routes>
        </Provider>
    );
}

export default App;
