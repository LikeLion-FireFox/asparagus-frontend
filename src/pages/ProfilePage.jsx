import { useNavigate } from "react-router-dom"

import { TopBar } from "@/components/display/TopBar"
import { Container } from "./HomePage.styled"

export default function ProfilePage(){
    return (
        <>
            <TopBar name="마이페이지" icon="src/assets/icon/back.png" icon_link="../" />
            <Container>
                <p>Hello</p>
            </Container>
        </>
    )
}