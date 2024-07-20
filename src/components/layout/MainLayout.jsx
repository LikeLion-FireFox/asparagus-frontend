import { Outlet, useLocation } from "react-router-dom";

import styled from "styled-components";

import { MainContent } from "./MainContent";

export const Main = styled.main`
    width: min(100%, 500px);
    margin: 0px auto;
`;

export const MainLayout = () => {
    return (
        <>
            {/* <Navigation /> */}
            <Main>
                <MainContent>
                    <Outlet />
                </MainContent>
            </Main>
        </>
    );
};
