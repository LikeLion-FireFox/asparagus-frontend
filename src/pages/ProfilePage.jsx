import { useNavigate } from "react-router-dom"

import { TopBar } from "@/components/display/TopBar"
import { Container } from "./HomePage.styled"
import { Profile } from "@/components/display/Profile"
import { ContractReview } from "@/components/display/ContractReview"
import { MyReports } from "@/components/display/MyReports"
import { useEffect } from "react"
import { Button } from "@/components/forms/Button"

import { api } from "@/config/apis"

export default function ProfilePage(){
    const navigate = useNavigate();
    useEffect(() => {
        async function GetProfile() {
            try {
                const response = await api.get(`/member/myPage?size=1`, {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                });
                if (response.status === 200) {
                    console.log("Login Response:", response);
                } else {
                    console.log(response.status);
                }
            } catch (e) {
                console.log("error", e);
            }
        }
        GetProfile();
    },[]);

    async function Logout() {
        async function RequestLogout() {
            try {
                const response = await api.post(`/mainPage/logout?memberId=0`, {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                });
                if (response.status === 200) {
                    console.log("로그아웃 성공:", response);
                } else {
                    console.log(response.status);
                }
            } catch (e) {
                console.log("error", e);
            }
        }
        RequestLogout();
        // navigate("/loginPage");
    }

    return (
        <>
            <TopBar name="마이페이지" icon="src/assets/icon/back.png" icon_link="/mainPage" />
            <Container>
                <Profile userName="홍길동" userType="고객" userEmail="likelion@gmail.com" profileImage="src/assets/testprofile.png" />
                <ContractReview safeCount={3} warningCount={1} />
                <MyReports />
                <Button onClick={Logout} size="100%" variant="navy" style={{marginTop: "30px"}}>로그아웃</Button>
            </Container>
        </>
    )
}