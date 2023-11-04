import React from "react";

import ProjectListItem from "./ProjectListItem";
import { Project } from "../../models/project";

const ProjectList: React.FC<{ items: Project[] }> = (props) => {
  return (
    <>
      {props.items.map((project) => (
        <ProjectListItem key={project.id} item={project} />
      ))}
    </>
  );
};

export default ProjectList;
