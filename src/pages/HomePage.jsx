import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import MainPage from "@/pages/MainPage";

import SplashPage from "./SplashPage";
import OnBoardPage from "./OnBoardPage";


import { Container } from "./HomePage.styled";

export default function HomePage() {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [])

    return (
        <>
            {isLoading ? <SplashPage /> : <OnBoardPage />}
        </>
    );
}
