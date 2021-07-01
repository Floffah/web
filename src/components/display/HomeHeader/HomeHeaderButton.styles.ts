import styled, { ThemeProps } from "styled-components";
import { HomeHeaderBG } from "./HomeHeader.styles";
import { Theme } from "../../../lib/themes/theme";
import { rgba } from "polished";
import { StyledIcon } from "../../util/StyledIcon";

export const HomeHeaderButtonContainer = styled.div<ThemeProps<Theme>>`
    background-color: rgba(0, 0, 0, 0);
    padding: 3px 10px 5px 10px;
    border: ${(props) => rgba(props.theme.front, 0.25)} 1px solid;
    border-radius: 5px;
    transition: 0.1s background-color;
    user-select: none;
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
    margin: 0 5px 0 5px;

    &:hover {
        background-color: ${HomeHeaderBG};
    }
`;

export const HomeHeaderIconContainer = styled.div`
    display: inline-block;
    vertical-align: top;

    ${StyledIcon} {
        display: inline-block;
        vertical-align: top;
        margin: 5px 6px 0 0;
    }
`;

export const HomeHeaderContentContainer = styled.span`
    display: inline-block;
    vertical-align: top;
    font-size: 20px;
    margin: 0;
`;
