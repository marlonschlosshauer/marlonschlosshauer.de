import React from "react";
import { Project } from "../Project/Project";
import { getProjects } from "@/content/projects";
import { Slider } from "@/components/shared/Slider/Slider";

export const Projects: React.FC = () => {
  const projects = getProjects();

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <Slider label="Worked on">
      {projects.map((project, key) => (
        <Project key={key} {...project} />
      ))}
    </Slider>
  );
};
