import { useNavigate } from "react-router-dom"

import { TopBar } from "@/components/display/TopBar"
import { Container } from "./HomePage.styled"
import { Profile } from "@/components/display/Profile"
import { ContractReview } from "@/components/display/ContractReview"
import { MyReports } from "@/components/display/MyReports"

export default function ProfilePage(){
    return (
        <>
            <TopBar name="마이페이지" icon="src/assets/icon/back.png" icon_link="../" />
            <Container>
                <Profile userName="홍길동" userType="고객" userEmail="likelion@gmail.com" profileImage="src/assets/testprofile.png" />
                <ContractReview safeCount={3} warningCount={1} />
                <MyReports />
            </Container>
        </>
    )
}