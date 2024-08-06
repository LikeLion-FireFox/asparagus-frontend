import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #fff;
`;

export const SignupBox = styled.div`
    background-color: white;
    padding: 20px;
    width: 100%;
`;

export const BackArrow = styled.span`
    display: inline-block;
    margin-bottom: 20px;
    cursor: pointer;
`;

export const Header = styled.div`
    margin-top: 20px;
    margin-bottom: 50px;
`;
export const Title = styled.div`
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: left;
`;

export const Description = styled.div`
    color: #6c7278;
    margin-bottom: 20px;
    text-align: left;
    font-size: 16px;
`;

export const FormGroup = styled.div`
    margin-bottom: 15px;
`;

export const Label = styled.label`
    display: block;
    margin-left: 4px;
    margin-bottom: 5px;
    font-color: #6c7278;
    font-size: 12px;
    backgroundcolor: #f3f3f3;
`;

export const Input = styled.input`
    width: 100%;
    height: 46px;
    padding: 10px;
    box-sizing: border-box;
    border: 0px solid #ddd;
    border-radius: 10px;
    background-color: #f3f3f3;
`;

export const SignupButton = styled.button`
    width: 100%;
    height: 48px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #1a365d;
    border: none;
    border-radius: 100px;
    color: white;
    font-size: 14px;
    cursor: pointer;
`;

export const LoginPrompt = styled.p`
    margin-top: 20px;
    text-align: center;
    color: #6c7278;
    font-size: 12px;
`;

export const LoginLink = styled.a`
    color: #1a365d;
    text-decoration: none;
    font-size: 12px;
`;
