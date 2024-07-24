import { Icon, BottomDiv } from "./SplashPage.styled";
import { Paragraph } from "@/components/typograph/Paragraph";
import styled from "styled-components";

export default function SplashPage() {
    return (
        <>
            <Icon />
            <BottomDiv>
                <Paragraph size="l" weight="bold" variant="#000">아스파라거스</Paragraph>
                <Paragraph size="m" weight="normal" variant="#A0A0A0">손쉬운 계약서 확인 서비스</Paragraph>
            </BottomDiv>
        </>
    );
}
