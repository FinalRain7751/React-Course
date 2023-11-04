import React, { useContext } from "react";
import { Task } from "../../models/project";
import { ProjectContext } from "../../store/project-context";

const TaskItem: React.FC<{ item: Task; projectId: string }> = ({
  item,
  projectId,
}) => {
  const projectCtx = useContext(ProjectContext);

  const deleteHandler = () => {
    projectCtx.removeTask(projectId, item.id);
  };

  return (
    <li>
      <span>{item.text}</span>
      <button onClick={deleteHandler}>Clear</button>
    </li>
  );
};

export default TaskItem;
