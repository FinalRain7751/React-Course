import React, { useContext } from "react";

import ProjectDetails from "./projects/ProjectDetails";
import NewProject from "./projects/NewProject";
import { ProjectContext } from "../store/project-context";

const Main: React.FC = () => {
  const projectCtx = useContext(ProjectContext);
  const project = projectCtx.projects.find(
    (item) => item.id === projectCtx.isActive
  );
  return (
    <main>
      {project && !projectCtx.isNewProject && <ProjectDetails item={project} />}
      {projectCtx.isNewProject && <NewProject />}
    </main>
  );
};

export default Main;
