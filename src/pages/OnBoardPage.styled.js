import styled from "styled-components";

export const OnBoardTopScreen = styled.div`
    & > span {
        position: absolute;
        top: 50px;
        right: 30px;
    }

    position: relative;
    width: 100%;

    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;

    background-color: #88ccfc;
`

export const OnBoardBottomScreen = styled.div`
    & > div {
        height: 200px;

        display: flex;
        flex-direction: column;
        gap: 30px;

        margin: 0px 10px 0px 10px;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    background-color: #f4f6ff;
    padding: 60px 20px 60px 20px;
`
