import { useState, useEffect } from "react";

import { Container } from "./HomePage.styled";
import SplashPage from "./SplashPage";
import OnBoardPage from "./OnBoardPage";

export default function HomePage() {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [])

    return (
        <>
            {isLoading ? <SplashPage/> : <OnBoardPage/>}
        </>
    );
}
