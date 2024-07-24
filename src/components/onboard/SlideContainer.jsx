import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Slider = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
`;

const SliderInner = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: transform 0.5s ease-in-out;
    transform: ${(props) => `translateX(calc(150% + -${props.$currentIndex * 100}%))`};
`;

const Slide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    box-sizing: border-box;
`;

export const ImageSlider = ({ children, show_index=0 }) => {
    return (
        <Slider>
            <SliderInner $currentIndex={show_index}>
                {React.Children.map(children, (child, index) => (
                    <Slide key={index}>{child}</Slide>
                ))}
            </SliderInner>
        </Slider>
    );
};
