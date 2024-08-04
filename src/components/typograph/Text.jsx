import styled from "styled-components";

/**
 * @typedef {"xs" | "s" | "m" | "l" | "xl" | "xxl" | string} Size
 * @typedef {"bold" | "normal"} Weight
 * @typedef {"white" | "gray" | "navy" | "success" | "warning" | "danger" | string} Variant
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
            case "xxl":
                return "60px";
            default:
                return props.size;
        }
    }};

    /** @type {(props: IText) => string} */
    color: ${(props) => {
        switch (props.variant) {
            case "white":
                return "#ffffff";
            case "gray":
                return "#b0b0b0";
            case "secondary":
                return "#4A5568";
            case "navy":
                return "#1A365D";
            case "success":
                return "#38A169";
            case "warning":
                return "#DD6B20";
            case "danger":
                return "#FF0000";
            default:
                return props.variant;
        }
    }};
`;
