import React, { useContext } from "react";

import ProjectDetails from "./projects/ProjectDetails";
import NewProject from "./projects/NewProject";
import { ProjectContext } from "../store/project-context";
// import { projects } from "../models/project";

const Main: React.FC = () => {
  const projectCtx = useContext(ProjectContext);
  return (
    <main>
      {projectCtx.projects.length !== 0 && !projectCtx.isNewProject && (
        <ProjectDetails
          item={projectCtx.projects.find(
            (project) => project.id === projectCtx.isActive
          )}
        />
      )}
      {projectCtx.isNewProject && <NewProject />}
    </main>
  );
};

export default Main;
