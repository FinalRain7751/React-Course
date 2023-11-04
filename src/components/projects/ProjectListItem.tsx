import React, { useContext } from "react";
import { Project } from "../../models/project";
import { ProjectContext } from "../../store/project-context";

const ProjectListItem: React.FC<{ item: Project }> = (props) => {
  const projectCtx = useContext(ProjectContext);

  const handleClick = () => {
    projectCtx.activeProjectHandler(props.item.id);
  };

  return (
    <li>
      <a onClick={handleClick}>{props.item.title}</a>
    </li>
  );
};

export default ProjectListItem;
