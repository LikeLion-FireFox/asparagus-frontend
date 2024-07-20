import styled from "styled-components";

/**
 * @typedef {"xs" | "s" | "m" | "l" | "xl" | string} Size
 * @typedef {"bold" | "normal"} Weight
 * @typedef {"white" | string} variant
 *
 * @typedef {Object} IText
 * @property {Size} size
 * @property {Weight} weight
 * @property {Variant} [variant]
 */

export const Text = styled.span`
    /** @type {(props: IText) => string} */
    font-weight: ${(props) => props.weight ?? "normal"};

    /** @type {(props: IText) => string} */
    font-size: ${(props) => {
        switch (props.size) {
            case "xs":
                return "12px";
            case "s":
                return "14px";
            case "m":
                return "16px";
            case "l":
                return "18px";
            case "xl":
                return "30px";
            default:
                return props.size;
        }
    }};

    /** @type {(props: IText) => string} */
    color: ${(props) => {
        switch (props.variant) {
            case "white":
                return "#ffffff";
            default:
                return props.variant;
        }
    }};
`;
