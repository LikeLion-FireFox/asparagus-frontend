import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import MainPage from "@/pages/MainPage";

import SplashPage from "./SplashPage";
import OnBoardPage from "./OnBoardPage";

import { Container } from "./HomePage.styled";

import { api } from "@/config/apis";
import { setAuthState, setAuthId, setAuthName } from "@/store/authSlice";

export default function HomePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isLoading, setLoading] = useState(true);


    // * 접속 시 로그인 여부 확인
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)

        async function GetLoginStatus() {
            try {
                const response = await api.get(`/mainPage`, {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true
                });
                if (response.status === 200) {
                    dispatch(setAuthState(true));
                    dispatch(setAuthId(response.data.id));
                    dispatch(setAuthName(response.data.nickname));
                } else {
                    console.log(response.status);
                }
            } catch (e) {
                dispatch(setAuthState(false));
                console.warn("로그인 여부 전달을 못 받거나 로그아웃 상태임");
            }
        }
        GetLoginStatus();
    });

    return (
        <>
            {isLoading ? <SplashPage /> : <OnBoardPage />}
        </>
    );
}
