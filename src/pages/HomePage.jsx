import { useState, useEffect } from "react";

import { Container, Notification, Content } from "./HomePage.styled";
import { TopBar } from "@/components/display/TopBar";
import { Paragraph } from "@/components/typograph/Paragraph";

import SplashPage from "./SplashPage";
import OnBoardPage from "./OnBoardPage";
import { Button } from "@/components/forms/Button";

export default function HomePage() {
    // const [isLoading, setLoading] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2000)
    // }, [])

    return (
        <>
            {/* {isLoading ? <SplashPage/> : <OnBoardPage/>} */}
            <TopBar name="메인페이지" icon="src/assets/icon/menu.png" icon_link="/profile" />
            <Container>
                <Notification>
                    <Paragraph size="s" variant="#1A365D">복잡한 법률 용어, 숨겨진 조항도 놓치지 않는 똑똑한 계약서 검토 서비스 <b>아스파라거스</b></Paragraph>
                    <br/><br/>
                    <Paragraph size="s" variant="#1A365D">이제는 AI와 함께 <b>안전하게 검토</b>하세요.</Paragraph>
                </Notification>
                <Content>
                    <Paragraph size="l" weight="900" variant="#1A365D">빠른 시작</Paragraph>
                    <Paragraph size="xs" variant="#1A365D">AI로 빠르고 정확하게 계약서를 검토하세요.</Paragraph>
                    <Button variant="navy">계약서 검토 시작</Button>
                </Content>
            </Container>
        </>
    );
}
