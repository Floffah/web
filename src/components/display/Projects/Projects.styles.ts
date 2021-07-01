import styled from "styled-components";
import { rgba } from "polished";

export const ProjectCardContainer = styled.div`
    padding: 5px 10px;
    border: 1px solid ${(props) => rgba(props.theme.front, 0.2)};
    display: inline-block;
    vertical-align: top;
    position: relative;
    height: 95px;
    width: 300px;
    border-radius: 5px;
    user-select: none;
    cursor: pointer;

    margin: 0 5px 5px 5px;
`;

export const ProjectsContainer = styled.div`
    width: 800px;
    padding: 0 10px;
    margin: auto;

    @media screen and (max-width: 800px) {
        width: 100%;
        margin: 0;
    }

    ${ProjectCardContainer}:first-child {
        margin: 0 5px 0 0;
    }

    ${ProjectCardContainer}:last-child {
        margin: 0 0 0 5px;
    }
`;

export const ProjectCardHeader = styled.p`
    margin: 0 0 3px 0;
    font-size: 16px;
    padding: 0 0 5px 0;
    border-bottom: 1px solid ${(props) => rgba(props.theme.front, 0.1)};

    span:first-child {
        font-weight: 500;
    }
`;

export const ProjectCardDescription = styled.p`
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
`;
