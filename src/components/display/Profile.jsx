import styled from "styled-components"

import { Paragraph } from "../typograph/Paragraph"


const ProfileBox = styled.div`
    width: 100%;
    box-sizing: border-box;

    padding: 10px;

    display: flex;
    gap: 30px;

    justify-content: start;
    align-items: center;
`

const ProfileInfoBox = styled.div`
    & > span {
        display: block;
    }

    & > span:nth-child(2) {
        margin-bottom: 6px;
    }
`

export const Profile = ({ userName, userType, userEmail, profileImage }) => {
    return (
        <ProfileBox>
            <img src={profileImage} alt={`${userName ?? "null"}의 사진`} width="120px" height="120px" />
            <ProfileInfoBox>
                <Paragraph size="l" weight="bold" variant="#1A365D">{userName}</Paragraph>
                <Paragraph size="s" variant="#4A5568">{userType}</Paragraph>
                <Paragraph size="s" variant="#4A5568">{userEmail}</Paragraph>
            </ProfileInfoBox>
        </ProfileBox>
    )
}