import styled from "styled-components";

import selectBoxIcon from "@/assets/icon_select_box.png";

export const ContractVerificationPageContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const PageInform = styled.div`
    padding: 20px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 0 20px;
`;

export const FormElement = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const SelectBox = styled.select`
    display: flex;
    align-items: center;
    padding: 20px 20px;
    border-radius: 10px;
    border: none;
    background-color: #f0f0f0;
    font-size: 14px;
    appearance: none;
    background-image: url(${selectBoxIcon});
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 12px;
    color: #000;
`;

export const HiddenInput = styled.input`
    display: none;
`;

export const TextBox = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 20px;
    border-radius: 10px;
    background-color: #f0f0f0;
`;

export const StyledTextArea = styled.textarea`
    width: 100%;
    border: none;
    padding: 15px 10px;
    margin: 0;
    box-sizing: border-box;
    resize: none;
    outline: none;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    background-color: transparent;
    height: 100px;

    &::placeholder {
        color: #b0b0b0;
    }
`;

export const ClipImg = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`;

export const BoxWithImg = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ButtonWrapper = styled.div``;

export const PageThreeWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    div {
        width: 80%;
    }
`;
