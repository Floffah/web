import React, { useEffect, useRef, useState } from "react";
import HomeHeader from "../components/display/HomeHeader/HomeHeader";
import { NextSeo } from "next-seo";
import Projects from "../components/display/Projects/Projects";

export default function Index() {
    // const [navVisible, setNavVisible] = useState(false);
    const [isProjects, setIsProjects] = useState(false);
    const markerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const isPast = () =>
            markerRef.current &&
            window.scrollY >=
                markerRef.current.offsetTop + markerRef.current.offsetHeight;

        const listener = () => {
            if (!isProjects && isPast()) {
                setIsProjects(true);
            } else if (!isProjects && !isPast()) setIsProjects(false);
        };

        window.addEventListener("scroll", listener);

        return () => window.removeEventListener("scroll", listener);
    });

    return (
        <>
            <NextSeo title={isProjects ? "Projects" : "Home"} />
            <HomeHeader />
            <div ref={markerRef} id="floffah-projects-marker" />
            {/* id is there so i dont have to pass down refs*/}
            {/*<h1>Languages</h1>*/}
            {/*<Languages />*/}
            <Projects />
        </>
    );
}
