import React, { useState } from "react";

import { Button } from "@/components/forms/Button";

import { api } from "../config/apis";
import * as S from "./Signup.style";

function Signup() {
    const [payload, setPayload] = useState({
        nickname: "",
        email: "",
        birthday: "",
        password: "",
    });
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = async () => {
        if (payload.password != confirmPassword) {
            console.log(password, confirmPassword);
            console.log("비밀번호가 일치하지 않습니다.");
            return;
        }

        try {
            const response = await api.post(`/loginPage/save`, JSON.stringify(payload), {
                headers: { "Content-Type": "application/json" },
            });
            console.log("Signup Response:", response);
            alert("회원가입 성공!");
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPayload({
            ...payload,
            [name]: value,
        });
    };

    const handlePasswordChange = (e) => {
        console.log("handlePassword", e.target.value);
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", payload);
    };

    return (
        <S.Container>
            <S.SignupBox>
                <S.BackArrow>←</S.BackArrow>
                <S.Title>회원가입</S.Title>
                <S.Description> 아스파라거스를 사용하려면 계정이 필요해요.</S.Description>
                <S.FormGroup>
                    <S.Label htmlFor="name">성/이름</S.Label>
                    <S.Input
                        type="text"
                        id="name"
                        name="nickname"
                        value={payload.nickname}
                        onChange={handleChange}
                        required
                        placeholder="이름을 입력하세요."
                    />
                </S.FormGroup>
                <S.FormGroup>
                    <S.Label htmlFor="email">이메일</S.Label>
                    <S.Input
                        type="email"
                        id="email"
                        name="email"
                        value={payload.email}
                        onChange={handleChange}
                        required
                        placeholder="이메일을 입력하세요."
                    />
                </S.FormGroup>
                <S.FormGroup>
                    <S.Label htmlFor="birthday">생년월일</S.Label>
                    <S.Input
                        type="date"
                        id="birthday"
                        name="birthday"
                        value={payload.birthday}
                        onChange={handleChange}
                        required
                    />
                </S.FormGroup>
                <S.FormGroup>
                    <S.Label htmlFor="password">비밀번호</S.Label>
                    <S.Input
                        type="password"
                        id="password"
                        name="password"
                        value={payload.password}
                        onChange={handleChange}
                        required
                        placeholder="5자리 이상 비밀번호를 입력하세요."
                    />
                </S.FormGroup>
                <S.FormGroup>
                    <S.Label htmlFor="confirmPassword">비밀번호 검증</S.Label>
                    <S.Input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handlePasswordChange}
                        required
                        placeholder="비밀번호를 한번 더 입력하세요."
                    />
                </S.FormGroup>
                <S.SignupButton type="submit" onClick={handleSignup}>
                    회원가입
                </S.SignupButton>

                <S.LoginPrompt>
                    이미 계정이 있으신가요? <S.LoginLink href="/login">로그인</S.LoginLink>
                </S.LoginPrompt>
            </S.SignupBox>
        </S.Container>
    );
}

export default Signup;
