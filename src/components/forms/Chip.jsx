import styled from "styled-components";

export const Chip = styled.button`
    display: block;
    width: ${(props) => {
        switch (props.size) {
            case "l":
                return "380px";
            default:
                return props.size;
        }
    }};

    padding: 13px 22px;

    border: none;
    border-radius: 200px;

    color: ${(props) => {props.color}};
    background-color: ${(props) => {
        switch (props.variant) {
            case "navy":
                return "#1A365D";
            case "gray":
                return "#D0D0D0";
            case "white":
                return "#FFFFFF";
            default:
                return props.variant;
        }
    }};
    box-shadow: 4px 4px 10px #00000010;
`;
