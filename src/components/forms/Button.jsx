import styled from "styled-components";

/**
 * @typedef {"l" | string} Size
 * @typedef {"navy" | "gray" | "white"} Variant
 *
 * @typedef {Object} IButton
 * @property {Size} size - 버튼 너비
 * @property {Variant} variant - 버튼 색
 */

export const Button = styled.button`
    /** @type {(props: IButton) => string} */
    display: block;

    /** @type {(props: IButton) => string} */
    width: ${(props) => {
        switch (props.size) {
            case "l":
                return "380px";
            default:
                return props.size;
        }
    }};
    height: 56px;

    border: none;
    border-radius: 50px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);

    color: #fff;
    /** @type {(props: IButton) => string} */
    background-color: ${(props) => {
        switch (props.variant) {
            case "navy":
                return "#1A365D";
            case "gray":
                return "#D0D0D0";
            case "white":
                return "#FFFFFF";
        }
    }};
`;
