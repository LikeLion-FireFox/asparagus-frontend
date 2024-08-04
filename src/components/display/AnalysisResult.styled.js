import styled from "styled-components";

export const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
`;

export const GaugeWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
`;

export const ScoreWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        margin: 0px;
    }
`;

export const ResultList = styled.div`
    padding: 10px;
    border: 1px solid #e6e6e6;
    border-radius: 24px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    margin-top: 120px;
`;

export const ResultItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    gap: 20px;
    margin: 10px;
`;

export const ResultItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    p {
        margin: 0 0 10px 0;
    }
`;

export const Divider = styled.hr`
    border: 1px solid #e6e6e6;
    margin: 10px 0;
`;
