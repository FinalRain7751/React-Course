import React, { useContext } from "react";
import { Project } from "../../models/project";

import Tasks from "../tasks/Tasks";
import { ProjectContext } from "../../store/project-context";

const ProjectDetails: React.FC<{ item: Project }> = ({ item }) => {
  const projectCtx = useContext(ProjectContext);
  const deleteHandler = () => {
    projectCtx.removeProject(item.id);
  };

  return (
    <>
      <div>
        <div>
          <h1>{item.title}</h1>
          <button onClick={deleteHandler}>Delete</button>
        </div>

        <p>
          {item.dueDate.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
        <p>{item.description}</p>
      </div>
      <Tasks items={item.tasks} projectId={item.id} />
    </>
  );
};

export default ProjectDetails;
