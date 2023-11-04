import React, { useContext } from "react";
import { Task } from "../../models/project";
import { ProjectContext } from "../../store/project-context";
import Button from "../UI/Button";

const TaskItem: React.FC<{ item: Task }> = ({ item }) => {
  const projectCtx = useContext(ProjectContext);

  const deleteHandler = () => {
    projectCtx.removeTask(item.projectId, item.id);
  };

  return (
    <li>
      <span>{item.text}</span>
      <Button onClick={deleteHandler}>Clear</Button>
    </li>
  );
};

export default TaskItem;
