import React, { FC } from "react";
import {
    HeaderImage,
    HeaderTitles,
    HomeHeaderContainer,
    HomeHeaderMiddleContent,
} from "./HomeHeader.styles";

const HomeHeader: FC = () => {
    return (
        <HomeHeaderContainer>
            <HomeHeaderMiddleContent>
                <HeaderImage
                    src="/android-chrome-192x192.png"
                    width={150}
                    height={150}
                />
                <HeaderTitles>
                    <h1>Floffah</h1>
                    <p>Hey there!</p>
                </HeaderTitles>
            </HomeHeaderMiddleContent>
        </HomeHeaderContainer>
    );
};

export default HomeHeader;
