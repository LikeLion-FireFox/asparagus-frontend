import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vh;
    height: 100vh;
    background-color: #fff;
    box-sizing: border-box;

    @media (max-height: 800px) {
        align-items: flex-start;
    }
`;

export const LoginBox = styled.div`
    background-color: white;
    padding: 5% 10%;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 80%;
    max-width: 400px;

    @media (max-width: 768px) {
        width: 90%;
        padding: 5%;
    }

    @media (max-height: 800px) {
        max-height: 80vh;
    }
`;

export const Header = styled.div`
    margin-bottom: 50px;
    @media (max-width: 768px) {
        margin-bottom: 30px;
    }
`;

export const Logo = styled.img`
    width: 67px;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        width: 50px;
        margin-bottom: 20px;
    }
`;

export const Title = styled.div`
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 10px;
    text-align: left;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

export const Description = styled.div`
    color: #6c7278;
    text-align: left;
    font-size: 16px;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const FormGroup = styled.div`
    margin-bottom: 15px;
    text-align: left;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-color: #6c7278;
    font-size: 12px;
    backgroundcolor: #f3f3f3;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #f3f3f3;
`;

export const ForgotPassword = styled.a`
    display: block;
    text-align: right;
    margin-top: 5px;
    color: #1a365d;
    text-decoration: none;
    font-size: 12px;
`;

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Checkbox = styled.input`
    margin-right: 10px;
`;

export const LoginButton = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #1a365d;
    border: none;
    border-radius: 100px;
    color: white;
    font-size: 12px;
    cursor: pointer;
`;

export const OrDivider = styled.div`
    margin: 20px 0;
    color: #aaa;
`;

export const KakaoLoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #fee500;
    border-radius: 12px;
    cursor: pointer;
    font-size: 12px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const KakaoLoginText = styled.div``;

export const KakaoLogo = styled.img`
    width: 12px;
    margin-right: 5px;
`;

export const SignUpPrompt = styled.p`
    margin-top: 20px;
    text-align: center;
    color: #6c7278;
    font-size: 12px;
`;

export const SignUpLink = styled.a`
    color: #1a365d;
    text-decoration: none;
    cursor: pointer;
`;
