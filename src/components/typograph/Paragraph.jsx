import React from "react";

import styled from "styled-components";

import { Text } from "./Text";

/**
 * @typedef {import("./Text").IText} IText
 * @typedef {Object} IParagraph
 * @property {React.ReactNode} children - paragraph 내용
 */

const ParagraphStyled = styled.p``;

/**
 * Paragraph 컴포넌트
 * @param {IText & IParagraph} props
 */
export const Paragraph = ({ size, weight, variant, children }) => {
    return (
        <ParagraphStyled>
            <Text size={size} weight={weight} variant={variant}>
                {children}
            </Text>
        </ParagraphStyled>
    );
};
