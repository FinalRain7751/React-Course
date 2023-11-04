import React, { useContext } from "react";

import ProjectList from "./projects/ProjectList";
import { ProjectContext } from "../store/project-context";
import classes from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  const projectCtx = useContext(ProjectContext);

  const clickHandler = () => {
    projectCtx.newProjectHandler();
  };

  return (
    <aside>
      <h2>Your Projects</h2>
      <button onClick={clickHandler} className={classes.btn}>
        + Add Projects
      </button>
      {projectCtx.projects.length !== 0 && (
        <ProjectList items={projectCtx.projects} />
      )}
    </aside>
  );
};

export default Sidebar;
