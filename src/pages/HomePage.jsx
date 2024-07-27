import React, { useState } from "react";

import Login from "@/pages/Login";

import { Container } from "./HomePage.styled";

export default function HomePage() {
    const [isLogin, setIsLogin] = useState(false);

    console.log(isLogin);
    return <Container>{isLogin ? {} : <Login />}</Container>;
}
