import React, { useContext } from "react";
import { Project } from "../../models/project";
import { ProjectContext } from "../../store/project-context";

const ProjectListItem: React.FC<{ item: Project }> = (props) => {
  const projectCtx = useContext(ProjectContext);

  const handleClick = () => {
    projectCtx.activeProjectHandler(props.item.id);
  };

  return (
    <li
      onClick={handleClick}
      className={projectCtx.isActive === props.item.id ? "active" : ""}
    >
      {props.item.title}
    </li>
  );
};

export default ProjectListItem;
