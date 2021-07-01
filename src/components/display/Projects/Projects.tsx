import React, { FC } from "react";
import {
    ProjectCardContainer,
    ProjectCardDescription,
    ProjectCardHeader,
    ProjectsContainer,
} from "./Projects.styles";
import { useRouter } from "next/router";

export interface ProjectCardProps {
    name: string;
    language: string;
    description: string;
    link: string;
    as?: string;
}

export const ProjectCard: FC<ProjectCardProps> = (p) => {
    const router = useRouter();

    return (
        <ProjectCardContainer onClick={() => router.push(p.link, p.as)}>
            <ProjectCardHeader>
                <span>{p.name}</span> • <span>{p.language}</span>
            </ProjectCardHeader>
            <ProjectCardDescription>{p.description}</ProjectCardDescription>
        </ProjectCardContainer>
    );
};

const Projects: FC = (_p) => {
    return (
        <ProjectsContainer>
            <h1>Major projects</h1>
            <ProjectCard
                name="Collaborated"
                language="Typescript"
                description="Social chat and productivity platform for developers"
                link="https://github.com/floffah/collaborated"
            />
            <ProjectCard
                name="Confuscript"
                language="Typescript"
                description="Confused programming language"
                link="https://github.com/confuscript/confuscript"
            />
            <h1>Libraries</h1>
            <ProjectCard
                name="esbuild-plugin-d.ts"
                language="Typescript"
                description="ESBuild convenience plugin for compiling typescript definitions along with javascript"
                link="https://github.com/floffah/esbuild-plugin-d.ts"
            />
            <ProjectCard
                name="react-render-to-canvas"
                language="Typescript"
                description="Experimental test package for rendering a react tree to a canvas instead of the dom or a string"
                link="https://github.com/Floffah/react-render-to-canvas"
            />
            <ProjectCard
                name="build"
                language="Typescript"
                description="Monorepo helper for easily building packages in development and production"
                link="https://github.com/Floffah/build"
            />
        </ProjectsContainer>
    );
};

export default Projects;
