import React, { h1, useState } from "react";

import path from "../assets/Path.png";
import logo from "../assets/logo.png";
import { Button } from "../components/forms/Button";
import { api, HTTPException } from "../config/apis";
import * as S from "./Login.style";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [autoLogin, setAutoLogin] = useState(false);
    const [kakao, setKakao] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleAutoLoginChange = (e) => {
        setAutoLogin(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Auto Login:", autoLogin);
    };

    const handleLogin = async () => {
        const payload = { email, password };
        try {
            const response = await api.post(`/loginPage`, JSON.stringify(payload), {
                headers: { "Content-Type": "application/json" },
            });
            console.log("Login Response:", response.data);
        } catch (e) {
            console.log("error", e);
        }
    };

    const handleKakaoLogin = async () => {
        try {
            const response = await api.get(`/loginPage`);
            console.log("Login Response:", response.data);

            // 서버에서 받은 URL로 리다이렉트
            if (response.data) {
                setKakao(response.data);
                window.location.href = response.data;
            } else {
                console.error("카카오 로그인 URL을 받지 못했습니다.");
            }
        } catch (e) {
            console.log("error", e);
        }
    };

    return (
        <S.LoginContainer>
            <S.LoginBox>
                <S.Header>
                    <S.Logo src={logo} alt="Logo" />
                    <S.Title>로그인</S.Title>
                    <S.Description>아스파라거스를 사용하려면 로그인이 필요해요</S.Description>
                </S.Header>
                <form onSubmit={handleSubmit}>
                    <S.FormGroup>
                        <S.Label htmlFor="email">이메일</S.Label>
                        <S.Input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            placeholder="이메일을 입력해주세요."
                        />
                    </S.FormGroup>
                    <S.FormGroup>
                        <S.Label htmlFor="password">비밀번호</S.Label>
                        <S.Input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            placeholder="5자리 이상 비밀번호를 입력해주세요."
                        />
                        <S.ForgotPassword href="/forgot-password">비밀번호를 잊었나요?</S.ForgotPassword>
                    </S.FormGroup>
                    <S.FormGroup>
                        <S.CheckboxContainer>
                            <S.Checkbox
                                type="checkbox"
                                id="auto-login"
                                checked={autoLogin}
                                onChange={handleAutoLoginChange}
                            />
                            <S.Label htmlFor="auto-login">자동 로그인</S.Label>
                        </S.CheckboxContainer>
                    </S.FormGroup>
                    <S.LoginButton type="submit" onClick={handleLogin}>
                        로그인
                    </S.LoginButton>
                </form>
                <S.OrDivider>또는</S.OrDivider>
                <S.KakaoLoginContainer onClick={handleKakaoLogin}>
                    <S.KakaoLogo src={path} alt="Kakao Logo" />
                    <S.KakaoLoginText>카카오 로그인</S.KakaoLoginText>
                </S.KakaoLoginContainer>
                <S.SignUpPrompt>
                    계정이 없으신가요? <S.SignUpLink href="/signup">회원가입</S.SignUpLink>
                </S.SignUpPrompt>
            </S.LoginBox>
        </S.LoginContainer>
    );
}

export default Login;
