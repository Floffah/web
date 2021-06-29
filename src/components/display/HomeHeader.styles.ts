import styled, { ThemeProps } from "styled-components";
import Image from "next/image";
import { shift } from "../../lib/themes/resolve";
import { Theme } from "../../lib/themes/theme";

export const HomeHeaderBG = (props: ThemeProps<Theme>) =>
    shift(props.theme.shiftback, 0.025, props.theme.back);
export const HomeHeaderDotColour = (props: ThemeProps<Theme>) =>
    shift(props.theme.shiftback, 0.0, props.theme.front);
export const HomeHeaderDotSize = 1;
export const HomeHeaderDotSpace = 22;

export const HomeHeaderContainer = styled.div<ThemeProps<Theme>>`
    position: relative;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height: 400px;
    background: linear-gradient(
                90deg,
                ${HomeHeaderBG} ${HomeHeaderDotSpace - HomeHeaderDotSize}px,
                transparent 1%
            )
            center,
        linear-gradient(
                ${HomeHeaderBG} ${HomeHeaderDotSpace - HomeHeaderDotSize}px,
                transparent 1%
            )
            center,
        ${HomeHeaderDotColour};
    background-size: ${HomeHeaderDotSpace}px ${HomeHeaderDotSpace}px;
`;

export const HomeHeaderMiddleContent = styled.div`
    position: relative;
    top: 100px;
    margin: auto;
    width: 60%;
`;

export const HeaderImage = styled(Image)`
    border-radius: 50%;
`;

export const HeaderTitles = styled.div`
    display: inline-block;
    margin: 0;
    position: relative;
    top: -40px;
    left: 20px;

    h1 {
        margin: 0;
    }

    p {
        position: relative;
        top: -5px;
        left: 1px;
        margin: 0;
        font-size: 20px;
    }
`;
