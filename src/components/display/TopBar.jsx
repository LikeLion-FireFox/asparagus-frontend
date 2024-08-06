import styled from "styled-components"
import { useNavigate } from "react-router-dom"

import MenuIcon from "src/assets/icon/menu.png"
import { Paragraph } from "../typograph/Paragraph"

const TopBarDiv = styled.div`
    & > * {
        text-align: center;
    }

    width: 100%;
    height: 70px;

    padding: 0px 30px;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const TopBar = ({ name, icon, icon_link }) => {
    const navigate = useNavigate();
    return (
        <TopBarDiv>
            <img src={icon} alt="눌러서 마이페이지로 이동" onClick={() => {navigate(icon_link)}} />
            <Paragraph size="m" weight="bold" variant="#1A365D" >{name}</Paragraph>
            {/* 정렬 맞춤용 */}
            <img src={icon} alt="눌러서 마이페이지로 이동" style={{opacity: 0}} />
        </TopBarDiv>
    )
}