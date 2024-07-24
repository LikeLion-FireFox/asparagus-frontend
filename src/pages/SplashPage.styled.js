import styled from "styled-components";
import logo from "../assets/logo/500.gif";

export const Icon = styled.div`
    background-image: url(${logo});
    background-size: cover;
    width: 100px;
    height: 100px;
`;

export const BottomDiv = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 60px;

    display: flex;
    flex-direction: column;
    gap: 5px;

    text-align: center;
`;