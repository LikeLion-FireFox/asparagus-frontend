import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Login from "@/pages/Login";
import MainPage from "@/pages/MainPage";

import { api } from "../config/apis";
import { Container } from "./HomePage.styled";

export default function HomePage() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return <Container>{isAuthenticated ? <MainPage /> : <Login />}</Container>;
}
