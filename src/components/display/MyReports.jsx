import styled from "styled-components"

import { Paragraph } from "../typograph/Paragraph"

const MyReportsBox = styled.div`
    & > span {
        margin-left: 8px;
    }

    display: flex;
    flex-direction: column;
    gap: 13px;

    margin-top: 40px;
`

const ResultCardBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    & > div {
        display: flex;
        flex-direction: row;
        gap: 16px;
    }
`

const ResultCard = styled.div`
    & > img {
        margin-bottom: 4px;
    }

    & > :last-child {
        color: ${(props) => {
            switch (props.$illegal) {
                case "합법":
                    return "#38A169";
                case "위법":
                    return "#CF7135";
                default:
                    return "#A4A4AD";
            }
        }}
    }

    width: 100%;
    height: 150px;

    display: flex;
    flex-direction: column;
    gap: 8px;

    box-sizing: border-box;
    border-radius: 15px;

    padding: 20px;

    background-color: ${(props) => {
        switch (props.$illegal) {
            case "합법":
                return "#F5F9F9";
            case "위법":
                return "#FFF4F4";
            default:
                return "#F1F2F3";
        }
    }}
`

const Result = ({ name, date, illegal, icon }) => {
    return (
        <ResultCard $illegal={illegal}>
            <img src={icon} alt={name} width="18px" />
            <Paragraph size="s" weight="bold" variant="#1A365D">{name ?? "문서 이름"}</Paragraph>
            <Paragraph size="xs" variant="#4A5568">{date ?? "01/01 (일)"}</Paragraph>
            <Paragraph size="xs" weight="bold" variant="#38A169">{illegal ?? "합법"}</Paragraph>
        </ResultCard>
    )
}

export const MyReports = () => {
    return (
        <MyReportsBox>
            <Paragraph size="s" weight="bold" variant="#1A365D">내 레포트</Paragraph>
            <ResultCardBox>
                <div>
                    <Result name="표준근로계약서" illegal="합법" date={null} icon="src/assets/icon/user.png" />
                    <Result name="부동산매매계약서" illegal="합법" date={null} icon="src/assets/icon/building.png" />
                </div>
                <div>
                    <Result name="임대차계약서" illegal="위법" date={null} icon="src/assets/icon/house.png" />
                    <Result name="차용증" illegal="합법" date={null} icon="src/assets/icon/money.png" />
                </div>
            </ResultCardBox>
        </MyReportsBox>
    )
}