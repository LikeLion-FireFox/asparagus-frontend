import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import { api } from "../config/apis";
import styled from "styled-components"

import { Button } from "@/components/forms/Button"
import { Paragraph } from "@/components/typograph/Paragraph"

import { OnBoardTopScreen, OnBoardBottomScreen } from "./OnBoardPage.styled"
import { ImageSlider } from "@/components/onboard/SlideContainer"
import { PageDotDisplay } from "@/components/onboard/PageDotDisplay"

export default function OnBoardPage() {
    const navigate = useNavigate();
    
    const [isAuthenticated, setAuthenticated] = useState(useSelector((state) => state.auth.isAuthenticated));
    console.log("로그인 상태", isAuthenticated);

    const [readyToMove, setReadyToMove] = useState(false);
    const total_page_number = 4;
    const [page_number, setPageNumber] = useState(0);
    const [btLabel, setBtLabel] = useState("다음");

    const NextPage = () => {
        if (readyToMove) {
            if (isAuthenticated){
                navigate("/mainPage");
            }
            else {
                navigate("/loginPage");
            }
            return;
        }

        if (page_number < total_page_number-1) {
            setPageNumber(page_number+1);
        }
        if (page_number >= total_page_number-2) {
            setReadyToMove(true);
            setBtLabel("시작하기");
        }
    }

    const page_color = [
        "#88ccfc", "#f4bbc1", "#c1c3fa" , "#cdfdd2"
    ]
    const page_desc = [
        ["계약서 디지털화", "혹시 문서 내용을 일일히 따라치고 있나요?\n아스파라거스는 문자 인식 기술을 사용해서 계약서를 빠르게 디지털화할 수 있어요."],
        ["꼼꼼한 내용 분석", "작성한 계약서의 내용이 합리적인지 모르겠나요?\nAI가 회원님의 계약서를 분석하여 불합리한 계약 요소가 있는지 정확히 파악해드려요."],
        ["안전한 계약서 관리", "계약서를 잃어버려도 걱정하지 마세요.\n언제든 다시 열람할 수 있도록 [서비스 이름]이 클라우드에 계약서를 저장해드릴게요."],
        ["무료로 체험해보세요", "복잡한 법률 용어, 숨겨진 조항도 놓치지 않는 똑똑한 계약서 검토 서비스, 지금 바로 무료로 체험해보세요!"]
    ]

    return (
        <>
            <OnBoardTopScreen $bg_color={page_color[page_number]}>
                {/* === 고정된 위치 === */}
                {/* <Paragraph size="l" variant="#ffffff">건너뛰기</Paragraph> */}
                <PageDotDisplay currentPage={page_number} totalPages={total_page_number} />
                {/* === 고정된 위치 === */}
                <ImageSlider show_index={page_number}>
                    <img width="35%" src="onboard_1.gif" alt="계약서 디지털화" />
                    <img width="35%" src="onboard_2.gif" alt="꼼꼼한 내용 분석" />
                    <img width="35%" src="onboard_3.gif" alt="안전한 계약서 관리 " />
                    <img width="35%" src="logo/512.png" alt="무료로 체험해보세요" />
                </ImageSlider>
            </OnBoardTopScreen>
            <OnBoardBottomScreen>
                <div>
                    <Paragraph weight="bolder" size="xl">{page_desc[page_number][0]}</Paragraph>
                    <Paragraph size="m" variant="#6D6D6D">{page_desc[page_number][1]}</Paragraph>
                </div>
                <Button onClick={NextPage} size="100%" variant="navy">{btLabel}</Button>
            </OnBoardBottomScreen>
        </>
    )
}