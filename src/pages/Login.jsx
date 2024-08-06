import React, { h1, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import path from "../assets/Path.png";
import logo from "../assets/logo.png";
import { Button } from "../components/forms/Button";
import { api, HTTPException } from "../config/apis";
import * as S from "./Login.style";
import { login, setAuthId, setAuthName } from "@/store/authSlice";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [autoLogin, setAutoLogin] = useState(false);

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
                withCredentials: true,
            });
            if (response.status === 200) {
                console.log("Login Response:", response);
                console.log(response.data.id);
                dispatch(setAuthId(response.data.id));
                dispatch(setAuthName(response.data.nickname));
                dispatch(login(true));
                navigate("/mainPage");
            } else {
                console.log(response.status);
            }
        } catch (e) {
            console.log("error", e);
            alert("로그인에 실패했어요. ID 또는 PW를 확인해주세요");
        }
    };

    const handleKakaoLogin = async () => {
        try {
            const response = await api.get(`/loginPage`);
            console.log("Login Response:", response);

            if (response.data) {
                window.location.href = response.data.kakao_link;
                // console.log(response.data.kakao_link);
            } else {
                console.error("카카오 로그인 URL을 받지 못했습니다.");
            }
        } catch (e) {
            console.log("error", e);
        }
    };

    const handleSignup = async () => {
        try {
            const response = await api.get(`/loginPage/save`);
            console.log("Signup Response:", response);

            if (response.data) {
                console.log("sign up!");
                window.location.href = "/";
            } else {
                console.log("카카오 회원가입 URL을 받지 못했습니다.");
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <S.LoginContainer className="loginbox">
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
                    </S.FormGroup>
                    <S.FormGroup style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                        <S.CheckboxContainer>
                            <S.Checkbox
                                type="checkbox"
                                id="auto-login"
                                checked={autoLogin}
                                onChange={handleAutoLoginChange}
                            />
                            <S.Label htmlFor="auto-login" style={{marginBottom: "0px"}}>자동 로그인</S.Label>
                        </S.CheckboxContainer>
                        <S.ForgotPassword href="/forgot-password">비밀번호를 잊었나요?</S.ForgotPassword>
                    </S.FormGroup>
                    <S.LoginButton type="submit" onClick={handleLogin}>
                        로그인
                    </S.LoginButton>
                </form>
                <S.OrDivider>또는</S.OrDivider>
                <S.KakaoLoginContainer onClick={handleKakaoLogin}>
                    <S.KakaoLogo src={path} alt="Kakao Logo" />
                    <S.KakaoLoginText>카카오로 로그인</S.KakaoLoginText>
                </S.KakaoLoginContainer>
                <S.SignUpPrompt>
                    계정이 없으신가요? <S.SignUpLink onClick={() => {navigate("/signup")}}>회원가입</S.SignUpLink>
                </S.SignUpPrompt>
            </S.LoginBox>
        </S.LoginContainer>
    );
}

export default Login;
