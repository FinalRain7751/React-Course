import React from "react";

import { Task } from "../../models/project";
import TaskItem from "./TaskItem";

const TaskList: React.FC<{ items: Task[]; projectId: string }> = ({
  items,
  projectId,
}) => {
  return (
    <ul>
      {items.map((task) => (
        <TaskItem key={task.id} item={task} projectId={projectId} />
      ))}
    </ul>
  );
};

export default TaskList;
