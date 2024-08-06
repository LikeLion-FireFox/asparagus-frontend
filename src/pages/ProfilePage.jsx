import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { TopBar } from "@/components/display/TopBar"
import { Container } from "./HomePage.styled"
import { Profile } from "@/components/display/Profile"
import { ContractReview } from "@/components/display/ContractReview"
import { MyReports } from "@/components/display/MyReports"
import { useState, useEffect } from "react"
import { Button } from "@/components/forms/Button"

import { api } from "@/config/apis"

export default function ProfilePage(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isAuthenticated, setAuthenticated] = useState(useSelector((state) => state.auth.isAuthenticated));
    
    // 프로필 정보
    const [nickname, setNickname] = useState(useSelector((state) => state.auth.nickname));
    const [userId, setUserId] = useState(useSelector((state) => state.auth.authId));
    const [email, setEmail] = useState("email@example.com");
    
    console.log("로그인 상태", isAuthenticated, userId);

    useEffect(() => {

        async function GetProfile() {
            try {
                const response = await api.get(`/member/myPage?size=1`, {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                });
                const responseID = await api.get(`/mainPage`, {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                });
                if (response.status === 200) {
                    console.log("Login Response:", response);
                    setNickname(response.data.nickname);
                    setUserId(responseID.data.id);  // 6시에 수정해야함
                    setEmail(response.data.email);
                }
                else if (response.status === 401) {
                    console.log("비로그인 상태");
                    alert("로그인 상태가 아닙니다. 로그인 페이지로 이동합니다.");
                    navigate("/loginPage");
                }
                else {
                    console.log(response.status);
                }
            } catch (e) {
                console.log("error", e);
                alert("오류가 발생했습니다. 처음 페이지로 이동합니다.");
                navigate("/");
            }
        }
        GetProfile();
    },[]);

    async function Logout() {
        async function RequestLogout() {
            try {
                const response = await api.post(`/mainPage/logout?memberId=${userId}`, {
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
                <Profile userName={nickname} userType="고객" userEmail={email} profileImage="src/assets/testprofile.png" />
                <ContractReview safeCount={3} warningCount={1} />
                <MyReports />
                <Button onClick={Logout} size="100%" variant="navy" style={{marginTop: "30px"}}>로그아웃</Button>
            </Container>
        </>
    )
}