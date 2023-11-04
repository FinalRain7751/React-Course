import React, { useContext } from "react";
import { Project } from "../../models/project";

import Tasks from "../tasks/Tasks";
import { ProjectContext } from "../../store/project-context";
import Button from "../UI/Button";

const ProjectDetails: React.FC<{ item: Project }> = ({ item }) => {
  const projectCtx = useContext(ProjectContext);
  const deleteHandler = () => {
    projectCtx.removeProject(item.id);
  };

  return (
    <>
      <div className="project-detail">
        <div className="project-header">
          <h1>{item.title}</h1>
          <Button onClick={deleteHandler}>Delete</Button>
        </div>

        <p className="dueDate">
          {item.dueDate.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
        <p>{item.description}</p>
      </div>
      <Tasks items={item.tasks} />
    </>
  );
};

export default ProjectDetails;
