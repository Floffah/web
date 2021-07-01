import React, { FC } from "react";
import {
    HomeHeaderButtonContainer,
    HomeHeaderContentContainer,
    HomeHeaderIconContainer,
} from "./HomeHeaderButton.styles";
import { StyledIcon } from "../../util/StyledIcon";
import { useRouter } from "next/router";

export interface HomeHeaderButtonProps {
    icon?: string;
    link?: string;
    as?: string;
    onClick?: () => unknown;
}

const HomeHeaderButton: FC<HomeHeaderButtonProps> = (p) => {
    const router = useRouter();

    return (
        <HomeHeaderButtonContainer
            onClick={() => {
                if (p.link) router.push(p.link, p.as);
                if (p.onClick) p.onClick();
            }}
        >
            {p.icon && (
                <HomeHeaderIconContainer>
                    <StyledIcon path={p.icon} />
                </HomeHeaderIconContainer>
            )}
            <HomeHeaderContentContainer>
                {p.children}
            </HomeHeaderContentContainer>
        </HomeHeaderButtonContainer>
    );
};

export default HomeHeaderButton;
